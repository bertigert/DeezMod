module.exports = {
  /**
   * @property {string} name - The name of the plugin. Must be unique.
   * If two plugins have the same name, one will be blocked from loading.
   */
  name: 'PluginTemplate',

  /**
   * @property {string} description - A description of what the plugin does.
   * This is not currently used by DeezMod, but is good practice to include.
   */
  description: 'A template for a DeezMod plugin.',

  /**
   * @property {string} version - The version of the plugin.
   * This is not currently used by DeezMod, but is good practice to include for tracking updates.
   */
  version: '1.0.0',

  /**
   * @property {string} author - The author of the plugin.
   */
  author: 'Your Name',

  /**
   * @property {object} context - An object defining the contexts and scopes in which the plugin should run.
   * The keys are the context names, and the values are the scope names.
   *
   * Possible Contexts:
   * - "main": Executes in the main process. Disables the userscript compatibility layer.
   *           Useful for influencing the application's startup behavior.
   * - "rendererPreload": Executes in the renderer's preload script. A middleman between main and renderer.
   *                      Shares the same process as the renderer.
   * - "titlebarPreload": Same as "rendererPreload", but for the titlebar process.
   * - "renderer": Executes in the renderer process. Most common context for UI and runtime modifications.
   * - "titlebar": Executes in the titlebar process. Runs in its own window.
   *
   * Possible Scopes:
   * - "own": The default scope. The plugin runs in its own environment without access to local variables of the page.
   * - "loader": The plugin has access to local variables and can modify data within the loaded scripts.
   *             The userscript compatibility layer is disabled in this scope.
   */
  context: {
    main: 'own',
    renderer: 'own',
  },

  /**
   * @property {Array<object>|string} require - An array of objects or a string specifying external JavaScript files to be loaded before the plugin's execution.
   * Behaves similarly to Tampermonkey's `@require`.
   *
   * Example:
   * require: [{
   *   url: "https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js",
   *   hash: "be35f7bc7d621235ea29fdca791763e3fb8002edf3bbfa7bda273df4232b0925",
   *   alg: "sha256",
   *   context: ["renderer"] // Optional: specify contexts to load the script in
   * }]
   */
  require: [],

  /**
   * @property {Array<object>|string} resources - An array of objects or a string for resources to be downloaded and cached.
   * Part of the userscript compatibility layer, similar to Tampermonkey's `@resource`.
   *
   * Example:
   * resources: [{
   *   name: "test-img",
   *   url: "https://cdn-images.dzcdn.net/images/cover/43f7248048dd0fedec519a4be28d5caf/56x56-000000-80-0-0.jpg",
   *   hash: "788e78433bfa8081860ace042beed0119e7f615156b91a2c2edf324700b446f9",
   *   alg: "sha256",
   *   context: ["renderer"] // Optional: specify contexts for the resource
   * }]
   */
  resources: [],

  /**
   * @property {Array<string>} grant - An array of strings to grant special userscript features and enable sandboxing.
   * Part of the userscript compatibility layer, similar to Tampermonkey's `@grant`.
   *
   * Example:
   * grant: [
   *   "GM_getResourceURL",
   *   "GM_getResourceText",
   *   "unsafeWindow"
   * ]
   */
  grant: [],

  /**
   * @property {function} func - The main function of the plugin.
   * @param {string} context - The context in which the script is currently executing.
   */
  func: function(context) {
    // Your plugin logic goes here.
    // The 'context' argument tells you whether you are in 'main', 'renderer', etc.
    console.log(`Plugin "${this.name}" is running in the "${context}" context.`);
  }
};
