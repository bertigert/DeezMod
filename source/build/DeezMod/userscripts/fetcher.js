

async function fetch_url(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
    }
    const array_buffer = await response.arrayBuffer();
    return {
        content: Buffer.from(array_buffer),
        mimetype: response.headers.get("content-type") || null
    };
}

function fetch_url_sync(details, async_callbacks) {
    const xhr = new XMLHttpRequest();

    const method = details.method || "GET";
    
    xhr.open(method, details.url, true);

    if (details.responseType) {
        xhr.responseType = details.responseType;
    }

    if (details.overrideMimeType) {
        xhr.overrideMimeType(details.overrideMimeType);
    }

    if (details.timeout) {
        xhr.timeout = details.timeout;
    }

    if (details.headers) {
        for (const [key, value] of Object.entries(details.headers)) {
            if (key.toLowerCase() === "cookie") {
                if (!details.anonymous) {
                    xhr.setRequestHeader("X-DeezMod-Custom-Cookie-Safe-abcdef", value);      
                }
            } else {
                xhr.setRequestHeader(key, value);
            }
        }
    }

    if (details.nocache) {
        xhr.setRequestHeader("Cache-Control", "no-cache");
    }
    
    if (details.anonymous) {
        xhr.withCredentials = false;
    } else {
        xhr.withCredentials = true; 
    }
    
    if (details.user && details.password) {
        const auth = btoa(`${details.user}:${details.password}`);
        xhr.setRequestHeader("Authorization", `Basic ${auth}`);
    }

    const get_resp_obj = (event) => {
        const resp_obj = {
            finalUrl: xhr.responseURL,
            readyState: xhr.readyState,
            status: xhr.status,
            statusText: xhr.statusText,
            responseHeaders: xhr.getAllResponseHeaders(),
            context: details.context,
            lengthComputable: event?.lengthComputable || false,
            loaded: event?.loaded || undefined,
            total: event?.total || undefined
        };

        Object.defineProperties(resp_obj, {
            responseText: {
                get() {
                    if (xhr.responseType && xhr.responseType !== "text") {
                        return undefined;
                    }
                    return xhr.responseText;
                }
            },
            response: {
                get() {
                    return xhr.response;
                }
            },
            responseXML: {
                get() {
                    if (xhr.responseType !== "" && xhr.responseType !== "document") {
                        return undefined;
                    }
                    return xhr.responseXML;
                }
            }
        });

        return resp_obj;
    };

    xhr.onloadstart = (e) => {
        if (details.onloadstart) details.onloadstart(get_resp_obj(e));
    };

    xhr.onprogress = (e) => {
        if (details.onprogress) details.onprogress(get_resp_obj(e));
    };

    xhr.onreadystatechange = (e) => {
        if (details.onreadystatechange) details.onreadystatechange(get_resp_obj(e));
    };
    xhr.onload = (e) => {
        const resp = get_resp_obj(e);
        if (details.onload) details.onload(resp);
        if (async_callbacks?.onload) async_callbacks.onload(resp);
    };
    xhr.onloadend = (e) => {
        if (details.onloadend) details.onloadend(get_resp_obj(e));
    };
    xhr.onerror = (e) => {
        const resp = get_resp_obj(e);
        if (details.onerror) details.onerror(resp);
        if (async_callbacks?.onerror) async_callbacks.onerror(resp);
    };
    xhr.ontimeout = (e) => {
        if (details.ontimeout) details.ontimeout(get_resp_obj(e));
    };
    xhr.onabort = (e) => {
        if (details.onabort) details.onabort(get_resp_obj(e));
    };

    let body = details.data || null;

    if (details.binary && typeof details.data === "string") {
        const mime = details.headers && details.headers["Content-Type"] ? details.headers["Content-Type"] : "text/plain";
        body = new Blob([details.data], { type: mime });
    }

    xhr.send(body);

    return {
        abort: () => xhr.abort()
    };
}


function fetch_url_sync_blocking(url) {
    if (typeof XMLHttpRequest === "undefined") {
        throw new Error("fetch_url_sync_blocking can only be used in the Renderer process.");
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);

    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    
    xhr.send(null);

    if (xhr.status !== 200) {
        throw new Error(`Failed to download: ${xhr.status} ${xhr.statusText}`);
    }

    // binary string has the data in the lower 8 bits of each character
    const str = xhr.responseText;
    const buffer = Buffer.alloc(str.length).map((_, i) => str.charCodeAt(i) & 0xff);
    
    return {
        content: buffer,
        mimetype: xhr.getResponseHeader("Content-Type") || null
    };
}

module.exports = {
    fetch_url: fetch_url,
    fetch_url_sync: fetch_url_sync,
    fetch_url_sync_blocking: fetch_url_sync_blocking
};