const fs = require("node:fs");
const path = require("node:path");
const { ipcMain, ipcRenderer } = require("electron");
const paths = require("../paths.js");
const logger = require("../logger.js")(__filename);
const { register_ipc_dispatcher } = require("./util.js");

const OP = {
    SET: "set",
    DELETE: "delete",
    GET_ALL: "get-all",
    UPDATE: "update"
};
const KEYS = {
    OP: 0,
    PLUGIN_ID: 1,
    KEY: 2,
    VALUE: 3
}

const CONFIG_CHANNEL = "deezmod-userscript-config-bus";
/*ConfigManager is the main process manager for configuration storage. 
it is only instantiated in the main process and handles all read/write operations,
transaction logging, and broadcasting changes to renderer processes.
*/
class ConfigManager {
    static TRANSACTION_THRESHOLD = 100;
    static DEBOUNCE_MS = 500;

    constructor() {
        this.config_dir = paths().config;
        this.config_path = path.join(this.config_dir, "userscripts", "config.json");
        this.log_path = path.join(this.config_dir, "userscripts", "transactions.log");
        this.config = {};
        
        this.subscribers = new Set(); 

        this.transaction_count = 0;
        this.is_committing = false;
        this._write_queue = [];
        this._debounce_timer = null;

        if (!fs.existsSync(path.dirname(this.config_path))) {
            fs.mkdirSync(path.dirname(this.config_path), { recursive: true });
        }

        this._load_sync();
        this._setup_ipc();
    }

    _load_sync() { // sync to ensure config is ready before any IPC calls
        if (fs.existsSync(this.config_path)) {
            try {
                this.config = JSON.parse(fs.readFileSync(this.config_path, "utf8"));
            } catch (e) {
                logger.error("Failed to load config DB", e);
                fs.renameSync(this.config_path, this.config_path + ".corrupt");
                this.config = {};
            }
        }

        const pending_log = this.log_path + ".pending";
        let changed = false;

        if (fs.existsSync(pending_log)) {
            logger.debug("detected pending transaction log");
            if (this._replay_log_file(pending_log)) {
                changed = true;
            }
            try { 
                fs.unlinkSync(pending_log);
            } catch (e) {
                logger.error("Failed to delete pending transaction log", e);
            }
        }

        if (fs.existsSync(this.log_path) && this._replay_log_file(this.log_path)) {
            changed = true;
        }

        if (changed) {
            this._save_sync();
        }
    }

    _replay_log_file(file_path) {
        let changed = false;
        try {
            const log_content = fs.readFileSync(file_path, "utf8");
            const lines = log_content.split("\n").filter(line => line.trim());
            
            for (const line of lines) {
                try {
                    const entry = JSON.parse(line);
                    this._apply_change_to_memory(entry);
                    changed = true;
                } catch (e) {
                    logger.error("Failed to parse transaction line", e);
                }
            }
        } catch (e) {
            logger.error(`Failed to replay transactions from ${file_path}`, e);
        }
        return changed;
    }

    _apply_change_to_memory(entry) {
        const { [KEYS.OP]: op, [KEYS.PLUGIN_ID]: plugin_id, [KEYS.KEY]: key, [KEYS.VALUE]: value } = entry;
        if (!this.config[plugin_id]) {
            this.config[plugin_id] = {};
        }

        if (op === OP.SET) {
            this.config[plugin_id][key] = value;
        } else if (op === OP.DELETE) {
            delete this.config[plugin_id][key];
        }
    }

    _setup_ipc() {
        if (!ipcMain) return;

        register_ipc_dispatcher(ipcMain.handle.bind(ipcMain), CONFIG_CHANNEL, {
            [OP.GET_ALL]: (event, payload) => {
                const wc = event.sender;
                if (!this.subscribers.has(wc)) {
                    this.subscribers.add(wc);
                    wc.once("destroyed", () => this.subscribers.delete(wc));
                }
                return this.config;
            },
        });

        register_ipc_dispatcher(ipcMain.on.bind(ipcMain), CONFIG_CHANNEL, {
            [OP.SET]: (event, { plugin_id, key, value, do_broadcast }) => {
                this.set_value(plugin_id, key, value, event.sender.id, do_broadcast);
            },
            [OP.DELETE]: (event, { plugin_id, key, do_broadcast }) => {
                this.delete_value(plugin_id, key, event.sender.id, do_broadcast);
            }
        });
    }

