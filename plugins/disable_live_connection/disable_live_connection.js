module.exports = {
    name: "Disable Live Connection",
    description: "Disable live connection to Deezer which is used to sync things like the current playing track across devices. This for example, allows you to play on multiple devices simultaneously.",
    version: "1.0.0",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        "use strict";

        function debug(...args) {
            console.debug("[Disable Live Connection]", ...args);
        }
        function log(...args) {
            console.log("[Disable Live Connection]", ...args);
        }

        const original_websocket = window.WebSocket;
        
        const blocked_patterns = [
            /^wss?:\/\/live\.deezer\.com\/ws\/[0-9a-f]+\?version=[0-9]*$/,
        ];
        
        const hooked_websocket = function(url, protocols) {
            // debug("New WebSocket, URL:", url);
            const should_block = blocked_patterns.some(pattern => pattern.test(url));
            
            if (should_block) {
                debug(`Blocked WebSocket connection to: ${url}`);
                return {
                    close: () => {},
                    send: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    readyState: 2, // this cannot be 3 since it tries to reconnect otherwise, any value other than 3 would work i think
                    CONNECTING: 0,
                    OPEN: 1,
                    CLOSING: 2,
                    CLOSED: 3
                };
            }
            
            return new original_websocket(url, protocols);
        };
        
        Object.setPrototypeOf(hooked_websocket, original_websocket);
        Object.getOwnPropertyNames(original_websocket).forEach(prop => {
            try {
                hooked_websocket[prop] = original_websocket[prop];
            } catch (e) {
            }
        });
        window.WebSocket = hooked_websocket;
    }
}
