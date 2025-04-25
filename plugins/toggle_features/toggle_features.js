module.exports = {
    name: "Toggle Features",
    description: "Enable or disable features which may or may not be experimental/web version only.",
    version: "1.0.2",
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

        const SPECIAL_FEATURES = {
            spoof_family: false, // Spoof your account to be the head of a family plan if you are a child account of a family account, opening up more features for you. (e.g. linking to last.fm)
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
        
        const original_fetch = window.fetch;

        log("Hooking fetch");
        window.fetch = async function (...args) {
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
                    // Special features
                    if (SPECIAL_FEATURES.spoof_family) {
                        resp_json.results.USER.MULTI_ACCOUNT = {"ENABLED": true,"ACTIVE": true,"CHILD_COUNT": 0,"MAX_CHILDREN": 0,"PARENT": null,"IS_KID": false,"IS_SUB_ACCOUNT": false}
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

                // since this request is only made once, we can unhook now
                log("Unhooking fetch");
                window.fetch = original_fetch;

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
    }
}