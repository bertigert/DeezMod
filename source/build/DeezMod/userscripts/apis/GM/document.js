
const { get_random_id } = require("../../util.js");

const HEAD_TAGS = ["script", "style", "link", "meta"];
function addElement(plugin, parentNode, tagName, attributes) {
    if (typeof parentNode === "string") { // attributes should be null
        attributes = tagName;
        tagName = parentNode;
        parentNode = (HEAD_TAGS.includes(tagName.toLowerCase()) ? document.head : document.body) || document.documentElement;
    }
    if (!parentNode) {
        throw new Error("Parent node is not available");
    }

    const element = document.createElement(tagName);
    for (const [attr, value] of Object.entries(attributes || {})) {
        if (attr === "textContent") {
            element.textContent = value;
        } else {
            element.setAttribute(attr, value);
        }
    }
    parentNode.appendChild(element);

    // some .then backwards compatibility support
    // (see https://github.com/violentmonkey/violentmonkey/blob/e3030ea99e979d942e373f7703cbca4587fd98e9/src/injected/web/gm-api.js#L210)
    element.then = async (cb) => {
        delete element.then;
        return typeof cb === "function" ? cb(element) : element;
    };

    return element;
}

function addStyle(plugin, css) {
    return addElement(plugin, "style", { textContent: css, id: get_random_id("DMst")});
}

module.exports = {
    addElement: addElement,
    addStyle: addStyle,
};