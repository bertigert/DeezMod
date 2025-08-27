module.exports = {
    name: "List All Releases",
    description: "Lists ALL releases at the artist page, not just hand picked ones by deezer.",
    version: "1.0.2",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        class Logger {
            static PREFIX = "[Display All Songs]";

            constructor(do_debug) {
                this.do_debug = do_debug;
            }
            log(...args) {
                console.log(Logger.PREFIX, ...args);
            }
            warn(...args) {
                console.warn(Logger.PREFIX, ...args);
            }
            error(...args) {
                console.error(Logger.PREFIX, ...args);
            }
            debug(...args) {
                if (this.do_debug) console.debug(Logger.PREFIX, ...args);
            }
        }

        class Hooks {
            static HOOK_INDEXES = Object.freeze({
                FETCH: 0,
                ALL: 1
            });

            // we use this approach to unhook to avoid unhooking hooks created after our hooks
            static is_hooked = [false];

            static hook_fetch() {
                const orig_fetch = window.fetch;
                async function hooked_fetch(...args) {
                    if (!Hooks.is_hooked[Hooks.HOOK_INDEXES.FETCH]) return orig_fetch.apply(this, args);

                    try {
                        if (args.length !== 2 ||
                            args[0] !== "https://pipe.deezer.com/api" ||
                            args[1].method !== "POST" ||
                            typeof args[1].body !== "string"
                        ) {
                            return orig_fetch.apply(this, args);
                        }

                        const operation_name = args[1].body.match(/"operationName":\s*"(.*?)"/);
                        if (operation_name && operation_name[1] === "ArtistDiscographyByType") {
                            // logger.debug('Caught original artist page fetch call');
                            args[1].body = args[1].body.replace(/"subType":\s*"(.*?)"/, '"subType": null')
                                                        .replace(/"mode":\s*"(.*?)"/, '"mode": "ALL"');
                        }

                        return orig_fetch.apply(this, args);
                    } catch (e) {
                        logger.error("Error in fetch hook:", e);
                        return orig_fetch.apply(this, args);
                    }
                }

                // only change the function which gets called, not the attributes of the original fetch function
                Object.setPrototypeOf(hooked_fetch, orig_fetch);
                Object.getOwnPropertyNames(orig_fetch).forEach(prop => {
                    try {
                        hooked_fetch[prop] = orig_fetch[prop];
                    } catch (e) {}
                });
                window.fetch = hooked_fetch;
                window.fetch._modified_by_display_all_songs = true;
            }

            static ensure_hooks() {
                if (!window.fetch._modified_by_display_all_songs) {
                    Hooks.hook_fetch();
                }
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

        const logger = new Logger(false);

        function artist_main() {
            logger.debug("Enabling hooks for artist page");
            Hooks.toggle_hooks(true, Hooks.HOOK_INDEXES.ALL);
        }

        function cleanup() {
            logger.debug("Disabling hooks");
            Hooks.toggle_hooks(false, Hooks.HOOK_INDEXES.ALL);
        }

        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray) => {
                if (location.href.includes("/artist/")) {
                    artist_main();
                } else {
                    cleanup();
                }
                return target.apply(thisArg, argArray);
            },
        });

        window.addEventListener("popstate", (e) => {
            if (location.href.includes("/artist/")) {
                artist_main();
            } else {
                cleanup();
            }
        });

        logger.log("Initializing");
        Hooks.hook_fetch();
        setTimeout(Hooks.ensure_hooks, 5000);

        if (location.href.includes("/artist/")) {
            artist_main();
        }
    }
}
