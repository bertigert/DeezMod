module.exports = {
    name: "Hide Offline Alert",
    description: "Hides network offline alert (Your computer seems to be offline. We'll keep trying to reconnect)",
    version: "1.0.0",
    author: "xiiyuki",
    context: {
        renderer: "own"
    },
    func: () => {
        "use strict";

        function log(...args) {
            console.log("[Hide Offline Alert]", ...args);
        }

        // Create new style sheet
        const style = document.createElement('style');
        
        // Use attribute selector (data-testid), to target and hide AppOfline alert
        style.innerHTML = `
            [data-testid="alert-AppOffline"] {
                display: none !important;
            }
        `;
        
        // Inject style into head section
        document.head.appendChild(style);

        log("Offline alert hidden");
    }
}