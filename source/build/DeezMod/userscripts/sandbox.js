
const { get_grants } = require("./apis/api.js");
const logger = require("../logger.js")(__filename);


function is_builtin_global(prop, built_in_globals) {
    if (typeof prop !== "string") return false;
    return built_in_globals.has(prop);
}

function handle_window_reference(prop, value, unsafeWindow, target, sandbox) {
    if (value === unsafeWindow || 
        prop === "window" || 
        prop === "self" || 
        prop === "globalThis" || 
        (prop === "top" && unsafeWindow === unsafeWindow.top) ||
        (prop === "parent" && unsafeWindow === unsafeWindow.parent)) {
        
        Object.defineProperty(target, prop, {
            value: sandbox,
            configurable: true,
            enumerable: true,
            writable: true
        });
        return sandbox;
    }
    return null;
}

function handle_event_property(prop, events, built_in_globals) {
    if (typeof prop === "string" && prop.startsWith("on") && prop.length >= 3 && built_in_globals.has(prop)) {
        const event_name = prop.slice(2);
        return events[event_name] || null;
    }
    return null;
}

function handle_function_property(value, unsafeWindow, target, prop) {
    if (typeof value === "function") {
        const bound = value.bind(unsafeWindow);
        Object.defineProperty(target, prop, {
            value: bound,
            configurable: true,
            enumerable: true,
            writable: true
        });
        return bound;
    }
    return null;
}

function set_event_property(prop, value, events, unsafeWindow, sandbox, built_in_globals) {
    if (typeof prop === "string" && prop.startsWith("on") && prop.length >= 3 && built_in_globals.has(prop)) {
        const event_name = prop.slice(2);
        if (events[event_name]) {
            unsafeWindow.removeEventListener(event_name, events[event_name]);
        }
        
        if (typeof value === "function") {
            const handler = value.bind(sandbox);
            events[event_name] = handler;
            unsafeWindow.addEventListener(event_name, handler);
        } else {
            delete events[event_name];
        }
        return true;
    }
    return false;
}

function get_descriptor_for_unsafe(prop, unsafeWindow, sandbox, built_in_globals) {
    if (prop in unsafeWindow && is_builtin_global(prop, built_in_globals)) {
        const desc = Object.getOwnPropertyDescriptor(unsafeWindow, prop) || {
            value: unsafeWindow[prop],
            writable: true,
            configurable: true,
            enumerable: true
        };
        if (desc.value === unsafeWindow) desc.value = sandbox;
        return desc;
    }
    return undefined;
}

function get_own_keys(target, unsafeWindow, built_in_globals) {
    const target_keys = Reflect.ownKeys(target);
    const window_keys = Reflect.ownKeys(unsafeWindow).filter(key => is_builtin_global(key, built_in_globals));
    return Array.from(new Set([...target_keys, ...window_keys]));
}

async function create_sandbox(plugin, context, unsafeWindow, built_in_globals, basic_info) {
    const [grants, has_unsafeWindow] = await get_grants(plugin, basic_info);
    
    const target = {
        ...grants,
        console: console,
        
        // node
        require: unsafeWindow.require,
        module: unsafeWindow.module,
        context: context
    };

    if (has_unsafeWindow) target.unsafeWindow = unsafeWindow;

    const events = Object.create(null);
    const local_properties = new Set(Object.keys(target));

    const sandbox = new Proxy(target, {
        get(target, prop, receiver) {
            logger.debug(`Sandbox GET property`, prop);
            
            if (prop === Symbol.unscopables) return undefined;
            if (prop === "undefined") return undefined;

            // local properties, explicitly set on the sandbox
            if (local_properties.has(prop) || Reflect.has(target, prop)) {
                logger.debug(`Accessing local property: ${String(prop)}`);
                return Reflect.get(target, prop, receiver);
            }

            // (only builtin) globals from unsafeWindow
            if (prop in unsafeWindow) {
                if (!is_builtin_global(prop, built_in_globals)) {
                    logger.debug(`Blocking non-builtin global: ${String(prop)}`);
                    return undefined;
                }

                const value = unsafeWindow[prop];
                const window_ref = handle_window_reference(prop, value, unsafeWindow, target, sandbox);
                if (window_ref !== null) {
                    logger.debug(`Accessing global property: ${String(prop)}`);
                    return window_ref;
                }
                const event_val = handle_event_property(prop, events, built_in_globals);
                if (event_val !== null) {
                    logger.debug(`Accessing event property: ${String(prop)}`);
                    return event_val;
                }
                const func_val = handle_function_property(value, unsafeWindow, target, prop);
                if (func_val !== null) {
                    logger.debug(`Accessing global function property: ${String(prop)}`);
                    return func_val;
                }
                // copy to sandbox for performance and isolation in case the value is modified later
                Object.defineProperty(target, prop, {
                    value: value,
                    configurable: true,
                    enumerable: true,
                    writable: true
                });
                return value;
            }
            logger.debug(`Property not found: ${String(prop)}`);
            return undefined;
        },

        set(target, prop, value) {
            const event_set = set_event_property(prop, value, events, unsafeWindow, sandbox, built_in_globals);
            if (event_set) return true;
            local_properties.add(prop);
            return Reflect.set(target, prop, value);
        },

        has(target, prop) {
            // local properties + builtin globals
            if (Reflect.has(target, prop) || local_properties.has(prop)) return true;
            if (prop in unsafeWindow && is_builtin_global(prop, built_in_globals)) return true;
            return false;
        },

        getOwnPropertyDescriptor(target, prop) {
            if (Reflect.has(target, prop)) {
                return Reflect.getOwnPropertyDescriptor(target, prop);
            }
            return get_descriptor_for_unsafe(prop, unsafeWindow, sandbox, built_in_globals);
        },

        ownKeys(target) {
            return get_own_keys(target, unsafeWindow, built_in_globals);
        },

        defineProperty(target, prop, desc) {
            return Reflect.defineProperty(target, prop, desc);
        },

        deleteProperty(target, prop) {
            return Reflect.deleteProperty(target, prop);
        }
    });

    target.window = target.global = sandbox;
    ["self", "globalThis"].forEach((name) => {
        Object.defineProperty(target, name, {value: sandbox});
    });

    return [sandbox, target];
}

function run_in_sandbox(code, sandbox, target) {    
    const args = Object.assign({ // we are setting them here because we dont want them to be attributes of target, only properties
        globalThis: sandbox,
        self: sandbox,
    }, target);

    const names = Object.keys(args);
    const values = Object.values(args);

    const wrapper = new Function(...names, code);
    return wrapper.apply(sandbox, values);
}

module.exports = {
    create_sandbox,
    run_in_sandbox
};
