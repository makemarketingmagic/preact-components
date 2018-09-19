'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

var _Check = require('./Check.svg');

var _Check2 = _interopRequireDefault(_Check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkmark = _styledComponents2.default.div.withConfig({
    displayName: 'Checkboxes__Checkmark'
})(['height:32px;width:32px;background:', ';display:inline-block;border-radius:15%;position:absolute;box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';border:2px solid transparent;box-sizing:content-box;transition:border-color 150ms ease-in-out;&:before{display:block;height:16px;width:16px;position:absolute;border-radius:8px;background-image:url(', ');background-size:100% 100%;background-repeat:no-repeat;box-shadow:0 4px 8px 0 ', ',0 1px 2px 0 ', ';top:8px;left:8px;content:\'\';opacity:0;transform:scale(0);transition:all 150ms ease-in-out;}'], _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.92, _scMixins.colors.black), _Check2.default, (0, _polished.transparentize)(0.96, _scMixins.colors.red), (0, _polished.transparentize)(0.92, _scMixins.colors.red)),
    Label = _styledComponents2.default.label.withConfig({
    displayName: 'Checkboxes__Label'
})(['display:flex;margin:8px 0;flex-direction:row;align-items:center;position:relative;cursor:pointer;min-height:32px;&:hover{', '[type=checkbox]:not(:checked) ~ ', '{&::before{opacity:1;transform:scale(.5);}}', '[type=checkbox]:checked ~ ', '{&::before{opacity:1;transform:scale(.75);}}}'], Input, Checkmark, Input, Checkmark),
    CheckboxLabelText = (0, _styledComponents2.default)(_scMixins.typography.LabelDark).withConfig({
    displayName: 'Checkboxes__CheckboxLabelText'
})(['padding-left:48px;']),
    Input = _styledComponents2.default.input.withConfig({
    displayName: 'Checkboxes__Input'
})(['position:absolute;visibility:hidden;&[type=checkbox]:checked ~ ', '{border-color ', ';&::before{opacity:1;transform:scale(1);}}'], Checkmark, _scMixins.colors.red);

var Checkboxes = function (_Component) {
    _inherits(Checkboxes, _Component);

    function Checkboxes(props) {
        _classCallCheck(this, Checkboxes);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleChange = function (e, i) {
            var onChange = _this.props.onChange;

            var options = _this.state.options;
            options[i].selected = !options[i].selected;
            _this.setState({
                options: options
            });
            onChange && onChange(options);
        };

        _this.state = {
            options: []
        };
        return _this;
    }

    Checkboxes.prototype.componentWillMount = function componentWillMount() {
        var options = this.props.options;

        this.state.options !== options && this.setState({ options: options });
    };

    Checkboxes.prototype.render = function render() {
        var _this2 = this;

        var _state$options = this.state.options,
            options = _state$options === undefined ? [] : _state$options;

        return (0, _preact.h)(
            'form',
            null,
            options && options.map(function (_ref, i) {
                var selected = _ref.selected,
                    label = _ref.label,
                    data = _ref.data;

                return (0, _preact.h)(
                    Label,
                    { key: i },
                    (0, _preact.h)(Checkbox, {
                        id: i,
                        selected: selected,
                        handleChange: _this2.handleChange,
                        data: data
                    }),
                    (0, _preact.h)(Checkmark, null),
                    (0, _preact.h)(
                        CheckboxLabelText,
                        null,
                        label
                    )
                );
            })
        );
    };

    return Checkboxes;
}(_preact.Component);

exports.default = Checkboxes;

var Checkbox = function (_Component2) {
    _inherits(Checkbox, _Component2);

    function Checkbox() {
        var _temp, _this3, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.handleChange = function (e) {
            var _this3$props = _this3.props,
                handleChange = _this3$props.handleChange,
                id = _this3$props.id;

            handleChange && id >= 0 && handleChange(e, id);
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            selected = _props.selected,
            data = _props.data;

        return (0, _preact.h)(Input, {
            onChange: this.handleChange,
            checked: selected,
            type: 'checkbox',
            value: data
        });
    };

    return Checkbox;
}(_preact.Component);