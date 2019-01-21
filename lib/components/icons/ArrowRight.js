"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrowRightIcon = function (_Component) {
    _inherits(ArrowRightIcon, _Component);

    function ArrowRightIcon() {
        _classCallCheck(this, ArrowRightIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ArrowRightIcon.prototype.render = function render() {
        var _props = this.props,
            _props$width = _props.width,
            width = _props$width === undefined ? 16 : _props$width,
            _props$height = _props.height,
            height = _props$height === undefined ? 16 : _props$height,
            className = _props.className;


        return (0, _preact.h)(
            "svg",
            { width: width, height: height, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, _preact.h)("path", { d: "M1 8H15", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            (0, _preact.h)("path", { d: "M11 12L15 8L11 4", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })
        );
    };

    return ArrowRightIcon;
}(_preact.Component);

exports.default = ArrowRightIcon;