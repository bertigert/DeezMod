module.exports = {
    name: "Toggle Features",
    description: "Enable or disable features which may or may not be experimental/web version only.",
    version: "1.0.3",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        "use strict";
        // ======= Settings START =======
        
        
        const LOG_ALL_FEATURES_DEBUG = true; // useful to see all features (gets logged in the (dev tools) console, use https://github.com/bertigert/DeezMod/blob/main/plugins/enable_dev_mode.js to view)
        
        
        const DEEZER_CUSTOM_FEATURES = {
            // gapless_playback: true,
            deeztools: true, // simple way to toggle most of the custom features
        }
        
        // true = enable, false = disable, null = leave as is (only some features differentiate between false and null)
        const SPECIAL_FEATURES = {
            spoof_family: false, // Spoof your account to be the head of a family plan if you are a child account of a family account, opening up more features for you. (e.g. linking to last.fm)
            download_on_web: null, // Enable downloading on the web version of Deezer
        }

        // ======= Settings END =======


        
        function log(...args) {
            console.log("[Toggle Features]", ...args);
        }
        function error(...args) {
            console.error("[Toggle Features]", ...args);
        }
        function debug(...args) {
            console.debug("[Toggle Features]", ...args);
        }
        
        function get_user_id(resp_json) {
            return resp_json.results.USER.USER_ID;
        }

        function patch(resp_json) {
            // Special features
            if (SPECIAL_FEATURES.spoof_family) {
                resp_json.results.USER.MULTI_ACCOUNT = {"ENABLED": true,"ACTIVE": true,"CHILD_COUNT": 0,"MAX_CHILDREN": 0,"PARENT": null,"IS_KID": false,"IS_SUB_ACCOUNT": false}
            }

            if (SPECIAL_FEATURES.download_on_web) {
                localStorage.setItem("deezTools_features_offline_"+get_user_id(resp_json), "true");
            } else if (SPECIAL_FEATURES.download_on_web === false) {
                localStorage.removeItem("deezTools_features_offline_"+get_user_id(resp_json));
            }


            // Deezer custom features
            const features = resp_json.results.__DZR_GATEKEEPS__;

            if (LOG_ALL_FEATURES_DEBUG) {
                log('All Features:', features, "Special Features:", SPECIAL_FEATURES);
            }

            for (let feature of Object.entries(DEEZER_CUSTOM_FEATURES)) {
                features[feature[0]] = feature[1];
                log(feature[1] ? 'Enabled' : 'Disabled', feature[0]);
            }
        }

        class Hooks {
            static HOOK_INDEXES = Object.freeze({
                FETCH: 0,
                ALL: 1
            });

            // we use this approach to unhook to avoid unhooking hooks created after our hooks
            static is_hooked = [true]; // start enabled since we only hook once

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

        const original_fetch = window.fetch;

        log("Hooking fetch");
        
        async function hooked_fetch(...args) {
            if (!Hooks.is_hooked[Hooks.HOOK_INDEXES.FETCH]) return original_fetch.apply(this, args);

            try {
                const url = new URL(args[0]);
            
                if (url.pathname !== "/ajax/gw-light.php" || 
                    url.searchParams.get("method") !== "deezer.getUserData" ||
                    url.searchParams.get("api_token") !== "" ||
                    !url.searchParams.has("cid") ||
                    typeof args[1].body !== "string"
                ) {
                    return original_fetch.apply(window, args);
                }

                debug('Catched user data fetch call');

                const response = await original_fetch.apply(window, args);
                const resp_json = await response.json();

                if (resp_json.results) {
                    patch(resp_json);
                }

                // since this request is only made once, we can unhook now
                debug("Unhooking fetch");
                Hooks.toggle_hooks(false, Hooks.HOOK_INDEXES.ALL);

                return new Response(JSON.stringify(resp_json), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                });
            } catch (e) {
                error("Error in fetch hook:", e);
                return original_fetch.apply(window, args);
            }
        }

        // only change the function which gets called, not the attributes of the original fetch function
        Object.setPrototypeOf(hooked_fetch, original_fetch);
        Object.getOwnPropertyNames(original_fetch).forEach(prop => {
            try {
                hooked_fetch[prop] = original_fetch[prop];
            } catch (e) {}
        });
        window.fetch = hooked_fetch;
        window.fetch._modified_by_toggle_features = true;
    }
}