"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrossIcon = function (_Component) {
    _inherits(CrossIcon, _Component);

    function CrossIcon() {
        _classCallCheck(this, CrossIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CrossIcon.prototype.render = function render() {
        var _props = this.props,
            _props$width = _props.width,
            width = _props$width === undefined ? 8 : _props$width,
            _props$height = _props.height,
            height = _props$height === undefined ? 8 : _props$height,
            className = _props.className;

        return (0, _preact.h)(
            "svg",
            { width: width, height: height },
            (0, _preact.h)("path", { "class": className, "fill-rule": "nonzero", d: "M4 2.586L6.293.293a1 1 0 0 1 1.414 1.414L5.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414L4 5.414 1.707 7.707A1 1 0 0 1 .293 6.293L2.586 4 .293 1.707A1 1 0 0 1 1.707.293L4 2.586z" })
        );
    };

    return CrossIcon;
}(_preact.Component);

exports.default = CrossIcon;