module.exports = {
    name: "Better Title",
    description: "Sets the title of the titlebar to the current song info so that you can see it in the app preview.",
    version: "1.0.0",
    author: "bertigert",
    context: ["main", "renderer", "titlebar"],
    scope: ["own", "main", "own"],
    func: (context) => {
        // ========== SETTINGS START ==========
        // Modes:
        // 0: Deezer Vanilla Mode (Song Title - Artists - Deezer)
        // 1: Song First Mode (Song Title - Artist)
        // 2: Artist First Mode (Artist - Song Title)
        // 3: Song First Album Mode (Song Title - Artist - Album)
        // 4: Artist First Album Mode (Artist - Song Title - Album)
        // 5: Album First Mode (Album - Artist - Song Title)
        // 6: Custom Mode (Custom format, see below)
        const MODE = 6;

        // If you want to display all artists, set to true
        // If you want to display only the main artist, set to false
        const DISPLAY_ALL_ARTISTS = false;

        // Custom Format:
        // You can set a custom format here, using the following placeholders:
        
        // %sng_title% for song title
        // %version% for the song version in " ()" if available, since its not always available.
        // %art_name% for artist name
        // %all_artists% for all artists (comma-separated)
        // %alb_title% for album title
        // %length% for song length in best format (e.g. "3:45")
        
        // Each placeholder supports the following:
        
        // %placeholder:#MAX_LENGTH>STOP_CHAR:#MAX_LENGTH_SUFFIX>STOP_CHAR_SUFFIX%
        // #MAX_LENGTH limits the length of the placeholder to MAX_LENGTH characters.
        // If the value is longer than MAX_LENGTH, it will be truncated to MAX_LENGTH and the SUFFIX will be appended.
        // >STOP_CHAR limits the length of the placeholder to the first occurrence of STOP_CHAR (can be multiple characters).
        // If the value includes the STOP_CHAR and there are more characters after it, the string will be truncated to the first occurrence of STOP_CHAR and the SUFFIX will be appended.
        // Whatever limit is hit first will be used. Make sure to properly use :#> in the format string.
        // Always write #MAX_LENGTH before the >STOP_CHAR. If you use #MAX_LENGTH or >STOP_CHAR, you must also use the SUFFIX(ES)
        // :#>% are handled as special characters, so using them in another way will probably break things.

        const CUSTOM_FORMAT = "%sng_title:#10:#...% | %all_artists:>,:>...% | %length%";

        // Example: %sng_title:#10> :#...>...%%version% | %art_name:#10:#...% | %all_artists:>,:> (More Artists)% | %alb_title:#10> :#>% | %length%
        // %sng_title:#10> :#...>...% -> limit the song title to 10 characters, replacing the rest with "...". If there is an empty space in the first 10 characters, it will be truncated to that point and "..." will be appended.
        // %art_name:#10:#...% -> limit the artist name to 10 characters, replacing the rest with "..." if it exceed that length. No STOP_CHAR is used.
        // %all_artists:>,:> (More Artists)% -> limit the comma seperated list of all artists to the first artist (by stopping at the first comma) and append " (More Artists)" if there are more artists.
        // %alb_title:#10> :#>% -> limit the album title to 10 characters, replacing the rest with nothing if it exceed that length. STOP_CHAR is " " and >SUFFIX is also nothing.

        // Invalid placeholders would be:
        // %sng_title:#10> :#...% Missing >SUFFIX, so it will not work. Valid would be: %sng_title:#10> :#...>% if you want to not append anything for the STOP_CHAR limit.
        // %sng_title:#10:#...>% Missing >STOP_CHAR, but >SUFFIX is present.
        // %sng_title:>,#10:>...#...% >STOP_CHAR AND SUFFIX> before #MAX_LENGTH and #SUFFIX.
        // %sng_title:#>:#>% Missing #MAX_LENGTH and >STOP_CHAR, so it will not work. Valid would be %sng_title:#10> :#>% if you want to not append anything for the MAX_LENGTH/STOP_CHAR limit.

        // ========== SETTINGS END ==========

        function log(...args) {
            console.log("[Title Bar]", ...args);
        }
        function warn(...args) {
            console.warn("[Title Bar]", ...args);
        }

        function parse_custom_format(main_artist, all_artists, song_title, album_title, version, duration) {
            const VALID_PLACEHOLDERS = [
                "sng_title",
                "version",
                "art_name",
                "all_artists",
                "alb_title",
                "length"
            ];

            function placeholder_to_value(placeholder) {
                switch (placeholder) {
                    case "sng_title":
                        return song_title;
                    case "version":
                        return version ? ` (${version})` : "";
                    case "art_name":
                        return main_artist
                    case "all_artists":
                        return all_artists
                    case "alb_title":
                        return album_title;
                    case "length":
                        const minutes = Math.floor(duration / 60);
                        const seconds = (duration % 60).toString().padStart(2, '0');
                        return `${minutes}:${seconds}`;
                } 
            }
            
            function parse_placeholder(placeholder) {
                // console.log(`Parsing placeholder: ${placeholder}`);
                if (!VALID_PLACEHOLDERS.some(ph => current_placeholder.startsWith(ph))) {
                    warn(`Invalid placeholder format: ${placeholder}`);
                    return placeholder;
                }
                
                if (!placeholder.includes(":")) {
                    return placeholder_to_value(placeholder);
                }
                const [name, rules, suffixes] = placeholder.split(":");
                
                if (!rules || !suffixes) {
                    warn(`No rules or suffixes for placeholder: ${placeholder}`);
                    return placeholder;
                }
                let max_length, stop_char, max_length_suffix, stop_char_suffix;
                
                max_length = parseInt(rules.match(/^#(\d+)/)?.[1]);
                stop_char = rules.match(/>([^>]+)$/)?.[1];
                max_length_suffix = suffixes.match(/^#([^>]*)/)?.[1];
                stop_char_suffix = suffixes.match(/>(.*)$/)?.[1];   
                // log(`Parsed rules: max_length=${max_length}, stop_char=${stop_char}, max_length_suffix=${max_length_suffix}, stop_char_suffix=${stop_char_suffix}`);
                const value = placeholder_to_value(name);
                
                let had_valid_rules = false;
                if (stop_char && stop_char_suffix !== undefined) {
                    const stop_index = value.indexOf(stop_char);
                    if (stop_index !== -1 && stop_index < (max_length || Infinity) && stop_index+stop_char_suffix.length <= (value.length || Infinity)) {
                        return value.slice(0, stop_index) + stop_char_suffix;
                    }
                    had_valid_rules = true;
                }
                if (max_length && max_length_suffix !== undefined) {
                    if (value.length-max_length_suffix.length > max_length) {
                        return value.slice(0, max_length) + max_length_suffix;
                    }
                    had_valid_rules = true;
                }
                if (!had_valid_rules) {
                    warn(`No valid rules or suffixes for placeholder: ${placeholder}`);
                    return placeholder;   
                }
                return value;                    
            }
            
            let final_str = "";

            const split = CUSTOM_FORMAT.split(/(%)/);

            let is_placeholder_open = false;
            let current_placeholder = "";
            for (const part of split) {
                if (part === "%") {
                    if (is_placeholder_open) { // closing a placeholder
                        if (current_placeholder) {
                            final_str += parse_placeholder(current_placeholder);
                        }
                        current_placeholder = "";
                    }
                    is_placeholder_open = !is_placeholder_open;
                } else if (is_placeholder_open) { // inside a placeholder
                    current_placeholder += part;
                } else { // outside a placeholder
                    final_str += part;
                }
            }
            if (is_placeholder_open) {
                warn("Unclosed placeholder at the end of format string:", current_placeholder);
            }
            final_str += current_placeholder;
            return final_str;            
        }
                    
        function format_title() {
            const song_info = dzPlayer.getCurrentSong();
            const main_artist = song_info.ART_NAME || "";
            const all_artists = song_info.ARTISTS.map(artist => artist.ART_NAME).join(", ") || "";
            const artist = DISPLAY_ALL_ARTISTS ? all_artists : main_artist;
            const song_title = song_info.SNG_TITLE || "";
            const album_title = song_info.ALB_TITLE || "";

            let formatted_title = "";
            switch (MODE) {
                case 0: // Deezer Vanilla Mode
                    formatted_title = document.title;
                    break;
                case 1: // Song First Mode
                    formatted_title = `${song_title} - ${artist}`;
                    break;
                case 2: // Artist First Mode
                    formatted_title = `${artist} - ${song_title}`;
                    break;
                case 3: // Song First Album Mode
                    formatted_title = `${song_title} - ${artist} - ${album_title}`;
                    break;
                case 4: // Artist First Album Mode
                    formatted_title = `${artist} - ${song_title} - ${album_title}`;
                    break;
                case 5: // Album First Mode
                    formatted_title = `${album_title} - ${artist} - ${song_title}`;
                    break;
                case 6: // Custom Mode
                    formatted_title = parse_custom_format(main_artist, all_artists, song_title, album_title, song_info.VERSION || "", song_info.DURATION || 0);
                    break;
                default:
                    formatted_title = document.title;
            }
            return formatted_title;
        }

        log("Plugin loaded");
        
        if (context === "main") {
            log("Executing in main");

            const { ipcMain } = require("electron");

            let renderer_ipc, titlebar_ipc;
            
            ipcMain.on("better-title-renderer-ready", (event) => {
                log("Renderer ready");
                renderer_ipc = event.sender;
            });
            
            ipcMain.on("better-title-titlebar-ready", (event) => {
                log("Titlebar ready");
                titlebar_ipc = event.sender;
            });

            ipcMain.on("better-title-renderer-title-changed", (event, title) => {
                log("Title change event received:", title);
                titlebar_ipc?.send("better-title-renderer-title-changed", title);
            })
        }
        

        else if (context === "renderer") {
            log("Executing in renderer");
            
            const { ipcRenderer } = require("electron");

            

            const title_observer = new MutationObserver(() => {
                ipcRenderer.send("better-title-renderer-title-changed", format_title());
            });
            
            title_observer.observe(document.querySelector('title'), {
                childList: true
            });

            ipcRenderer.send("better-title-renderer-ready");
                     
            
        } else if (context === "titlebar") {
            log("Executing in titlebar")

            const { ipcRenderer } = require("electron");
            
            ipcRenderer.on("better-title-renderer-title-changed", (event, title) => {
                log("Title changed", title);
                document.title = title;
            });

            ipcRenderer.send("better-title-titlebar-ready");
        }
    }
}