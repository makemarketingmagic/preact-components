'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _DropdownArrowClosed = require('../../assets/DropdownArrowClosed.png');

var _DropdownArrowClosed2 = _interopRequireDefault(_DropdownArrowClosed);

var _dropdownArrowOpen = require('../../assets/dropdownArrowOpen.png');

var _dropdownArrowOpen2 = _interopRequireDefault(_dropdownArrowOpen);

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseDropdown = _styledComponents2.default.div.withConfig({
    displayName: 'Dropdown__BaseDropdown'
})(['width:100%;max-width:504px;font-family:inherit;padding:8px 32px 8px 16px;appearance:none;-webkit-appearance:none;-moz-appearance:none;font-size:14px;background-image:url(', ');background-repeat:no-repeat;background-position:right center;background-size:contain;border-radius:4px;border-color:transparent;background-color:', ';box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';border-radius:4px;outline:none;&:focus{background-image:url(', ');}&:invalid{color:', ';}option:not(:checked){color:', ';}'], _DropdownArrowClosed2.default, _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.84, _scMixins.colors.black), _dropdownArrowOpen2.default, _scMixins.colors.grey, _scMixins.colors.text);
var DropdownLarge = (0, _styledComponents2.default)(BaseDropdown).withConfig({
    displayName: 'Dropdown__DropdownLarge'
})(['height:40px;']);

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
            DropdownEl = {
            'large': DropdownLarge,
            'medium': BaseDropdown,
            'small': BaseDropdown
        }[variant];
        var _props$options = this.props.options,
            options = _props$options === undefined ? [] : _props$options;


        if (placeholder) {
            options = [{ value: '', text: placeholder, selected: true, disabled: true, hidden: true }].concat(options);
        }
        return (0, _preact.h)(
            DropdownEl,
            { ref: function ref(select) {
                    _this2.select = select;
                }, onChange: this.onChange, required: true },
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