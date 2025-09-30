function debug(...args) {
    console.debug("[DEBUG]", ...args);
}
function log(...args) {
    console.log("[INFO]", ...args);
}
function warn(...args) {
    console.warn("[WARN]", ...args);
}
function error(...args) {
    console.error("[ERROR]", ...args);
}

const fs = require('fs');
const path = require('path');

const DEBUG = !process.argv.includes("-a") && !process.argv.includes("--apply");

// plugged togehther with help of ai

async function apply_patches(patches_obj, base_dir='source') {
    const results = [];

    for (const [file_path_key, entry] of Object.entries(patches_obj)) {
        const target_path = path.join(base_dir, file_path_key);
        if (!fs.existsSync(target_path)) {
            warn(`Target file does not exist: ${target_path} - skipping`);
            results.push({file: target_path, patched: false, reason: 'missing_file'});
            continue;
        }

        let file_content = fs.readFileSync(target_path, 'utf8');
        let original_content = file_content;
        const patches = entry.patches || entry.methods || [];

        for (let i = 0; i < patches.length; i++) {
            const patch = patches[i];
            const match_raw = patch.match;
            const replace_raw = patch.replace;
            const replace_all = Boolean(patch.replace_all);

            let match = String(match_raw);
            if (match_raw instanceof RegExp) {
                if (replace_all && !match_raw.flags.includes('g')) {
                    match = new RegExp(match_raw.source, match_raw.flags + 'g');
                } else {
                    match = match_raw;
                }
            }

            let replace_val = replace_raw;
            if (typeof replace_val !== 'function') {
                replace_val = String(replace_val);
            }

            const use_replace_all = replace_all || (match instanceof RegExp && match.flags && match.flags.includes('g'));
            const func_name = use_replace_all ? 'replaceAll' : 'replace';

            let replacement_occurred = false;
            try {
                if (typeof replace_val === 'function') {
                    file_content = file_content[func_name](match, (...args) => {
                        replacement_occurred = true;
                        return replace_val(...args);
                    });
                } else {
                    file_content = file_content[func_name](match, (...args) => {
                        replacement_occurred = true;
                        return replace_val;
                    });
                }
            } catch (e) {
                error(`Error applying patch ${i + 1} to ${target_path}: ${e.message}`);
                continue;
            }

            if (!replacement_occurred) {
                warn(`Patch ${i + 1}/${patches.length} for ${file_path_key} did not match anything`);
            } else {
                debug(`Patch ${i + 1}/${patches.length} applied to ${file_path_key}`);
            }
        }

        if (file_content !== original_content) {
            if (DEBUG) {
                const edited_path = path.join(path.dirname(target_path), 'EDITED_' + path.basename(target_path));
                fs.writeFileSync(edited_path, file_content, 'utf8');
                log(`wrote patched output to: ${edited_path}`);
                results.push({file: edited_path, patched: true, debug: true});
            } else {
                fs.writeFileSync(target_path, file_content, 'utf8');
                log(`Wrote patched file: ${target_path}`);
                results.push({file: target_path, patched: true});
            }
        } else {
            log(`No changes for file: ${target_path}`);
            results.push({file: target_path, patched: false, reason: 'no_changes'});
        }
    }

    return results;
}

(async () => {
    try {
        const patches_path = path.join(process.cwd(), 'PATCHES.js');
        if (!fs.existsSync(patches_path)) {
            error('PATCHES.json not found in current directory');
            process.exit(1);
        }

        const patches_obj = require(patches_path);
        const results = await apply_patches(patches_obj, path.join(process.cwd(), 'source'));
        log('Patch run complete, results:');
        log(results);
        warn("\n===== DON'T FORGET TO MOVE OTHER FILES=====");
        process.exit(0);
    } catch (e) {
        error('Patch run failed:', e);
        process.exit(2);
    }
})();


