const { get_config } = require("../../config.js");
const { sync_to_async } = require("../../util.js");

function getValue(plugin, key, default_value=null) {
    const config = get_config(plugin.context);
    return config.getValue(plugin.name, key, default_value);
}

function getValues(plugin, keys) {
    const config = get_config(plugin.context);

    const results = {};
    if (Array.isArray(keys)) {
        for (const key of keys) {
            const result = config.getValue(plugin.name, key, null);
            if (result) results[key] = result;
        }
    } else if (typeof keys === "object") {
        for (const [key, default_value] of Object.entries(keys)) {
            const result = config.getValue(plugin.name, key, default_value);
            results[key] = result;
        }
    }
    return results;
}

function setValue(plugin, key, value, do_broadcast=true) {
    const config = get_config(plugin.context);
    config.setValue(plugin.name, key, value, do_broadcast);
}

function setValues(plugin, values, do_broadcast=true) {
    const config = get_config(plugin.context);
    for (const [key, value] of Object.entries(values)) {
        config.setValue(plugin.name, key, value, do_broadcast);
    }
}

function deleteValue(plugin, key, do_broadcast=true) {
    const config = get_config(plugin.context);
    config.deleteValue(plugin.name, key, do_broadcast);
}

function deleteValues(plugin, keys, do_broadcast=true) {
    const config = get_config(plugin.context);
    for (const key of keys) {
        config.deleteValue(plugin.name, key, do_broadcast);
    }
}
function listValues(plugin) {
    const config = get_config(plugin.context);
    return config.listValues(plugin.name);
}

function addValueChangeListener(plugin, key, callback) {
    const config = get_config(plugin.context);
    return config.addValueChangeListener(plugin.name, key, callback);
}

function removeValueChangeListener(plugin, listener_id) {
    const config = get_config(plugin.context);
    config.removeValueChangeListener(plugin.name, listener_id);
}

module.exports = {
    deleteValue,
    deleteValue_async: sync_to_async(deleteValue),
    deleteValues,
    deleteValues_async: sync_to_async(deleteValues),
    getValue,
    getValue_async: sync_to_async(getValue),
    getValues,
    getValues_async: sync_to_async(getValues),
    setValue,
    setValue_async: sync_to_async(setValue),
    setValues,
    setValues_async: sync_to_async(setValues),
    listValues,
    listValues_async: sync_to_async(listValues),
    addValueChangeListener,
    addValueChangeListener_async: sync_to_async(addValueChangeListener),
    removeValueChangeListener,
    removeValueChangeListener_async: sync_to_async(removeValueChangeListener)
};
