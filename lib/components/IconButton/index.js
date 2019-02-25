'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonBack = _styledComponents2.default.button.withConfig({
    displayName: 'IconButton__ButtonBack'
})(['height:24px;width:24px;border:none;margin:0;padding:0;cursor:pointer;border-radius:50%;background-color:', ';'], function (props) {
    return props.secondary ? props.color : props.background;
});

var IconButton = function (_Component) {
    _inherits(IconButton, _Component);

    function IconButton() {
        var _arguments = arguments;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, IconButton);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClick = function () {
            var onClick = _this.props.onClick;

            onClick && onClick(_arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    IconButton.prototype.render = function render() {
        var _props = this.props,
            Icon = _props.Icon,
            _props$color = _props.color,
            color = _props$color === undefined ? _scMixins.colors.red : _props$color,
            title = _props.title,
            _props$secondary = _props.secondary,
            secondary = _props$secondary === undefined ? false : _props$secondary,
            _props$background = _props.background,
            background = _props$background === undefined ? _scMixins.colors.actionIncomplete : _props$background;

        return (0, _preact.h)(
            ButtonBack,
            { title: title, color: color, secondary: secondary, onClick: this.onClick, background: background },
            (0, _preact.h)(Icon, { color: secondary ? background : color, height: 16, width: 16 })
        );
    };

    return IconButton;
}(_preact.Component);

exports.default = IconButton;