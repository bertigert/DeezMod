const fs = require("node:fs");
const path = require("node:path");
const { ipcMain, ipcRenderer } = require("electron");
const paths = require("./paths.js");
const { register_ipc_dispatcher } = require("./userscripts/util.js");

const SETTINGS_CHANNEL = "deezmod-main-settings";

const ACTIONS = {
    GET_ALL: "get_all",
    GET_MAIN: "get_main",
    SET_MAIN: "set_main",
    GET_PLUGIN: "get_plugin",
    SET_PLUGIN: "set_plugin"
};

class SettingsManager {
    constructor() {
        this.settings_path = path.join(paths().config, "settings.json");
        this.settings = {
            main: {
                enabled: true
            },
            plugins: {}
        };
        
        this._save_queue = Promise.resolve();
        
        this._load();
        this._setup_ipc();
    }

    _load() {
        try {
            if (fs.existsSync(this.settings_path)) {
                const data = fs.readFileSync(this.settings_path, "utf8");
                const loaded = JSON.parse(data);
                Object.assign(this.settings.main, loaded.main || {});
                Object.assign(this.settings.plugins, loaded.plugins || {});
            }
        } catch (e) {
            console.error("Failed to load main settings", e);
        }
    }

    _save() {
        this._save_queue = this._save_queue.then(async () => {
            try {
                const temp_path = this.settings_path + ".tmp";
                const data = JSON.stringify(this.settings, null, 0);
                
                await fs.promises.writeFile(temp_path, data, "utf8");
                await fs.promises.rename(temp_path, this.settings_path);
            } catch (e) {
                console.error("Failed to save main settings", e);
            }
        });
        
        return this._save_queue;
    }

    _setup_ipc() {
        if (!ipcMain) return;

        ipcMain.removeHandler(SETTINGS_CHANNEL);
        ipcMain.removeAllListeners(SETTINGS_CHANNEL);

        register_ipc_dispatcher(ipcMain.handle.bind(ipcMain), SETTINGS_CHANNEL, {
            [ACTIONS.GET_ALL]: () => this.get_all(),
            [ACTIONS.GET_MAIN]: (event, { key }) => this.get_main(key),
            [ACTIONS.GET_PLUGIN]: (event, { name, key }) => this.get_plugin(name, key),
            [ACTIONS.SET_MAIN]: async (event, { key, value }) => await this.set_main(key, value),
            [ACTIONS.SET_PLUGIN]: async (event, { name, key, value }) => await this.set_plugin(name, key, value),
        });
    }

    get_all() {
        return this.settings;
    }

    get_main(key, default_val) {
        return key === undefined ? this.settings.main : (this.settings.main[key] ?? default_val);
    }

    async set_main(key, value) {
        this.settings.main[key] = value;
        await this._save();

        return true;
    }

    get_plugin(name, key, default_val) {
        return key === undefined ? this.settings.plugins[name] : (this.settings.plugins[name]?.[key] ?? default_val);
    }

    async set_plugin(name, key, value) {
        if (!this.settings.plugins[name]) this.settings.plugins[name] = {};
        this.settings.plugins[name][key] = value;
        await this._save();

        return true;
    }
}

class SettingsClient {
    async get_all() {
        return await ipcRenderer.invoke(SETTINGS_CHANNEL, { action: ACTIONS.GET_ALL });
    }

    async get_main(key) {
        return await ipcRenderer.invoke(SETTINGS_CHANNEL, { action: ACTIONS.GET_MAIN, payload: { key } });
    }

    async set_main(key, value) {
        return await ipcRenderer.invoke(SETTINGS_CHANNEL, { action: ACTIONS.SET_MAIN, payload: { key, value } });
    }

    async get_plugin(name, key) {
        return await ipcRenderer.invoke(SETTINGS_CHANNEL, { action: ACTIONS.GET_PLUGIN, payload: { name, key } });
    }

    async set_plugin(name, key, value) {
        return await ipcRenderer.invoke(SETTINGS_CHANNEL, { action: ACTIONS.SET_PLUGIN, payload: { name, key, value } });
    }
}

let instance = null;
function get_settings(context) {
    if (!instance) {
        instance = context === "main" ? new SettingsManager() : new SettingsClient();
    }
    return instance;
}

module.exports = {
    get_settings: get_settings
};