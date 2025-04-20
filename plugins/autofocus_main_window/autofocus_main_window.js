module.exports = {
    name: "Autofocus Main Window",
    description: "Automatically focuses the main window.",
    version: "1.0.0",
    author: "bertigert",
    context: ["main"],
    scope: ["loader"],
    func: (context) => {
        function log(...args) {
            console.log("[Autofocus Main Window]", ...args);
        }
        
        const wait_for_window = setInterval(() => {
            const main_win = application.window;
            log("Waiting for application.window to be initizalized");
            if (main_win) {
                log("application.window is initialized");
                clearInterval(wait_for_window);
                main_win.on("focus", () => {
                    const browserView = main_win.getBrowserView();
                    browserView?.webContents.focus();
                });
            }
        });
        
        log("Plugin loaded");
    }
}