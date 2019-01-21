"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DotsIcon = function (_Component) {
    _inherits(DotsIcon, _Component);

    function DotsIcon() {
        _classCallCheck(this, DotsIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DotsIcon.prototype.render = function render() {
        var _props = this.props,
            _props$width = _props.width,
            width = _props$width === undefined ? 24 : _props$width,
            _props$height = _props.height,
            height = _props$height === undefined ? 24 : _props$height,
            _props$color = _props.color,
            color = _props$color === undefined ? "#FFF" : _props$color;

        return (0, _preact.h)(
            "svg",
            { width: width, height: height, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z", fill: color }),
            (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z", fill: color }),
            (0, _preact.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z", fill: color })
        );
    };

    return DotsIcon;
}(_preact.Component);

exports.default = DotsIcon;