'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = _styledComponents2.default.input.withConfig({
    displayName: 'DatePicker__Input'
})(['font-family:inherit;background:#FFFFFF;box-shadow:0 4px 8px 0 rgba(0,0,0,0.04),0 1px 2px 0 rgba(0,0,0,0.16);border-radius:4px;border-color:transparent;display:flex;flex-direction:row;align-items:center;margin:4px 0;margin-left:4px;color:', ';width:100%;font-size:14px;padding:8px 16px;&::-webkit-clear-button{display:none;}&::-webkit-inner-spin-button{-webkit-appearance:none;}&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}'], _scMixins.colors.text);

var DatePicker = function (_Component) {
    _inherits(DatePicker, _Component);

    function DatePicker() {
        var _temp, _this, _ret;

        _classCallCheck(this, DatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleChange = function (e) {
            var onChange = _this.props.onChange;

            onChange && onChange({
                value: e.target.value
            });
            return {
                value: e.target.value
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    DatePicker.prototype.render = function render() {
        var value = this.props.value;


        return (0, _preact.h)(Input, { type: 'date', value: value, onChange: this.handleChange });
    };

    return DatePicker;
}(_preact.Component);

exports.default = DatePicker;