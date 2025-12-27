module.exports = {
    name: "Better Player",
    description: "QoL improvements for the Deezer player(bar)",
    version: "1.0.3",
    author: "bertigert",
    context: {
        renderer: "own"
    },
    func: main
}

function main() {
    "use strict";
    
    class Logger {
        constructor(prefix, debug=false) {
            this.prefix = prefix;
            this.should_debug = debug;
        }
        
        debug(...args) {if (this.should_debug) console.debug(this.prefix, ...args);}
        log(...args) {console.log(this.prefix, ...args);}
        warn(...args) {console.warn(this.prefix, ...args);}
        error(...args) {console.error(this.prefix, ...args);}
    }

    class WebpackPatch {
        PATCHES = [
            {
                find: ["getStorageKey:e=>`ALERT_DISMISSED_${e}"],
                replacements: [
                    // remaining time
                    {
                        match: /(_renderCurrentValue.*?)this._formatValue\(([a-z])\)(.*?"data-testid":"elapsed_time")/, //(.*?"data-testid":"remaining_time"},[a-z])/,
                        replace: (_, $1, $2, $3, $4) => `${$1}(${WebpackPatcher.ph.data}.altMode?"-":"")+this._formatValue(${WebpackPatcher.ph.data}.altMode?this.props.max-${$2}:${$2})${$3},onMouseUp:()=>${WebpackPatcher.ph.functions}.toggle()` //${$4}`+(${WebpackPatcher.placeholders.data}.altMode?" / "+this._formatValue(dzPlayer.getTrackListDuration()):"")`
                    },
                    // better play previous
                    {
                        match: /(isDisabled:)![a-zA-Z]\|\|(!n.prev,onClick:\(\)=>{\$[a-zA-Z]\.[a-zA-Z]+\.control\.prevSong\(\)})/,
                        replace: (_, $1, $2) => `${$1}${$2}`
                    }
                ]
            }
        ]
        data = {
            altMode: false,
        }
        functions = {
            toggle: () => {
                this.data.altMode = !this.data.altMode;
            }
        }

        constructor() {
            this.wait_for_webpack_patcher_and_patch = this.wait_for_webpack_patcher_and_patch.bind(this);
            this.wait_for_webpack_patcher_and_patch();    
        }

        wait_for_webpack_patcher_and_patch() {
            if (window.WebpackPatcher) {
                logger.log("Registering webpack patches");
                window.WebpackPatcher.register({
                    name: "BetterPlayer",
                    data: this.data,
                    functions: this.functions
                }, this.PATCHES);
            } else if (!window.webpackJsonpDeezer) {
                setTimeout(this.wait_for_webpack_patcher_and_patch, 0);
            } else {
                logger.warn("Webpack array found, but not patcher, stopping");
            }
        }
    }

    class DzPlayerPatch {
        static REPEAT_MODES = {        
            NO_REPEAT: 0,
            REPEAT_ALL: 1,
            REPEAT_ONE: 2,
        }

        constructor() {
            this.patch_play_previous();
        }

        patch_play_previous() {
            const patch_play_previous = () => {
                logger.log("Hooking dzPlayer.control.prevSong");
                const orig_play_previous = window.dzPlayer.control.prevSong;
                window.dzPlayer.control.prevSong = async function() {
                    if (
                        window.dzPlayer.getPosition() > 5 ||
                        window.dzPlayer.getRepeat() !== DzPlayerPatch.REPEAT_MODES.REPEAT_ALL && window.dzPlayer.getTrackListIndex() === 0
                    ) {
                        window.dzPlayer.control.seek(0);
                    } else {
                        orig_play_previous.call(window);
                    }
                }
            }
            
            const wait_for_dzplayer = setInterval(() => {
                if (window?.dzPlayer?.control?.prevSong) {
                    clearInterval(wait_for_dzplayer);
                    patch_play_previous();
                }
            }, 100);
        }
    }
    

    const logger = new Logger("[Better Player]", false);
    
    new WebpackPatch();
    new DzPlayerPatch();
}