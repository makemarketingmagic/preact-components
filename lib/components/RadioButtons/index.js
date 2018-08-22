'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _RadioButtons = require('./RadioButtons.less');

var _RadioButtons2 = _interopRequireDefault(_RadioButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtons = function (_Component) {
    _inherits(RadioButtons, _Component);

    function RadioButtons(props) {
        _classCallCheck(this, RadioButtons);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (e) {
            var onChange = _this.props.onChange;

            if (_this.state.selectedOption !== e.target.value) {
                _this.setState({
                    selectedOption: e.target.value
                });
            }
            onChange && onChange(e.target.valeu);
        };

        _this.state = {
            selectedOption: false
        };
        return _this;
    }

    RadioButtons.prototype.componentWillMount = function componentWillMount() {
        var options = this.props.options,
            selectedOptions = options.filter(function (value) {
            return value.selected;
        }),
            selectedOption = selectedOptions.length && selectedOptions[0];

        selectedOption && this.state.selectedOption !== selectedOption.data && this.setState({ selectedOption: selectedOption.data });
    };

    RadioButtons.prototype.render = function render() {
        var _this2 = this;

        var _props$options = this.props.options,
            options = _props$options === undefined ? [] : _props$options;

        return (0, _preact.h)(
            'form',
            null,
            options && options.map(function (_ref) {
                var label = _ref.label,
                    data = _ref.data;

                return (0, _preact.h)(
                    'label',
                    { 'class': _RadioButtons2.default.label },
                    (0, _preact.h)('input', {
                        'class': _RadioButtons2.default.input,
                        onChange: _this2.handleChange,
                        checked: _this2.state.selectedOption === data,
                        type: 'radio',
                        value: data
                    }),
                    (0, _preact.h)('div', { 'class': _RadioButtons2.default.checkmark }),
                    (0, _preact.h)(
                        'span',
                        { 'class': _RadioButtons2.default.labelText },
                        label
                    )
                );
            })
        );
    };

    return RadioButtons;
}(_preact.Component);

exports.default = RadioButtons;