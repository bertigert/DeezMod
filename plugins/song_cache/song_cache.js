module.exports = {
    name: "Song Cache",
    description: "Save songs to a local cache, allowing for quicker playback.",
    version: "1.0.0",
    author: "bertigert",
    context: ["main", "renderer"],
    scope: ["own", "own"],
    func: (context) => {
        // Supports songs and audio books, but not podcasts.
        function context_renderer() {
            "use strict";
            const { Level } = require("./node_modules/level");
            const { ipcRenderer } = require('electron');
    
            class Logger {
                static LOG_VERY_MANY_THINGS_YES_YES = false; // set to false if you dont want the console getting spammed
                
                constructor() {
                    this.log_textarea = null;
                    this.PREFIXES = Object.freeze({
                        INFO: "?",
                        WARN: "⚠",
                        ERROR: "!",
                        SUCCESS: "*",
                        CONSOLE: "[Song Cache]"
                    });
                    this.console = {
                        log: (...args) => console.log(this.PREFIXES.CONSOLE, ...args),
                        warn: (...args) => console.warn(this.PREFIXES.CONSOLE, ...args),
                        error: (...args) => console.error(this.PREFIXES.CONSOLE, ...args),
                        debug: (...args) => {if (Logger.LOG_VERY_MANY_THINGS_YES_YES) console.debug(this.PREFIXES.CONSOLE, ...args)}
                    };
                }
            }

            function format_bytes(bytes, decimals = 2) { 
                if (bytes === 0) return '0 B';
                const k = 1000;
                const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return `${(bytes / Math.pow(k, i)).toFixed(decimals)} ${sizes[i]}`;
            }
            function convert_bytes(bytes, unit="GB", decimals=2) {
                const units = { B: 0, KB: 1, MB: 2, GB: 3, TB: 4 };
                const k = 1000;
                const i = units[unit.toUpperCase()];
                if (i === undefined) throw new Error("Unknown unit: " + unit);
                return (bytes / Math.pow(k, i)).toFixed(decimals);
            }
    
            class Cache {
                constructor() {
                    this.db = null;
                    this.song_data_db = null;
                    this.metadata_db = null;
                    this.cleanup_job = null;
                    
                    if (config.cache_location) {
                        try {
                            this.db = new Level(config.cache_location+ '/song_cache');
                            this.song_data_db = this.db.sublevel('song_data', { valueEncoding: 'binary' }); 
                            this.metadata_db = this.db.sublevel('metadata', { valueEncoding: 'json' });
                            logger.console.debug("Cache initialized at:", config.cache_location);
                            this._start_cleanup_job();
                        } catch (error) {
                            logger.console.error("Failed to initialize cache:", error);
                            this.db = null;
                            this.song_data_db = null;
                            this.metadata_db = null;
                        }
                    }
                }
    
                async get(song_id, file_name) {
                    if (!this.song_data_db || !this.metadata_db || !config.cache_location) {
                        return null;
                    }
    
                    try {
                        const metadata = await this.metadata_db.get(song_id);
                        if (!metadata) {
                            logger.console.debug("No metadata found for song:", song_id);
                            return null;
                        }
                        const song_data = await this.song_data_db.get(song_id);
                        if (!song_data) {
                            logger.console.debug("No song data found for song:", song_id);
                            return null;
                        }

                        if (metadata.file_name !== file_name) {
                            logger.console.debug("File changed for song", song_id, "treating as not cached");
                            return null;
                        }

                        metadata.last_accessed = Date.now();
                        await this.metadata_db.put(song_id, metadata);
                        
                        return {
                            song_data: song_data,
                            file_name: metadata.file_name,
                            last_accessed: metadata.last_accessed,
                            content_type: metadata.content_type
                        };
                    } catch (error) {
                        logger.console.error("Error getting from cache:", error);
                        return null;
                    }
                }
    
                async set(song_id, file_name, song_data, content_type) {
                    if (!this.song_data_db || !this.metadata_db || !config.cache_location) {
                        return false;
                    }
    
                    try {
                        let existing_metadata = null;
                        try {
                            existing_metadata = await this.metadata_db.get(song_id);
                        } catch (e) {
                        }
    
                        if (existing_metadata && existing_metadata.file_name === file_name) {
                            logger.console.debug("Song already cached with same filename:", song_id);
                            return true;
                        }
    
                        const metadata = {
                            file_name: file_name,
                            last_accessed: Date.now(),
                            size_bytes: this._calculate_entry_size(song_data),
                            content_type: content_type
                        };
    
                        await this.song_data_db.put(song_id, song_data);
                        await this.metadata_db.put(song_id, metadata);
                        
                        logger.console.debug("Cached song:", song_id, "with filename:", file_name, "and size:", format_bytes(metadata.size_bytes), "content type:", content_type);
                        return true;
                    } catch (error) {
                        logger.console.error("Error setting cache:", error);
                        return false;
                    }
                }
    
                _start_cleanup_job() {
                    if (this.cleanup_job) {
                        clearInterval(this.cleanup_job);
                    }
    
                    this.cleanup_job = setInterval(async () => {
                        if (config.enabled && config.max_cache_size_mb > 0 && this.db && config.cache_location) {
                            await this._cleanup_if_needed();
                        }
                    }, config.cleanup_interval_s*1000);
    
                    logger.console.debug("Cache cleanup job started, interval:", config.cleanup_interval_s, "seconds");
                }
    
                async _cleanup_if_needed() {
                    try {
                        const max_size_bytes = config.max_cache_size_mb*1e6;
                        const current_size = await this._get_current_cache_size();
    
                        if (current_size > max_size_bytes) {
                            const bytes_to_free = current_size - max_size_bytes;
                            // logger.console.debug("Cache size exceeded, current size:", format_bytes(current_size), "freeing up to:", format_bytes(bytes_to_free));
                            await this._cleanup_old_entries(bytes_to_free);
                        }
                    } catch (error) {
                        logger.console.error("Error during scheduled cleanup:", error);
                    }
                }
    
                async _get_current_cache_size() {
                    if (!this.metadata_db) return 0;
    
                    let total_size = 0;
                    try {
                        for await (const [key, metadata] of this.metadata_db.iterator()) {
                            total_size += metadata.size_bytes || 0;
                        }
                    } catch (error) {
                        logger.console.error("Error calculating cache size:", error);
                    }
                    return total_size;
                }
    
                async _cleanup_old_entries(bytes_to_free) {
                    if (!this.metadata_db || !this.song_data_db) return;
    
                    try {
                        const entries = [];
                        for await (const [key, metadata] of this.metadata_db.iterator()) {
                            entries.push({
                                key,
                                last_accessed: metadata.last_accessed || 0,
                                size_bytes: metadata.size_bytes || 0
                            });
                        }
    
                        entries.sort((a, b) => a.last_accessed - b.last_accessed);
    
                        let freed_bytes = 0;
                        for (const entry of entries) {
                            if (freed_bytes >= bytes_to_free) break;
                            
                            await this.song_data_db.del(entry.key);
                            await this.metadata_db.del(entry.key);
                            
                            freed_bytes += entry.size_bytes;
                        }
    
                        logger.console.debug("Cache cleanup completed, freed:", format_bytes(freed_bytes));
                    } catch (error) {
                        logger.console.error("Error during cache cleanup:", error);
                    }
                }
    
                _calculate_entry_size(song_data) {
                    if (typeof song_data === 'string') {
                        return new Blob([song_data]).size;
                    } else if (song_data instanceof ArrayBuffer) {
                        return song_data.byteLength;
                    } else if (song_data && song_data.length !== undefined) {
                        return song_data.length;
                    }
                    return JSON.stringify(song_data).length * 2;
                }
    
                async get_cache_stats() {
                    if (!this.metadata_db) return { total_entries: 0, total_size_bytes: 0, max_size_mb: config.max_cache_size_mb };
    
                    try {
                        let total_entries = 0;
                        let total_size_bytes = 0;
    
                        for await (const [key, metadata] of this.metadata_db.iterator()) {
                            total_entries++;
                            total_size_bytes += metadata.size_bytes || 0;
                        }
    
                        return {
                            total_entries,
                            total_size_bytes: total_size_bytes,
                            max_size_mb: config.max_cache_size_mb
                        };
                    } catch (error) {
                        logger.console.error("Error getting cache stats:", error);
                        return { total_entries: 0, total_size_bytes: 0, max_size_mb: config.max_cache_size_mb };
                    }
                }
    
                async has(song_id) {
                    if (!this.metadata_db || !config.cache_location) {
                        return false;
                    }
    
                    try {
                        await this.metadata_db.get(song_id);
                        return true;
                    } catch (error) {
                        return false;
                    }
                }
    
                async delete(song_id) {
                    if (!this.song_data_db || !this.metadata_db || !config.cache_location) {
                        return false;
                    }
    
                    try {
                        await this.song_data_db.del(song_id);
                        await this.metadata_db.del(song_id);
                        //logger.console.debug("Deleted from cache:", song_id);
                        return true;
                    } catch (error) {
                        logger.console.error("Error deleting from cache:", error);
                        return false;
                    }
                }
    
                async close() {
                    if (this.cleanup_job) {
                        clearInterval(this.cleanup_job);
                        this.cleanup_job = null;
                    }
                    
                    if (this.db) {
                        try {
                            await this.db.close();
                            logger.console.debug("Cache database closed");
                        } catch (error) {
                            logger.console.error("Error closing cache:", error);
                        }
                    }
                }
            }
    
            class Hooks {
                static HOOK_INDEXES = Object.freeze({
                    FETCH: 0,
                    ALL: 1
                });
    
                // we use this approach to unhook to avoid unhooking hooks created after our hooks
                static is_hooked = [false];
                static active_requests = new Map(); // Track active requests by file_name
    
                static hook_fetch() {
                    //logger.console.debug("Hooking window.fetch");
                    const orig_fetch = window.fetch;
                    async function hooked_fetch(...args) {
                        if (!Hooks.is_hooked[Hooks.HOOK_INDEXES.FETCH]) return orig_fetch.apply(this, args);
                        // logger.console.debug("Fetch hook called with args:", args);
                        try {
                            if (args.length !== 2 ||
                                args[1].method === "POST"
                            ) {
                                return orig_fetch.apply(this, args);
                            }
                            const regex = /https:\/\/[^\/]+?\.dzcdn\.net\/media\/(?:[^\/]\/)+(-?[0-9]+?)\/([^\?]+)/;
                            const match = args[0].match(regex);
                            if (!match ||
                                match.length !== 3 ||
                                !Number.isInteger(Number(match[1])) ||
                                !match[2].includes(".")
                            ) {
                                return orig_fetch.apply(this, args);
                            }                        
                            
                            const [song_id, file_name] = [match[1], match[2]];
                            
                            for (const [active_file_name, existing_controller_aborter] of Hooks.active_requests) {
                                existing_controller_aborter.abort();
                                Hooks.active_requests.delete(active_file_name);
                            }
                            
                            // logger.console.debug(args);
                            const existing_existing_controller_aborter = args[1]?.aborter;
                            if (existing_existing_controller_aborter) {
                                Hooks.active_requests.set(file_name, existing_existing_controller_aborter);
                            } else {
                                logger.console.warn("Fetch called without aborter, cannot abort if needed:", args);
                            }
                            
                            // Check cache for full file only - let browser handle range requests naturally
                            const song_data = await cache.get(song_id, file_name);
                            if (!song_data) {
                                try {
                                    const orig_response = await orig_fetch.apply(this, args);
                                    
                                    if (!orig_response.ok) {
                                        Hooks.active_requests.delete(file_name);
                                        return orig_response;
                                    }

                                    const response_clone = orig_response.clone();
                                    
                                    if (orig_response.status === 200) { // only full responses (not 206 partial)
                                        (async () => { // dont block returning the response
                                            try {
                                                const buffer = Buffer.from(await response_clone.arrayBuffer());
                                                if (buffer.byteLength > 0 && !existing_existing_controller_aborter.aborted) {
                                                    cache.set(song_id, file_name, buffer, orig_response.headers.get("Content-Type"));
                                                }
                                            } catch (error) {
                                                if (error.name === 'AbortError') {
                                                    // logger.console.debug("Request aborted for file during background caching:", file_name);
                                                    cache.delete(song_id);
                                                } else {
                                                    logger.console.error("Background caching failed:", error);
                                                }
                                            }
                                        })();
                                    }
                                    
                                    Hooks.active_requests.delete(file_name);
                                    return orig_response;
                                } catch (error) {
                                    Hooks.active_requests.delete(file_name);
                                    if (error.name === 'AbortError') {
                                        logger.console.debug("Request aborted for file:", file_name);
                                    }
                                    throw error;
                                }
                            } else {
                                Hooks.active_requests.delete(file_name);
                            }
    
                            logger.console.debug("Returning cached song:", song_id, "with filename:", file_name, "with size:", format_bytes(song_data.song_data.byteLength));
                            
                            const response = new Response(song_data.song_data, {
                                status: 200,
                                statusText: "OK",
                                headers: {
                                    "Content-Type": song_data.content_type || "audio/mpeg",
                                    "Content-Length": (song_data.song_data.byteLength || song_data.song_data.length).toString(),
                                    "Accept-Ranges": "bytes",
                                }
                            });

                            return response;
                        } catch (error) {
                            if (error.name !== 'AbortError') {
                                logger.console.error("Error in fetch hook:", error);
                                return orig_fetch.apply(this, args);
                            }
                        }
                    }
                    // only change the function which gets called, not the attributes of the original fetch function
                    Object.setPrototypeOf(hooked_fetch, orig_fetch);
                    Object.getOwnPropertyNames(orig_fetch).forEach(prop => {
                        try {
                            hooked_fetch[prop] = orig_fetch[prop];
                        } catch (e) {
                        }
                    });
                    window.fetch = hooked_fetch;
                    window.fetch._modified_by_song_cache_plugin = true;
                }
    
                static ensure_hooks() {
                    if (!window.fetch._modified_by_song_cache_plugin) {
                        Hooks.hook_fetch();
                    }
                    window.history.pushState = new Proxy(window.history.pushState, {
                        apply: (target, thisArg, argArray) => {
                            if (!window.fetch._modified_by_song_cache_plugin) {
                                Hooks.hook_fetch();
                            }
                            return target.apply(thisArg, argArray);
                    },
                    });
                    window.addEventListener("popstate", (e) => {
                        if (!window.fetch._modified_by_song_cache_plugin) {
                            Hooks.hook_fetch();
                        }
                    });
                }
    
                static toggle_hooks(enabled, ...args) {
                    for (const arg of args) {
                        switch (arg) {
                            case Hooks.HOOK_INDEXES.ALL:    
                                Hooks.is_hooked.fill(enabled);
                                return;
                            case Hooks.HOOK_INDEXES.FETCH:
                                Hooks.is_hooked[arg] = enabled;
                                break;
                        }
                    }
                }
            }
            
    
            class UI {
                static has_created_ui = false;
    
                static create_ui() {
                    const selector = "#page_player > div > div.chakra-button__group"; //div.chakra-popover__popper > section.chakra-popover__content
                    let parent_div = document.querySelector(selector);
                    if (parent_div) {
                        UI.entry_point(parent_div);
                        logger.console.debug("UI created");
                    } else {
                        logger.console.debug("Waiting for parent");
                        const observer = new MutationObserver(mutations => {
                            for (let mutation of mutations) {
                                if (mutation.type === 'childList') {
                                    parent_div = document.querySelector(selector);
                                    if (parent_div) {
                                        observer.disconnect();
                                        if (parent_div.querySelector("div.song_cache")) return;
                                        if (UI.entry_point(parent_div)) logger.console.debug("UI created");
                                    }
                                }
                            }
                        });
                        observer.observe(document.body, {childList: true, subtree: true});
                    }
                }
    
                static entry_point(parent) {
                    if (UI.has_created_ui) return;
                    UI.has_created_ui = true;
    
                    UI.create_css();
    
                    parent.querySelector("div.chakra-popover__popper > section.chakra-popover__content[id^='popover-content-:'][role='dialog']:last-child").prepend(this.create_main_div(parent));
                    return true;
                }
    
                static create_main_div() {
                    const main_ul = document.createElement("ul");
                    main_ul.className = "song_cache_main";
    
                    const elements = this.create_elements();
                    main_ul.append(...elements);
                    return main_ul;
                }
    
    
                static create_item_li(main_text, info_text=null, more_info_text=null, action_element=null) {
                    const li = document.createElement("li");
                    li.className = "song_cache_item";
                    
                    const label = document.createElement("label");
                    label.className = "song_cache_label";
                    li.appendChild(label);
    
                    const main_span = document.createElement("span");
                    main_span.className = "song_cache_main_text";
                    main_span.textContent = main_text;
                    label.appendChild(main_span);
    
                    let info_span, more_info_span, action_element_div;
                    if (info_text) {
                        info_span = document.createElement("span");
                        info_span.className = "song_cache_info_text";
                        info_span.textContent = info_text;
                        label.appendChild(info_span);
                    }
                    if (more_info_text) {
                        more_info_span = document.createElement("span");
                        more_info_span.textContent = more_info_text;
                        li.appendChild(more_info_span);
                    }
    
                    if (action_element) {
                        action_element_div = document.createElement("div");
                        action_element_div.className = "song_cache_action_element";
                        action_element_div.appendChild(action_element);
                        label.appendChild(action_element_div);
                    }
                    
                    return li;
                }
    
                static create_elements() {
                    const max_cache_size_input = document.createElement("input");
                    max_cache_size_input.className = "song_cache_text_input";
                    max_cache_size_input.type = "number";
                    max_cache_size_input.title = "Set to 0 to disable the cache.";
                    max_cache_size_input.min = "0";
                    max_cache_size_input.step = "0.5";
                    max_cache_size_input.value = config.max_cache_size_mb / 1000;
                    max_cache_size_input.addEventListener("change", (e) => {
                        const value = parseFloat(e.target.value);
                        if (isNaN(value) || value < 0) {
                            max_cache_size_input.value = config.max_cache_size_mb / 1000;
                            return;
                        }
                        if (value === 0) {
                            config.enabled = false;
                            Hooks.toggle_hooks(false, Hooks.HOOK_INDEXES.FETCH);
                            config.max_cache_size_mb = 0;
                            logger.console.debug("Disabled song cache");
                            return;
                        }
    
                        config.enabled = true;
                        Hooks.toggle_hooks(true, Hooks.HOOK_INDEXES.FETCH);
                        config.max_cache_size_mb = Math.round(value * 1000);
                        logger.console.debug("Set max cache size to", config.max_cache_size_mb, "MB");
                    });
                    const max_cache_size_item = this.create_item_li(
                        "Max. Cache Size",
                        "(GB)",
                        null,//"Max. size of the song cache.",
                        max_cache_size_input
                    );
    
                    const cache_location_button = document.createElement("button");
                    cache_location_button.className = "song_cache_action_button";
                    cache_location_button.title = config.cache_location ? `Cache save location: ${config.cache_location}` : "No directory selected. Click to select a directory.";
                    cache_location_button.type = "button";
                    cache_location_button.textContent = "Select";
                    cache_location_button.onclick = async () => {
                        const result = await ipcRenderer.invoke('song-cache-open-directory-dialog');
                        if (!result) {
                            logger.console.debug("No directory selected for cache location");
                            return;
                        }
                        config.cache_location = result;
                        cache_location_button.title = `Cache save location: ${config.cache_location}`;
                        await cache.close();
                        cache = new Cache();
                        logger.console.debug("Cache save location set to:", config.cache_location);
                    }
                    const cache_location_item = this.create_item_li(
                        "Cache Location",
                        null,
                        null,
                        cache_location_button
                    );

                    const curr_cache_size_span = document.createElement("span");
                    curr_cache_size_span.className = "song_cache_more_info_text";
                    curr_cache_size_span.title = "Click to refresh the current cache size.";
                    curr_cache_size_span.textContent = "Unknown";
                    curr_cache_size_span.onclick = async () => {
                        const stats = await cache.get_cache_stats();
                        curr_cache_size_span.textContent = convert_bytes(stats.total_size_bytes, "GB").toLocaleString();
                    }
                    const curr_cache_size_item = this.create_item_li(
                        "Cache Size",
                        "(GB)",
                        null,
                        curr_cache_size_span
                    );
    
    
                    return [max_cache_size_item, cache_location_item, curr_cache_size_item];
                }
    
                static create_css() {
                    const css = `
                        ul.song_cache_main {
                            width: 240px;
                            padding-inline-start: var(--tempo-space-4);
                            padding-inline-end: var(--tempo-space-4);
                            padding: 16px;
                            font-size: var(--tempo-fontSizes-sm)
                        }
                        ul.song_cache_main > li.song_cache_item {
                            align-items: center;
                            display: flex;
                            flex-wrap: wrap;
                        }
                        ul.song_cache_main > li.song_cache_item:not(:first-child) {
                            margin-top: 15px;
                        }
                        
                        label.song_cache_label {
                            align-items: center;
                            display: flex;
                            flex: 1 100%;
                            max-height: 30px;
                            min-height: 25px;
                        }
                        label.song_cache_label > span.song_cache_main_text {
                            color: var(--tempo-colors-text-neutral-primary-default);
                            margin-right: 5px;
                            max-width: 170px;
                        }
                        label.song_cache_label > span.song_cache_info_text {
                            color: var(--tempo-colors-text-neutral-secondary-default);
                            margin-right: 5px;
                        }
                        label.song_cache_label > div.song_cache_action_element {
                            display: flex;
                            flex: 1;
                            justify-content: flex-end;
                        }
                        li.song_cache_item > span.song_cache_more_info_text {
                            color: var(--tempo-colors-text-neutral-secondary-default);
                            margin-top: 8px;
                            font-size: calc(var(--tempo-fontSizes-sm) - 0.5px);
                        }
    
                        input.song_cache_text_input {
                            width: 50px;
                            padding: 3px 5px;
                            background-color: inherit;
                            border: 1px solid var(--tempo-colors-border-neutral-primary-default);
                            border-radius: var(--tempo-radii-s);
                        }
                        input.song_cache_text_input:focus {
                            outline: none;
                            border-color: var(--tempo-colors-border-neutral-primary-focused)
                        }
                        input.song_cache_text_input:hover {
                            background-color: var(--tempo-colors-background-neutral-tertiary-hovered)
                        }
    
                        button.song_cache_action_button {
                            width: 60px;
                            padding: 3px;
                            background-color: var(--tempo-colors-background-accent-primary-default);
                            border-radius: var(--tempo-radii-s);
                        }
                        button.song_cache_action_button:hover {
                            background-color: var(--tempo-colors-background-accent-primary-hovered);
                        }
    
    
                    `;
                    const style = document.createElement("style");
                    style.type = "text/css";
                    style.textContent = css;
                    document.querySelector("head").appendChild(style);
                }
            }
    
            class Config {
                static CONFIG_PATH = "song_cache_config";
                CURRENT_CONFIG_VERSION = -1; // needs to be -1 for the very first version
    
                StringConfig = class {
                    // functions to traverse and edit a json based on string paths
                    static get_value(obj, path) {
                        return path.split(".").reduce((acc, key) => acc && acc[key], obj);
                    }
                    static set_key(obj, path, value) {
                        let current = obj;
                        const keys = path.split(".");
                        keys.slice(0, -1).forEach(key => {
                            current[key] = current[key] ?? (/^\d+$/.test(key) ? [] : {});
                            current = current[key];
                        });
                        current[keys[keys.length - 1]] = value;
                    }
                    static delete_key(obj, path) {
                        let current = obj;
                        const keys = path.split(".");
                        keys.slice(0, -1).forEach(key => {
                            if (!current[key]) return;
                            current = current[key];
                        });
                        delete current[keys[keys.length - 1]];
                    }
                    static move_key(obj, from, to) {
                        const value = this.get_value(obj, from);
                        if (value !== undefined) {
                            this.set_key(obj, to, value);
                            this.delete_key(obj, from);
                        }
                    }
                }
    
                constructor() {
                    this.config = this.setter_proxy(this.get());
                }
    
                retrieve() {
                    return JSON.parse(localStorage.getItem(Config.CONFIG_PATH)) || {
                        config_version: this.CURRENT_CONFIG_VERSION,
                        enabled: false,
                        max_cache_size_mb: 0,
                        cache_location: null,
                        cleanup_interval_s: 300
                    }
                }
    
                get() {
                    const config = this.retrieve();
                    if (config.config_version !== this.CURRENT_CONFIG_VERSION) {
                        return this.migrate_config(config);
                    }
                    return config;
                }
    
                save() {
                    localStorage.setItem(Config.CONFIG_PATH, JSON.stringify(this.config));
                }
                static static_save(config) {
                    localStorage.setItem(Config.CONFIG_PATH, JSON.stringify(config));
                }
    
                setter_proxy(obj) {
                    return new Proxy(obj, {
                        set: (target, key, value) => {
                            target[key] = value;
                            this.save();
                            return true;
                        },
                        get: (target, key) => {
                            if (typeof target[key] === 'object' && target[key] !== null) {
                                return this.setter_proxy(target[key]); // Ensure nested objects are also proxied
                            }
                            return target[key];
                        }
                    });
                }
    
                migrate_config(config) {
                    // patch structure
                    // [from, to, ?value]
                        // if both "from" and "to" exist, we change the path from "from" to "to"
                        // if "from" is null, "value" is required as we create/update the key and set the value to "value"
                        // if "to" is null, we delete the key
                    const patches = [
                    ]
    
                    const old_cfg_version = config.config_version === undefined ? -1 : config.config_version;
                    for (let patch = old_cfg_version+1; patch <= this.CURRENT_CONFIG_VERSION; patch++) {
                        if (patch !== 0) { // we add the config_version key in the first patch
                            config.config_version++;
                        }
                        patches[patch].forEach(([from, to, value]) => {
                            if (from && to) {
                                this.StringConfig.move_key(config, from, to);
                            }
                            else if (!from && to) {
                                this.StringConfig.set_key(config, to, value);
                            }
                            else if (from && !to) {
                                this.StringConfig.delete_key(config, from);
                            }
                        });
                        logger.console.debug("Migrated to version", patch);
                    }
                    logger.console.log("Migrated config to version", this.CURRENT_CONFIG_VERSION);
                    return config;
                }
            }

            const PATCHES = [
                {
                    find: ["this._buffered=[]"],
                    matches_and_replacements: [
                        {
                            match: ":this.aborter.signal",
                            replace: ":this.aborter.signal,aborter:this.aborter",
                        }
                    ]    
                }
            ]
    
            const logger = new Logger();
            const config = new Config().config;
            let cache;

            (async function main() {
                (function wait_for_webpack_patcher(){
                    if (window.register_webpack_patches) {
                        logger.console.debug("Registering webpack patches");
                        window.register_webpack_patches(PATCHES);
                    } else if (!window.webpackJsonpDeezer) {
                        setTimeout(wait_for_webpack_patcher, 0);
                    } else {
                        logger.console.warn("Webpack array found, but not patcher, stopping");
                    }
                })();

                cache = new Cache();

                UI.create_ui();
                logger.console.log("Hooking window.fetch");
                const wait_for_dz_player_interval = setInterval(() => {
                    if (window.dzPlayer) {
                        clearInterval(wait_for_dz_player_interval);
                        Hooks.toggle_hooks(config.enabled, Hooks.HOOK_INDEXES.ALL);
                        setTimeout(() => {
                            Hooks.hook_fetch();
                            setTimeout(Hooks.ensure_hooks, 5000);
                        }, 1000);
                    }
                }, 100);
                if (Logger.LOG_VERY_MANY_THINGS_YES_YES) {
                    logger.console.debug("Cache stats:\n", await cache.get_cache_stats());
                }
            })();
        }

        function context_main() {
            "use strict";

            const { ipcMain, dialog } = require('electron');
            ipcMain.handle('song-cache-open-directory-dialog', async () => {
                const result = await dialog.showOpenDialog({
                    properties: ['openDirectory']
                });

                if (result.canceled || result.filePaths.length === 0) {
                    return null;
                }
                return result.filePaths[0];
            });
        }

        if (context === "main") {
            context_main();
        }
        else if (context === "renderer") {
            context_renderer();
        } 

    }
}
