function setup_plugin_commands(plugins, settings, globals) {
    const { di, SERVICE_APPLICATION_MENU, SERVICE_MENU, SERVICE_IPC } = globals;
    const all_unique_plugins = Object.values(plugins)
        .flat()
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((acc, plugin) => {
            plugin.commands = [];
            acc[plugin.name] = plugin;
            return acc;
        }, {})
            
    di.get(SERVICE_APPLICATION_MENU).setApplicationMenu();
    di.get(SERVICE_MENU).plugin_data = {
        plugins: all_unique_plugins,
        settings: settings
    };
    di.get(SERVICE_IPC).on("deezmod-command-update", (event, {action, command, plugin_id}) => {
        const plugin_data = di.get(SERVICE_MENU).plugin_data;
        
        if (action === "register") {
            const existing_index = plugin_data.plugins[plugin_id].commands.findIndex(cmd => cmd.options.id === command.options.id);
            if (existing_index !== -1) {
                const existing_command = plugin_data.plugins[plugin_id].commands[existing_index];
                command.senders = Array.from(new Set([...existing_command.senders, event.sender]));
                plugin_data.plugins[plugin_id].commands[existing_index] = command;
                
            } else {
                command.senders = [event.sender];
                plugin_data.plugins[plugin_id].commands.push(command);
            }
        } else if (action === "unregister") {
            let existing_index = plugin_data.plugins[plugin_id].commands.findIndex(cmd => cmd.options.id === command.options.id);
            if (existing_index === -1) {
                existing_index = plugin_data.plugins[plugin_id].commands.findIndex(cmd => cmd.caption === command.caption); // values can be deleted by caption as well
            }
            if (existing_index !== -1) {
                plugin_data.plugins[plugin_id].commands.splice(existing_index, 1);
            }
        }
        di.get(SERVICE_APPLICATION_MENU).setApplicationMenu();
    });
}

module.exports = { 
    setup_plugin_commands: setup_plugin_commands
};
