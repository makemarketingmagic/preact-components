"use strict";

exports.__esModule = true;
exports.default = DownloadArrow;

var _preact = require("preact");

function DownloadArrow(props) {
    var _props = this.props,
        _props$width = _props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = _props.height,
        height = _props$height === undefined ? 16 : _props$height;

    return (0, _preact.h)(
        "svg",
        { width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, _preact.h)("path", { d: "M7 1V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1Z", fill: "#EE4055" }),
        (0, _preact.h)("path", { d: "M4.70711 7.29289C4.31658 6.90237 3.68342 6.90237 3.29289 7.29289C2.90237 7.68342 2.90237 8.31658 3.29289 8.70711L7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L8 10.5858L4.70711 7.29289Z", fill: "#EE4055" }),
        (0, _preact.h)("path", { d: "M1 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H1C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16Z", fill: "#EE4055" })
    );
}