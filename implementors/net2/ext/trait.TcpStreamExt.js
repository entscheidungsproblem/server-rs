(function() {var implementors = {};
implementors["mio"] = [];
implementors["mio_serial"] = [];
implementors["os_balloon"] = [];
implementors["tokio_core"] = [];
implementors["tokio_serial"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
