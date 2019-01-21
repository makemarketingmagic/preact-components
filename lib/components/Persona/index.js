'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n        padding: 0 32px;\n        flex-direction: column;\n        align-items: center;\n    '], ['\n        padding: 0 32px;\n        flex-direction: column;\n        align-items: center;\n    ']);

var _preact = require('preact');

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Tooltip = require('../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Persona__Container'
})(['display:flex;flex-direction:row;justify-content:center;padding:0 64px;', ''], _scMixins.media.mobile(_templateObject));

var Persona = function (_Component) {
    _inherits(Persona, _Component);

    function Persona(props) {
        _classCallCheck(this, Persona);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleTooltip = function () {
            _this.setState({ tooltipVisible: !_this.state.tooltipVisible });
        };

        _this.state = {
            tooltipVisible: true
        };
        return _this;
    }

    Persona.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            position = _props.position,
            message = _props.message,
            color = _props.color,
            imageUrl = _props.imageUrl,
            _props$markdown = _props.markdown,
            markdown = _props$markdown === undefined ? false : _props$markdown;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(_Avatar2.default, {
                imageUrl: imageUrl,
                name: name,
                color: color,
                onClick: this.toggleTooltip
            }),
            (0, _preact.h)(_Tooltip2.default, {
                name: name,
                position: position,
                message: message,
                color: color,
                markdown: markdown,
                open: this.state.tooltipVisible,
                onClose: this.toggleTooltip
            })
        );
    };

    return Persona;
}(_preact.Component);

exports.default = Persona;