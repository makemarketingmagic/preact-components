"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

var _Value = require("./Value.less");

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_Component) {
    _inherits(Value, _Component);

    function Value() {
        _classCallCheck(this, Value);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Value.prototype.render = function render() {
        var children = this.props.children;

        return (0, _preact.h)(
            "div",
            { "class": _Value2.default.value },
            children
        );
    };

    return Value;
}(_preact.Component);

exports.default = Value;