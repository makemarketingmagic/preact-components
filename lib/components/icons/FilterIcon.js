"use strict";

exports.__esModule = true;
exports.default = FilterIcon;

var _preact = require("preact");

function FilterIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("rect", { y: "2", width: "16", height: "2", rx: "1", fill: "#EE4055" }),
        (0, _preact.h)("rect", { x: "2", y: "7", width: "12", height: "2", rx: "1", fill: "#EE4055" }),
        (0, _preact.h)("rect", { x: "4", y: "12", width: "8", height: "2", rx: "1", fill: "#EE4055" })
    );
}