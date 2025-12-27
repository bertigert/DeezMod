const logger = require("../../../logger.js")(__filename);
const { split_with_limit } = require("../../util.js");

function normalize_resources(resources) {
    if (!resources) return [];
    const res = Array.isArray(resources) ? resources : [resources];
    return res.map(r => {
        if (typeof r === "string") {
            const [name, url] = split_with_limit(r, " ", 1);
            r = { name: name, url: url };
        }
        if (typeof r.context === "string") {
            r.context = [r.context];
        }
        return r;
    }).filter(r => {
        const is_valid = r && r.url && r.name;
        if (!is_valid) {
            logger.warn("Invalid resource declaration:", r);
        }
        return is_valid;
    });
}
// name map will be fully populated once its needed by getResource functions
const name_map = {};

async function resource_handler(context, plugin_id, resources) {    
    if (resources?.length > 0) {
        name_map[plugin_id] = {};
        for (const res of resources) {
            if (!res.name) {
                logger.error(`Resource for ${plugin_id} is missing a name:`, res);
                continue;
            }
            
            if (res.context && !res.context.includes(context)) continue;

            name_map[plugin_id][res.name] = { ...res };
            name_map[plugin_id][res.name].plugin_id = plugin_id;
            name_map[plugin_id][res.name].context = context;
        }
    }
}

module.exports = {
    resource_handler,
    name_map,
    normalize_resources
};