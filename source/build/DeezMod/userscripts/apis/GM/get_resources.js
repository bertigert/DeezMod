const { get_cache } = require("../../cache.js");
const { name_map } = require("../metadata/resource.js");
const { sync_to_async } = require("../../util.js");
const { data_to_data_url, data_to_blob_url } = require("../../util.js");

// helper function

function get_cached_resource(plugin, name) {
    if (!name_map[plugin.name]) return null;
    const res = name_map[plugin.name][name];
    if (!res) return null;
    
    const cache = get_cache(res.context);
    const cached = cache.get(res.url, res.plugin_id);
    
    return { res, cached };
}

function getResourceText(plugin, name) {
    const result = get_cached_resource(plugin, name);
    if (!result || !result.cached || !result.cached.content) return null;
    
    const { res, cached } = result;
    const encoding = res.encoding || "utf8";
    
    return cached.content.toString(encoding);
}

function getResourceURL(plugin, name, is_blob_url=true) {
    const result = get_cached_resource(plugin, name);
    if (!result || !result.cached || !result.cached.content) return null;
    
    const { cached } = result;
    const { content, mimetype } = cached;
    const mime = mimetype || "application/octet-stream";

    if (is_blob_url) {
        return data_to_blob_url(content, mime);
    }

    return data_to_data_url(content, mime);
}

module.exports = {
    getResourceText,
    getResourceText_async: sync_to_async(getResourceText),
    getResourceURL,
    getResourceURL_async: sync_to_async(getResourceURL)
};
