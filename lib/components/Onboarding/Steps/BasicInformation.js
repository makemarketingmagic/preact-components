'use strict';

exports.__esModule = true;
exports.Form = exports.default = undefined;

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicInformation = function (_Component) {
    _inherits(BasicInformation, _Component);

    function BasicInformation() {
        _classCallCheck(this, BasicInformation);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    BasicInformation.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            null,
            'Basic Information'
        );
    };

    return BasicInformation;
}(_preact.Component);

exports.default = BasicInformation;

var Form = exports.Form = function (_Component2) {
    _inherits(Form, _Component2);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

        _this2.state = {
            valid: false,
            complete: false
        };
        return _this2;
    }

    return Form;
}(_preact.Component);