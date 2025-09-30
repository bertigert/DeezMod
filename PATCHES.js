const PATCHES = {
    "build/main.js": {
        "patches": [
            {
                "match": `MenuItemType.ZoomOut="zoom-out"`,
                "replace": `MenuItemType.ZoomOut="zoom-out",MenuItemType.OpenPlugins="open-plugins",MenuItemType.ReloadPlugins="reload-plugins"`,
                "replace_all": false
            },
            {
                "match": "this.getHelpMenu()",
                "replace": "this.getHelpMenu(),this.getDeezModMenu()",
                "replace_all": false
            },
            {
                "match": /(getHelpMenu\(\)\{return.*?\}\)\})/,
                "replace": (_, $1) => { return `${$1}getDeezModMenu(){return new external_electron_namespaceObject.MenuItem({label:i18n_t("DeezMod"),role:"deezmod",submenu:[this.menu.getItemOptions(MenuItemType.OpenPlugins),this.menu.getItemOptions(MenuItemType.ReloadPlugins)]})}` },
                "replace_all": false
            },
            {
                "match": "return this.getZoomOutOptions();",
                "replace": "return this.getZoomOutOptions();case MenuItemType.OpenPlugins:return this.getOpenPluginsOptions();case MenuItemType.ReloadPlugins:return this.getReloadPluginsOptions();",
                "replace_all": false
            },
            {
                "match": /(getZoomOutOptions\(\)\{return.*?\}\})/,
                "replace": (_, $1) => { return `${$1}getOpenPluginsOptions(){return{label:"Open Plugins",role:"openPlugins",click:()=>{external_electron_namespaceObject.shell.openPath(require("./plugin_loader").plugin_dir)}}}getReloadPluginsOptions(){return{label:"Reload Plugins",role:"reloadPlugins",click:()=>{load_plugins(true);this.app.reloadApp()}}}` },
                "replace_all": false
            },
            {
                "match": /(UpdaterService=class\{.*?init\(\)\{).*?(\}install\(\)\{)/,
                "replace": (_, $1, $2) => { return `${$1}external_electron_log_namespaceObject.debug("Updater was called, we won't update anything though")${$2}` },
                "replace_all": false
            },
            {
                "match": `})(),module.exports=__webpack_exports__`,
                "replace": `;async function load_plugins(is_reload=false){const plugin_loader=require("./plugin_loader");const plugins=await plugin_loader.load_plugins("main",is_reload);const functions_in_scope=plugin_loader.execute_plugins(plugins.main,"main");if(functions_in_scope!==""){try{eval(functions_in_scope)}catch(e){external_electron_log_default().error("Error executing plugins in main context with loader scope:",e)}}}load_plugins(false)})(),module.exports=__webpack_exports__`,
                "replace_all": false
            }
        ]
    },
    "build/preload.js": {
        "patches": [
            {
                "match": "allowWindowReload:!1",
                "replace": "allowWindowReload:!0",
                "replace_all": false
            },
            {
                "match": "})(),module.exports=__webpack_exports__",
                "replace": `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");const plugins=await plugin_loader.load_plugins("preload",false);const functions_in_scope=plugin_loader.execute_plugins(plugins.preload,"preload");try{Object.defineProperty(window,"plugins",{value:plugins,writable:false,configurable:false,enumerable:true});if(typeof plugins==="object"&&plugins!==null)Object.freeze(plugins)}catch(e){window.plugins=plugins}if(functions_in_scope!==""){try{eval(functions_in_scope)}catch(e){external_electron_log_default().error("Error executing plugins in preload context with loader scope",e)}}})()})(),module.exports=__webpack_exports__`,
                "replace_all": false
            }
        ]
    },
    "build/renderer.js": {
        "patches": [
            {
                "match": "})(),module.exports=__webpack_exports__",
                "replace": `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");const functions_in_scope=plugin_loader.execute_plugins(window.plugins.renderer,"renderer");if(functions_in_scope!==""){try{eval(functions_in_scope)}catch(e){external_electron_log_default().error("Error executing plugins in renderer context with loader scope",e)}}})()})(),module.exports=__webpack_exports__`,
                "replace_all": false
            }
        ]
    },
    "build/titlebar.js": {
        "patches": [
            {
                "match": "})(),module.exports=__webpack_exports__",
                "replace": `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");const functions_in_scope=plugin_loader.execute_plugins(window.plugins.titlebar,"titlebar");if(functions_in_scope!==""){try{eval(functions_in_scope)}catch(e){external_electron_log_default().error("Error executing plugins in titlebar context with loader scope",e)}}})()})(),module.exports=__webpack_exports__`,
                "replace_all": false
            }
        ]
    }

}

module.exports = PATCHES;