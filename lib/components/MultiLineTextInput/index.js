'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _MultiLineTextInput = require('./MultiLineTextInput.less');

var _MultiLineTextInput2 = _interopRequireDefault(_MultiLineTextInput);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

            onChange && onChange(e);
        };

        _this._handleTextAreaSize = function () {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.el;

            target.style.height = 0;
            target.style.height = target.scrollHeight + 2 + 'px';
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
            variantClass = {
            'large': _MultiLineTextInput2.default.inputLarge,
            'medium': null,
            'small': _MultiLineTextInput2.default.inputSmall
        }[variant];

        return (0, _preact.h)('textarea', {
            onInput: this.handleChange,
            ref: function ref(el) {
                return _this2.el = el;
            },
            value: this.state.value,
            placeholder: placeholder,
            'class': (0, _classnames2.default)(_MultiLineTextInput2.default.input, variantClass),
            type: 'text'
        });
    };

    return MultiLineTextInput;
}(_preact.Component);

exports.default = MultiLineTextInput;