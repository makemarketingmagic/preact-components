export default
    {
        get: name => {
            let c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1]
            if (c) return decodeURIComponent(c)
        }
        , set: (name, value, opts = {}) => {
            if (opts.days) {
                opts['max-age'] = opts.days * 60 * 60 * 24;
                delete opts.days
            }
            opts = Object.entries(opts).reduce((str, [k, v]) => `${str}; ${k}=${v}`, '')
            document.cookie = name + '=' + encodeURIComponent(value) + opts
        }
        , delete: (name, opts) => Cookie.set(name, '', { 'max-age': -1, ...opts })
        // path & domain must match cookie being deleted 
    }