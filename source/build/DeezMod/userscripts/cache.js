const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const paths = require("../paths.js");
const logger = require("../logger.js")(__filename);
const { fetch_url, fetch_url_sync_blocking } = require("./fetcher.js");
const { register_ipc_dispatcher } = require("./util.js");

const CACHE_CHANNEL = "deezmod-cache-bus";
const ACTIONS = {
    ENSURE_BATCH: "ensure-batch",
    CHECK_SYNC: "check-sync",
    SAVE_SYNC: "save-sync"
};

class CacheManager {
    static SEPARATOR = "|";
    static KEYS = {
        HASH: "h",
        LAST_ACCESSED: "l",
        MIMETYPE: "m"
    };
    static TTL = 30*24*60*60*1000; // 30 days

    static make_key(plugin_id, url) {
        return `${plugin_id}${CacheManager.SEPARATOR}${url}`;
    }

    _parse_entry(entry) {
        if (entry) {
            return {
                hash: entry[CacheManager.KEYS.HASH],
                last_accessed: entry[CacheManager.KEYS.LAST_ACCESSED],
                mimetype: entry[CacheManager.KEYS.MIMETYPE] || null
            };
        }
        return entry;
    }

    _create_entry(hash, last_accessed, mimetype) {
        return {
            [CacheManager.KEYS.HASH]: hash,
            [CacheManager.KEYS.LAST_ACCESSED]: last_accessed,
            [CacheManager.KEYS.MIMETYPE]: mimetype
        };
    }
    
    constructor() {
        this.cache_dir = path.join(paths().cache, "userscripts", "cache");
        this.memory_cache = new Map();
        
        if (!fs.existsSync(this.cache_dir)) {
            fs.mkdirSync(this.cache_dir, { recursive: true });
        }
        
        this.manifest_path = path.join(this.cache_dir, "manifest.json");
        this.manifest = {};
        if (fs.existsSync(this.manifest_path)) {
            try {
                this.manifest = JSON.parse(fs.readFileSync(this.manifest_path, "utf8"));
            } catch (e) {
                logger.error("Failed to load manifest", e);
            }
        }
        
        this._setup_ipc();
        this.cleanup();
    }

    _setup_ipc() {
        const { ipcMain } = require("electron");
        if (ipcMain) {
            register_ipc_dispatcher(ipcMain.handle.bind(ipcMain), CACHE_CHANNEL, {
                [ACTIONS.ENSURE_BATCH]: async (event, items) => {
                    return await this.ensure_batch(items);
                }
            });

            register_ipc_dispatcher(ipcMain.on.bind(ipcMain), CACHE_CHANNEL, {
                [ACTIONS.CHECK_SYNC]: (event, item) => {
                    try {
                        event.returnValue = this._check_local_sync(item);
                    } catch (e) {
                        logger.error(`Sync check failed for ${item.url}`, e);
                        event.returnValue = null;
                    }
                },
                [ACTIONS.SAVE_SYNC]: (event, payload) => {
                    try {
                        this._save_from_renderer(payload);
                        event.returnValue = true;
                    } catch (e) {
                        logger.error(`Sync save failed for ${payload.url}`, e);
                        event.returnValue = false;
                    }
                }
            });
        }
    }

    _check_local_sync(item) {
        const key = CacheManager.make_key(item.plugin_id, item.url);
        const entry = this._parse_entry(this.manifest[key]);
        
        if (!entry) return null;

        let content = this._get_content_from_cache(entry.hash);
        
        if (this._needs_download(content, item)) {
            return null; 
        }

        this.manifest[key] = this._create_entry(entry.hash, Date.now(), entry.mimetype);
        this.save_manifest(); 

        return { content, mimetype: entry.mimetype };
    }

