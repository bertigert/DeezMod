module.exports = {
    name: "Better Upload",
    description: "Enhances the process of uploading mp3 files to Deezer by providing a better UI and handling for uploads.",
    version: "1.0.0",
    author: "bertigert",
    context: ["renderer"],
    scope: ["own"],
    func: (context) => {
        "use strict";

        const jsmediatags = window.jsmediatags || require("./deps/jsmediatags3.9.5.min.js");

        class Logger {
            static LOG_VERY_MANY_THINGS_YES_YES = true; // set to false if you dont want the console getting spammed

            constructor() {
                this.log_textarea = null;
                this.PREFIXES = Object.freeze({
                    INFO: "?",
                    WARN: "⚠",
                    ERROR: "!",
                    SUCCESS: "*",
                    CONSOLE: "[Better Upload]"
                });
                this.console = {
                    log: (...args) => console.log(this.PREFIXES.CONSOLE, ...args),
                    warn: (...args) => console.warn(this.PREFIXES.CONSOLE, ...args),
                    error: (...args) => console.error(this.PREFIXES.CONSOLE, ...args),
                    debug: (...args) => {if (Logger.LOG_VERY_MANY_THINGS_YES_YES) console.debug(this.PREFIXES.CONSOLE, ...args)}
                };
            }
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function is_url_correct(url) {
            const regex = /\/(?:[^\/]*)\/profile\/\d+\/personal_song/; // this matches both the pathname of the website and the hash of the desktop app
            return regex.test(url || window.location.href);
        }


        class Deezer {
            constructor() {
                this.session_id = null;
                this.api_token = null;
            }

            async get_user_data(c=0) {
                const r = await fetch("https://www.deezer.com/ajax/gw-light.php?method=deezer.getUserData&input=3&api_version=1.0&api_token=", {
                    "body": "{}",
                    "method": "POST",
                    "credentials": "include"
                });
                if (!r.ok) {
                    return null;
                }
                const resp = await r.json();
                if (!resp?.results?.SESSION_ID) {
                    if (c < 3) {
                        await sleep(2000);
                        return this.get_user_data(c+1);
                    }
                    logger.console.error("Failed to get data after 3 attempts");
                    return null;
                }
                this.session_id = resp.results.SESSION_ID;
                this.api_token = resp.results.checkForm;
                return true;
            }

            async get_personal_songs() {
                if (!this.api_token) {
                    await this.get_user_data();
                    if (!this.api_token) {
                        return new Set();
                    }
                }

                const r = await fetch(`https://www.deezer.com/ajax/gw-light.php?method=personal_song.getList&input=3&api_version=1.0&api_token=${this.api_token}&cid=${Math.floor(Math.random()*1e9)}`, {
                    "body": "{\"nb\":2000,\"start\":0}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials":"include"
                });

                const upload_id_set = new Set();

                if (r.ok) {
                    const resp = await r.json();
                    if (resp.error?.length === 0 && resp.results?.data) {
                        for (const song of resp.results.data) {
                            upload_id_set.add(song.UPLOAD_ID);
                        }
                    }
                }
                return upload_id_set;
            }

            async upload_file(file, info_item, personal_songs) {
                if (!this.session_id) {
                    await this.get_user_data();
                    if (!this.session_id) {
                        return { success: false, upload_id: null };
                    }
                }
                const url = `https://upload.deezer.com/?sid=${this.session_id}&id=0&resize=1&directory=user&type=audio&referer=FR&file=${encodeURIComponent(file.name)}`;
                const formData = new FormData();
                formData.append("file", file, file.name);

                let startTime = Date.now();
                let timerId = null;
                if (info_item.elapsed) {
                    info_item.elapsed.textContent = "0s";
                    timerId = setInterval(() => {
                        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                        info_item.elapsed.textContent = `${elapsed}s`;
                    }, 100);
                }

                try {
                    const resp = await fetch(url, {
                        method: "POST",
                        body: formData,
                        signal: AbortSignal.timeout(config.timeout*1000 || 30000)
                    });
                    if (timerId) clearInterval(timerId);
                    if (info_item.elapsed) {
                        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
                        info_item.elapsed.textContent = `${elapsed}s`;
                    }
                    if (resp.ok) {
                        const data = await resp.json();
                        let upload_id = null;
                        if (data && data.error?.length === 0) {
                            upload_id = data.results;
                            if (personal_songs.has(upload_id)) {
                                info_item.element.title = "This file has already been uploaded once before.";
                                info_item.element.classList.add("better-upload-already-uploaded");
                            }
                            return { success: true, upload_id };
                        } else {
                            logger.console.error("Upload failed:", data);
                            return { success: false, upload_id };
                        }
                    } else {
                        return { success: false, upload_id: null };
                    }
                } catch (e) {
                    if (timerId) clearInterval(timerId);
                    if (info_item.elapsed) {
                        const elapsed = Math.floor((Date.now() - startTime) / 1000);
                        info_item.elapsed.textContent = `${elapsed}s`;
                    }
                    if (e.name !== "TimeoutError") {
                        logger.console.error("Upload error:", e);
                    }
                    return { success: false, upload_id: null };
                }
            }
        }

        class Setting {
            // only the constructor and 1 function should be called per instance of this class
            constructor(name, description, config_key_parent, config_key) {
            // we take advantage of the fact that objects (the parent) are passed by reference so we can modify the original config
                this.config_key_parent = config_key_parent;
                this.config_key = config_key;

                this.setting_label = document.createElement("label");
                this.setting_label.title = description;

                const setting_name = document.createElement("span");
                setting_name.textContent = name;
                this.setting_label.appendChild(setting_name);
            }

            text_setting(modify_value_callback=null, additional_callback=null) {
                const setting_input = document.createElement("textarea");
                setting_input.value = this.config_key_parent[this.config_key];
                setting_input.onchange = () => {
                    this.config_key_parent[this.config_key] = modify_value_callback ? modify_value_callback(setting_input.value) : setting_input.value;
                    if (additional_callback) additional_callback(this.config_key_parent[this.config_key]);
                }

                this.setting_label.appendChild(setting_input);
                return this.setting_label;
            }

            number_setting(modify_value_callback=null, additional_callback=null, range=[null, null, null]) {
                const setting_input = document.createElement("input");
                setting_input.type = "number";
                if (setting_input.min) setting_input.min = range[0];
                if (setting_input.max) setting_input.max = range[1];
                if (setting_input.step) setting_input.step = range[2];
                setting_input.value = this.config_key_parent[this.config_key];
                setting_input.onchange = () => {
                    this.config_key_parent[this.config_key] = modify_value_callback ? modify_value_callback(setting_input.value) : parseInt(setting_input.value);
                    if (additional_callback) additional_callback(this.config_key_parent[this.config_key]);
                }

                this.setting_label.appendChild(setting_input);
                return this.setting_label;
            }

            checkbox_setting(modify_value_callback=null, additional_callback=null) {
                const setting_input = document.createElement("input");
                setting_input.type = "checkbox";
                setting_input.checked = this.config_key_parent[this.config_key];
                setting_input.onchange = () => {
                    this.config_key_parent[this.config_key] = modify_value_callback ? modify_value_callback(setting_input.checked) : setting_input.checked;
                    if (additional_callback) additional_callback(this.config_key_parent[this.config_key]);
                };

                this.setting_label.appendChild(setting_input);
                return this.setting_label;
            }

            dropdown_setting(option_names, modify_value_callback=null, additional_callback=null) {
                // options: [nameforoption1, nameforoption2...]
                const setting_input = document.createElement("select");
                setting_input.className = "release_radar_dropdown";
                for (let option_name of option_names) {
                    const option_elem = document.createElement("option");
                    option_elem.textContent = option_name;
                    setting_input.appendChild(option_elem);
                }
                setting_input.selectedIndex = this.config_key_parent[this.config_key];

                setting_input.onchange = () => {
                    this.config_key_parent[this.config_key] = modify_value_callback ? modify_value_callback(setting_input.selectedIndex) : setting_input.selectedIndex;
                    if (additional_callback) additional_callback(this.config_key_parent[this.config_key]);
                }

                this.setting_label.appendChild(setting_input);
                return this.setting_label;
            }

            button_setting(text, on_click) {
                const setting_input = document.createElement("button");
                setting_input.textContent = text;
                setting_input.onclick = () => {on_click(setting_input)};

                this.setting_label.appendChild(setting_input);
                return this.setting_label;
            }
        }

        class UI {
            static funcs = {
                upload_file: async (files, info_container, progress_bar_elem, info_list_elem, status_elem) => {
                    if (!files || files.length === 0) {
                        return;
                    }

                    info_container.classList.remove("better-upload-hidden");
                    info_list_elem.innerHTML = "";
                    progress_bar_elem.style.width = "0%";
                    status_elem.text.textContent = "Uploading files...";

                    const info_items = [];
                    const failed_files = [];
                    let successful_uploads = 0;
                    let failed_uploads = 0;

                    for (const file of files) {
                        const info_item = UI.funcs.create_info_item(
                            file.name,
                            `${(file.size / 1e6).toFixed(2)} MB`,
                            "",
                            "⏳",
                            "",
                            file // pass file object for image extraction
                        );
                        info_list_elem.appendChild(info_item.element);
                        info_items.push(info_item);
                        info_list_elem.scrollTop = info_list_elem.scrollHeight;
                    }

                    const total_files = files.length;
                    const batch_size = config.batch_size || 1;
                    let uploaded_files = 0;
                    let next_file_index = batch_size;

                    const process_one = async (index) => {
                        const file = files[index];
                        const info_item = info_items[index];
                        info_item.status.textContent = "⬆️";
                        info_item.status.classList.replace("better-upload-waiting", "better-upload-uploading");
                        const result = await deezer.upload_file(file, info_item, personal_songs);
                        info_item.status.classList.remove("better-upload-uploading");
                        if (result.success) {
                            info_item.status.textContent = "✔️";
                            info_item.song_id.textContent = `${result.upload_id}`;
                            successful_uploads++;
                        } else {
                            info_item.status.textContent = "❌";
                            failed_uploads++;
                            failed_files.push(file);
                        }
                        uploaded_files++;
                        const progress = (uploaded_files / total_files) * 100;
                        progress_bar_elem.style.width = `${progress}%`;

                        UI.funcs.update_status(
                            info_container,
                            progress_bar_elem,
                            info_list_elem,
                            status_elem,
                            total_files,
                            successful_uploads,
                            failed_uploads,
                            failed_files
                        );

                        if (next_file_index < total_files) {
                            await process_one(next_file_index++);
                        }
                    }

                    const personal_songs = await deezer.get_personal_songs();

                    const starters = [];
                    for (let i = 0; i < Math.min(batch_size, total_files); i++) {
                        starters.push(process_one(i));
                    }
                    await Promise.all(starters);
                },
                create_span: (text, class_name) => {
                    const span = document.createElement("span");
                    span.textContent = text;
                    if (class_name) {
                        span.className = class_name;
                    }
                    return span;
                },
                create_info_item: (file_name, file_size, elapsed, status, song_id, file_obj) => {
                    const li = document.createElement("li");
                    li.className = "better-upload-info-item";

                    const name_container = document.createElement("div");
                    name_container.className = "better-upload-name-container";

                    const img_elem = document.createElement("img");
                    img_elem.className = "better-upload-file-image";
                    img_elem.src = "https://cdn-images.dzcdn.net/images/cover/d41d8cd98f00b204e9800998ecf8427e/40x40-000000-80-0-0.jpg";

                    const name_span = UI.funcs.create_span(file_name);

                    name_container.append(img_elem, name_span);

                    jsmediatags.read(file_obj, {
                        onSuccess: function(tag) {
                            const pic = tag.tags.picture;
                            if (pic) {
                                const byteArray = new Uint8Array(pic.data);
                                const blob = new Blob([byteArray], { type: pic.format });
                                img_elem.src = URL.createObjectURL(blob);
                                img_elem.onload = () => URL.revokeObjectURL(img_elem.src);
                            }
                        },
                        onError: function(error) {
                            return;
                        }
                    });


                    const size_elem = UI.funcs.create_span(file_size);
                    const elapsed_elem = UI.funcs.create_span(elapsed);
                    const status_elem = UI.funcs.create_span(status);
                    status_elem.className = "better-upload-status-icon better-upload-waiting";
                    const song_id_elem = UI.funcs.create_span(song_id);

                    li.append(name_container, size_elem, elapsed_elem, song_id_elem, status_elem);

                    return {
                        element: li,
                        name: name_container,
                        size: size_elem,
                        elapsed: elapsed_elem,
                        status: status_elem,
                        song_id: song_id_elem
                    };
                },
                create_status_element: () => {
                    const status_container = document.createElement("div");
                    status_container.className = "better-upload-status";

                    const status_text = UI.funcs.create_span("Ready to upload. You should not see this.");

                    const retry_button = document.createElement("button");
                    retry_button.className = "better-upload-action-button better-upload-hidden";
                    retry_button.textContent = "Retry Failed";

                    const reload_button = document.createElement("button");
                    reload_button.className = "better-upload-action-button";
                    reload_button.textContent = "Reload Page";
                    reload_button.onclick = () => location.reload();

                    status_container.append(status_text, retry_button, reload_button);

                    return {
                        container: status_container,
                        text: status_text,
                        retry_button: retry_button,
                        reload_button: reload_button
                    };
                },
                update_status: (info_container, progress_bar_elem, info_list_elem, status_elem, total, successful, failed, failed_files) => {
                    let status_text = `Successfully Uploaded: ${successful}/${total}`;

                    if (failed > 0) {
                        status_text += ` (${failed} failed)`;
                        status_elem.retry_button.classList.remove("better-upload-hidden");
                        status_elem.retry_button.onclick = () => {
                            if (successful+failed !== total) {
                                return;
                            }
                            status_elem.retry_button.classList.add("better-upload-hidden");
                            status_elem.text.textContent = "Retrying failed uploads...";
                            UI.funcs.upload_file(failed_files, info_container, progress_bar_elem, info_list_elem, status_elem);
                        };
                    } else {
                        status_elem.retry_button.classList.add("better-upload-hidden");
                    }

                    status_elem.text.textContent = status_text;
                }
            }

            static has_created_ui = false;
            static create_ui() {
                const selector = "#page_profile > div.naboo-catalog-content-wrapper > div.naboo-catalog-content > div[role='tabpanel'] > div.container";
                const own_ui_selector = "div.better-upload-container";
                let parent = document.querySelector(selector);
                if (parent) {
                    if (parent.querySelector(own_ui_selector)) return;
                    UI.has_created_ui = false;
                    UI.entry_point(parent);
                    logger.console.debug("UI created");
                } else {
                    UI.has_created_ui = false;
                    logger.console.debug("Waiting for parent");
                    const observer = new MutationObserver(mutations => {
                        for (let mutation of mutations) {
                            if (mutation.type === 'childList') {
                                parent = document.querySelector(selector);
                                if (parent) {
                                    observer.disconnect();
                                    if (parent.querySelector(own_ui_selector)) return;
                                    if (UI.entry_point(parent)) logger.console.debug("UI created");
                                }
                            }
                        }
                    });
                    observer.observe(document.body, {childList: true, subtree: true});
                }
            }

            static ensure_ui() {
                if (is_url_correct()) {
                    UI.create_ui();
                }
                window.history.pushState = new Proxy(window.history.pushState, {
                    apply: (target, thisArg, argArray) => {
                        if (is_url_correct(argArray[2])) {
                            UI.create_ui();
                        }
                        return target.apply(thisArg, argArray);
                    },
                });
                window.addEventListener("popstate", (e) => {
                    if (is_url_correct()) {
                        UI.create_ui();
                    }
                });
            }

            static entry_point(parent) {
                if (UI.has_created_ui) return;
                UI.has_created_ui = true;

                UI.create_css();
                const container = UI.create_container(parent);
                parent.appendChild(container);

                return true;
            }

            static create_container(parent) {
                const container = document.createElement("div");
                container.className = "better-upload-container";

                const elements = UI.create_elements(parent);
                container.append(...elements);
                return container;
            }


            static create_elements(parent) {
                const toolbar = parent.querySelector("div.loved-heading > div[data-testid='toolbar']");
                if (!toolbar) {
                    logger.console.warn("Toolbar not found, cannot create Better Upload UI");
                    return [];
                }

                const settings_header = document.createElement("div");
                settings_header.className = "better-upload-settings-header better-upload-hidden";

                const async_limit_setting = new Setting(
                    "Batch Size",
                    "Number of files to upload in parallel",
                    config, "batch_size",
                ).number_setting(null, null, [1, null, 1]);

                const timeout_setting = new Setting(
                    "Timeout",
                    "Timeout for each upload in seconds",
                    config, "timeout",
                ).number_setting(null, null, [1, null, 1]);

                settings_header.append(async_limit_setting, timeout_setting);

                const settings_button = document.createElement("button");
                settings_button.className = "better-upload-settings-button";
                settings_button.innerHTML = `
                <svg focusable="false" viewBox="0 0 24 24">
                    <path
                        fill-rule="evenodd"
                        d="m14.61 4.122 1.116.462c.748.31 1.142 1.13.916 1.907l-.284.98a.13.13 0 0 0 .036.13.143.143 0 0 0 .1.046.125.125 0 0 0 .036-.005l.98-.284a1.584 1.584 0 0 1 1.907.916l.462 1.116c.31.748.008 1.607-.7 1.997l-.894.493a.13.13 0 0 0-.067.114c0 .061.025.104.066.127l.894.492c.71.39 1.01 1.25.7 1.997l-.461 1.116a1.584 1.584 0 0 1-1.908.916l-.98-.284a.13.13 0 0 0-.129.036c-.042.042-.055.09-.042.136l.284.98a1.585 1.585 0 0 1-.916 1.907l-1.116.461a1.585 1.585 0 0 1-1.997-.7l-.492-.893a.13.13 0 0 0-.115-.067c-.061 0-.104.025-.126.066l-.493.894a1.586 1.586 0 0 1-1.997.7l-1.116-.461a1.585 1.585 0 0 1-.916-1.908l.284-.98a.13.13 0 0 0-.036-.128.146.146 0 0 0-.102-.047.123.123 0 0 0-.034.004l-.98.284a1.582 1.582 0 0 1-1.907-.916l-.462-1.116a1.585 1.585 0 0 1 .7-1.997l.894-.492a.13.13 0 0 0 .066-.114c0-.061-.024-.104-.065-.127l-.894-.493a1.585 1.585 0 0 1-.7-1.997l.461-1.115a1.587 1.587 0 0 1 1.908-.917l.98.284a.132.132 0 0 0 .129-.036c.042-.042.055-.09.042-.135l-.284-.98a1.585 1.585 0 0 1 .916-1.907l1.116-.462a1.585 1.585 0 0 1 1.997.7l.492.894c.014.026.047.037.075.047a.134.134 0 0 1 .04.02c.061 0 .104-.025.126-.066l.493-.895a1.584 1.584 0 0 1 1.997-.7Zm2.29 4.8-.405.058a1.47 1.47 0 0 1-1.04-.433 1.463 1.463 0 0 1-.378-1.445l.285-.982a.253.253 0 0 0-.146-.304L14.1 5.354a.252.252 0 0 0-.32.111l-.492.895a1.47 1.47 0 0 1-1.294.755c-.564.005-1.047-.27-1.284-.76l-.49-.89a.252.252 0 0 0-.323-.11l-1.113.46a.253.253 0 0 0-.146.305l.284.98a1.474 1.474 0 0 1-.38 1.45 1.45 1.45 0 0 1-1.036.43L7.1 8.923l-.982-.284a.254.254 0 0 0-.305.147L5.353 9.9a.253.253 0 0 0 .112.32l.894.492c.47.26.759.759.755 1.303 0 .527-.29 1.02-.759 1.275l-.89.49a.254.254 0 0 0-.112.32l.462 1.116a.252.252 0 0 0 .303.147l.981-.285.405-.057c.387 0 .755.152 1.037.429.385.38.53.935.382 1.449l-.285.982a.253.253 0 0 0 .147.304l1.115.462a.25.25 0 0 0 .32-.112l.492-.894a1.47 1.47 0 0 1 1.294-.755c.535 0 1.027.29 1.284.758l.49.891a.254.254 0 0 0 .32.112l1.116-.462a.254.254 0 0 0 .146-.305l-.284-.979a1.474 1.474 0 0 1 .38-1.45 1.458 1.458 0 0 1 1.036-.43l.386.051 1 .29a.251.251 0 0 0 .305-.146l.462-1.116a.254.254 0 0 0-.112-.32l-.894-.491a1.473 1.473 0 0 1-.755-1.303c0-.527.29-1.019.758-1.275l.891-.491a.253.253 0 0 0 .112-.32l-.462-1.115a.252.252 0 0 0-.306-.146l-.978.284ZM9 12c0-1.927 1.073-3 3-3s3 1.073 3 3c0 1.926-1.073 3-3 3s-3-1.074-3-3Zm1.333 0c0 1.184.483 1.667 1.667 1.667 1.184 0 1.667-.483 1.667-1.667 0-1.184-.483-1.667-1.667-1.667-1.184 0-1.667.483-1.667 1.667Z"
                        clip-rule="evenodd">
                    </path>
                </svg>`;
                settings_button.onclick = () => {
                    settings_header.classList.toggle("better-upload-hidden");
                }
                toolbar.appendChild(settings_button);


                const info_container = document.createElement("div");
                info_container.className = "better-upload-info-container better-upload-hidden";

                const progress_bar = document.createElement("div");
                progress_bar.className = "better-upload-progress-bar";

                const info_header = document.createElement("div");
                info_header.className = "better-upload-info-header";
                info_header.append(
                    UI.funcs.create_span("File"),
                    UI.funcs.create_span("Size"),
                    UI.funcs.create_span("Elapsed"),
                    UI.funcs.create_span("ID"),
                    UI.funcs.create_span("")
                );


                const info_list = document.createElement("ul");
                info_list.className = "better-upload-info-list";

                const status_element = UI.funcs.create_status_element();

                info_container.append(progress_bar, info_header, info_list, status_element.container);

                // replace original upload input with our own
                const file_upload_input = document.createElement("input");
                file_upload_input.type = "file";
                file_upload_input.multiple = true;
                file_upload_input.accept = "audio/mp3,audio/mpeg";
                file_upload_input.className = "better-upload-hidden";
                file_upload_input.onchange = () => UI.funcs.upload_file(file_upload_input.files, info_container, progress_bar, info_list, status_element);

                const orig_upload_input = toolbar.querySelector("input[data-testid='upload-file']");
                orig_upload_input.parentNode.querySelector("button").onclick = (e) => {
                    e.stopPropagation();
                    file_upload_input.click();
                }
                orig_upload_input.replaceWith(file_upload_input);

                return [settings_header, info_container];
            }


            static create_css() {
                const grid_template_columns = "12fr 3fr 3fr 4fr 1fr";

                const css = `
                    .better-upload-hidden {
                        display: none !important;
                    }

                    div.better-upload-container {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                    }

                    button.better-upload-settings-button > svg {
                        width: 48px;
                        height: 48px;
                        fill: var(--tempo-colors-text-neutral-primary-default);
                    }
                    @keyframes spin180 {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(180deg); }
                    }
                    button.better-upload-settings-button:hover > svg {
                        animation: spin180 0.5s ease-in-out;
                    }

                    div.better-upload-settings-header {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        margin: 10px 0px;
                        overflow: auto;
                        background: var(--tempo-colors-background-neutral-secondary-default);
                        border-radius: 10px;
                        padding: 5px;
                    }
                    div.better-upload-settings-header > label {
                        height: 30px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        font-size: 14px;
                        color: var(--tempo-colors-text-neutral-primary-default);
                        margin: 5px;
                    }
                    div.better-upload-settings-header > label > * {
                        width: 50%;
                    }
                    div.better-upload-settings-header > label > input {
                        margin-left: 6px;
                        min-width: 0;
                        flex: 1;
                        padding: 4px 10px;
                        border: 1px solid transparent;
                        border-radius: 5px;
                        background: var(--tempo-colors-background-neutral-tertiary-default);
                        color: var(--tempo-colors-text-neutral-primary-default);
                        font-size: 14px;
                    }
                    div.better-upload-settings-header > label > input[type='checkbox'] {
                        accent-color: var(--tempo-colors-border-neutral-primary-focused);
                        width: 20px;
                        height: 20px;
                    }

                    div.better-upload-settings-header > label > input:hover {
                        background: var(--tempo-colors-background-neutral-tertiary-hovered)
                    }
                    div.better-upload-settings-header > label > input:focus {
                        border-color: var(--tempo-colors-border-neutral-primary-focused);
                    }

                    div.better-upload-progress-bar {
                        width: 0px;
                        height: 5px;
                        background: var(--tempo-colors-background-accent-primary-default);
                        transition: width 0.5s ease;
                        border-radius: 10px;
                        font-size: 14px;
                        align-items: center;
                    }

                    div.better-upload-info-container {
                        display: flex;
                        flex-direction: column;
                        border-bottom: 2px solid var(--tempo-colors-text-neutral-secondary-default);
                        padding-bottom: 25px;
                        margin-top: 15px;
                    }

                    div.better-upload-info-header {
                        height: 48px;
                        display: grid;
                        grid-template-columns: ${grid_template_columns};
                        column-gap: 10px;
                        align-items: center;
                        padding-left: 8px;
                        color: var(--tempo-colors-text-neutral-secondary-default);
                        background: inherit;
                        border-bottom: 1px solid var(--tempo-colors-divider-neutral-primary-default);
                    }

                    ul.better-upload-info-list {
                        max-height: 500px;
                        background: inherit;
                        margin-top: 10px;
                        overflow: auto;
                    }

                    li.better-upload-info-item {
                        display: grid;
                        grid-template-columns: ${grid_template_columns};
                        column-gap: 10px;
                        height: 56px;
                        align-items: center;
                        border-radius: 2px;
                        font-size: 14px;
                        padding-left: 8px;
                    }
                    li.better-upload-info-item:hover {
                        background: var(--tempo-colors-background-neutral-secondary-default);
                    }
                    li.better-upload-info-item span {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: var(--tempo-colors-text-neutral-primary-default);
                        width: fit-content;
                    }
                    li.better-upload-info-item.better-upload-already-uploaded span {
                        color: var(--tempo-colors-text-neutral-secondary-default);
                    }
                    li.better-upload-info-item > span.better-upload-status-icon.better-upload-waiting {
                        animation: spin180 1.2s ease-in-out infinite;
                    }
                    li.better-upload-info-item > span.better-upload-status-icon.better-upload-uploading {
                        animation: brightnesspulse 2s infinite;
                    }
                    @keyframes brightnesspulse {
                        0% { filter: brightness(1); }
                        50% { filter: brightness(0.5); }
                        100% { filter: brightness(1); }
                    }

                    li.better-upload-info-item > div.better-upload-name-container {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        overflow: hidden;
                    }
                    li.better-upload-info-item img.better-upload-file-image {
                        width: 40px;
                        height: 40px;
                        border-radius: var(--tempo-radii-2xs);
                    }

                    div.better-upload-status {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 15px;
                        padding: 10px;
                        background: var(--tempo-colors-background-neutral-secondary-default);
                        border-radius: 5px;
                    }

                    div.better-upload-status > span {
                        color: var(--tempo-colors-text-neutral-primary-default);
                        font-weight: 500;
                    }

                    .better-upload-action-button {
                        padding: 8px;
                        background: var(--tempo-colors-background-accent-primary-default);
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 14px;
                    }

                    .better-upload-action-button:hover {
                        background: var(--tempo-colors-background-accent-primary-hovered);
                    }

                `;
                const style = document.createElement("style");
                style.type = "text/css";
                style.textContent = css;
                document.querySelector("head").appendChild(style);
            }
        }

        class Config {
            static CONFIG_PATH = "better_upload_config";
            CURRENT_CONFIG_VERSION = -1; // needs to be -1 for the very first version

            StringConfig = class {
                // functions to traverse and edit a json based on string paths
                static get_value(obj, path) {
                    return path.split(".").reduce((acc, key) => acc && acc[key], obj);
                }
                static set_key(obj, path, value) {
                    let current = obj;
                    const keys = path.split(".");
                    keys.slice(0, -1).forEach(key => {
                        current[key] = current[key] ?? (/^\d+$/.test(key) ? [] : {});
                        current = current[key];
                    });
                    current[keys[keys.length - 1]] = value;
                }
                static delete_key(obj, path) {
                    let current = obj;
                    const keys = path.split(".");
                    keys.slice(0, -1).forEach(key => {
                        if (!current[key]) return;
                        current = current[key];
                    });
                    delete current[keys[keys.length - 1]];
                }
                static move_key(obj, from, to) {
                    const value = this.get_value(obj, from);
                    if (value !== undefined) {
                        this.set_key(obj, to, value);
                        this.delete_key(obj, from);
                    }
                }
            }

            constructor() {
                this.config = this.setter_proxy(this.get());
            }

            retrieve() {
                return JSON.parse(localStorage.getItem(Config.CONFIG_PATH)) || {
                    config_version: this.CURRENT_CONFIG_VERSION,
                    batch_size: 1,
                    timeout: 60
                }
            }

            get() {
                const config = this.retrieve();
                if (config.config_version !== this.CURRENT_CONFIG_VERSION) {
                    return this.migrate_config(config);
                }
                return config;
            }

            save() {
                localStorage.setItem(Config.CONFIG_PATH, JSON.stringify(this.config));
            }
            static static_save(config) {
                localStorage.setItem(Config.CONFIG_PATH, JSON.stringify(config));
            }

            setter_proxy(obj) {
                return new Proxy(obj, {
                    set: (target, key, value) => {
                        target[key] = value;
                        this.save();
                        return true;
                    },
                    get: (target, key) => {
                        if (typeof target[key] === 'object' && target[key] !== null) {
                            return this.setter_proxy(target[key]); // Ensure nested objects are also proxied
                        }
                        return target[key];
                    }
                });
            }

            migrate_config(config) {
                // patch structure
                // [from, to, ?value]
                    // if both "from" and "to" exist, we change the path from "from" to "to"
                    // if "from" is null, "value" is required as we create/update the key and set the value to "value"
                    // if "to" is null, we delete the key
                const patches = [
                ]

                const old_cfg_version = config.config_version === undefined ? -1 : config.config_version;
                for (let patch = old_cfg_version+1; patch <= this.CURRENT_CONFIG_VERSION; patch++) {
                    if (patch !== 0) { // we add the config_version key in the first patch
                        config.config_version++;
                    }
                    patches[patch].forEach(([from, to, value]) => {
                        if (from && to) {
                            this.StringConfig.move_key(config, from, to);
                        }
                        else if (!from && to) {
                            this.StringConfig.set_key(config, to, value);
                        }
                        else if (from && !to) {
                            this.StringConfig.delete_key(config, from);
                        }
                    });
                    logger.console.debug("Migrated to version", patch);
                }
                logger.console.log("Migrated config to version", this.CURRENT_CONFIG_VERSION);
                return config;
            }
        }

        const logger = new Logger();
        const config = new Config().config;
        const deezer = new Deezer();

        (async function main() {
            UI.ensure_ui();
        })();
    }
}
