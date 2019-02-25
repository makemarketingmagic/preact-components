'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = _styledComponents2.default.textarea.withConfig({
    displayName: 'MultiLineTextInput__Input'
})(['margin:4px 0;color:', ';width:100%;max-height:240px;resize:none;max-width:504px;font-size:14px;outline:none;font-family:inherit;background:', ';box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';border-radius:4px;border-color:transparent;&::placeholder{color:', ';}'], _scMixins.colors.text, _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.84, _scMixins.colors.black), _scMixins.colors.grey);

var InputLarge = (0, _styledComponents2.default)(Input).withConfig({
    displayName: 'MultiLineTextInput__InputLarge'
})(['height:40px;min-height:40px;padding:8px 16px;']);

var InputSmall = (0, _styledComponents2.default)(Input).withConfig({
    displayName: 'MultiLineTextInput__InputSmall'
})(['height:32px;min-height:32px;padding:6px 16px;']);

var MultiLineTextInput = function (_Component) {
    _inherits(MultiLineTextInput, _Component);

    function MultiLineTextInput(props) {
        _classCallCheck(this, MultiLineTextInput);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (e) {
            var onChange = _this.props.onChange;

            _this.setState({
                value: e.target.value
            });

            _this._handleTextAreaSize(e.target);

            onChange && onChange({
                value: e.target.value
            });
        };

        _this._handleTextAreaSize = function () {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.el;

            if (target.style) {
                target.style.height = 0;
                target.style.height = target.scrollHeight + 2 + 'px';
            }
        };

        _this.state = {
            value: props.initialValue
        };
        return _this;
    }

    MultiLineTextInput.prototype.componentDidMount = function componentDidMount() {
        this._handleTextAreaSize();
    };

    MultiLineTextInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this._handleTextAreaSize();
        }
    };

    MultiLineTextInput.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$placeholder = _props.placeholder,
            placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
            _props$variant = _props.variant,
            variant = _props$variant === undefined ? 'large' : _props$variant,
            InputEl = {
            'large': InputLarge,
            'medium': Input,
            'small': InputSmall
        }[variant];

        return (0, _preact.h)(InputEl, {
            onInput: this.handleChange,
            ref: function ref(el) {
                return _this2.el = el;
            },
            value: this.state.value,
            placeholder: placeholder,
            type: 'text'
        });
    };

    return MultiLineTextInput;
}(_preact.Component);

exports.default = MultiLineTextInput;