    // since xmlhttprequest is not available in main process, we download in renderer and only save here
    _save_from_renderer({ plugin_id, url, content, mimetype, hash: expected_hash, alg }) {
        if (!Buffer.isBuffer(content)) {
            content = Buffer.from(content);
        }

        const key = CacheManager.make_key(plugin_id, url);
        
        if (expected_hash) {
            const calculated = this._hash_content(content, alg);
            if (calculated !== expected_hash) {
                logger.error(`Hash mismatch on save for ${url}`);
                return;
            }
        }

        const content_hash = this._store_content(content);
        this.manifest[key] = this._create_entry(content_hash, Date.now(), mimetype);
        this.save_manifest();
    }

    cleanup() {
        const now = Date.now();
        const valid_hashes = new Set();
        const changed = this._remove_expired_entries(now, CacheManager.TTL, valid_hashes);
        this._remove_orphaned_files(valid_hashes);

        if (changed) {
            this.save_manifest();
        }
    }

    _remove_expired_entries(now, TTL, valid_hashes) {
        let changed = false;
        for (const key in this.manifest) {
            const entry = this._parse_entry(this.manifest[key]);
            if (now > entry.last_accessed + TTL) {
                delete this.manifest[key];
                changed = true;
            } else {
                valid_hashes.add(entry.hash);
            }
        }
        return changed;
    }

    _remove_orphaned_files(valid_hashes) {
        if (fs.existsSync(this.cache_dir)) {
            const entries = fs.readdirSync(this.cache_dir);
            for (const name of entries) {
                if (name === "manifest.json") continue;
                const entry_path = path.join(this.cache_dir, name);
                try {
                    if (fs.statSync(entry_path).isDirectory()) {
                        this._clean_shard(entry_path, valid_hashes);
                    }
                } catch (e) {}
            }
        }
    }

    _clean_shard(shard_path, valid_hashes) {
        const files = fs.readdirSync(shard_path);
        for (const file of files) {
            if (!valid_hashes.has(file)) {
                try { fs.unlinkSync(path.join(shard_path, file)); } catch (e) {}
            }
        }
        try {
            if (fs.readdirSync(shard_path).length === 0) {
                fs.rmdirSync(shard_path);
            }
        } catch (e) {}
    }

    save_manifest() {
        try {
            fs.writeFileSync(this.manifest_path, JSON.stringify(this.manifest, null, 0));
        } catch (e) {
            logger.error("Failed to save manifest", e);
        }
    }

    get_file_path(hash) {
        const shard = hash.slice(0, 2);
        const shard_path = path.join(this.cache_dir, shard);
        if (!fs.existsSync(shard_path)) fs.mkdirSync(shard_path);
        return path.join(shard_path, hash);
    }

    async ensure_batch(items) {
        const results = {};
        let manifest_changed = false;

        const unique_items = new Map();
        items.forEach(i => {
            if (i.plugin_id && i.url) {
                unique_items.set(CacheManager.make_key(i.plugin_id, i.url), i);
            }
        });

        for (const [key, item] of unique_items) {
            try {
                const { url, plugin_id } = item;
                const entry = this._parse_entry(this.manifest[key]);
                let content_hash = entry ? entry.hash : null;
                let content = this._get_content_from_cache(content_hash);
                let mimetype = entry ? entry.mimetype : null;

                if (this._needs_download(content, item)) {
                    const download = await this._download_and_verify(url, item);
                    content = download.content;
                    mimetype = download.mimetype;
                    content_hash = this._store_content(content);
                    manifest_changed = true;
                }

                if (!key || !content_hash) throw new Error("Processing failed");
                
                if (item.mimetype) mimetype = item.mimetype;

                this.manifest[key] = this._create_entry(content_hash, Date.now(), mimetype);
                manifest_changed = true;
                
                results[key] = content ? { content, mimetype } : null;
            } catch (e) {
                logger.error(`Failed to cache ${item.url}`, e);
                results[key] = null;
            }
        }

        if (manifest_changed) {
            this.save_manifest();
        }

        return results;
    }