    _broadcast_update(entry, exclude_id) {
        for (const wc of this.subscribers) {
            try {
                if (wc.isDestroyed()) {
                    this.subscribers.delete(wc);
                    continue;
                }

                if (exclude_id && wc.id === exclude_id) { 
                    continue;
                }

                wc.send(CONFIG_CHANNEL, { action: OP.UPDATE, payload: { entry } });
            } catch (e) {
                this.subscribers.delete(wc);
            }
        }
    }

    _update_val(entry, source_id, do_broadcast) {
        this._apply_change_to_memory(entry);
        if (do_broadcast) this._broadcast_update(entry, source_id);
        this._queue_transaction(entry);
    }

    set_value(plugin_id, key, value, source_id, do_broadcast) {
        const entry = { [KEYS.OP]: OP.SET, [KEYS.PLUGIN_ID]: plugin_id, [KEYS.KEY]: key, [KEYS.VALUE]: value };
        this._update_val(entry, source_id, do_broadcast);
    }

    delete_value(plugin_id, key, source_id, do_broadcast) {
        const entry = { [KEYS.OP]: OP.DELETE, [KEYS.PLUGIN_ID]: plugin_id, [KEYS.KEY]: key };
        this._update_val(entry, source_id, do_broadcast);
    }

    _queue_transaction(entry) {
        this._write_queue.push(entry);
        if (!this._debounce_timer) {
            this._debounce_timer = setTimeout(() => this._flush_transactions(), ConfigManager.DEBOUNCE_MS);
        }
    }

    _flush_transactions() {
        if (this._write_queue.length === 0) {
            this._debounce_timer = null;
            return;
        }
        
        const entries_to_write = [...this._write_queue];
        this._write_queue = [];
        this._debounce_timer = null;

        const lines = entries_to_write.map(e => JSON.stringify(e, null, 0)).join("\n") + "\n";

        fs.appendFile(this.log_path, lines, (err) => {
            if (!err) {
                this.transaction_count += entries_to_write.length;
                if (this.transaction_count >= ConfigManager.TRANSACTION_THRESHOLD) {
                    this._commit();
                }
            }
        });
    }

    async _commit() {
        if (this.is_committing) return;
        this.is_committing = true;
        if (this._debounce_timer) clearTimeout(this._debounce_timer);

        try {
            if (this._write_queue.length > 0) {
                const lines = this._write_queue.map(e => JSON.stringify(e, null, 0)).join("\n") + "\n";
                fs.appendFileSync(this.log_path, lines); // sync to ensure all queued writes are logged
                this.transaction_count += this._write_queue.length;
                this._write_queue = [];
            }

            const committed_count = this.transaction_count;
            const pending_log_path = this.log_path + ".pending";

            if (fs.existsSync(this.log_path)) {
                await fs.promises.rename(this.log_path, pending_log_path);
            }

            const temp_config_path = this.config_path + ".tmp";
            const config_snapshot = JSON.stringify(this.config, null, 0);
            
            await fs.promises.writeFile(temp_config_path, config_snapshot);
            await fs.promises.rename(temp_config_path, this.config_path);

            if (fs.existsSync(pending_log_path)) {
                await fs.promises.unlink(pending_log_path);
            }

            this.transaction_count = Math.max(0, this.transaction_count - committed_count);

        } catch (e) {
            logger.error("Failed to commit config", e);
        } finally {
            this.is_committing = false;
        }
    }

    _save_sync() {
        const temp_path = this.config_path + ".tmp";
        try {
            fs.writeFileSync(temp_path, JSON.stringify(this.config, null, 0));
            fs.renameSync(temp_path, this.config_path);
            fs.writeFileSync(this.log_path, "");
            this.transaction_count = 0;
            this._write_queue = [];
        } catch (e) {
            logger.error("Failed to save config sync", e);
        }
    }
}


/*ConfigClient is the renderer process interface for configuration storage. 
it is only instantiated in renderer processes and communicates with the ConfigManager
in the main process via IPC to perform read/write operations and receive updates.
*/
class ConfigClient {
    // we debounce IPC calls of a single plugin_id:key pair
    // this way rapid changes to the same key only send a few updates, but other keys/plugins are unaffected
    static IPC_DEBOUNCE_MS = 50; // this should not be 500, but im probably gonna forget to change it later

