# DeezMod
A tool to inject custom scripts into the Deezer Desktop Application

## Microsoft Store
If you used the microsoft store to install Deezer, the installation can more difficult. The files are then usually located at `C:\Program Files\WindowsApps\Deezer.randomchars_VERSION_x86__randomchars\app\resources`. To gain access to this folder you must give Administrators full access to the `C:\Program Files\WindowsApps\` folder and apply these permission recursively. You can follow this [tutorial](https://forums.flightsimulator.com/t/take-ownership-of-the-windows-apps-folders/388969). Once you've done that, launch the installer (if you use it) as Administrator. This might not actually work, because windows. I'd recommend installing Deezer via their own [installer](https://www.deezer.com/explore/download/). No data should be lost anyways so it should not cause any problems.

## Updating Deezer
When updating deezer manually with the installer (for example to upgrade to version 7.*) DeezMod gets uninstalled.

While you have DeezMod installed, the auto updater is disabled.

## Other Platforms
Altough built for Windows, due to the crossplatform nature of electron, it should work on Mac and Linux just fine, you just need to install it manually, see the setup instructions.

## Setup
> Note: any mention of `%localappdata%\Programs\deezer-desktop\` can be replaced with wherever your deezer installation is located.

### Installer (Automatic)
The installer downloads the patched app.asar and installs it automatically. You may need to provide the path manually.
1. Download the [installer](https://raw.githubusercontent.com/bertigert/DeezMod/refs/heads/main/installer.bat)
2. Follow instructions of the installer

### Easy manual way (Should work for Linux/MacOS)
1. Download the [app.asar](https://github.com/bertigert/DeezMod/releases/latest/download/app.asar.zip)
2. Replace `%localappdata%\Programs\deezer-desktop\resources\app.asar`
3. Place plugins in your plugin folder

### Full manual way
1. Follow the [setup](https://github.com/bertigert/DeezMod/blob/main/docs/setup.md)
2. Place plugins in your plugin folder

## Usage
Place plugins inside of your plugin folder. They need to follow this [structure](https://github.com/bertigert/DeezMod/blob/main/docs/creating_plugins.md#plugin-structure).
Userscripts can be pretty easily ported to the desktop app if they are not too reliant on the functions of the userscript managers.\
See example plugins [here](https://github.com/bertigert/DeezMod/tree/main/plugins)

### Plugin Folder Location
- Windows: `%localappdata%\DeezMod\Data\plugins`
- macOS: `~/Library/Application Support/DeezMod/plugins`
- Linux: `~/.local/share/DeezMod/plugins`

### Using Dependencies
Some plugins depend on some packages or similar. In these cases, the way the dependencies are handled varies from plugin to plugin. A readme is inside of the plugin folder in this repo in these cases. I generally recommend to clone this entire repo/download the zip and using symlinks for the plugin file. For example:

```cmd
set "plugins_dir=%localappdata%\DeezMod\Data\plugins"
REM Downloaded the deezmod repo into %deezmod%. Then create a symlink of the main js file in the plugins directory. This way you don't clutter the plugins directory and don't need to worry about correctly structuring the dependencies (assuming the source of the plugin does it correctly).
mklink "%plugins_dir%\discord_rpc.js" "%deezmod%\plugins\discord_rpc\discord_rpc.js"
```

## Latest supported version
See [Version File](https://github.com/bertigert/DeezMod/blob/main/DEEZER_VERSION)
> For version 6.*, use release v1.0.22a.
