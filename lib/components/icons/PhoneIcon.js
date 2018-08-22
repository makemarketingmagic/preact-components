"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneIcon = function (_Component) {
    _inherits(PhoneIcon, _Component);

    function PhoneIcon() {
        _classCallCheck(this, PhoneIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    PhoneIcon.prototype.render = function render() {
        var _props = this.props,
            width = _props.width,
            height = _props.height,
            color = _props.color,
            thickness = _props.thickness;

        return (0, _preact.h)(
            "svg",
            { width: width || 16, height: height || 16, xmlns: "http://www.w3.org/2000/svg" },
            (0, _preact.h)("path", { d: "M8 13l-3-3-4 1v4c7.732 0 14-6.268 14-14h-4l-1 4 3 3", stroke: color || "#EE4055", "stroke-width": thickness || "2", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" })
        );
    };

    return PhoneIcon;
}(_preact.Component);

exports.default = PhoneIcon;