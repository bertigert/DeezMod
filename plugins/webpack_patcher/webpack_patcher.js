module.exports = {
    name: "Webpack Patcher",
    description: "Library script to patch the code of webpack modules at runtime. Exposes a global register_webpack_patches function.",
    version: "1.0.0",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: () => {
        "use strict";
        /**
         * Class to patch webpack modules by hooking into the webpack global object array push
         * 
         * **It is important that the patcher is initialized as early as possible to catch modules as they are loaded**
         */
        class WebpackPatcher {
            static VERSION = 1;

            constructor(global_obj_key, logger, benchmark=false) {
                this.global_obj = window[global_obj_key];
                this.patch_targets = new Map();
                this.patched_modules = new Set();
                this.patch_counts = new Map();
                this.hooked = false;
                this.benchmark = benchmark;
                this.logger = logger || window.console;
                this._module_cache = new Map();
                this._function_string_cache = new Map();
            }
            
            /**
             * Find a module by its ID in the webpack modules array
             * @param {number} id - The webpack module ID to find
             * @returns {Array|null} - The module array [ids, exports, ...] or null if not found
            */
            get_module(id) {
                if (this._module_cache.has(id)) {
                    return this._module_cache.get(id);
                }
                
                for (const e of this.global_obj) {
                    if (e[0].some(mod_id => mod_id == id)) {
                        this._module_cache.set(id, e);
                        return e;
                    }
                }
                return null;
            }

            /**
             * Register a module to be patched when it becomes available. Should be called as early as possible.
             * @param {number} module_id - The webpack module ID to target
             * @param {Array} methods - Array of method patch configurations from PATCHES structure
             */
            register_patch(module_id, methods) {
                // Merge with existing patches for this module
                if (this.patch_targets.has(module_id)) {
                    const existing_methods = this.patch_targets.get(module_id);
                    this.patch_targets.set(module_id, [...existing_methods, ...methods]);
                } else {
                    this.patch_targets.set(module_id, methods);
                    this.patch_counts.set(module_id, 0);
                }
                
                const existing_module = this.get_module(module_id);
                if (existing_module && methods.length > 0) {
                    this.patch_module(existing_module, module_id, methods);
                }
                
                if (!this.hooked) {
                    this._hook_webpack_array_push();
                }
            }

            /**
             * Register multiple patches at once. Should be called as early as possible.
             * @param {Object} patches - The PATCHES structure mapping module IDs to patch configurations
             */
            register_patches(patches) {
                Object.entries(patches).forEach(([id, {methods}]) => {
                    this.register_patch(parseInt(id), methods);
                });
            }

            /**
             * Patch a module using the PATCHES structure
             * @param {*} module 
             * @param {number} module_id
             * @param {Array} methods - Array of method patch configurations
             * @returns true if a method was patched, false otherwise
             */
            patch_module(module, module_id, methods) {
                const start_time = this.benchmark ? performance.now() : 0;
                try {
                    let patched_count = 0;
                    const module_exports = module[1];
                    const current_patch_count = this.patch_counts.get(module_id) || 0;
                    
                    for (const [name, method] of Object.entries(module_exports)) {
                        if (typeof method !== 'function') {
                            continue;
                        }
                        
                        if (current_patch_count + patched_count >= this.patch_targets.get(module_id).length) {
                            break;
                        }
                        
                        const matching_method = methods.find(({identifiers}) => 
                            identifiers.every(identifier => this.does_method_match(method, identifier, module_id, name))
                        );
                        
                        if (matching_method) {
                            const patch_start = this.benchmark ? performance.now() : 0;
                            const patched_method = this.patch_method_with_regexp_or_raw_string(
                                method,
                                matching_method.matches_and_replacements,
                                module_id,
                                name
                            );
                            const patch_end = this.benchmark ? performance.now() : 0;
                            
                            module_exports[name] = patched_method;
                            
                            if (this.benchmark) {
                                this.logger.debug(`Patched method '${name}' in module ${module_id} (${(patch_end - patch_start).toFixed(2)}ms)`);
                            } else {
                                this.logger.debug(`Patched method '${name}' in module ${module_id}`);
                            }
                            patched_count++;
                        }
                    }
                    
                    if (patched_count > 0) {
                        this.patched_modules.add(module_id);
                        this.patch_counts.set(module_id, current_patch_count + patched_count);
                        
                        const all_methods = this.patch_targets.get(module_id);
                        if (this.patch_counts.get(module_id) >= all_methods.length) {
                            this.logger.debug(`Reached max patches (${all_methods.length}) for module ${module_id}, unregistering`);
                            this.patch_targets.delete(module_id);
                        }
                        
                        if (this.benchmark) {
                            const total_time = performance.now() - start_time;
                            this.logger.debug(`Successfully patched ${patched_count} method(s) in module ${module_id} (total: ${this.patch_counts.get(module_id)}) - ${total_time.toFixed(2)}ms`);
                        } else {
                            this.logger.debug(`Successfully patched ${patched_count} method(s) in module ${module_id} (total: ${this.patch_counts.get(module_id)})`);
                        }
                        return true;
                    }

                    return false;
                } catch (e) {
                    if (this.benchmark) {
                        const total_time = performance.now() - start_time;
                        this.logger.error(`Error patching method in module ${module_id} after ${total_time.toFixed(2)}ms:`, e);
                    } else {
                        this.logger.error(`Error patching method in module ${module_id}:`, e);
                    }
                    return false;
                }
            }

            _hook_webpack_array_push() {
                const original_push = this.global_obj.push;
                const self = this;
                
                this.global_obj.push = function(...args) {
                    for (const module of args) {
                        if (Array.isArray(module) && module.length >= 2) {
                            const module_ids = module[0];
                            
                            for (const module_id of module_ids) {
                                const patch_methods = self.patch_targets.get(module_id);
                                if (patch_methods && !self.patched_modules.has(module_id)) {
                                    self.logger.debug(`Target module ${module_id} added, applying patch`);
                                    self.patch_module(module, module_id, patch_methods);
                                }
                            }
                        }
                    }
                    return original_push.apply(this, args);
                }
                
                this.hooked = true;
                this.logger.debug("Webpack array push hooked");
            }

            _get_cached_function_string(func, module_id, method_name) {
                if (typeof func !== 'function') {
                    return func;
                }
                
                const cache_key = `${module_id}_${method_name}`;
                if (this._function_string_cache.has(cache_key)) {
                    return this._function_string_cache.get(cache_key);
                }
                
                const func_str = func.toString();
                this._function_string_cache.set(cache_key, func_str);
                return func_str;
            }
            _set_cached_function_string(func_str, module_id, method_name) {
                const cache_key = `${module_id}_${method_name}`;
                this._function_string_cache.set(cache_key, func_str);
            }

            /**
             * Method for cached method matching
             * @param {Function} method - The method to check
             * @param {string|RegExp} string_or_regex - The string or regex to match against
             * @param {number} module_id - Module in which the method is. Used for the key for caching
             * @param {string} method_name - Used for the key for caching
             * @returns {boolean} true if the method matches, false otherwise
             */
            does_method_match(method, string_or_regex, module_id, method_name) {
                const method_str = this._get_cached_function_string(method, module_id, method_name);
                if (typeof string_or_regex === 'string') {
                    return method_str.includes(string_or_regex);
                } else if (string_or_regex instanceof RegExp) {
                    return string_or_regex.test(method_str);
                }
                return false;
            }

            /**
             * Replace parts of a method's code using regexes or raw strings with caching
             * @param {Function} original_method - The method to patch, can also be a string of the method code
             * @param {Array} matches_and_replacements - Array of {match: RegExp|string, replacement: string|function, global: boolean} objects
             * @param {number} module_id - Module in which the method is. Used for the key for caching
             * @param {string} method_name - Used for the key for caching
             * @returns {Function} Patched method
             */
            patch_method_with_regexp_or_raw_string(original_method, matches_and_replacements, module_id, method_name) {
                const start_time = this.benchmark ? performance.now() : 0;
                let patched_code;
                try {
                    const original_code = this._get_cached_function_string(original_method, module_id, method_name);
                    patched_code = original_code;
                    let total_replacements = 0;
                    
                    for (let i = 0; i < matches_and_replacements.length; i++) {
                        const match_and_replacement = matches_and_replacements[i];
                        const regex_start = this.benchmark ? performance.now() : 0;
                        
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
                            this.logger.warn(`Replacement ${i + 1}/${matches_and_replacements.length} skipped (no match) for method ${method_name} in module ${module_id}`);
                        }
                        
                        if (this.benchmark) {
                            const regex_end = performance.now();
                            this.logger.debug(`Replacement ${i + 1}/${matches_and_replacements.length} ${replacement_occurred ? 'applied' : 'skipped (no match)'} in ${(regex_end - regex_start).toFixed(2)}ms`);
                        }
                    }
                    
                    if (total_replacements === 0) {
                        this.logger.warn(`No replacements occured in method ${method_name} in module ${module_id}, returning original method`);
                        return original_method;
                    }
                    
                    const patched_method = new Function("return " + patched_code)();
                    this.logger.debug("Patched method:", patched_method);
                    this._set_cached_function_string(patched_code, module_id, method_name);
                    if (this.benchmark) {
                        const total_time = performance.now() - start_time;
                        this.logger.debug(`${total_replacements} replacement(s) applied (cached), method patched in ${total_time.toFixed(2)}ms`);
                    }
                    return patched_method;
                } catch (e) {
                    if (this.benchmark) {
                        const total_time = performance.now() - start_time;
                        this.logger.error(`Replacement based patching failed after ${total_time.toFixed(2)}ms:`, e, "patched code:", patched_code);
                    } else {
                        this.logger.error(`Replacement based patching failed:`, e, "patched code:", patched_code);
                    }
                    return original_method;
                }
            }

            /**
             * Static helper to reliably detect and hook webpack global object
             * @param {string} global_obj_key - Key of the global webpack object array (e.g. "webpackJsonpDeezer")
             * @param {function} callback - Callback to invoke once webpack is detected
             */
            static detect_and_hook_webpack(global_obj_key, callback) {
                if (window[global_obj_key]) {
                    callback();
                    return;
                }

                let webpack_found = false;
                Object.defineProperty(window, global_obj_key, {
                    configurable: true,
                    enumerable: true,
                    set: function(value) {
                        if (!webpack_found) {
                            webpack_found = true;
                            
                            Object.defineProperty(window, global_obj_key, {
                                configurable: true,
                                enumerable: true,
                                writable: true,
                                value: value
                            });
                            
                            setTimeout(callback, 0);
                        }
                    }
                });
            }

            /**
             * Initialize the global webpack patcher asynchronously
             */
            static async initialize(global_obj_key, logger, benchmark = false) {
                return new Promise((resolve) => {
                    WebpackPatcher.detect_and_hook_webpack(global_obj_key, () => {
                        const patcher = new WebpackPatcher(global_obj_key, logger, benchmark);
                        logger.log("Global WebpackPatcher initialized");
                        resolve(patcher);
                    });
                });
            }
        }


        /**
         * Helper class for registering patches with the global WebpackPatcher
         */
        class WebpackPatchRegistrar {
            constructor(patcher_promise) {
                this.patcher_promise = patcher_promise;
            }

            /**
             * Register multiple patches from a PATCHES object. Should be called as early as possible.
             *
             * @param {Object} patches - PATCHES object with the following structure:
             *
             * @structure
             * ```
             * PATCHES = {
             *   [module_id]: {
             *     methods: [
             *       {
             *         identifiers: [string | RegExp],    // Array of strings/regexes that all need to match
             *         matches_and_replacements: [        // Array of replacements to apply
             *           {
             *             match: string | RegExp,        // Pattern to match in method code
             *             replace: string | function,    // Replacement string or callback function
             *             global: boolean                // Whether to replace all occurrences (optional)
             *           }
             *         ]
             *       }
             *     ]
             *   }
             * }
             * ```
             *
             * Structure details:
             *   - **module_id**: Webpack module ID (number)
             *   - **methods**: Array of method patch configurations
             *   - **identifiers**: Array of strings or regexes that all need to match the target method.
             *                      **Identifiers should be as close to the start of the function as possible for performance**
             *   - **matches_and_replacements**: Array of text replacements to apply to the method
             *     - **match**: Pattern to find in method source code (string or RegExp)
             *     - **replace**: Replacement text (string) or callback function (match, ...groups) => string.
             *                   Functions should be used if you need access to capture groups or dynamic replacements.
             *     - **global**: If true, replaces all occurrences. For RegExp, uses regex.global flag if not specified
             */
            async register_patches(patches) {
                const patcher = await this.patcher_promise;
                patcher.register_patches(patches);
                logger.debug("Patches registered with WebpackPatcher");
                return patcher;
            }
        }


        class Logger {
            static PREFIX = "[WebpackPatcher]";
            
            constructor(debug=false) {
                this.should_debug = debug;
            }
            
            debug(...args) {if (this.should_debug) console.debug(Logger.PREFIX, ...args);}
            log(...args) {console.log(Logger.PREFIX, ...args);}
            warn(...args) {console.warn(Logger.PREFIX, ...args);}
            error(...args) {console.error(Logger.PREFIX, ...args);}
        }

        const logger = new Logger(false);

        const patcher_promise = WebpackPatcher.initialize("webpackJsonpDeezer", logger, false);
        const webpack_patch_registrar = new WebpackPatchRegistrar(patcher_promise);
        window.register_webpack_patches = webpack_patch_registrar.register_patches.bind(webpack_patch_registrar);
    }
}