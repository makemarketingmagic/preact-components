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
            { width: width || 14, height: height || 10, xmlns: "http://www.w3.org/2000/svg" },
            (0, _preact.h)("path", { fill: color || "white", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L5 7.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" })
        );
    };

    return TickIcon;
}(_preact.Component);

exports.default = TickIcon;