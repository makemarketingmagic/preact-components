'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Dropdown = require('./Dropdown.less');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onChange = function (e) {
            var onChange = _this.props.onChange;

            e.target.blur();
            _this.setState({
                selected: e.target.value
            });
            onChange && onChange(e);
        };

        _this.state = {
            selected: ''
        };
        return _this;
    }

    Dropdown.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$variant = _props.variant,
            variant = _props$variant === undefined ? 'large' : _props$variant,
            _props$placeholder = _props.placeholder,
            placeholder = _props$placeholder === undefined ? false : _props$placeholder,
            variantClass = {
            'large': _Dropdown2.default.dropdownLarge,
            'medium': null,
            'small': null
        }[variant];
        var _props$options = this.props.options,
            options = _props$options === undefined ? [] : _props$options;


        if (placeholder) {
            options = [{ value: '', text: placeholder, selected: true, disabled: true, hidden: true }].concat(options);
        }
        return (0, _preact.h)(
            'select',
            { ref: function ref(select) {
                    _this2.select = select;
                }, onChange: this.onChange, required: true, 'class': (0, _classnames2.default)(_Dropdown2.default.dropdown, variantClass) },
            options.map(function (_ref, i) {
                var value = _ref.value,
                    text = _ref.text,
                    selected = _ref.selected,
                    disabled = _ref.disabled,
                    hidden = _ref.hidden;
                return (0, _preact.h)(
                    'option',
                    { selected: selected, disabled: disabled, value: value, key: i, hidden: hidden },
                    text
                );
            })
        );
    };

    return Dropdown;
}(_preact.Component);

exports.default = Dropdown;