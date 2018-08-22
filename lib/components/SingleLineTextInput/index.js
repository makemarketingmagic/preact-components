'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _SingleLineTextInput = require('./SingleLineTextInput.less');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _validation = require('./validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleLineTextInput = function (_Component) {
    _inherits(SingleLineTextInput, _Component);

    function SingleLineTextInput(props) {
        _classCallCheck(this, SingleLineTextInput);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (e) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                validation = _this$props.validation;

            var update = {
                value: e.target.value
            };
            if (validation instanceof RegExp) {
                update.valid = new RegExp(validation).test(e.target.value);
            } else if (typeof validation === 'string') {
                update.valid = _validation.rules[validation] ? new RegExp(_validation.rules[validation]).test(e.target.value) : false;
            }
            _this.setState(update);

            onChange && onChange(update);
        };

        _this.state = {
            valid: false,
            value: props.initialValue
        };
        return _this;
    }

    SingleLineTextInput.prototype.render = function render() {
        var _props = this.props,
            _props$placeholder = _props.placeholder,
            placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
            _props$variant = _props.variant,
            variant = _props$variant === undefined ? 'large' : _props$variant,
            validation = _props.validation,
            showIcon = _props.showIcon,
            variantClass = {
            'large': _SingleLineTextInput2.default.inputLarge,
            'medium': null,
            'small': _SingleLineTextInput2.default.inputSmall
        }[variant],
            validationClass = validation && this.state.value ? this.state.valid ? _SingleLineTextInput2.default.inputValid : _SingleLineTextInput2.default.inputInvalid : null,
            iconClass = showIcon ? _SingleLineTextInput2.default.inputIcon : null,
            iconValid = showIcon && this.state.value ? this.state.valid ? _SingleLineTextInput2.default.inputIconValid : _SingleLineTextInput2.default.inputIconInvalid : null;

        return (0, _preact.h)(
            'div',
            { className: (0, _classnames2.default)(iconClass, iconValid) },
            (0, _preact.h)('input', {
                onInput: this.handleChange,
                value: this.state.value,
                placeholder: placeholder,
                'class': (0, _classnames2.default)(_SingleLineTextInput2.default.input, variantClass, validationClass),
                type: 'text'
            })
        );
    };

    return SingleLineTextInput;
}(_preact.Component);

exports.default = SingleLineTextInput;