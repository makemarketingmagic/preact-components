'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Button = require('./Button.less');

var _Button2 = _interopRequireDefault(_Button);

var _material = require('material-design-lite/material');

var _material2 = _interopRequireDefault(_material);

var _MUIComponents = require('../common/MUIComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line no-unused-vars


var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Button.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            _props$Icon = _props.Icon,
            Icon = _props$Icon === undefined ? null : _props$Icon,
            _props$iconLeft = _props.iconLeft,
            iconLeft = _props$iconLeft === undefined ? false : _props$iconLeft,
            _props$iconRight = _props.iconRight,
            iconRight = _props$iconRight === undefined ? false : _props$iconRight,
            _props$secondary = _props.secondary,
            secondary = _props$secondary === undefined ? false : _props$secondary,
            _props$disabled = _props.disabled,
            disabled = _props$disabled === undefined ? false : _props$disabled;

        return (0, _preact.h)(
            _MUIComponents.MUIButton,
            {
                raised: true,
                primary: secondary,
                colored: !secondary,
                accent: !secondary,
                disabled: disabled
            },
            (0, _preact.h)(
                'div',
                { 'class': _Button2.default.buttonContent },
                iconLeft && Icon && (0, _preact.h)(Icon, { color: 'inherit' }),
                (0, _preact.h)(
                    'span',
                    { style: {
                            marginLeft: iconLeft ? 8 : 0,
                            marginRight: iconRight ? 8 : 0
                        } },
                    children
                ),
                iconRight && Icon && (0, _preact.h)(Icon, { color: 'inherit' })
            )
        );
    };

    return Button;
}(_preact.Component);

exports.default = Button;