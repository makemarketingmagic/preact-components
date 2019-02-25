"use strict";

exports.__esModule = true;
exports.default = SearchIcon;

var _preact = require("preact");

function SearchIcon(props) {
    var _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height,
        _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$color = props.color,
        color = _props$color === undefined ? "#EE4055" : _props$color;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7ZM12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z", fill: color }),
        (0, _preact.h)("path", { d: "M11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071Z", fill: color })
    );
}