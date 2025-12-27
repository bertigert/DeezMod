const { require_handler } = require("./metadata/require.js");
const { resource_handler } = require("./metadata/resource.js");

const { info_async, basic_info } = require("./GM/info.js"); 
const {
    getResourceText, 
    getResourceURL, getResourceURL_async 
} = require("./GM/get_resources.js");
const { 
    deleteValue, deleteValue_async, deleteValues, deleteValues_async,
    getValue, getValue_async, getValues, getValues_async,
    setValue, setValue_async, setValues, setValues_async,
    listValues, listValues_async,
    addValueChangeListener, addValueChangeListener_async,
    removeValueChangeListener, removeValueChangeListener_async
} = require("./GM/values.js");
const {
    addElement,
    addStyle,
} = require("./GM/document.js");
const {
    registerMenuCommand,
    unregisterMenuCommand,
} = require("./GM/commands.js");
const { 
    notification
} = require("./GM/notifications.js");
const {
    setClipboard
} = require("./GM/clipboard.js");

const {
    GM_xmlhttpRequest, GM_xmlhttpRequest_async,
    GM_download, GM_download_async
} = require("./GM/requests.js");
const { openInTab } = require("./GM/external.js");


const grant_map = {
    "GM_getResourceText": getResourceText,
    "GM.getResourceText": getResourceText,
    "GM_getResourceURL": getResourceURL,
    "GM.getResourceUrl": getResourceURL_async,
    "GM_deleteValue": deleteValue,
    "GM.deleteValue": deleteValue_async,
    "GM_deleteValues": deleteValues,
    "GM.deleteValues": deleteValues_async,
    "GM_getValue": getValue,
    "GM.getValue": getValue_async,
    "GM_getValues": getValues,
    "GM.getValues": getValues_async,
    "GM_setValue": setValue,
    "GM.setValue": setValue_async,
    "GM_setValues": setValues,
    "GM.setValues": setValues_async,
    "GM_listValues": listValues,
    "GM.listValues": listValues_async,
    "GM_addValueChangeListener": addValueChangeListener,
    "GM.addValueChangeListener": addValueChangeListener_async,
    "GM_removeValueChangeListener": removeValueChangeListener,
    "GM.removeValueChangeListener": removeValueChangeListener_async,
    "GM_addElement": addElement,
    "GM.addElement": addElement,
    "GM_addStyle": addStyle,
    "GM.addStyle": addStyle,
    "GM_openInTab": openInTab,
    "GM.openInTab": openInTab,
    "GM_registerMenuCommand": registerMenuCommand,
    "GM.registerMenuCommand": registerMenuCommand,
    "GM_unregisterMenuCommand": unregisterMenuCommand,
    "GM.unregisterMenuCommand": unregisterMenuCommand,
    "GM_notification": notification,
    "GM.notification": notification,
    "GM_setClipboard": setClipboard,
    "GM.setClipboard": setClipboard,
    "GM_xmlhttpRequest": GM_xmlhttpRequest,
    "GM.xmlHttpRequest": GM_xmlhttpRequest_async,
    "GM_download": GM_download,
    "GM.download": GM_download_async,
    "GM_openInTab": openInTab,
    "GM.openInTab": openInTab,
};

async function get_grants(plugin, basic_info) {
    if (!plugin.grant) return {};

    const grants = {
        "GM_info": await info_async(plugin, basic_info)
    };
    const GM = {
        "info": grants["GM_info"]
    };

    for (const grant of plugin.grant) {
        const entry = grant_map[grant];
        if (!entry) continue;
        if (grant.startsWith("GM.")) {
            const alias = grant.split(".")[1];
            GM[alias] = entry.bind(null, plugin);
        } else {
            grants[grant] = entry.bind(null, plugin);
        }
    }
    grants["GM"] = GM;

    return [grants, plugin.grant.includes("unsafeWindow")];
}

module.exports = {
    metadata: {
        require: require_handler,
        resources: resource_handler
    },
    get_grants: get_grants,
    get_basic_info: basic_info
};