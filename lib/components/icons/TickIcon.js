"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TickIcon = function (_Component) {
    _inherits(TickIcon, _Component);

    function TickIcon() {
        _classCallCheck(this, TickIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TickIcon.prototype.render = function render() {
        var _props = this.props,
            width = _props.width,
            height = _props.height,
            color = _props.color;

        return (0, _preact.h)(
            "svg",
            { width: width || 14, height: height || 10 },
            (0, _preact.h)("path", { fill: "none", "fill-rule": "evenodd", stroke: color || "#FFFFFF", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M1 5l4 4 8-8" })
        );
    };

    return TickIcon;
}(_preact.Component);

exports.default = TickIcon;