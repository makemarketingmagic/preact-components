"use strict";

exports.__esModule = true;
exports.default = DotsIcon;

var _preact = require("preact");

function DotsIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 24 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 24 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? "#FFF" : _props$color;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z", fill: color }),
        (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z", fill: color }),
        (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z", fill: color })
    );
}