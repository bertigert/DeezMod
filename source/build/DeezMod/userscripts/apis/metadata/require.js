const { get_cache } = require("../../cache.js");
const logger = require("../../../logger.js")(__filename);

function normalize_requires(requires) {
    if (!requires) return [];
    const reqs = Array.isArray(requires) ? requires : [requires];
    return reqs.map(r => {
        if (typeof r === "string") {
            r = { url: r };
        }
        if (typeof r.context === "string") {
            r.context = [r.context];
        }
        return r;
    }).filter(r => {
        const is_valid = r && r.url;
        if (!is_valid) {
            logger.warn("Invalid require declaration:", r);
        }
        return is_valid;
    });
}

async function require_handler(context, plugin_id, requires, executer_callback) {
    if (requires?.length > 0) {
        const cache = get_cache(context);
        for (const req of requires) {
            if (req.context && !req.context.includes(context)) continue;
            try {
                const cached = cache.get(req.url, plugin_id);
                if (cached && cached.content && executer_callback) {
                    const encoding = req?.encoding || "utf8";
                    executer_callback(cached.content.toString(encoding));
                }
            } catch (e) {
                logger.error(`Failed to load required script for ${plugin_id}:`, e);
            }
        }
    }
}

module.exports = {
    require_handler,
    normalize_requires
};