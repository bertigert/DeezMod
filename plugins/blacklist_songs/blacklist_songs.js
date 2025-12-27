module.exports = {
    name: "Blacklist Songs",
    description: "Blacklists songs from being played in deezer",
    version: "1.1.1",
    author: "bertigert",
    context: {
        renderer: "own"
    },
    func: () => {
        "use strict";
        class Logger {
            static LOG_VERY_MANY_THINGS_YES_YES = true; // set to false if you dont want the console getting spammed

            constructor() {
                this.log_textarea = null;
                this.PREFIXES = Object.freeze({
                    INFO: "?",
                    WARN: "⚠",
                    ERROR: "!",
                    SUCCESS: "*",
                    CONSOLE: "[Blacklist Songs]"
                });
                this.console = {
                    log: (...args) => console.log(this.PREFIXES.CONSOLE, ...args),
                    warn: (...args) => console.warn(this.PREFIXES.CONSOLE, ...args),
                    error: (...args) => console.error(this.PREFIXES.CONSOLE, ...args),
                    debug: (...args) => {if (Logger.LOG_VERY_MANY_THINGS_YES_YES) console.debug(this.PREFIXES.CONSOLE, ...args)}
                };
            }
        }

        
        class Blacklist {
            static BLACKLIST_TYPES = Object.freeze({
                SONG: 0,
                ARTIST: 1
            });
            
            constructor(type=Blacklist.BLACKLIST_TYPES.SONG) {
                this.type = type === Blacklist.BLACKLIST_TYPES.ARTIST ? Blacklist.BLACKLIST_TYPES.ARTIST : Blacklist.BLACKLIST_TYPES.SONG;
                this.remote_blacklist = null;
                this.local_blacklist = null;
            }

            _get_id() {
                let data = dzPlayer.getCurrentSong();
                if (data) {
                    return this.type === Blacklist.BLACKLIST_TYPES.SONG ? data.SNG_ID : data.ART_ID;
                }

                const wait_for_getCurrentSong = setInterval(() => {
                    data = dzPlayer.getCurrentSong();
                    if (data) {
                        clearInterval(wait_for_getCurrentSong);
                        return this.type === Blacklist.BLACKLIST_TYPES.SONG ? data.SNG_ID : data.ART_ID;
                    }
                }, 1);
            }

            get_local_blacklist() {
                return this.local_blacklist;
            }
            get_remote_blacklist() {
                return this.remote_blacklist;
            }
            get_blacklist () {
                return {
                    local: this.local_blacklist,
                    remote: this.remote_blacklist
                };
            }

            async load_blacklist() {
                this.remote_blacklist = await deezer.get_blacklisted_tracks_or_artists(this.type) || {};
                this.local_blacklist = local_config.config[`blacklisted_${this.type === Blacklist.BLACKLIST_TYPES.SONG ? "songs" : "artists"}`] || {};
            }

            is_local_blacklisted(id) {
                id = parseInt(id) || this._get_id();
                return this.local_blacklist[id] !== undefined;
            }
            is_remote_blacklisted(id) {
                id = parseInt(id) || this._get_id();
                return this.remote_blacklist[id] !== undefined;
            }
            is_blacklisted(id) {
                return this.is_local_blacklisted(id) || this.is_remote_blacklisted(id);
            }

            add(id, local=false) {
                id = parseInt(id) || this._get_id();
                if (this.is_blacklisted(id)) {
                    logger.console.warn(`Element ${id} is already blacklisted.`);
                    return false;
                }
                if (local) {
                    this.local_blacklist[id] = 1;
                }
                logger.console.debug(`Added element ${id} to blacklist.`);
                return true;
            }
            remove(id, local=false) {
                id = parseInt(id) || this._get_id();
                if (!this.is_blacklisted(id)) {
                    logger.console.warn(`Element ${id} was not blacklisted.`);
                    return false;
                }
                if (local) {
                    delete this.local_blacklist[id];
                    local_config.save();
                }
                logger.console.debug(`Removed element ${id} from blacklist.`);
                return true;
            }
            // returns true if the element was blacklisted, false if it was unblacklisted, null if an error occurred
            toggle(id, local=false) {
                if (this.is_blacklisted(id)) {
                    return this.remove(id, local) ? false : null;
                } else {
                    return this.add(id, local) ? true : null;
                }
            }
        }


        class Deezer {
            constructor() {
                this.auth_token = null;
            }

            async get_auth_token() {
                const r = await fetch("https://auth.deezer.com/login/renew?jo=p&rto=c&i=c", {
                    "method": "POST",
                    "credentials": "include"
                });
                const resp = await r.json();
                this.auth_token = resp.jwt
                return resp.jwt;
            }

            async get_blacklisted_tracks_or_artists(type) {
                const strings = type === Blacklist.BLACKLIST_TYPES.ARTIST ? ["Artist", "artist", "ArtistBase"] : ["Track", "track", "TrackBase"];

                if (!this.auth_token) {
                    await this.get_auth_token();
                }

                const fetch_batch = async (amount, cursor) => {
                    const r = await fetch("https://pipe.deezer.com/api", {
                        "headers": {
                            "accept": "*/*",
                            "authorization": "Bearer " + this.auth_token,
                            "content-type": "application/json",
                        },
                        "body": JSON.stringify({
                            "operationName": `${strings[0]}ExclusionsTab`,
                            "variables": {
                                [`${strings[1]}First`]: Math.min(amount, 2000),
                                [`${strings[1]}Cursor`]: cursor
                            },
                            "query": `query ${strings[0]}ExclusionsTab($${strings[1]}First: Int, $${strings[1]}Cursor: String) {
                                me {
                                    id
                                    bannedFromRecommendation {
                                        ${strings[1]}s(first: $${strings[1]}First, after: $${strings[1]}Cursor) {
                                            pageInfo {
                                                hasNextPage
                                                endCursor
                                            }
                                            edges {
                                                node {
                                                    ...${strings[2]}
                                                }
                                            }
                                        }
                                    estimated${strings[0]}sCount
                                    }
                                }
                            }
                            fragment ${strings[2]} on ${strings[0]} {
                                id
                            }`
                        }),
                        "method": "POST",
                    });
                    
                    if (!r.ok) return null;
                    const data = await r.json();
                    if (data.errors && data.errors.some(error => error.type === "JwtTokenExpiredError")) {
                        await this.get_auth_token();
                        return fetch_batch(amount, cursor);
                    }
                    
                    return data.data;
                };

                const all_items = [];
                let initial_data = await fetch_batch(0, null);

                const estimated_count = initial_data.me.bannedFromRecommendation[`estimated${strings[0]}sCount`] || 0;
                let remaining_count = estimated_count;
                
                let current_cursor = initial_data.me.bannedFromRecommendation[`${strings[1]}s`].pageInfo.endCursor;
                let has_next_page = initial_data.me.bannedFromRecommendation[`${strings[1]}s`].pageInfo.hasNextPage;

                while (has_next_page && remaining_count > 0) {
                    const next_amount = Math.min(remaining_count, 2000);
                    const batch_data = await fetch_batch(next_amount, current_cursor);
                    
                    const edges = batch_data.me.bannedFromRecommendation[`${strings[1]}s`].edges;
                    edges.forEach(edge => {
                        all_items.push(edge.node.id);
                    });
                    
                    remaining_count -= edges.length;
                    current_cursor = batch_data.me.bannedFromRecommendation[`${strings[1]}s`].pageInfo.endCursor;
                    has_next_page = batch_data.me.bannedFromRecommendation[`${strings[1]}s`].pageInfo.hasNextPage;
                }
                
                const tracks = {};
                all_items.forEach(id => {
                    tracks[id] = 1;
                });
                return tracks;
            }
        }

        class Hooks {
            static HOOK_INDEXES = Object.freeze({
                SET_TRACKLIST: 0,
                FETCH: 1,
                ALL: 2
            });

            // we use this approach to unhook to avoid unhooking hooks created after our hooks
            static is_hooked = [false, false];

            static hook_set_tracklist() {
                const orig_set_tracklist = dzPlayer.setTrackList;
                dzPlayer.setTrackList = function (...args) {
                    // logger.console.debug("Hooked dzPlayer.setTrackList called with args:", args);
                    if (!Hooks.is_hooked[Hooks.HOOK_INDEXES.SET_TRACKLIST]) return orig_set_tracklist.apply(this, args);
                    try {
                        let filtered_tracks = [];
                        const tracklist = args[0].data;
                        const orig_index = args[0].index;
                        for (let i = 0; i < tracklist.length; i++) {
                            const track = tracklist[i];
                            if (i === orig_index || (!config.Song_blacklist.is_blacklisted(track.SNG_ID) && !config.Artist_blacklist.is_blacklisted(track.ART_ID))) {
                                filtered_tracks.push(track);
                            } else {
                                // the tracklist is always the entire playlist/album and the index is the song the user clicked on,
                                // so if there is a blacklisted song before the current index, we need to adjust the index
                                if (i < orig_index && args[0].index > 0) {
                                    args[0].index--;
                                }
                            }
                        }
                        args[0].data = filtered_tracks;

                        return orig_set_tracklist.apply(this, args);
                    } catch (error) {
                        logger.console.error("Error in setTrackList hook:", error);
                    }
                };
            }

            static hook_fetch() {
                //logger.console.debug("Hooking window.fetch");
                const orig_fetch = window.fetch;
                function hooked_fetch(...args) {
                    if (!Hooks.is_hooked[Hooks.HOOK_INDEXES.FETCH]) return orig_fetch.apply(this, args);
                    // logger.console.debug("Fetch hook called with args:", args);
                    try {
                        if (args.length !== 2 || args[1].method !== "POST" || !args[1].body) {
                            return orig_fetch.apply(this, args);
                        }
                        const orig_request = orig_fetch.apply(this, args); // async
                        if (args[0].startsWith("https://www.deezer.com/ajax/gw-light.php?method=favorite_dislike.add")) {
                            const payload = JSON.parse(args[1].body);
                            if (payload?.TYPE === "song") {
                                config.Song_blacklist.add(payload.ID);
                            } else if (payload?.TYPE === "artist") {
                                config.Artist_blacklist.add(payload.ID);
                            }
                        } else if (args[0].startsWith("https://www.deezer.com/ajax/gw-light.php?method=favorite_dislike.removeMulti")) {
                            const payload = JSON.parse(args[1].body);
                            if (payload?.TYPE === "song") {
                                payload.IDS.forEach(id => config.Song_blacklist.remove(id));
                            } else if (payload?.TYPE === "artist") {
                                payload.IDS.forEach(id => config.Artist_blacklist.remove(id));
                            }
                        } else if (args[0].startsWith("https://www.deezer.com/ajax/gw-light.php?method=favorite_dislike.remove")) {
                            const payload = JSON.parse(args[1].body);
                            if (payload?.TYPE === "song") {
                                config.Song_blacklist.remove(payload.ID);
                            } else if (payload?.TYPE === "artist") {
                                config.Artist_blacklist.remove(payload.ID);
                            }
                        } 
                        return orig_request;
                    } catch (error) {
                        logger.console.error("Error in fetch hook:", error);
                        return orig_fetch.apply(this, args);
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
                window.fetch._modified_by_blacklist_plugin = true;
            }

            static ensure_hooks() {
                if (!window.fetch._modified_by_blacklist_plugin) {
                    Hooks.hook_fetch();
                }
                window.history.pushState = new Proxy(window.history.pushState, {
                    apply: (target, thisArg, argArray) => {
                        if (!window.fetch._modified_by_blacklist_plugin) {
                            Hooks.hook_fetch();
                        }
                        return target.apply(thisArg, argArray);
                },
                });
                window.addEventListener("popstate", (e) => {
                    if (!window.fetch._modified_by_blacklist_plugin) {
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
                        case Hooks.HOOK_INDEXES.SET_TRACKLIST:
                            Hooks.is_hooked[arg] = enabled;
                            break;
                    }
                }
            }
        }
        

        class UI {
            static create_ui() {
                const selector = "#page_player > div > div.chakra-button__group";
                let parent_div = document.querySelector(selector);
                if (parent_div) {
                    UI.create_css();
                    parent_div.prepend(UI.create_main_button());
                    logger.console.debug("UI created");
                } else {
                    logger.console.debug("Waiting for parent");
                    const observer = new MutationObserver(mutations => {
                        for (let mutation of mutations) {
                            if (mutation.type === "childList") {
                                parent_div = document.querySelector(selector);
                                if (parent_div) {
                                    observer.disconnect();
                                    if (document.querySelector("button.blacklist_songs")) return;
                                    UI.create_css();
                                    parent_div.prepend(UI.create_main_button());
                                    logger.console.debug("UI created");
                                }
                            }
                        }
                    });
                    observer.observe(document.body, {childList: true, subtree: true});
                }
            }

            static create_main_button() {
                const button = document.createElement("button");
                button.title = "Left-Click to (un-)blacklist the current song. Right-Click to (un-)blacklist the current artist. This does not set the song/artist as disliked, it's only applied locally. Useful for when you don't want to influence your algorithm.";
                button.className = "blacklist_songs";
                button.innerHTML = `<svg viewBox="0 0 24 24" focusable="false">
                    <path fill-rule="evenodd"
                        d="M16 4.78v4.726l-.855-.252a14.771 14.771 0 0 0-4.182-.584c-.058 0-.116.002-.173.004a2.526 2.526 0 0 1-.123.004v7.986c0 2.142-1.193 3.336-3.334 3.336C5.193 20 4 18.806 4 16.665c0-2.142 1.193-3.336 3.333-3.336.806 0 1.476.17 2 .494V4.065l.629-.036c.33-.019.662-.029 1-.029a16.1 16.1 0 0 1 4.56.639l.478.14ZM5.333 16.664c0 1.403.598 2.002 2 2.002 1.402 0 2-.599 2-2.002 0-1.402-.598-2-2-2-1.402 0-2 .598-2 2Zm5.63-9.329c1.277 0 2.52.14 3.704.414V5.787a15.093 15.093 0 0 0-4-.45v2.001c.098-.002.197-.003.296-.003Z"
                        clip-rule="evenodd"></path>
                    <path fill-rule="evenodd"
                        d="M16.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.17 3.5c0 .357.086.694.239.99l2.922-2.921a2.17 2.17 0 0 0-3.16 1.931Zm2.17 2.17a2.15 2.15 0 0 1-.99-.239l2.921-2.922a2.17 2.17 0 0 1-1.931 3.16Z"
                        clip-rule="evenodd"></path>
                </svg>`;

                document.querySelector("#page_player > div > div.chakra-button__group").prepend(button);

                const onclick = (mouse_btn) => {
                    const existing_popup = document.querySelector("span.blacklist_songs_popup");
                    if (existing_popup) existing_popup.remove();

                    const popup = UI.create_popup();
                    button.parentElement.appendChild(popup);
                    
                    // check if it was left or right click
                    let is_blacklisted_now = null;
                    let popup_text = "";
                    if (mouse_btn === 0) { // left click
                        is_blacklisted_now = config.Song_blacklist.toggle(config.Song_blacklist._get_id(), true);
                        popup_text = is_blacklisted_now ? "Blacklisted song." : "Unblacklisted song.";

                    } else if (mouse_btn === 1) { // right click
                        is_blacklisted_now = config.Artist_blacklist.toggle(config.Artist_blacklist._get_id(), true);
                        popup_text = is_blacklisted_now ? "Blacklisted artist." : "Unblacklisted artist.";
                    }
                    
                    if (is_blacklisted_now === null) {
                        logger.console.error("An error occurred while toggling the blacklist status of the song.");
                        popup_text = "Failed to toggle blacklist status.";
                    }
                    // dzPlayer.removeTracks(dzPlayer.getTrackListIndex());
                    
                    UI.show_popup(popup, popup_text, 2000, button.offsetLeft-button.clientWidth*1.25, button.offsetTop-button.clientHeight*1.25);
                }

                button.onclick = onclick.bind(button, 0);
                button.oncontextmenu = (e) => {
                    e.preventDefault();
                    onclick(1);
                };
                return button;
            }

            static create_popup() {
                const popup = document.createElement("span");
                popup.className = "blacklist_songs_popup";
                return popup;
            }
            static show_popup(popup, text, duration=2000, x, y) {
                popup.textContent = text;
                popup.style.left = `${x}px`;
                popup.style.top = `${y}px`;
                popup.style.opacity = "1";
                popup.style.animation = "fadeIn 0.2s linear";
                setTimeout(() => {
                    UI.fade_out_popup(popup);
                }, duration);
            }
            static fade_out_popup(popup) {
                popup.style.opacity = "0";
                setTimeout(() => {
                    popup.remove();
                }, 500);
            }

            static create_css() {
                const css = `
                    .blacklist_songs_hidden {
                        display: none !important;
                    }

                    button.blacklist_songs {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        min-height: var(--tempo-sizes-size-m);
                        min-width: var(--tempo-sizes-size-m);
                        color: var(--tempo-colors-text-neutral-primary-default);
                        background: var(--tempo-colors-transparent);
                        border-radius: var(--tempo-radii-full);
                    }
                    button.blacklist_songs:hover {
                        background: var(--tempo-colors-background-neutral-tertiary-hovered);
                        color: var(--tempo-colors-text-neutral-primary-hovered);
                    }
                    button.blacklist_songs:active {
                        color: var(--tempo-colors-icon-accent-primary-default);
                    }
                    button.blacklist_songs > svg {
                        width: 24px;
                        height: 24px;
                        fill: currentcolor;
                    }

                    span.blacklist_songs_popup {
                        height: fit-content;
                        width: fit-content;
                        position: absolute;
                        padding: 5px;
                        color: var(--tempo-colors-text-neutral-secondary-default);
                        font-size: 12px;
                        background-color: var(--tempo-colors-background-neutral-secondary-default);
                        border-radius: var(--tempo-radii-lg);
                        box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 25px 10px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
                        z-index: 9999;
                        transition: opacity 0.5s linear;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `;
                const style = document.createElement("style");
                style.type = "text/css";
                style.textContent = css;
                document.querySelector("head").appendChild(style);
            }
        }

        class LocalConfig {
            static CONFIG_PATH = "blacklist_songs_config";
            CURRENT_CONFIG_VERSION = 1;

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
                return JSON.parse(localStorage.getItem(LocalConfig.CONFIG_PATH)) || {
                    config_version: this.CURRENT_CONFIG_VERSION,
                    blacklisted_songs: {},
                    blacklisted_artists: {}
                };
            }

            get() {
                const config = this.retrieve();
                if (config.config_version !== this.CURRENT_CONFIG_VERSION) {
                    return this.migrate_config(config);
                }
                return config;
            }

            save() {
                localStorage.setItem(LocalConfig.CONFIG_PATH, JSON.stringify(this.config));
            }
            static static_save(config) {
                localStorage.setItem(LocalConfig.CONFIG_PATH, JSON.stringify(config));
            }

            setter_proxy(obj) {
                return new Proxy(obj, {
                    set: (target, key, value) => {
                        target[key] = value;
                        this.save();
                        return true;
                    },
                    get: (target, key) => {
                        if (typeof target[key] === "object" && target[key] !== null) {
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
                    [],
                    [
                        [null, "blacklisted_artists", {}]
                    ]
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

        const logger = new Logger();
        const deezer = new Deezer();
        const local_config = new LocalConfig();
        const config = {
            Song_blacklist: new Blacklist(Blacklist.BLACKLIST_TYPES.SONG),
            Artist_blacklist: new Blacklist(Blacklist.BLACKLIST_TYPES.ARTIST),
        };
        
        (async function main() {
            UI.create_ui();
            window.blacklist_plugin = config;
            await config.Song_blacklist.load_blacklist();
            await config.Artist_blacklist.load_blacklist();

            logger.console.log("Hooking dzplayer.setTrackList and window.fetch");
            const wait_for_dz_player_interval = setInterval(() => {
                if (window.dzPlayer) {
                    clearInterval(wait_for_dz_player_interval);
                    Hooks.toggle_hooks(true, Hooks.HOOK_INDEXES.ALL);
                    Hooks.hook_set_tracklist();
                    setTimeout(() => {
                        Hooks.hook_fetch();
                        setTimeout(Hooks.ensure_hooks, 5000);
                    }, 1000);
                }
            }, 100);
        })();
    }
}
