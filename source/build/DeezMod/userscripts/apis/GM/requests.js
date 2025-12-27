const { fetch_url_sync } = require("../../fetcher.js");


function xmlhttpRequest(plugin, details) {
    return fetch_url_sync(details);
}

function xmlhttpRequest_async(plugin, details) {
    let aborter;

    const promise = new Promise((resolve, reject) => {
        aborter = fetch_url_sync(details, {
            onload: (response) => resolve(response),
            onerror: (response) => reject(response)
        });
    });

    promise.abort = () => aborter?.abort();

    return promise;
}

function prep_download_options(urlOrOptions, name) {
    let options;
    if (typeof urlOrOptions === "string") {
        options = {
            url: urlOrOptions,
            name: name
        };
    } else {
        options = { ...urlOrOptions };
    }

    options.responseType = "blob";

    const orig_onload = options.onload;
    options.onload = (response) => {
        if (orig_onload) {
            orig_onload(response);
        }

        if (response.response instanceof Blob) {
            const url = URL.createObjectURL(response.response);
            const a = document.createElement("a");
            a.href = url;
            a.download = options.name || "download";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };
    return options;
}

function download(plugin, url, name) {
    return xmlhttpRequest(plugin, prep_download_options(url, name));
}

function download_async(plugin, url, name) {
    return xmlhttpRequest_async(plugin, prep_download_options(url, name));
}


module.exports = {
    GM_xmlhttpRequest: xmlhttpRequest,
    GM_xmlhttpRequest_async: xmlhttpRequest_async,
    GM_download: download,
    GM_download_async: download_async
};