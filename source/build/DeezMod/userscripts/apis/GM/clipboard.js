const logger = require("../../../logger.js")(__filename);
const { clipboard } = require("electron");

function setClipboard(plugin, data, type="text/plain") {
    if (type === "text/html") {
        clipboard.writeHTML(data);
    } else if (type === "text/rtf") {
        clipboard.writeRTF(data);
    } else {
        clipboard.writeText(data);
    }
}

module.exports = {
    setClipboard: setClipboard
};