    _get_content_from_cache(content_hash) {
        if (!content_hash) return null;
        let content = this.memory_cache.get(content_hash);
        if (!content) {
            const file_path = this.get_file_path(content_hash);
            if (fs.existsSync(file_path)) {
                content = fs.readFileSync(file_path);
                this.memory_cache.set(content_hash, content);
            }
        }
        return content;
    }

    _needs_download(content, item) {
        if (!content) return true;
        if (item.hash) {
            const calculated = this._hash_content(content, item.alg);
            return calculated !== item.hash;
        }
        return false;
    }

    async _download_and_verify(url, item) {
        const result = await fetch_url(url);
        if (item.hash) {
            const calculated = this._hash_content(result.content, item.alg);
            if (calculated !== item.hash) {
                throw new Error(`Hash mismatch for ${url}`);
            }
        }
        return result;
    }

    _store_content(content) {
        const storage_hash = this._hash_content(content, "sha256");
        const file_path = this.get_file_path(storage_hash);
        if (!fs.existsSync(file_path)) {
            fs.writeFileSync(file_path, content);
        }
        this.memory_cache.set(storage_hash, content);
        return storage_hash;
    }

    _hash_content(content, alg="sha256") {
        return crypto.createHash(alg).update(content).digest("hex");
    }
    
    get(url, plugin_id) {
        const key = CacheManager.make_key(plugin_id, url);
        const entry = this._parse_entry(this.manifest[key]);
        if (entry) {
            const content = this._get_content_from_cache(entry.hash);
            if (content) {
                return {
                    content,
                    mimetype: entry.mimetype
                };
            }
        }
        return null;
    }
    
    async populate(items) {
        await this.ensure_batch(items);
    }
}

class CacheClient {
    constructor() {
        this.memory_cache = new Map();
    }

    async populate(items) {
        if (!items || items.length === 0) return;
        const { ipcRenderer } = require("electron");
        const results = await ipcRenderer.invoke(CACHE_CHANNEL, {
            action: ACTIONS.ENSURE_BATCH,
            payload: items
        });
        
        for (const [key, result] of Object.entries(results)) {
            if (result && result.content) {
                this.memory_cache.set(key, {
                    content: Buffer.from(result.content),
                    mimetype: result.mimetype
                });
            }
        }
    }

    /**
     * Set synchronously
     * if not cached, performs a blocking download in the renderer process 
     * this is bad, but maybe needed for some use cases and for fallbacks
     */
    set(item) {
        if (!item || !item.url || !item.plugin_id) return null;

        const key = CacheManager.make_key(item.plugin_id, item.url);
        
        if (this.memory_cache.has(key)) {
            return this.memory_cache.get(key);
        }

        const { ipcRenderer } = require("electron");
        
        try {
            const cached_result = ipcRenderer.sendSync(CACHE_CHANNEL, {
                action: ACTIONS.CHECK_SYNC,
                payload: item
            });
            
            if (cached_result?.content) {
                const cache_entry = {
                    content: Buffer.from(cached_result.content),
                    mimetype: cached_result.mimetype
                };
                this.memory_cache.set(key, cache_entry);
                return cache_entry;
            }

            const fetched = fetch_url_sync_blocking(item.url);
            
            const new_entry = {
                content: fetched.content,
                mimetype: item.mimetype || fetched.mimetype
            };

            ipcRenderer.sendSync(CACHE_CHANNEL, {
                action: ACTIONS.SAVE_SYNC,
                payload: {
                    ...item,
                    content: new_entry.content,
                    mimetype: new_entry.mimetype
                }
            });

            this.memory_cache.set(key, new_entry);
            return new_entry;

        } catch (e) {
            logger.error("CacheClient set failed", e);
        }
        return null;
    }

    get(url, plugin_id) {
        return this.memory_cache.get(CacheManager.make_key(plugin_id, url)) || this.set({ url, plugin_id });
    }
}

let instance = null;
function get_cache(context) {
    instance = instance || (context === "main" ? new CacheManager() : new CacheClient());
    return instance;
}

module.exports = {
    get_cache: get_cache
};