# How do plugins work?

Plugins are injected userscripts. They are primarily designed for use in a browser, but get ported to the desktop application.

## Creating a new plugin

To create a new plugin, run the following command from the root of the DeezMod project:

```bash
node create_plugin.js your_plugin_name
```

This will create a new folder `your_plugin_name` inside the `plugins` directory, with a `plugin.js` and `README.md` file.

The `plugin.js` file is pre-populated with a template that includes inline documentation for all the available options. Please refer to this file for a detailed explanation of the plugin structure and available options.

## Preparing a plugin for use
To use a plugin, make sure that its main javascript file (not the entire folder) is moved to the root of the plugin location.

### Plugin location
- Windows: `%localappdata%\DeezMod\Data\plugins`
- macOS: `~/Library/Application Support/DeezMod/plugins`
- Linux: `~/.local/share/DeezMod/plugins`

### Quickly access your plugins folder
Open the program up. Check the navbar's options -> DeezMod -> "Open Plugins".

## Userscript Compatibility Layer
DeezMod includes a compatibility layer for userscripts. This means you can port almost every userscript over and it should work the same as in the Web. It was mostly based on Violentmonkey 2.31.0 and a bit of Tampermonkey.
I cannot guarantee 100% same behaviour.

The layer is not available in the main process in any scope and in any process in the loader scope.

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
