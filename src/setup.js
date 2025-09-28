const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// Configuration
const DEEZER_APP_PATH = path.join(process.env.LOCALAPPDATA, 'Programs', 'deezer-desktop', 'resources');
const APP_ASAR_PATH = path.join(DEEZER_APP_PATH, 'app.asar');
const SRC_DIR = __dirname; // Current directory where this script is located

// Check for debug mode
const DEBUG_MODE = process.argv.includes('--debug') || process.argv.includes('-d');
const OUTPUT_DIR = DEBUG_MODE ? path.join(SRC_DIR, 'deezer-unpacked') : path.join(os.tmpdir(), 'deezer-unpacked');


// Patches to apply to different files - designed to work with minified code
const PATCHES = {
    'main.js': {
        pattern: /}\)\(\),\s*module\.exports\s*=\s*__webpack_exports__/,
        code: `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");const plugins=await plugin_loader.load_plugins("main");plugin_loader.execute_plugins(plugins.main,"main");external_electron_namespaceObject.ipcMain.handle('get_plugins',()=>{Object.keys(plugins).forEach((context)=>plugins[context].forEach((plugin)=>delete plugin.func));return plugins;});})();})(), module.exports = __webpack_exports__`
    },
    'preload.js': {
        pattern: /}\)\(\),\s*module\.exports\s*=\s*__webpack_exports__/,
        code: `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");const{ipcRenderer}=require('electron');const plugins=await ipcRenderer.invoke("get_plugins");Object.keys(plugins).forEach((context)=>plugins[context].forEach((plugin)=>plugin.func=require(plugin.path).func));window.plugins=plugins;plugin_loader.execute_plugins(plugins.preload,"preload");})();})(), module.exports = __webpack_exports__`
    },
    'renderer.js': {
        pattern: /}\)\(\),\s*module\.exports\s*=\s*__webpack_exports__/,
        code: `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");plugin_loader.execute_plugins(window.plugins.renderer,"renderer");})();})(), module.exports = __webpack_exports__`
    },
    'titlebar.js': {
        pattern: /}\)\(\),\s*module\.exports\s*=\s*__webpack_exports__/,
        code: `;(async function load_plugins(){const plugin_loader=require("./plugin_loader");plugin_loader.execute_plugins(window.plugins.titlebar,"titlebar");})();})(), module.exports = __webpack_exports__`
    }
};

function findInsertionPoint(content, pattern) {
    const match = content.match(pattern);
    if (match) {
        return match.index;
    }
    return -1;
}

function runAsar(command) {
    return execSync(`npx asar ${command}`, { encoding: 'utf8' });
}

