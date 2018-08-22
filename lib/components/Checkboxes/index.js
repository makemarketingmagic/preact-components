'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Checkboxes = require('./Checkboxes.less');

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        var _props$options = this.props.options,
            options = _props$options === undefined ? [] : _props$options;

        return (0, _preact.h)(
            'form',
            null,
            options && options.map(function (_ref, i) {
                var label = _ref.label,
                    data = _ref.data;

                return (0, _preact.h)(
                    'label',
                    { 'class': _Checkboxes2.default.label, key: i },
                    (0, _preact.h)(Checkbox, {
                        id: i,
                        checked: _this2.state.options[i].selected,
                        handleChange: _this2.handleChange,
                        data: data
                    }),
                    (0, _preact.h)('div', { 'class': _Checkboxes2.default.checkmark }),
                    (0, _preact.h)(
                        'span',
                        { 'class': _Checkboxes2.default.labelText },
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

            handleChange && id && handleChange(e, id);
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            selected = _props.selected,
            data = _props.data;

        return (0, _preact.h)('input', {
            'class': _Checkboxes2.default.input,
            onChange: this.handleChange,
            checked: selected,
            type: 'checkbox',
            valud: data
        });
    };

    return Checkbox;
}(_preact.Component);