"use strict";

const fs = require("node:fs");
const path = require("node:path");

const envPaths = require("./paths.js");
const userscript_api = require("./userscripts/apis/api.js");
const { normalize_requires } = require("./userscripts/apis/metadata/require.js");
const { normalize_resources } = require("./userscripts/apis/metadata/resource.js");
const { create_sandbox, run_in_sandbox } = require("./userscripts/sandbox.js");
const { get_cache } = require("./userscripts/cache.js");
const { get_config } = require("./userscripts/config.js");
const { get_settings } = require("./settings.js");
const logger = require("./logger.js")(__filename);

const directory_path = path.join(envPaths("DeezMod").data, "plugins");

const contexts = [
    "rendererPreload",
    "titlebarPreload",
    "renderer",
    "titlebar",
    "main"
];

let settings = null;

function create_plugin_cache() {
    return contexts.reduce((acc, val) => {
        acc[val] = [];
        return acc;
    }, {});
}

async function validate_and_normalize_plugin(plugin, file_path, plugin_names) {
    if (!plugin.name) {
        logger.error("Plugin is missing a name:", file_path);
        return null;
    }
    if (plugin_names.has(plugin.name)) {
        logger.error("Duplicate plugin name detected, blocking:", plugin.name, file_path);
        return null;
    }
    plugin_names.add(plugin.name);
    plugin.require = normalize_requires(plugin.require);
    plugin.resources = normalize_resources(plugin.resources);
    plugin.path = file_path;
    plugin.context = normalize_plugin_contexts_and_scopes(plugin.context, plugin.scope);
    plugin.scope = null; // no longer needed
    
    // plugins can change their enabled state on their own, or at least I intend to implement that
    const is_enabled = await settings.get_plugin(plugin.name, "enabled");
    if (typeof is_enabled === "boolean") {
        plugin.enabled = is_enabled;
    } else {
        // since this should only happen the first time we see the plugin, which should only happen in the main process, this shouldnt cause ipc calls
        plugin.enabled = true;
        settings.set_plugin(plugin.name, "enabled", true);
    }
    return plugin;
}

async function execute_with_sandbox(plugin, context, built_in_globals, basic_info) {
    logger.debug("Sandbox enabled for plugin " + plugin.name, "in context " + context);
    
    const [sandbox, target] = await create_sandbox(plugin, context, globalThis, built_in_globals, basic_info);

    await userscript_api.metadata.require(context, plugin.name, plugin.require, (content) => {
        run_in_sandbox(content, sandbox, target);
    });
    
    await userscript_api.metadata.resources(context, plugin.name, plugin.resources);

    try {
        run_in_sandbox(`(${plugin.func.toString()})("${context}")`, sandbox, target);
    } catch (e) {
        logger.error("Error executing plugin " + plugin.name, e)
    }
}

async function execute_without_sandbox(plugin, context) {
    logger.debug("No sandbox for plugin " + plugin.name);
    
    if (context !== "main") { // things break and are unnecessary in main context anyways
        await userscript_api.metadata.require(context, plugin.name, plugin.require, (content) => {
            (0, eval)(content);
        });
    }

    try {
        plugin.func(context);
    } catch (e) {
        logger.error("Error executing plugin " + plugin.name, e);
    }
}

async function execute_single_plugin(plugin, context, built_in_globals, basic_info) {
    if (!plugin.enabled) {
        logger.log(`Skipping disabled plugin ${plugin.name} in the ${context} context`);
        return "";
    }

    logger.log(`Evaluating plugin ${plugin.name} in the ${context} context`);

    const scope = plugin.context[context];
    if (scope === "loader") {
        logger.debug("Using loader scope for plugin " + plugin.name);
        return `(${plugin.func.toString()})("${context}");`;
    } else {
        if (plugin.grant) {
            plugin.grant = Array.isArray(plugin.grant) ? plugin.grant : [plugin.grant];
        }
        const has_grant = plugin.grant && plugin.grant.length > 0 && !plugin.grant.includes("none") && context !== "main";

        if (has_grant) {
            await execute_with_sandbox(plugin, context, built_in_globals, basic_info);
        } else {
            await execute_without_sandbox(plugin, context);
        }
        return "";
    }
}

