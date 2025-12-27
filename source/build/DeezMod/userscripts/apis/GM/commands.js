const { ipcRenderer } = require("electron");
const { get_random_id } = require("../../util.js");
const logger = require("../../../logger.js")(__filename);



const event_defaults = {
    isTrusted: false,
    altKey: false,
    bubbles: false,
    button: 0,
    buttons: 0,
    cancelBubble: false,
    cancelable: false,
    clientX: 0,
    clientY: 0,
    composed: false,
    ctrlKey: false,
    currentTarget: null,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 0,
    fromElement: null,
    layerX: 0,
    layerY: 0,
    metaKey: false,
    movementX: 0,
    movementY: 0,
    offsetX: 0,
    offsetY: 0,
    pageX: 0,
    pageY: 0,
    pseudoTarget: null,
    relatedTarget: null,
    returnValue: true,
    screenX: 0,
    screenY: 0,
    shiftKey: false,
    sourceCapabilities: null,
    srcElement: null,
    target: null,
    toElement: null,
    type: "mouseup",
    view: null,
    which: 1,
    x: 0,
    y: 0
};

const cmd_callbacks = {};
ipcRenderer?.on("deezmod-plugin-command-triggered", (event, { plugin_id, command_id, event_data }) => {
    cmd_callbacks[plugin_id]?.[command_id]?.(Object.assign(event_defaults, event_data, { timeStamp: performance.now() }));
});

function send_ipc_command_update(action, plugin, command) {
    try {
        ipcRenderer.send("deezmod-command-update", {
            action: action,
            command: command,
            plugin_id: plugin.name,
        });
        return true;
    } catch (e) {
        logger.error("Error updating commands after " + action + " menu command:", e);
    }
    return false;
}

function registerMenuCommand(plugin, caption, onClick, options) {
    command = {
        caption: caption,
        options: {
            id: options?.id || get_random_id("DMcmd"),
            title: options?.title || "",
        }
    };

    if (!cmd_callbacks[plugin.name]) cmd_callbacks[plugin.name] = {};
    cmd_callbacks[plugin.name][command.options.id] = onClick;
    
    if (send_ipc_command_update("register", plugin, command)) {
        return command.options.id;
    }
}

function unregisterMenuCommand(plugin, captionOrId) {
    send_ipc_command_update("unregister", plugin, { 
        caption: captionOrId,
        options: { id: captionOrId } 
    });
    delete cmd_callbacks[plugin.name]?.[captionOrId];
}

module.exports = {
    registerMenuCommand: registerMenuCommand,
    unregisterMenuCommand: unregisterMenuCommand,
};