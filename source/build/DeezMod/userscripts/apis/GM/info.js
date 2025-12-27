const PLATFORM_MAP = {
    "win32": "win",
    "darwin": "mac",
    "linux": "linux",
    "openbsd": "openbsd",
}

async function _get_navigator_info() {
    const navigator_info = await navigator?.userAgentData?.getHighEntropyValues(["architecture","bitness","formFactors","fullVersionList","model","platformVersion","wow64"])
    return navigator_info && {
        platform: {
            arch: navigator_info.architecture + "-" + navigator_info.bitness,
            browserName: "Desktop",
            browserVersion: navigator_info.fullVersionList.find(v => v.brand === "Chromium")?.version || "Unknown",
            fullVersionList: navigator_info.fullVersionList,
            mobile: false,
            os: PLATFORM_MAP[navigator_info.platform.toLowerCase()] || "unknown",
        },
        user_agent: navigator?.userAgent,
        user_agent_data: navigator?.userAgentData,
    }
}

async function get_basic_info() {
    const navigator_info = await _get_navigator_info();
    return {
        isIncognito: false,
        platform: navigator_info?.platform,
        scriptHandler: "DeezMod",   
        userAgent: navigator_info?.user_agent,
        userAgentData: navigator_info?.user_agent_data,
        version: "1.1.0"
    }
}

async function get_plugin_info(plugin) {
    const { func, ...meta } = plugin;
    return {
        injectInto: "page",
        scriptMetaObj: meta,
        scriptWillUpdate: false,
        uuid: meta.name,
        script: {
            ...meta,
            excludeMatches: [],
            excludes: [],
            includes: [],
            matches: ["*"],
            noframes: true,
            options: {
                check_for_updates: false,
                inject_into: "page",
                noframes: true,
                override: {},
                run_at: "document-start",
                tags: [],
                last_modified: new Date().getTime(),
            },
            runAt: "document-start",
        }
    }

}

async function info_handler(plugin, basic_info) {
    return Object.assign(basic_info, await get_plugin_info(plugin));
}
module.exports = {
    basic_info: get_basic_info,
    info_async: info_handler
}