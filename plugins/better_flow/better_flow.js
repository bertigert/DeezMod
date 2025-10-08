module.exports = {
    name: "Better Flow",
    description: "Makes editing the queue in flow possible.",
    version: "1.0.3",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        "use strict";
        
        class Logger {
            static PREFIX = "[Better Flow]";
            
            constructor(debug=false) {
                this.should_debug = debug;
            }
            
            debug(...args) {if (this.should_debug) console.debug(Logger.PREFIX, ...args);}
            log(...args) {console.log(Logger.PREFIX, ...args);}
            warn(...args) {console.warn(Logger.PREFIX, ...args);}
            error(...args) {console.error(Logger.PREFIX, ...args);}
        }

        class DeezerPlayerHook {
            static detect_and_hook_dzplayer(callback) {
                const interval_id = setInterval(() => {
                    if (window.dzPlayer) {
                        clearInterval(interval_id);
                        callback(window.dzPlayer);
                    }
                }, 10);
            }

            static hook_onLoadedTracks() {
                logger.log("Hooking dzPlayer.onLoadedTracks");
                const orig_onloadedtracks = dzPlayer.onLoadedTracks;
                dzPlayer.onLoadedTracks = function (...args) {
                    try {
                        const data = args[1];
                        if ((data.addNext || data.addQueue) && dzPlayer.isRadio()) {
                            data.radio = true;
                            data.context.TYPE = dzPlayer.getContext()?.TYPE;
                        }

                        return orig_onloadedtracks.apply(this, args);
                    } catch (error) {
                        logger.error("Error in onLoadedTracks hook:", error);
                    }
                };
            }
        }

        
        const PATCHES = [
            {
                find: ["dispatchRemoveSong:e,"],
                replacements: [
                    {
                        match: /isPlayable\(\)\{const\{([^}]*)playerIsRadio:([a-z]+)(?:,)?/g,
                        replace: (_, $1, $2) => `isPlayable(){const ${$2}=false,{${$1}`,
                    }
                ]
            },
            {
                find: ["this.handleConfirm=this.handleConfirm.bind(this)"],
                replacements: [
                    {
                        match: /isPlayable\(\)\{const\{([^}]*)playerIsRadio:([a-z])(?:,)?/g,
                        replace: (_, $1, $2) => `isPlayable(){const ${$2}=false,{${$1}`,
                    }
                ]
            },
            {
                find: ["getStorageKey:e=>`ALERT_DISMISSED_${e}"],
                replacements: [
                    {
                        match: "e?t+1:",
                        replace: "",
                    },
                    {
                        match: "const{index:e,isRadio:t",
                        replace: "const t=false,{index:e",
                    },
                ]
            },
            {

                find: ["=1209600;"],
                replacements: [
                    {
                        match: /addNext:function(.*)if\([a-zA-Z]+\.isRadio\(\)\)return!1;/,
                        replace: (_, $1) => `addNext:function${$1}`,
                    }
                ]
            },
            {
                find: [`JSON.parse('{"default":`],
                replacements: [
                    {
                        match: /NB_SONG\|\|[a-zA-Z]+\.[a-zA-Z]+\.isRadio\(\)/,
                        replace: "NB_SONG",
                    }
                ]
            }
        ];
        
        const logger = new Logger(false);

        (function wait_for_webpack_patcher(){
            if (window.WebpackPatcher) {
                logger.debug("Registering webpack patches");
                window.WebpackPatcher.register({
                    name: "Better Flow"
                }, PATCHES);
                DeezerPlayerHook.detect_and_hook_dzplayer((dzPlayer) => {
                    DeezerPlayerHook.hook_onLoadedTracks();
                });
            } else if (!window.webpackJsonpDeezer) {
                setTimeout(wait_for_webpack_patcher, 0);
            } else {
                logger.warn("Webpack array found, but not patcher, stopping");
            }
        })();
    }
}
