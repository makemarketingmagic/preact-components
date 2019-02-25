"use strict";

exports.__esModule = true;
exports.default = EmailIcon;

var _preact = require("preact");

function EmailIcon(props) {
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
        (0, _preact.h)(
            "g",
            { stroke: color, "stroke-width": thickness, fill: "none", "fill-rule": "evenodd", "stroke-linejoin": "round" },
            (0, _preact.h)("path", { "stroke-linecap": "round", d: "M1 3h14v10H1z" }),
            (0, _preact.h)("path", { "stroke-linecap": "square", d: "M2 4l6 6 6-6" })
        )
    );
}