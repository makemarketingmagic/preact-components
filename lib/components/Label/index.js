"use strict";

exports.__esModule = true;
exports.default = undefined;

var _preact = require("preact");

var _Label = require("./Label.less");

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_Component) {
    _inherits(Label, _Component);

    function Label() {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Label.prototype.render = function render() {
        var children = this.props.children;

        return (0, _preact.h)(
            "div",
            { "class": _Label2.default.label },
            children
        );
    };

    return Label;
}(_preact.Component);

exports.default = Label;