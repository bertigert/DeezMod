const {basename} = require("node:path");

const DEFAULT_LEVEL = "debug";

class Logger {
    static LEVELS = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
    };

    constructor(prefix, level, caller) {
        this.prefix = prefix;
        this.level = level;
        this.caller = caller;
    }

    _log(level, ...args) {
        if (Logger.LEVELS[level] >= Logger.LEVELS[this.level]) {
            const method = console[level] || console.log;
            const timestamp = new Date().toLocaleTimeString();
            method(`[${this.prefix}] [${timestamp}] (${level}) <${this.caller}>`, ...args);
        }
    }

    debug(...args) {
        this._log("debug", ...args);
    }
    log(...args) {
        this._log("info", ...args);
    }
    warn(...args) {
        this._log("warn", ...args);
    }
    error(...args) {
        this._log("error", ...args);
    }
}

function create_logger(caller, prefix="DeezMod", level=DEFAULT_LEVEL) {
    return new Logger(prefix, level, basename(caller));
}

module.exports = create_logger;