const fs = require("fs");


if (process.argv.length < 3) {
    console.error("Usage: node update_versions.js <new_deezmod_version>");
    process.exit(1);
}
const new_deezmod_version = process.argv[2];

const path_regex_map = {
    "deezer_version": {
        "path": "./source/package.json",
        "regex": /"version":\s*"(.*?)"/,
    },
    "deezmod": [
        {
            "path": "./source/build/DeezMod/userscripts/apis/GM/info.js",
            "regex": /(version:\s*").*?(")/
        },
        {
            "path": "./source/build/main.js",
            "regex": /(label:\s*`DeezMod\s).*?(`,)/
        }
    ]
}

const deezer_version = fs.readFileSync(path_regex_map.deezer_version.path, "utf8").match(path_regex_map.deezer_version.regex)[1];
console.log(`Deezer version: ${deezer_version}`);


for (const { path, regex } of path_regex_map.deezmod) {
    const content = fs.readFileSync(path, "utf8");
    const updated_content = content.replace(regex, (_, $1, $2) => `${$1}${new_deezmod_version}${$2}`);
    fs.writeFileSync(path, updated_content, "utf8");
    console.log(`Updated DeezMod version in ${path} to ${new_deezmod_version}`);
}

fs.writeFileSync("./DEEZER_VERSION", deezer_version, "utf8");
fs.writeFileSync("./DEEZMOD_VERSION", new_deezmod_version, "utf8");

console.log("Version update complete.");