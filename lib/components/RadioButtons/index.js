'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = _styledComponents2.default.label.withConfig({
    displayName: 'RadioButtons__Label'
})(['display:flex;margin:8px 0;flex-direction:row;align-items:center;position:relative;cursor:pointer;min-height:32px;&:hover{', '[type=radio]:not(:checked) ~ ', '{&::before{opacity:1;transform:scale(.5);}}}'], Input, Checkmark),
    LabelText = _styledComponents2.default.span.withConfig({
    displayName: 'RadioButtons__LabelText'
})(['padding-left:48px;']),
    Input = _styledComponents2.default.input.withConfig({
    displayName: 'RadioButtons__Input'
})(['position:absolute;visibility:hidden;&:checked ~ ', '{border-color:', ';&::before{opacity:1;transform:scale(1);}}'], Checkmark, _scMixins.colors.red),
    Checkmark = _styledComponents2.default.div.withConfig({
    displayName: 'RadioButtons__Checkmark'
})(['height:32px;width:32px;background:', ';display:inline-block;border-radius:50%;position:absolute;box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';border:2px solid transparent;box-sizing:content-box;transition:border-color 150ms ease-in-out;&:before{display:block;height:16px;width:16px;position:absolute;border-radius:8px;background-color:', ';background-size:100% 100%;background-repeat:no-repeat;box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';top:8px;left:8px;content:\'\';opacity:0;transform:scale(0);transition:all 150ms ease-in-out;}'], _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.92, _scMixins.colors.black), _scMixins.colors.red, (0, _polished.transparentize)(0.96, _scMixins.colors.red), (0, _polished.transparentize)(0.92, _scMixins.colors.red));

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

        var _props = this.props,
            _props$options = _props.options,
            options = _props$options === undefined ? [] : _props$options,
            formStyle = _props.formStyle;

        console.debug(formStyle);
        return (0, _preact.h)(
            'form',
            { style: formStyle },
            options && options.map(function (_ref) {
                var label = _ref.label,
                    data = _ref.data;

                return (0, _preact.h)(
                    Label,
                    null,
                    (0, _preact.h)(Input, {
                        onChange: _this2.handleChange,
                        checked: _this2.state.selectedOption === data,
                        type: 'radio',
                        value: data
                    }),
                    (0, _preact.h)(Checkmark, null),
                    (0, _preact.h)(
                        LabelText,
                        null,
                        label
                    )
                );
            })
        );
    };

    return RadioButtons;
}(_preact.Component);

exports.default = RadioButtons;