async function main() {
    console.log('DeezMod Setup Script');
    console.log('====================');
    
    if (DEBUG_MODE) {
        console.log('🐛 DEBUG MODE ENABLED');
        console.log('- Output directory:', OUTPUT_DIR);
        console.log('- Will NOT recompile app.asar');
        console.log('- Files will remain unpacked for inspection');
        console.log('');
    }

    try {
        // Check if app.asar exists
        if (!fs.existsSync(APP_ASAR_PATH)) {
            throw new Error(`Could not find app.asar at ${APP_ASAR_PATH}. Is Deezer installed?`);
        }

        console.log(`Found Deezer installation at: ${DEEZER_APP_PATH}`);

        // Create output directory
        if (fs.existsSync(OUTPUT_DIR)) {
            fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
        }
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });

        // Extract app.asar
        console.log('Extracting app.asar...');
        runAsar(`extract "${APP_ASAR_PATH}" "${OUTPUT_DIR}"`);

        // Copy plugin_loader.js from src directory
        console.log('Copying plugin_loader.js...');
        const pluginLoaderSrc = path.join(SRC_DIR, 'plugin_loader.js');
        const pluginLoaderDest = path.join(OUTPUT_DIR, 'build', 'plugin_loader.js');
        
        if (!fs.existsSync(pluginLoaderSrc)) {
            throw new Error(`Could not find plugin_loader.js at ${pluginLoaderSrc}`);
        }
        
        fs.copyFileSync(pluginLoaderSrc, pluginLoaderDest);

        // Copy paths.js from src directory (required by plugin_loader.js)
        console.log('Copying paths.js...');
        const pathsSrc = path.join(SRC_DIR, 'paths.js');
        const pathsDest = path.join(OUTPUT_DIR, 'build', 'paths.js');
        
        if (!fs.existsSync(pathsSrc)) {
            throw new Error(`Could not find paths.js at ${pathsSrc}`);
        }
        
        fs.copyFileSync(pathsSrc, pathsDest);

        // Apply patches to files
        console.log('Patching files...');
        let patchedFiles = 0;
        
        for (const [fileName, patch] of Object.entries(PATCHES)) {
            const filePath = path.join(OUTPUT_DIR, 'build', fileName);
            
            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, 'utf8');
                
                // Check if already patched
                if (content.includes('load_plugins')) {
                    console.log(`${fileName} already appears to be patched, skipping...`);
                    continue;
                }
                
                const insertPoint = findInsertionPoint(content, patch.pattern);
                
                if (insertPoint === -1) {
                    console.warn(`Could not find insertion point in ${fileName}. File might be different than expected.`);
                    continue;
                }

                const newContent = 
                    content.substring(0, insertPoint) + 
                    patch.code + 
                    content.substring(insertPoint + content.match(patch.pattern)[0].length);

                fs.writeFileSync(filePath, newContent);
                console.log(`✓ Patched ${fileName}`);
                patchedFiles++;
            } else {
                console.warn(`File not found: ${fileName}`);
            }
        }

        if (patchedFiles === 0) {
            throw new Error('No files were patched. The app.asar structure might be different than expected.');
        }

        // Create plugins directory
        const pluginsDir = path.join(process.env.LOCALAPPDATA, 'DeezMod', 'Data', 'plugins');
        if (!fs.existsSync(pluginsDir)) {
            fs.mkdirSync(pluginsDir, { recursive: true });
            console.log(`Created plugins directory at: ${pluginsDir}`);
        }

        if (DEBUG_MODE) {
            console.log('\n🐛 DEBUG MODE: Skipping repack and cleanup');
            console.log(`✓ Setup completed in debug mode!`);
            console.log(`✓ Patched ${patchedFiles} files`);
            console.log(`✓ Files available for inspection at: ${OUTPUT_DIR}`);
            console.log(`✓ Plugins directory: ${pluginsDir}`);
            console.log('\nTo complete installation:');
            console.log(`1. Manually backup: ${APP_ASAR_PATH}`);
            console.log(`2. Run: asar pack "${OUTPUT_DIR}" "${APP_ASAR_PATH}"`);
            console.log('3. Restart Deezer');
        } else {
            // Backup original app.asar
            const backupPath = APP_ASAR_PATH + '.backup';
            if (fs.existsSync(APP_ASAR_PATH)) {
                if (fs.existsSync(backupPath)) {
                    fs.unlinkSync(backupPath);
                }
                fs.copyFileSync(APP_ASAR_PATH, backupPath);
                console.log(`Backed up original app.asar to: ${backupPath}`);
            }

            // Repack app.asar
            console.log('Repacking app.asar...');
            runAsar(`pack "${OUTPUT_DIR}" "${APP_ASAR_PATH}"`);

            // Clean up
            fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });

            console.log('\n✓ Setup completed successfully!');
            console.log(`✓ Patched ${patchedFiles} files`);
            console.log(`✓ Original app.asar backed up as: ${backupPath}`);
            console.log(`✓ Plugins directory: ${pluginsDir}`);
            console.log('\nYou can now place your plugins in the plugins directory and restart Deezer.');
        }

    } catch (error) {
        console.error('\n✗ Setup failed:', error.message);
        
        // Clean up on error (unless in debug mode)
        if (!DEBUG_MODE && fs.existsSync(OUTPUT_DIR)) {
            fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
        } else if (DEBUG_MODE && fs.existsSync(OUTPUT_DIR)) {
            console.log(`🐛 DEBUG MODE: Keeping files at ${OUTPUT_DIR} for inspection`);
        }
        
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main };