    constructor() {
        this.config = {};
        this.listeners = new Map();
        this._listener_id_counter = 0;
        
        this._debounce_timers = new Map(); 

        if (ipcRenderer) {
            const renderer_dispatcher = {
                [OP.UPDATE]: (event, payload) => this._handle_server_broadcast(payload.entry)
            };

            register_ipc_dispatcher(ipcRenderer.on.bind(ipcRenderer), CONFIG_CHANNEL, renderer_dispatcher);
        }
    }

    async populate() {
        if (!ipcRenderer) return;
        try {
            this.config = await ipcRenderer.invoke(CONFIG_CHANNEL, { action: OP.GET_ALL });
        } catch (e) {
            console.error("Failed to populate config", e);
        }
    }

    _handle_server_broadcast(payload) {
        const { [KEYS.OP]: op, [KEYS.PLUGIN_ID]: plugin_id, [KEYS.KEY]: key, [KEYS.VALUE]: value } = payload;
        
        const oldValue = this.getValue(plugin_id, key);

        if (op === OP.SET) {
            if (!this.config[plugin_id]) this.config[plugin_id] = {};
            this.config[plugin_id][key] = value;
        } else if (op === OP.DELETE) {
            if (this.config[plugin_id]) delete this.config[plugin_id][key];
        }

        const newValue = op === OP.SET ? value : undefined;
        this._notify_listeners(plugin_id, key, oldValue, newValue, true);
    }

    getValue(plugin_id, key, default_value) {
        if (Object.prototype.hasOwnProperty.call(this.config[plugin_id] ?? {}, key)) {
            return this.config[plugin_id][key];
        }
        return default_value;
    }

    listValues(plugin_id) {
        return this.config[plugin_id] ? Object.keys(this.config[plugin_id]) : [];
    }

    setValue(plugin_id, key, value, do_broadcast) {
        const oldValue = this.getValue(plugin_id, key);

        if (!this.config[plugin_id]) this.config[plugin_id] = {};
        this.config[plugin_id][key] = value;

        this._notify_listeners(plugin_id, key, oldValue, value, false);
        this._schedule_ipc_update(plugin_id, key, value, OP.SET, do_broadcast);
    }

    deleteValue(plugin_id, key, do_broadcast) {
        const oldValue = this.getValue(plugin_id, key);

        if (this.config[plugin_id]) delete this.config[plugin_id][key];

        this._notify_listeners(plugin_id, key, oldValue, undefined, false);
        this._schedule_ipc_update(plugin_id, key, null, OP.DELETE, do_broadcast);
    }

    _schedule_ipc_update(plugin_id, key, value, op, do_broadcast) {
        if (!ipcRenderer) return;
        const map_id = `${plugin_id}:${key}`;
        const record = this._debounce_timers.get(map_id);

        if (!record) { // leading edge, send immediately
            this._send_ipc(op, plugin_id, key, value, do_broadcast);
            const timer = setTimeout(() => this._flush_pending(map_id), ConfigClient.IPC_DEBOUNCE_MS);
            this._debounce_timers.set(map_id, { timer, pending: null, plugin_id, key });
        } else { // something is already pending
            record.pending = { op, value, do_broadcast };
        }
    }

    _flush_pending(map_id) {
        const record = this._debounce_timers.get(map_id);
        if (!record) return;
        if (record.pending) {
            this._send_ipc(record.pending.op, record.plugin_id, record.key, record.pending.value, record.pending.do_broadcast);
        }
        this._debounce_timers.delete(map_id);
    }

    _send_ipc(op, plugin_id, key, value, do_broadcast) {
        ipcRenderer.send(CONFIG_CHANNEL, { action: op, payload: { plugin_id, key, value, do_broadcast } });
    }

    addValueChangeListener(plugin_id, key, callback) {
        const id = ++this._listener_id_counter;
        this.listeners.set(id, { plugin_id, key, callback });
        return id;
    }

    removeValueChangeListener(listenerId) {
        this.listeners.delete(listenerId);
    }

    _notify_listeners(plugin_id, key, oldValue, newValue, remote) {
        for (const listener of this.listeners.values()) {
            if (listener.plugin_id === plugin_id && listener.key === key) {
                try {
                    listener.callback(key, oldValue, newValue, remote);
                } catch (e) {
                    console.error("Error in config change listener", e);
                }
            }
        }
    }
}

let instance = null;
function get_config(context) {    
    if (!instance) {
        instance = context === "main" ? new ConfigManager() : new ConfigClient();
    }
    return instance;
}

module.exports = { 
    get_config: get_config
};