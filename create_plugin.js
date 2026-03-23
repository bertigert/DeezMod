const fs = require('fs');
const path = require('path');

const pluginName = process.argv[2];

if (!pluginName) {
  console.error('Please provide a plugin name.');
  process.exit(1);
}

const pluginDir = path.join(__dirname, 'plugins', pluginName);

if (fs.existsSync(pluginDir)) {
  console.error(`Plugin "${pluginName}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(pluginDir);

const templatePath = path.join(__dirname, 'plugins', '_template', 'plugin.js');
const templateContent = fs.readFileSync(templatePath, 'utf8');

const newPluginPath = path.join(pluginDir, `${pluginName}.js`);
const newPluginContent = templateContent.replace(/plugin-template/g, pluginName);

fs.writeFileSync(newPluginPath, newPluginContent);

console.log(`Plugin "${pluginName}" created successfully.`);
