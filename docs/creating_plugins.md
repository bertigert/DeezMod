# Create plugins
Creating plugins is not streamlined at all. This injection method is more a way to port userscripts designed for browser to the desktop application. Some things need to be changed for that.

## Plugin location
(Windows) Plugins are located at 
```
%localappdata%\DeezMod\Data\plugins
```

## Plugin structure
A plugin has the following structure

`plugin.js`
```js
module.exports = {
    name: string,
    description: string,
    version: string,
    author: string,
    context: obj<str, str>,
    require: array<obj> | str,
    resources: array<object> | str,
    grant: array<str>,
    func: function(context: string)
}
```

`name` string - name of The Plugin. Must be unique. If two plugins have the same name, one gets blocked from loading.

`description` string - description of the plugin. Not used.

`version` string - Version of the plugin. Not used.

`author` string - author of the plugin. Not used.

`context` object - An object of contexts in which and what scope the script should be executed in. The object can look like this:
```js
{
    "main": "loader",
    "rendererPreload": "own",
}
```
where the keys are the contexts and the values are the scopes.
#### Possible Contexts
- `"main"` - Influence the startup behaviour of the application. The userscript compatibility layer is disabled in this context.
- `"rendererPreload"` - Influence both the startup and the runtime behaviour of the application. Is a middleman between main and renderer in some cases (altough specifically for Deezer not really). Shares the same process as renderer.
- `"titlebarPreload` - Same as "rendererPreload", but for the titlebar process.
- `"renderer"` - Influence the UI and runtime behaviour of the application. Most userscript ports need the renderer context.
- `"titlebar"` - Influence the behaviour/UI of the title bar. It runs in its own window so communication between the titlebar and other context can be difficult.
- `"preload"` - deprecated
#### Possible Scopes
- `"own"` - The default. Plugins don't have access to local variables inside of the scopes js files.
- `"loader"` - Plugins have access to local variables and can change data inside the js files. Only useful in very specific use cases. The userscript compatibility layer is disabled in this scope.

> Order of execution is usually like this:\
`main -> preloadRenderer/preloadTitlebar -> renderer`

`require` - Require js files before executing the plugin. Behaves the same as userscripts @require.\
Example:
```js
require: [{
     // URL of the js file
    url: "https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js",
    // Hash of the js file
    hash: "be35f7bc7d621235ea29fdca791763e3fb8002edf3bbfa7bda273df4232b0925",
    // Algorithm used for hashing the file
    alg: "sha256",
    // The context in which the file should be required in. Defaults to every context the plugin is executed in if not used.
    context: ["renderer"]
}]
```

`resources` - Part of the userscript compatibility layer. Download resources before execution/cache at first execution. Behaves the same as userscripts @resources.\
Example:
```js
resources: [
    {
        // Name of the resouce, as used in GM_getResource
        name: "test-img",
        url: "https://cdn-images.dzcdn.net/images/cover/43f7248048dd0fedec519a4be28d5caf/56x56-000000-80-0-0.jpg",
        hash: "788e78433bfa8081860ace042beed0119e7f615156b91a2c2edf324700b446f9",
        alg: "sha256",
        // The context in which the resource should be made available in.
        context: ["renderer"]
    },
]
```

`grant` - Part of the userscript compatibility layer. Grants special userscript features and enables sandboxing. Behaves the same as userscripts @grant.\
Example:
```js
grant: [
    "GM_getResourceURL",
    "GM_getResourceText",
    "unsafeWindow",
]
```

`func` function - The function in which the logic of the userscript is.
- #### Arguments
    - `context` string - The context in which the script got executed in, useful for when you need to execute the script in multiple contexts.

## Userscript Compatibility Layer
DeezMod includes a compatibility layer for userscripts. This means you can port almost every userscript over and it should work the same as in the Web. It was mostly based on Violentmonkey 2.31.0 and a bit of Tampermonkey.
I cannot guarantee 100% same behaviour. 

The entirety of https://violentmonkey.github.io/ has been ported over:
- Sandboxing
- All GM_ functions
- All GM. functions

There are a few differences though:
- GM_info is mostly useless as many attributes are redundant.
- Due to the lack of tabs, ValueChangeListeners' callback's remote attribute has been reused to be true if the  value was modified by a different process/context instead.
- GM_openInTab just opens the url in an external browser with no options or in electron if used in the titlebar context.
- GM_registerMenuCommand registers commands in the top left menu where you can disable plugins.
- GM_notification: While it supports all options except zombieTimeout/Url as thats redundant in a single tab environment, it doesn't behave quite as well as the browsers notification, probably due to electron.
- GM_setClipboard may not support all mime types, it does support rtf/html/text.
