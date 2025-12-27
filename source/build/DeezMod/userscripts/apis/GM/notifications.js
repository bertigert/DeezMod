function notification(plugin, text, title, image, onclick) {
    let options = {};
    if (typeof text === "object" && text !== null) {
        options = { ...text };
    } else {
        options = { text, title, image, onclick };
    }

    const notification_options = {
        body: options.text,
        icon: options.image,
        image: options.image,
        silent: options.silent,
        tag: options.tag,
        requireInteraction: !!options.onclick
    };

    const notif = new Notification(options.title || "DeezMod", notification_options);

    if (options.onclick) {
        notif.onclick = options.onclick;
    }

    if (options.ondone) {
        notif.onclose = options.ondone;
    }

    if (options.timeout) {
        setTimeout(() => notif.close(), options.timeout);
    }

    return {
        remove: async () => {
            notif.close();
        }
    };
}

module.exports = { 
    notification,
};