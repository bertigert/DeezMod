const path = require("node:path");
const os = require("node:os");
const process = require("node:process");
const homedir = os.homedir();
const tmpdir = os.tmpdir();
const {
    env
} = process;
const macos = name => {
    const library = path.join(homedir, "Library");
    return {
        data: path.join(library, "Application Support", name),
        config: path.join(library, "Preferences", name),
        cache: path.join(library, "Caches", name),
        log: path.join(library, "Logs", name),
        temp: path.join(tmpdir, name)
    }
};
const windows = name => {
    const localAppData = env.LOCALAPPDATA || path.join(homedir, "AppData", "Local");
    return {
        data: path.join(localAppData, name, "data"),
        config: path.join(localAppData, name, "config"),
        cache: path.join(localAppData, name, "cache"),
        log: path.join(localAppData, name, "log"),
        temp: path.join(tmpdir, name)
    }
};
const linux = name => {
    const username = path.basename(homedir);
    return {
        data: path.join(env.XDG_DATA_HOME || path.join(homedir, ".local", "share"), name),
        config: path.join(env.XDG_CONFIG_HOME || path.join(homedir, ".config"), name),
        cache: path.join(env.XDG_CACHE_HOME || path.join(homedir, ".cache"), name),
        log: path.join(env.XDG_STATE_HOME || path.join(homedir, ".local", "state"), name),
        temp: path.join(tmpdir, username, name)
    }
};

function envPaths() {
    const name = "DeezMod";
    if (process.platform === "darwin") {
        return macos(name)
    }
    if (process.platform === "win32") {
        return windows(name)
    }
    return linux(name)
}
module.exports = envPaths;