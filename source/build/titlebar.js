(() => {
    "use strict";
    let plugins_loaded = async function load_plugins() {
        try {
            const {
                execute_plugins
            } = require("./DeezMod/plugin_loader");
            const functions_in_scope = await execute_plugins((await window.DeezMod.plugins).titlebar, "titlebar");
            if (functions_in_scope !== "") {
                try {
                    (0, eval)(functions_in_scope)
                } catch (e) {
                    console.error("Error executing plugins in titlebar context with loader scope", e)
                }
            }
        } catch (e) {
            console.error("Error loading plugins in titlebar context", e)
        }
    }();
    var __webpack_modules__ = {
            857: module => {
                module.exports = require("os")
            },
            944: module => {
                module.exports = require("macos-version")
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), module.exports
    }
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter
    }, __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        })
    }, __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    require("reflect-metadata");
    const remote_namespaceObject = require("@electron/remote"),
        external_inversify_namespaceObject = require("inversify"),
        external_electron_namespaceObject = require("electron");
    var __decorate = function(decorators, target, key, desc) {
        var d, c = arguments.length,
            r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)(d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r
    };
    let IpcService = class {
        on(channel, listener) {
            external_electron_namespaceObject.ipcRenderer.on(channel, listener)
        }
        send(channel, ...args) {
            external_electron_namespaceObject.ipcRenderer.send(channel, ...args)
        }
        emit(channel, ...args) {
            external_electron_namespaceObject.ipcRenderer.emit(channel, ...args)
        }
    };
    IpcService = __decorate([(0, external_inversify_namespaceObject.injectable)()], IpcService);
    const services_IpcService = IpcService;
    var AutoStartService_decorate = function(decorators, target, key, desc) {
        var d, c = arguments.length,
            r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)(d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r
    };
    let AutoStartService = class {
        initLoginItem(app) {
            this.setAutoStart(!0, app)
        }
        isOpenAtLogin(app) {
            const {
                openAtLogin
            } = app.getLoginItemSettings();
            return openAtLogin || !1
        }
        setAutoStart(enableAutoStart, app) {
            app.setLoginItemSettings({
                openAtLogin: enableAutoStart
            })
        }
    };
    AutoStartService = AutoStartService_decorate([(0, external_inversify_namespaceObject.injectable)()], AutoStartService);
    const services_AutoStartService = AutoStartService;
    var PLATFORM;
    ! function(PLATFORM) {
        PLATFORM.WINDOWS = "windows", PLATFORM.DARWIN = "darwin", PLATFORM.LINUX = "linux", PLATFORM.UNKNOWN = "unknown"
    }(PLATFORM || (PLATFORM = {}));
    Symbol("Application"), Symbol("ApplicationMenu");
    const SERVICE_AUTOSTART = Symbol("AutoStart"),
        SERVICE_IPC = (Symbol("Cookie"), Symbol("DeepLink"), Symbol("History"), Symbol("Ipc")),
        di = (Symbol("Media"), Symbol("Menu"), Symbol("Network"), Symbol("PowerSave"), Symbol("Sentry"), Symbol("Thumbar"), Symbol("Tray"), Symbol("Updater"), Symbol("User"), Symbol("WindowState"), new external_inversify_namespaceObject.Container);
    di.bind(SERVICE_IPC).to(services_IpcService).inSingletonScope(), di.bind(SERVICE_AUTOSTART).to(services_AutoStartService).inSingletonScope();
    const renderer_di = di,
        external_semver_namespaceObject = require("semver");
    var external_semver_default = __webpack_require__.n(external_semver_namespaceObject);

    function isPlatform(platform) {
        switch (platform) {
            case PLATFORM.WINDOWS:
                return "win32" === process.platform;
            case PLATFORM.DARWIN:
                return "darwin" === process.platform;
            case PLATFORM.LINUX:
                return "linux" === process.platform;
            default:
                return !1
        }
    }
    const defaultRequiredVersions = {
        [PLATFORM.WINDOWS]: "*",
        [PLATFORM.DARWIN]: "*",
        [PLATFORM.LINUX]: "*"
    };

    function isPlatformVersion(requiredVersions) {
        requiredVersions = Object.assign({}, defaultRequiredVersions, requiredVersions);
        const platformCurrent = isPlatform(PLATFORM.WINDOWS) ? PLATFORM.WINDOWS : isPlatform(PLATFORM.DARWIN) ? PLATFORM.DARWIN : isPlatform(PLATFORM.LINUX) ? PLATFORM.LINUX : PLATFORM.UNKNOWN,
            platformVersion = external_semver_default().valid(external_semver_default().coerce(isPlatform(PLATFORM.DARWIN) ? __webpack_require__(944)() : __webpack_require__(857).release()));
        return platformCurrent !== PLATFORM.UNKNOWN && external_semver_default().satisfies(platformVersion, requiredVersions[platformCurrent])
    }
    const ipc = renderer_di.get(SERVICE_IPC);
    document.addEventListener("DOMContentLoaded", async () => {
        await plugins_loaded;
        let mainWindow = remote_namespaceObject.getCurrentWindow();
        const minButton = document.getElementById("btn-min"),
            maxButton = document.getElementById("btn-max"),
            restoreButton = document.getElementById("btn-restore"),
            closeButton = document.getElementById("btn-close"),
            menuButton = document.getElementById("btn-menu"),
            toggleMaxRestoreButtons = () => {
                mainWindow = remote_namespaceObject.getCurrentWindow(), mainWindow.isMaximized() ? (maxButton.style.display = "none", restoreButton.style.display = "flex") : (restoreButton.style.display = "none", maxButton.style.display = "flex")
            };
        minButton.addEventListener("click", () => {
            mainWindow = remote_namespaceObject.getCurrentWindow(), mainWindow.minimize()
        }), maxButton.addEventListener("click", () => {
            mainWindow = remote_namespaceObject.getCurrentWindow(), mainWindow.maximize(), toggleMaxRestoreButtons()
        }), restoreButton.addEventListener("click", () => {
            mainWindow = remote_namespaceObject.getCurrentWindow(), mainWindow.unmaximize(), toggleMaxRestoreButtons()
        }), toggleMaxRestoreButtons(), mainWindow.on("maximize", toggleMaxRestoreButtons), mainWindow.on("unmaximize", toggleMaxRestoreButtons), closeButton.addEventListener("click", () => {
            mainWindow = remote_namespaceObject.getCurrentWindow();
            isPlatformVersion({
                [PLATFORM.WINDOWS]: "<6.2 || >=10.0.0"
            }) ? mainWindow.hide() : mainWindow.close()
        }), menuButton.addEventListener("click", () => {
            const rectMenuControl = document.getElementById("menu-controls").getBoundingClientRect(),
                actualX = window.electron.isRtl() ? rectMenuControl.right - 2 : rectMenuControl.left + 1,
                popupOptions = {
                    x: Math.round(actualX),
                    y: Math.round(rectMenuControl.bottom)
                };
            ipc.send("channel-menu-show", popupOptions)
        }), document.addEventListener("keydown", e => {
            !e.ctrlKey || "+" != e.key && "-" != e.key || e.preventDefault()
        }), document.addEventListener("wheel", e => {
            e.ctrlKey && e.preventDefault()
        }, {
            passive: !1
        })
    });
    module.exports = {}
})();