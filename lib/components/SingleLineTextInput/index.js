'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _SingleLineTextInput = require('./SingleLineTextInput.less');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _scMixins = require('../common/scMixins');

var _validation = require('./validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'SingleLineTextInput__Container'
})(['font-family:inherit;background:#FFFFFF;box-shadow:0 4px 8px 0 rgba(0,0,0,0.04),0 1px 2px 0 rgba(0,0,0,0.16);border-radius:4px;border-color:transparent;display:flex;flex-direction:row;align-items:center;margin:4px 0;margin-left:4px;']);
var Input = _styledComponents2.default.input.withConfig({
    displayName: 'SingleLineTextInput__Input'
})(['color:', ';border:none;width:100%;font-size:14px;outline:none;padding:8px 16px;&::placeholder{color:', ';}'], _scMixins.colors.text, _scMixins.colors.grey);

var SingleLineTextInput = function (_Component) {
    _inherits(SingleLineTextInput, _Component);

    function SingleLineTextInput(props) {
        _classCallCheck(this, SingleLineTextInput);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (e) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                _this$props$validatio = _this$props.validation,
                validation = _this$props$validatio === undefined ? /.*/ : _this$props$validatio;

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
            _props$type = _props.type,
            type = _props$type === undefined ? 'text' : _props$type,
            _props$placeholder = _props.placeholder,
            placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
            _props$iconLeft = _props.iconLeft,
            iconLeft = _props$iconLeft === undefined ? false : _props$iconLeft,
            _props$Icon = _props.Icon,
            Icon = _props$Icon === undefined ? null : _props$Icon;

        return (0, _preact.h)(
            Container,
            null,
            iconLeft && (0, _preact.h)(
                'div',
                { style: { marginLeft: 4, display: 'flex' } },
                (0, _preact.h)(Icon, null)
            ),
            (0, _preact.h)(Input, { onChange: this.handleChange, placeholder: placeholder, type: type })
        );
    };

    // render() {
    //     const { placeholder = '', variant = 'large', validation, showIcon, Icon = null,showValidIcon } = this.props,
    //         variantClass = {
    //             'large': styles.inputLarge,
    //             'medium': null,
    //             'small': styles.inputSmall
    //         }[variant],
    //         validationClass = validation && this.state.value ?
    //             this.state.valid ?
    //                 styles.inputValid : styles.inputInvalid
    //             : null,
    //         iconClass = showValidIcon ? styles.inputIcon : null,
    //         iconValid = showValidIcon && this.state.value ?
    //             this.state.valid ?
    //                 styles.inputIconValid : styles.inputIconInvalid
    //             : null
    //     return (
    //         <div className={classNames(iconClass, iconValid)}>
    //             <input
    //                 onInput={this.handleChange}
    //                 value={this.state.value}
    //                 placeholder={placeholder}
    //                 class={classNames(styles.input, variantClass, validationClass)}
    //                 type="text"
    //             />
    //         </div>
    //     )
    // }


    return SingleLineTextInput;
}(_preact.Component);

exports.default = SingleLineTextInput;