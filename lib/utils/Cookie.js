'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
    get: function get(name) {
        var c = document.cookie.match('(?:(?:^|.*; *)' + name + ' *= *([^;]*).*$)|^.*$')[1];
        if (c) return decodeURIComponent(c);
    },
    set: function set(name, value) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (opts.days) {
            opts['max-age'] = opts.days * 60 * 60 * 24;
            delete opts.days;
        }
        opts = Object.entries(opts).reduce(function (str, _ref) {
            var k = _ref[0],
                v = _ref[1];
            return str + '; ' + k + '=' + v;
        }, '');
        document.cookie = name + '=' + encodeURIComponent(value) + opts;
    },
    delete: function _delete(name, opts) {
        return Cookie.set(name, '', _extends({ 'max-age': -1 }, opts));
    }
    // path & domain must match cookie being deleted 
};