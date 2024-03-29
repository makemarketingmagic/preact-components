'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _material = require('material-design-lite/material');

var _material2 = _interopRequireDefault(_material);

var _MUIComponents = require('../common/MUIComponents');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint-disable-next-line no-unused-vars


var ButtonContent = _styledComponents2.default.div.withConfig({
    displayName: 'Button__ButtonContent'
})(['height:100%;display:flex;flex-direction:row;align-items:center;']);

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Button.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            _props$onClick = _props.onClick,
            _onClick = _props$onClick === undefined ? null : _props$onClick,
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

        var color = secondary ? _scMixins.colors.red : _scMixins.colors.white;
        return (0, _preact.h)(
            _MUIComponents.MUIButton,
            {
                raised: true,
                primary: secondary,
                colored: !secondary,
                accent: !secondary,
                disabled: disabled,
                onClick: function onClick(e) {
                    e.preventDefault();
                    _onClick && _onClick();
                }
            },
            (0, _preact.h)(
                ButtonContent,
                null,
                iconLeft && Icon && (0, _preact.h)(
                    'span',
                    { style: { display: 'flex' } },
                    (0, _preact.h)(Icon, { color: color })
                ),
                (0, _preact.h)(
                    'span',
                    { style: {
                            textAlign: 'center',
                            width: '100%',
                            marginLeft: iconLeft ? 8 : 0,
                            marginRight: iconRight ? 8 : 0
                        } },
                    children
                ),
                iconRight && Icon && (0, _preact.h)(
                    'span',
                    { style: { display: 'flex' } },
                    (0, _preact.h)(Icon, { color: color })
                )
            )
        );
    };

    return Button;
}(_preact.Component);

exports.default = Button;