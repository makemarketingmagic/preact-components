"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoIcon = function (_Component) {
    _inherits(InfoIcon, _Component);

    function InfoIcon() {
        _classCallCheck(this, InfoIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InfoIcon.prototype.render = function render() {
        var _props = this.props,
            _props$width = _props.width,
            width = _props$width === undefined ? 16 : _props$width,
            _props$height = _props.height,
            height = _props$height === undefined ? 16 : _props$height,
            className = _props.className;

        return (0, _preact.h)(
            "svg",
            { width: width, height: height, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z", fill: "#EE4055" }),
            (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z", fill: "#EE4055" }),
            (0, _preact.h)("path", { d: "M7 8V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z", fill: "#EE4055" })
        );
    };

    return InfoIcon;
}(_preact.Component);

exports.default = InfoIcon;