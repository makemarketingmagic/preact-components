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

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Switch__Container'
})(['margin-top:-20px;']);

var Checkbox = _styledComponents2.default.input.withConfig({
    displayName: 'Switch__Checkbox'
})(['height:0;width:0;visibility:hidden;']);
var Label = _styledComponents2.default.label.withConfig({
    displayName: 'Switch__Label'
})(['cursor:pointer;text-indent:-9999px;width:48px;height:32px;background:', ';display:block;border-radius:16px;position:relative;transition:0.3s;&:after{content:\'\';position:absolute;top:2px;left:2px;width:28px;height:28px;background:#fff;border-radius:14px;transition:0.3s;}', ':checked + &{background:', ';}', ':checked + &:after{left:calc(100% - 2px);transform:translateX(-100%);}&:active:after{width:36px;}'], _scMixins.colors.grey, Checkbox, _scMixins.colors.red, Checkbox);

var Switch = function (_Component) {
    _inherits(Switch, _Component);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Switch.prototype.render = function render() {
        var _props = this.props,
            _props$title = _props.title,
            title = _props$title === undefined ? 'test' : _props$title,
            onChange = _props.onChange,
            value = _props.value;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(Checkbox, { checked: value, onChange: onChange, type: 'checkbox', id: title }),
            (0, _preact.h)(
                Label,
                { htmlFor: title },
                title
            )
        );
    };

    return Switch;
}(_preact.Component);

exports.default = Switch;