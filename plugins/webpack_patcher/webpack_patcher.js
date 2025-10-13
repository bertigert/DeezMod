module.exports = {
    name: "Webpack Patcher",
    description: "Library script to patch the code of webpack modules at runtime. Exposes a global register_webpack_patches function.",
    version: "2.0.2",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        "use strict";
        
        // JSDoc was overhauled by AI
        
        class Logger {
            constructor(prefix, log_level = "log") {
                this.prefix = prefix;
                this.log_levels = {
                    debug: 0,
                    log: 1,
                    warn: 2,
                    error: 3
                };
                this.current_level = this.log_levels[log_level] == null ? this.log_levels.log : this.log_levels[log_level];
            }

            debug(...args) { 
                if (this.current_level <= this.log_levels.debug) {
                    console.debug(this.prefix, ...args); 
                }
            }
            
            log(...args) { 
                if (this.current_level <= this.log_levels.log) {
                    console.log(this.prefix, ...args); 
                }
            }
            
            warn(...args) { 
                if (this.current_level <= this.log_levels.warn) {
                    console.warn(this.prefix, ...args); 
                }
            }
            
            error(...args) { 
                if (this.current_level <= this.log_levels.error) {
                    console.error(this.prefix, ...args); 
                }
            }
        }

        /**
         * Class to patch webpack modules by intercepting module factory registration.
         * Works by hooking Function.prototype to catch webpack's module initialization.
         */
        class WebpackPatcher {
            static VERSION = "2.0.0";
            
            static SYM_PROXY_INNER_GET = Symbol("WebpackPatcher.proxyInnerGet");
            static SYM_PROXY_INNER_VALUE = Symbol("WebpackPatcher.proxyInnerValue");
            static SYM_ORIGINAL_FACTORY = Symbol("WebpackPatcher.originalFactory");

            /**
             * @param {Object} logger - Logger instance for debug/error output
             * @param {Object} options - Configuration options
             * @param {boolean} options.enable_cache - Enable caching for performance (default: false). Is only useful in some cases, check yourself.
             * @param {boolean} options.use_eval - Use eval instead of new Function for better debugging (default: true)
             * @param {Function} options.on_detect - Callback when webpack is detected (default: null)
             * @param {Function} options.filter_func - Additional filter function: (webpack_require, stack_lines) => boolean. Should return true to allow the module, false to reject it.
             * @param {Object} options.webpack_property_names - Property names to hook: {modules: "m", cache: "c"} (default: {modules: "m", cache: "c"})
             */
            constructor(logger, options = {}) {
                this.patches = [];
                this.patched_modules = new Set();
                this.module_registration_count = new Map();
                this.module_factories = null;
                this.webpack_require = null;
                this.webpack_cache = null;
                this.hooked = false;
                this.logger = logger || window.console;
                
                // default options
                this.cache_enabled = options.enable_cache !== undefined ? options.enable_cache : false;
                this.use_eval = options.use_eval !== undefined ? options.use_eval : true;
                this.on_detect = options.on_detect || null;
                this.filter_func = options.filter_func || null;
                this.webpack_property_names = options.webpack_property_names || { modules: "m", cache: "c" };
                
                this.factory_string_cache = this.cache_enabled ? new Map() : null;
                this.registrars = {}; // Store registrar objects by name
                
                this.placeholder_id = Math.random().toString(36).substring(2, 10); // just to make sure it's unique enough
                this.placeholders = Object.freeze({
                    self: `WEBPACKPATCHER_PLACEHOLDER_SELF_${this.placeholder_id}`,
                    functions: `WEBPACKPATCHER_PLACEHOLDER_FUNCTIONS_${this.placeholder_id}`,
                    data: `WEBPACKPATCHER_PLACEHOLDER_DATA_${this.placeholder_id}`
                });

                this.event_listeners = {
                    webpack_detected: [],
                    module_registered: [],
                    module_patched: []
                };
            }

            /**
             * Get placeholder replacements for a given registrar name
             * @param {string} registrar_name - Name of the registrar
             * @returns {Object} Object mapping placeholders to their replacements
             */
            _get_placeholder_replacements(registrar_name) {
                return {
                    [this.placeholders.self]: `window.WebpackPatcher.Registrars["${registrar_name}"]`,
                    [this.placeholders.functions]: `window.WebpackPatcher.Registrars["${registrar_name}"].functions`,
                    [this.placeholders.data]: `window.WebpackPatcher.Registrars["${registrar_name}"].data`
                };
            }

            /**
             * Add an event listener
             * @param {string} event - Event name: "webpack_detected", "module_registered", "module_patched"
             * @param {Function} callback - Callback function
             */
            add_event_listener(event, callback) {
                if (!this.event_listeners[event]) {
                    this.logger.warn(`Unknown event: ${event}`);
                    return;
                }
                this.event_listeners[event].push(callback);
                this.logger.debug(`Added event listener for: ${event}`);
            }

            /**
             * Remove an event listener
             * @param {string} event - Event name
             * @param {Function} callback - Callback function to remove
             */
            remove_event_listener(event, callback) {
                if (!this.event_listeners[event]) {
                    return;
                }
                const index = this.event_listeners[event].indexOf(callback);
                if (index > -1) {
                    this.event_listeners[event].splice(index, 1);
                    this.logger.debug(`Removed event listener for: ${event}`);
                }
            }

            /**
             * Emit an event to all listeners
             * @param {string} event - Event name
             * @param {...any} args - Arguments to pass to listeners
             * @private
             */
            _emit_event(event, ...args) {
                if (!this.event_listeners[event]) {
                    return;
                }
                for (const listener of this.event_listeners[event]) {
                    try {
                        listener(...args);
                    } catch (e) {
                        this.logger.error(`Error in ${event} event listener:`, e);
                    }
                }
            }

            /**
             * Check if a value matches an identifier (supports both strings and RegExp)
             * @param {string} value - Value to test
             * @param {string|RegExp} identifier - Pattern to match (substring or regex)
             * @returns {boolean} True if value matches identifier
             */
            _matches_identifier(value, identifier) {
                if (typeof identifier === 'string') {
                    return value.includes(identifier);
                } else if (identifier instanceof RegExp) {
                    return identifier.test(value);
                }
                return false;
            }

            /**
             * Register patches to be applied when modules are loaded
             * @param {Object} options - Registration options
             * @param {string} options.name - Name of the registrar (used to group patches and create user object)
             * @param {Object} [options.data] - Initial data object for the registrar
             * @param {Object} [options.functions] - Initial functions object for the registrar
             * @param {Array<Object>} patches - Array of patch configurations
             * @param {Object} [existing_registrar] - Existing registrar object to reuse (for buffer flushing)
             * @returns {Object} Registrar object with data and functions properties
             */
            register_patches(options, patches, existing_registrar = null) {
                const registrar_name = options.name;
                
                if (!registrar_name) {
                    throw new Error("Registrar name is required");
                }

                if (!window.WebpackPatcher.Registrars[registrar_name]) {
                    const registrar_obj = existing_registrar || {
                        data: options.data || {},
                        functions: options.functions || {}
                    };
                    
                    Object.defineProperty(window.WebpackPatcher.Registrars, registrar_name, {
                        value: registrar_obj,
                        writable: false,
                        enumerable: true,
                        configurable: false
                    });
                    
                    this.registrars[registrar_name] = registrar_obj;
                    
                    this.logger.debug(`Created new registrar: ${registrar_name}`);
                }

                this.patches.push(...patches.map(p => ({ ...p, _registrar_name: registrar_name })));
                
                this.logger.debug(`Registered ${patches.length} patch(es) for ${registrar_name}, total patches: ${this.patches.length}`);

                if (!this.hooked) {
                    this.hook_webpack();
                }

                return window.WebpackPatcher.Registrars[registrar_name];
            }

            /**
             * Hook into webpack by intercepting Function.prototype property setters
             */
            hook_webpack() {
                if (this.hooked) return;

                const self = this;
                const original_define_property = Object.defineProperty;
                let webpack_detected = false;
                let cache_detected = false;

                original_define_property(Function.prototype, this.webpack_property_names.cache, {
                    enumerable: false,
                    configurable: true,
                    set: function(cache_obj) {
                        original_define_property(this, self.webpack_property_names.cache, {
                            value: cache_obj,
                            writable: true,
                            configurable: true
                        });
                        
                        if (cache_detected) {
                            self.logger.debug("Cache already detected, skipping duplicate initialization");
                            return;
                        }

                        if (!String(this).includes("exports:{}")) { // default filter which should apply to every site
                            return;
                        }

                        const stack = new Error().stack;
                        const stack_lines = stack?.split('\n') || [];

                        if (self.filter_func && !self.filter_func(this, stack_lines)) {
                            return;
                        }

                        cache_detected = true;

                        self.webpack_cache = cache_obj;
                        self.logger.debug("Captured webpack cache object");
                    },
                    get: function() {
                        return self.webpack_cache;
                    }
                });

                // catch webpack module factory assignment
                original_define_property(Function.prototype, this.webpack_property_names.modules, {
                    enumerable: false,
                    configurable: true,
                    set: function(module_factories) {
                        original_define_property(this, self.webpack_property_names.modules, { // restore original property
                            value: module_factories,
                            writable: true,
                            configurable: true
                        });

                        if (webpack_detected) {
                            // self.logger.debug("Webpack already detected, skipping duplicate initialization");
                            return;
                        }

                        if (!String(this).includes("exports:{}")) { // default filter which should apply to every site
                            return;
                        }

                        const stack = new Error().stack;
                        const stack_lines = stack?.split('\n') || [];

                        if (self.filter_func && !self.filter_func(this, stack_lines)) {
                            return;
                        }

                        webpack_detected = true;

                        const module_count = Object.keys(module_factories).length;
                        self.logger.debug(`Detected webpack module factory assignment (with ${module_count} modules)`);
                        self.webpack_require = this;

                        self._emit_event('webpack_detected', this, module_factories);

                        if (self.on_detect) {
                            try {
                                self.on_detect(this, module_factories);
                            } catch (e) {
                                self.logger.error("Error in on_detect callback:", e);
                            }
                        }

                        // intercept new factory registrations
                        const proxied_factories = new Proxy(module_factories, {
                            set(target, module_id, factory) {
                                // Track registration count
                                // const count = (self.module_registration_count.get(module_id) || 0) + 1;
                                // self.module_registration_count.set(module_id, count);
                                
                                // if (count > 1) {
                                //     self.logger.warn(`Module ${module_id} registered ${count} times (possible HMR or duplicate registration)`);
                                // }

                                self._emit_event('module_registered', module_id, factory);

                                // intercept execution using helper
                                const factory_proxy = self._create_factory_proxy(module_id, factory);
                                
                                target[module_id] = factory_proxy;
                                return true;
                            },
                            

                            get(target, prop, receiver) {
                                const value = Reflect.get(target, prop, receiver);
                                

                                // if the value is a proxied factory, return the inner value for direct access
                                if (value?.[WebpackPatcher.SYM_PROXY_INNER_GET]) {
                                    return value[WebpackPatcher.SYM_PROXY_INNER_VALUE];
                                }
                                

                                return value;
                            }
                        });

                        self.module_factories = module_factories;
                        
                        original_define_property(this, self.webpack_property_names.modules, {
                            value: proxied_factories,
                            writable: true,
                            configurable: true
                        });

                        // wrap all pre-existing modules.
                        // i don't think we need to worry about the webpack cache here, as it should be empty at this point
                        for (const module_id in module_factories) {
                            const factory = module_factories[module_id];
                            const factory_proxy = self._create_factory_proxy(module_id, factory);
                            module_factories[module_id] = factory_proxy;
                        }
                        
                        self.logger.debug(`Wrapped ${module_count} pre-existing modules in factory proxies`);
                    }
                });

                this.hooked = true;
                this.logger.debug("Webpack hooking initialized");
            }

            /**
             * Get cached or compute factory string
             * @param {string} module_id - Module ID for cache key
             * @param {Function} factory - Factory function
             * @returns {string} Factory as string
             */
            _get_factory_string(module_id, factory) {
                if (this.cache_enabled && this.factory_string_cache.has(module_id)) {
                    this.logger.debug(`Using cached factory string for module ${module_id} (cache hit)`);
                    return this.factory_string_cache.get(module_id);
                }
                
                const factory_str = factory.toString();
                
                if (this.cache_enabled) {
                    this.factory_string_cache.set(module_id, factory_str);
                }
                
                return factory_str;
            }

            /**
             * Check if module matches pattern
             * @param {string} factory_str - Factory string
             * @param {Object} patch - Patch configuration
             * @returns {boolean} True if matches
             */
            _check_pattern_match(factory_str, patch) {
                const { find } = patch;
                const finds = Array.isArray(find) ? find : [find];
                
                return finds.some(pattern => this._matches_identifier(factory_str, pattern));
            }

            /**
             * Get the patched factory for a module, patching it lazily if needed
             * @param {string} module_id - Module ID
             * @param {Function} factory - Original factory function
             * @returns {Function} Patched factory or original if no patches match
             */
            _get_or_patch_factory(module_id, factory) {
                if (factory[WebpackPatcher.SYM_ORIGINAL_FACTORY] != null) {
                    return factory;
                }
                
                if (this.patched_modules.has(module_id)) {
                    return factory;
                }

                const factory_str = this._get_factory_string(module_id, factory);
                let current_factory = factory;
                let current_factory_str = factory_str;
                let any_patches_applied = false;
                
                for (let i = 0; i < this.patches.length; i++) {
                    const patch = this.patches[i];
                    
                    if (!this._check_pattern_match(current_factory_str, patch)) {
                        continue;
                    }

                    // this.logger.debug(`Module ${module_id} matches patch ${i + 1}/${this.patches.length}`);
                    
                    const patch_result = this._apply_patch(current_factory, current_factory_str, patch.replacements, module_id, patch._registrar_name);
                    
                    if (patch_result.factory !== current_factory) {
                        current_factory = patch_result.factory;
                        current_factory_str = patch_result.factory_str;
                        any_patches_applied = true;
                        
                        // this.logger.debug(`Applied patch ${i + 1} to module ${module_id}`);
                    }
                }
                
                if (any_patches_applied) {
                    current_factory[WebpackPatcher.SYM_ORIGINAL_FACTORY] = factory;
                    this.module_factories[module_id] = current_factory;
                    this._emit_event('module_patched', module_id, current_factory, factory);
                }
                
                this.patched_modules.add(module_id);
                return current_factory;
            }

            /**
             * Apply patch using matches_and_replacements array format
             * @param {Function} factory - Original factory function
             * @param {string} factory_str - Factory as string
             * @param {Array<Object>} matches_and_replacements - Array of {match, replace, global} objects
             * @param {string} module_id - Module ID for logging
             * @param {string} registrar_name - Name of registrar for placeholder replacement
             * @returns {{factory: Function, factory_str: string}} Patched factory and its string representation, or original if patching fails
             */
            _apply_patch(factory, factory_str, matches_and_replacements, module_id, registrar_name) {
                let patched_code;
                
                if (!Array.isArray(matches_and_replacements) || matches_and_replacements.length === 0) {
                    this.logger.warn(`Module was matched, but no replacements provided`);
                    return { factory, factory_str };
                }

                try {
                    patched_code = factory_str;
                    let total_replacements = 0;

                    for (let i = 0; i < matches_and_replacements.length; i++) {
                        const match_and_replacement = matches_and_replacements[i];
                        let replacement_occurred = false;

                        const { match, replace, global } = match_and_replacement;
                        const func = global || (match instanceof RegExp && match.global) ? "replaceAll" : "replace";
                        
                        if (typeof replace === 'function') {
                            patched_code = patched_code[func](match, (...args) => {
                                replacement_occurred = true;
                                return replace(...args);
                            });
                        } else {
                            patched_code = patched_code[func](match, (...args) => {
                                replacement_occurred = true;
                                return replace;
                            });
                        }

                        if (replacement_occurred) {
                            total_replacements++;
                        } else {
                            this.logger.warn(`Replacement ${i + 1}/${matches_and_replacements.length} skipped (no match) for module ${module_id}`);
                        }
                    }

                    if (total_replacements === 0) {
                        this.logger.warn(`No replacements occurred in module ${module_id}, returning original factory`);
                        return { factory, factory_str };
                    }

                    const placeholder_replacements = this._get_placeholder_replacements(registrar_name);
                    for (const [placeholder, replacement] of Object.entries(placeholder_replacements)) {
                        patched_code = patched_code.replaceAll(placeholder, replacement);
                    }

                    // add source map
                    const patched_source = `// Webpack Module ${module_id} - Patched by WebpackPatcher\n0,${patched_code}\n//# sourceURL=WebpackModule${module_id}`;
                    
                    const patched_factory = this.use_eval 
                        ? (0, eval)(patched_source)
                        : new Function(`return (${patched_code})`)();
                    
                    return { 
                        factory: patched_factory, 
                        factory_str: patched_code 
                    };
                } catch (e) {
                    this.logger.error(`Replacement based patching failed:`, e, "patched code:", patched_code);
                    return { factory, factory_str };
                }
            }

            /**
             * @param {Object} logger - Logger instance for debug/error output
             * @param {Object} options - Configuration options
             * @param {boolean} options.enable_cache - Enable caching for performance (default: false). Is only useful in some cases, check yourself.
             * @param {boolean} options.use_eval - Use eval instead of new Function for better debugging. Can be disabled by sites though. (default: true)
             * @param {Function} options.on_detect - Callback when webpack is detected (default: null)
             * @param {Function} options.filter_func - Filter function to select webpack instance: (webpack_require, stack_lines) => boolean. Should return true to allow the instance, false to reject it.
             * @param {Object} options.webpack_property_names - Property names to hook: {modules: "m", cache: "c"} (default: {modules: "m", cache: "c"})
             */
            static initialize(logger, options={}) {
                const patcher = new WebpackPatcher(logger, options);
                patcher.hook_webpack();
                logger.log("WebpackPatcher initialized, options:", options);
                return patcher;
            }

            /**
             * Clear caches
             * @param {string} module_id - Optional specific module ID to clear
             */
            clear_cache(module_id=null) {
                if (!this.cache_enabled) {
                    this.logger.warn("Cache is disabled, nothing to clear");
                    return;
                }
                
                if (module_id) {
                    this.factory_string_cache.delete(module_id);
                } else {
                    this.factory_string_cache.clear();
                }
            }

            /**
             * Create a factory proxy that intercepts execution for lazy patching
             * @param {string} module_id - Module ID
             * @param {Function} factory - Original factory function
             * @returns {Proxy} Proxied factory
             * @private
             */
            _create_factory_proxy(module_id, factory) {
                const self = this;
                return new Proxy(factory, {
                    apply(factory_target, thisArg, argArray) {
                        const patched_factory = self._get_or_patch_factory(module_id, factory_target);
                        return patched_factory.apply(thisArg, argArray);
                    },
                    
                    get(factory_target, prop, receiver) {
                        return self._handle_factory_get(factory_target, prop, receiver);
                    }
                });
            }

            /**
             * Handle get trap for factory proxies
             * @param {Function} factory_target - Target factory function
             * @param {string|symbol} prop - Property being accessed
             * @param {any} receiver - Proxy receiver
             * @returns {any} Property value
             * @private
             */
            _handle_factory_get(factory_target, prop, receiver) {
                if (prop === WebpackPatcher.SYM_PROXY_INNER_GET) {
                    return true;
                }
                if (prop === WebpackPatcher.SYM_PROXY_INNER_VALUE) {
                    return factory_target;
                }
                
                const actual_factory = factory_target[WebpackPatcher.SYM_ORIGINAL_FACTORY] || factory_target;
                
                // ensure toString has correct `this` context
                if (prop === "toString") {
                    return actual_factory.toString.bind(actual_factory);
                }
                
                return Reflect.get(actual_factory, prop, receiver);
            }
        }

        /**
         * Helper class for registering patches with buffering support.
         * Allows patches to be registered before the patcher is initialized.
         */
        class WebpackPatchRegistrar {
            /**
             * @param {WebpackPatcher|null} patcher - Patcher instance (null if not yet initialized)
             */
            constructor(patcher = null) {
                this.patcher = patcher;
                this.patch_buffer = [];
                this.event_listener_buffer = []; // Buffer for event listeners registered before patcher initialization
                this.is_flushing = false;
            }

            /**
             * Set the patcher instance and flush buffered patches
             * @param {WebpackPatcher} patcher - Patcher instance
             */
            set_patcher(patcher) {
                if (this.patcher) {
                    patcher.logger.warn("Patcher already set, ignoring duplicate initialization");
                    return;
                }
                
                this.patcher = patcher;
                this._flush_buffers();
            }

            /**
             * Flush all buffered patches and event listeners to the patcher
             * @private
             */
            _flush_buffers() {
                if (this.is_flushing) {
                    return;
                }
                
                this.is_flushing = true;
                
                if (this.patch_buffer.length > 0) {
                    this.patcher.logger.log(`Flushing ${this.patch_buffer.length} buffered patch(es) to patcher`);
                    
                    for (const buffered of this.patch_buffer) {
                        this.patcher.register_patches(buffered.options, buffered.patches, buffered.registrar);
                    }
                    
                    this.patch_buffer = [];
                    this.patcher.logger.debug("Patch buffer flushed successfully");
                }
                
                if (this.event_listener_buffer.length > 0) {
                    this.patcher.logger.log(`Flushing ${this.event_listener_buffer.length} buffered event listener(s) to patcher`);
                    
                    for (const buffered of this.event_listener_buffer) {
                        this.patcher.add_event_listener(buffered.event, buffered.callback);
                    }
                    
                    this.event_listener_buffer = [];
                    this.patcher.logger.debug("Event listener buffer flushed successfully");
                }
                
                this.is_flushing = false;
            }

            /**
             * Register patches with the following structure:
             * 
             * @param {Object} options - Registration options
             * @param {string} options.name - Name of the registrar (creates/gets object at WebpackPatcher.Registrars[name])
             * @param {Object} [options.data] - Initial data object for the registrar
             * @param {Object} [options.functions] - Initial functions object for the registrar
             * @param {Array<Object>} patches - Array of patch configurations
             * @returns {Object} Registrar object with {data: {}, functions: {}} for user to populate
             * 
             * @example
             * WebpackPatcher.register_patches(
             *   {
             *       name: string, // required, creates/gets WebpackPatcher.Registrars[name]
             *       data: object, // initial data object for the registrar
             *       functions: object // initial functions object for the registrar
             *   },
             *   [
             *       {
             *           find: string | RegExp | Array<string|RegExp>, // substring or regex to match in module code
             *           replacements: [
             *               {
             *                   match: string | RegExp, // substring or regex to match
             *                   replace: string | Function, // replacement string or function (function receives same args as String.replace)
             *                   global: boolean // optional, default false, if true uses replaceAll
             *               }
             *           ]
             *       }
             *   ]
             * );
             */
            register_patches(options, patches) {
                if (this.patcher) {
                    return this.patcher.register_patches(options, patches);
                } else {
                    // keep reference to this object for flushing later
                    const registrar_obj = {
                        data: options.data || {},
                        functions: options.functions || {}
                    };
                    
                    this.patch_buffer.push({ 
                        options, 
                        patches, 
                        registrar: registrar_obj
                    });
                    console.debug("[WebpackPatcher]", `Buffered ${patches.length} patch(es) for "${options.name}" (patcher not yet initialized)`);
                    
                    return registrar_obj;
                }
            }

            /**
             * Add an event listener for webpack events
             * @param {string} event - Event name: "webpack_detected", "module_registered", "module_patched"
             * @param {Function} callback - Callback function
             * 
             * Events:
             * - webpack_detected: (webpack_require, module_factories) => void
             * - module_registered: (module_id, factory) => void
             * - module_patched: (module_id, patched_factory, original_factory) => void
             * 
             * @example
             * WebpackPatcher.addEventListener('webpack_detected', (wreq, factories) => {
             *     console.log('Webpack detected!', wreq);
             * });
             * 
             * @example
             * WebpackPatcher.addEventListener('module_registered', (module_id, factory) => {
             *     console.log('Module registered:', module_id);
             * });
             * 
             * @example
             * WebpackPatcher.addEventListener('module_patched', (module_id, patched, original) => {
             *     console.log('Module patched:', module_id);
             * });
             */
            add_event_listener(event, callback) {
                if (this.patcher) {
                    this.patcher.add_event_listener(event, callback);
                } else {
                    this.event_listener_buffer.push({ event, callback });
                    console.debug("[WebpackPatcher]", `Buffered event listener for '${event}' (patcher not yet initialized, total buffered: ${this.event_listener_buffer.length})`);
                }
            }

            /**
             * Remove an event listener
             * @param {string} event - Event name
             * @param {Function} callback - Callback function to remove
             */
            remove_event_listener(event, callback) {
                if (this.patcher) {
                    this.patcher.remove_event_listener(event, callback);
                }
            }


            _Webpack_cache = {
                get: (module_id) => {
                    return this.patcher?.webpack_cache?.[module_id] || null;
                },
                getAll: () => {
                    return this.patcher?.webpack_cache ? { ...this.patcher.webpack_cache } : null;
                },
                delete: (module_id) => {
                    if (this.patcher?.webpack_cache) {
                        delete this.patcher.webpack_cache[module_id];
                    }
                },
                set: (module_id, value) => {
                    if (this.patcher?.webpack_cache) {
                        this.patcher.webpack_cache[module_id] = value;
                    }
                }
            }

            /**
             * Get the webpack require function (if detected)
             * @returns {Function|null} Webpack require function or null
             */
            get webpack_require() {return this.patcher?.webpack_require || null;}

            /**
             * Get the webpack module factories object (if detected)
             * @returns {Object|null} Module factories or null
             */
            get module_factories() {return this.patcher?.module_factories || null;}

            /**
             * Get the webpack cache object (if detected)
             * @returns {Object|null} Webpack cache or null
             */
            get webpack_cache() {return this._Webpack_cache};

            /**
             * Get all registered patches
             * @returns {Array} Array of patch configurations
             */
            get patches() {return this.patcher?.patches || [];}

            /**
             * Get set of patched module IDs
             * @returns {Set} Set of module IDs that have been patched
             */
            get patched_modules() {return this.patcher?.patched_modules || new Set();}

            /**
             * Check if webpack has been detected
             * @returns {boolean} True if webpack is detected
             */
            get is_webpack_detected() {return this.patcher?.webpack_require != null;}
        }


        function main(CONFIGURATIONS) {
            const logger = new Logger("[WebpackPatcher]", "debug");

            const matching_configuration = CONFIGURATIONS.find(config => config.site_match());

            if (matching_configuration) {
                const webpack_patch_registrar = new WebpackPatchRegistrar(null);

                Object.defineProperties(window, {
                    WebpackPatcher: {
                        value: Object.freeze({
                            register: Object.freeze(webpack_patch_registrar.register_patches.bind(webpack_patch_registrar)),
                            addEventListener: Object.freeze(webpack_patch_registrar.add_event_listener.bind(webpack_patch_registrar)),
                            removeEventListener: Object.freeze(webpack_patch_registrar.remove_event_listener.bind(webpack_patch_registrar)),
                            
                            Registrars: {},

                            get webpackRequire() {
                                return webpack_patch_registrar.webpack_require;
                            },
                            get moduleFactories() {
                                return webpack_patch_registrar.module_factories;
                            },
                            get moduleCache() {
                                return webpack_patch_registrar.webpack_cache;
                            },
                            get patches() {
                                return webpack_patch_registrar.patches;
                            },
                            get patchedModules() {
                                return webpack_patch_registrar.patched_modules;
                            },
                            get isWebpackDetected() {
                                return webpack_patch_registrar.is_webpack_detected;
                            },
                            get placeholders() {
                                return webpack_patch_registrar.patcher?.placeholders;
                            },
                            get VERSION() {
                                return WebpackPatcher.VERSION;
                            }
                        }),
                        writable: false,
                        configurable: false
                    }
                });

                logger.log(`Using configuration for ${location.hostname}`);
                const patcher = WebpackPatcher.initialize(logger, matching_configuration.options || {});
                webpack_patch_registrar.set_patcher(patcher);
            }   
        }

        const CONFIGURATIONS = [
            {
                site_match: () => location.hostname === "www.deezer.com" || location.href.includes("deezer-desktop/resources/app.asar/build/index.html"),
                options: {
                    filter_func: (ctx, stack_lines) => {
                        return /\/cache\/js\/runtime\..*?\.js(?::[0-9]+:[0-9]+)?$/.test(stack_lines[stack_lines.length-1]);
                    },
                },
            },
            {
                site_match: () => location.hostname === "discord.com",
                options: {
                    filter_func: (ctx, stack_lines) => {
                        return /https:\/\/discord\.com\/assets\/web\..*?\.js/.test(stack_lines[stack_lines.length-1]);
                    },
                },
            }
        ];

        main(CONFIGURATIONS);
    }
}