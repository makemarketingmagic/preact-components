"use strict";

exports.__esModule = true;
exports.default = PhoneIcon;

var _preact = require("preact");

function PhoneIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? "#EE4055" : _props$color,
        _props$thickness = props.thickness,
        thickness = _props$thickness === undefined ? "2" : _props$thickness;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("path", { d: "M8 13l-3-3-4 1v4c7.732 0 14-6.268 14-14h-4l-1 4 3 3", stroke: color, "stroke-width": thickness, fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" })
    );
}