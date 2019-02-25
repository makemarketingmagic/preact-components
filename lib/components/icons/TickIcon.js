"use strict";

exports.__esModule = true;
exports.default = TickIcon;

var _preact = require("preact");

function TickIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 14 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 10 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? "#FFF" : _props$color;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 14 10", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("path", { fill: color, "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L5 7.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" })
    );
}