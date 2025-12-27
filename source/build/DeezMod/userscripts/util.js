const { randomUUID } = require("crypto");

function sync_to_async(fn) {
    return async (...args) => {
        return fn(...args);
    };
}

function get_random_id(prefix="") {
    return prefix + randomUUID();
}

function data_to_data_url(data, mimetype="application/octet-stream") {
    const base64_data = data.toString("base64");
    return `data:${mimetype || "application/octet-stream"};base64,${base64_data}`;
}
function data_to_blob_url(data, mimetype="application/octet-stream") {
    const blob = new Blob([data], { type: mimetype });
    return URL.createObjectURL(blob);
}

function register_ipc_dispatcher(ipc_func, channel, dispatcher_map) {
    ipc_func(channel, (event, message) => {
        const handler = dispatcher_map[message.action];
        if (handler) {
            return handler(event, message.payload);
        }
    });
}

function split_with_limit(input, separator, max_splits) {
    const parts = input.split(separator);
    if (parts.length <= max_splits) {
        return parts;
    }
    const result = parts.slice(0, max_splits);
    result.push(parts.slice(max_splits).join(separator));
    return result;
} 

module.exports = {
    sync_to_async: sync_to_async,
    get_random_id: get_random_id,
    data_to_data_url: data_to_data_url,
    data_to_blob_url: data_to_blob_url,
    register_ipc_dispatcher: register_ipc_dispatcher
};