function normalize_plugin_contexts_and_scopes(contexts, scopes) {    
    const final_contexts = {};
    if (Array.isArray(contexts)) { // old format
        contexts.forEach((c, i) => {
            final_contexts[c] = (Array.isArray(scopes) && scopes[i]) ? scopes[i] : "own";
        });
    } else if (typeof contexts === "object") { // new format
        Object.entries(contexts).forEach(([c, s]) => {
            final_contexts[c] = s ? s : "own";
        });
    } else if (typeof contexts === "string") { // single context
        final_contexts[contexts] = (Array.isArray(scopes) && scopes[0]) ? scopes[0] : "own";
    }

    return final_contexts;
}

async function load_plugins(context, delete_cache = false) {
    settings = get_settings(context);

    const plugin_cache = create_plugin_cache();

    if (!(await settings.get_main("enabled"))) {
        logger.log("DeezMod is disabled");
        return plugin_cache;
    }

    
    if (!fs.existsSync(directory_path)) {
        fs.mkdirSync(directory_path, {
            recursive: true
        });
        logger.log(`Created directory for plugins: ${directory_path}`);
        return plugin_cache;
    }
    
    const is_loading = new Promise((resolve, reject) => {
        fs.readdir(directory_path, async (err, files) => {
            if (err) {
                logger.error("Unable to scan directory:", err);
                return reject(err);
            }
    
            const js_files = files.filter(file => path.extname(file) === ".js");
    
            const plugin_names = new Set();
            for (const file of js_files) {
                const file_path = path.join(directory_path, file);
                logger.debug(`Loading file from context ${context}: ${file_path}`);
                
                if (delete_cache) {
                    logger.debug("Invalidating cache for file:", file_path);
                    delete require.cache[path.resolve(file_path)];
                }
                
                let plugin;
                try {
                    plugin = require(file_path);
                } catch (e) {
                    logger.error("Error loading file:", file_path, e);
                    return;
                }
                
                if (plugin) {
                    plugin = await validate_and_normalize_plugin(plugin, file_path, plugin_names);
                    if (plugin) {
                        Object.keys(plugin.context).forEach(c => {
                            plugin_cache[c]?.push(plugin);
                        });
                    }
                }
            }
            resolve();
        })
    });

    await is_loading;
    // sort a-z by name, they should already be sorted by load order due to the filesystem read order, but just in case
    Object.keys(plugin_cache).forEach(context => {
        plugin_cache[context].sort((a, b) => a.name.localeCompare(b.name));
    });
    return plugin_cache
}

/*Pre-fetch all requires and resources entries for all plugins in the given context*/
async function _prefetch_plugin_requirements(plugins, context) {
    const all_requirements = [];
    for (const plugin of (plugins || [])) {
        if (!plugin.enabled) continue;
        if (plugin.require) {
            plugin.require.forEach(r => {
                if (!r.context || r.context.includes(context)) {
                    all_requirements.push({ ...r, plugin_id: plugin.name });
                }
            });
        }
        if (plugin.resources) {
            plugin.resources.forEach(r => {
                if (!r.context || r.context.includes(context)) {
                    all_requirements.push({ ...r, plugin_id: plugin.name });
                }
            });
        }
    }

    const cache = get_cache(context);
    
    if (all_requirements.length > 0) {
        logger.debug(`Pre-caching ${all_requirements.length} resources for context ${context}`);
        await cache.populate(all_requirements);
    }
}

/**
executes plugins in the given context, maybe in a sandbox\
returns concatenated functions in scope for loader-scoped plugins\
manipulates plugins in-place so data may be different than before calling this function
*/
async function execute_plugins(plugins, context) {
    if (!(await settings.get_main("enabled"))) {
        logger.log("DeezMod is disabled, skipping plugin execution");
        return "";
    }

    const built_in_globals = new Set(Object.getOwnPropertyNames(globalThis));
    const basic_info = await userscript_api.get_basic_info();
    
    // cache userscript requires and stuff
    await _prefetch_plugin_requirements(plugins, context);
    
    // initialize userscript config
    const config = get_config(context); // initialize config for this context
    if (context !== "main") {
        await config.populate();
    }

    let functions_in_scope = "";
    for (const plugin of (plugins || [])) {
        const append = await execute_single_plugin(plugin, context, built_in_globals, basic_info);
        functions_in_scope += append;
    }

    return functions_in_scope;
}

module.exports = {
    load_plugins: load_plugins,
    execute_plugins: execute_plugins,
    plugin_dir: directory_path
};