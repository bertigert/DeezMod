module.exports = {
    name: "Better Flow",
    description: "Makes editing the queue in flow possible.",
    version: "1.0.0",
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

            static hook_setTrackList() {
                logger.log("Hooking dzPlayer.setTrackList");
                const orig_set_tracklist = dzPlayer.setTrackList;
                dzPlayer.setTrackList = function (...args) {
                    logger.debug("setTrackList called with args:", args);
                    try {
                        const data = args[0];
                        if (args[0].is_spoofed_radio) {
                            args[0].radio = true;
                            const orig_is_radio = dzPlayer.isRadio;
                            dzPlayer.isRadio = () => {
                                dzPlayer.isRadio = orig_is_radio;
                                return false;
                            }
                            logger.log("setTrackList called, spoofing radio to false");
                        }

                        return orig_set_tracklist.apply(this, args);
                    } catch (error) {
                        logger.error("Error in setTrackList hook:", error);
                    }
                };
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

        
        const PATCHES = {
            555: {
                methods: [
                    {
                        identifiers: ["dispatchRemoveSong:e,"],
                        matches_and_replacements: [
                            {
                                match: /isPlayable\(\)\{const\{([^}]*)playerIsRadio:([a-z]+)(?:,)?/g,
                                replace: (_, $1, $2) => `isPlayable(){const ${$2}=false,{${$1}`,
                            }
                        ]
                    },
                    {
                        identifiers: ["this.handleConfirm=this.handleConfirm.bind(this)"],
                        matches_and_replacements: [
                            {
                                match: /isPlayable\(\)\{const\{([^}]*)playerIsRadio:([a-z])(?:,)?/g,
                                replace: (_, $1, $2) => `isPlayable(){const ${$2}=false,{${$1}`,
                            }
                        ]
                    }
                ]
            },
            2416: {
                methods: [
                    {
                        identifiers: ["getStorageKey:e=>`ALERT_DISMISSED_${e}"],
                        matches_and_replacements: [
                            {
                                match: "e?t+1:",
                                replace: "",
                            },
                            {
                                match: "const{index:e,isRadio:t",
                                replace: "const t=false,{index:e",
                            },
                        ]
                    }
                ]
            },
            9281: {
                methods: [
                    {
                        identifiers: ["=1209600;"],
                        matches_and_replacements: [
                            {
                                match: /addNext:function(.*)if\([a-zA-Z]+\.isRadio\(\)\)return!1;/,
                                replace: (_, $1) => `addNext:function${$1}`,
                            }
                        ]
                    },
                ]
            },
            9842: {
                methods: [
                    {
                        identifiers: [`JSON.parse('{"default":`],
                        matches_and_replacements: [
                            {
                                match: /NB_SONG\|\|[a-zA-Z]+\.[a-zA-Z]+\.isRadio\(\)/,
                                replace: "NB_SONG",
                            }
                        ]
                    }
                ]
            }
        }
        
        const logger = new Logger(true);

        DeezerPlayerHook.detect_and_hook_dzplayer((dzPlayer) => {
            DeezerPlayerHook.hook_onLoadedTracks();
        });

        (function wait_for_webpack_patcher(){
            if (window.register_webpack_patches) {
                logger.debug("Registering webpack patches");
                window.register_webpack_patches(PATCHES);
            } else {
                setTimeout(wait_for_webpack_patcher, 0);
            }
        })();
    }
}
