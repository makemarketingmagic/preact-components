"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaterIcon = function (_Component) {
    _inherits(LaterIcon, _Component);

    function LaterIcon() {
        _classCallCheck(this, LaterIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    LaterIcon.prototype.render = function render() {
        var _props = this.props,
            width = _props.width,
            height = _props.height,
            color = _props.color;

        return (0, _preact.h)(
            "svg",
            { width: width || 16, height: height || 16 },
            (0, _preact.h)(
                "g",
                { fill: color || "#FFFFFF", "fill-rule": "evenodd" },
                (0, _preact.h)("path", { "fill-rule": "nonzero", d: "M8 0a8 8 0 1 0 5.054 1.798 1 1 0 0 0-1.264 1.55A6 6 0 1 1 8 2a1 1 0 1 0 0-2z" }),
                (0, _preact.h)("path", { "fill-rule": "nonzero", d: "M12 2h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2z" }),
                (0, _preact.h)("path", { "fill-rule": "nonzero", d: "M10 2v3a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z" }),
                (0, _preact.h)("path", { d: "M14 2h-2v2a2 2 0 1 1 2-2z" })
            )
        );
    };

    return LaterIcon;
}(_preact.Component);

exports.default = LaterIcon;