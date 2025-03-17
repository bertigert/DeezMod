module.exports = {
    name: "List All Releases",
    description: "Lists ALL releases at the artist page, not just hand picked ones by deezer.",
    version: "1.0.1",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        function log(...args) {
            console.log("[Display All Songs]", ...args);
        }
        function error(...args) {
            console.error("[Display All Songs]", ...args);
        }
        function debug(...args) {
            console.debug("[Display All Songs]", ...args);
        }

        const orig_fetch = window.fetch;
        
        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray) => {
                if (location.hash.includes("/artist/")) {
                    artist_main();
                } else {
                    log("Unhooking");
                    window.fetch = orig_fetch;
                }
                return target.apply(thisArg, argArray);
            },
        });
        window.addEventListener("popstate", (e) => {
            if (location.hash.includes("/artist/")) {
                artist_main();
            } else {
                log("Unhooking");
                window.fetch = orig_fetch;
            }
        });

        if (location.hash.includes("/artist/")) {
            artist_main();
        }

        async function artist_main() {
            if (window.fetch != orig_fetch) { // already patched bc last page was artist
                return;
            }

            log("Hooking fetch");

            window.fetch = (...args) => {
                try {
                    if (args[0] !== "https://pipe.deezer.com/api" ||
                        args[1].method !== "POST" ||
                        typeof args[1].body !== "string" ||
                        // check if the 2nd trace (after filtering out traces which were made using window.fetch (deezers script dont do that, so they must be user made and we ignore that) is in the web-app script (thats the way normal deezer scripts fetch data)
                        !(new Error()).stack.split("\n").filter(l=>!l.includes("window.fetch"))[1]?.includes("app-web")
                    ) {
                        return orig_fetch.apply(window, args);
                    }

                    const operation_name = args[1].body.match(/"operationName":\s*"(.*?)"/);
                    if (operation_name && operation_name[1] === "ArtistDiscographyByType") {
                        debug('Catched original artist page fetch call');
                        args[1].body = args[1].body.replace(/"subType":\s*"(.*?)"/, '"subType": null')
                                                    .replace(/"mode":\s*"(.*?)"/, '"mode": "ALL"');
                    }

                    return orig_fetch.apply(window, args);
                } catch (e) {
                    error("Error in fetch hook:", e);
                    return orig_fetch.apply(window, args);
                }
            }
        }
    }
}
