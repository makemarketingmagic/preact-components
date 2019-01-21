'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n            display: none;\n        '], ['\n            display: none;\n        ']);

var _preact = require('preact');

var _CrossIcon = require('../icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

var _preactMarkdown = require('preact-markdown');

var _preactMarkdown2 = _interopRequireDefault(_preactMarkdown);

var _index = require('./../ExpandableMarkdownSection/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TooltipEl = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipEl'
})(['background:', ';border-color:', ';border-radius:4px;box-shadow:0 4px 8px 0 ', ',0 1px 2px 2px ', ';padding:16px 32px;display:flex;&::before{content:\'\';box-shadow:10px -10px 0 10px ', ',0 4px 8px 0 ', ',0 1px 2px 2px ', ';align-self:center;width:16px;height:16px;display:block;border-radius:4px;transform:rotate(45deg);background:', ';position:relative;left:-39px;top:4px;', '}'], _scMixins.colors.white, _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.92, _scMixins.colors.black), _scMixins.colors.white, (0, _polished.transparentize)(0.96, _scMixins.colors.black), (0, _polished.transparentize)(0.92, _scMixins.colors.black), _scMixins.colors.white, _scMixins.media.mobile(_templateObject));

var TooltipName = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipName'
})(['font-size:14px;line-height:17px;font-weight:600;']);

var TooltipPosition = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipPosition'
})(['font-size:12px;line-height:14px;text-transform:uppercase;color:', ';'], function (props) {
    return _scMixins.colors[props.color] || _scMixins.colors.black;
});

var TooltipMessage = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipMessage'
})(['font-size:12px;line-height:14px;margin-top:8px;']);

var TooltipMessageMarkdown = (0, _styledComponents2.default)(_preactMarkdown2.default).withConfig({
    displayName: 'Tooltip__TooltipMessageMarkdown'
})(['font-size:12px;line-height:14px;margin-top:8px;']);

var TooltipContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipContainer'
})(['display:flex;flex-direction:column;justify-content:center;transform-origin:left center;transition:transform 150ms ease-in;transform:', ';'], function (props) {
    return props.open ? 'scaleX(1)' : 'scaleX(0)';
});

var TooltipContents = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__TooltipContents'
})(['display:flex;flex-direction:row;']);

var CloseButton = _styledComponents2.default.div.withConfig({
    displayName: 'Tooltip__CloseButton'
})(['flex:0 0 8px;height:24px;cursor:pointer;']);

var CrossIconEl = (0, _styledComponents2.default)(_CrossIcon2.default).withConfig({
    displayName: 'Tooltip__CrossIconEl'
})(['fill:', ';'], function (props) {
    return _scMixins.colors[props.color] || _scMixins.colors.black;
});

var Tooltip = function (_Component) {
    _inherits(Tooltip, _Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleTooltip = function () {
            _this.setState({ visible: !_this.state.visible });
        };

        _this.state = {
            visible: props.visible || true
        };
        return _this;
    }

    Tooltip.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            position = _props.position,
            message = _props.message,
            color = _props.color,
            _props$closable = _props.closable,
            closable = _props$closable === undefined ? true : _props$closable,
            onClose = _props.onClose,
            open = _props.open,
            _props$markdown = _props.markdown,
            markdown = _props$markdown === undefined ? false : _props$markdown;

        return (0, _preact.h)(
            TooltipContainer,
            { open: onClose ? open : this.state.visible, 'class': 'notranslate' },
            (0, _preact.h)(
                TooltipEl,
                null,
                (0, _preact.h)(
                    TooltipContents,
                    null,
                    (0, _preact.h)(
                        'div',
                        null,
                        (0, _preact.h)(
                            TooltipName,
                            null,
                            name
                        ),
                        (0, _preact.h)(
                            TooltipPosition,
                            { color: color },
                            position
                        ),
                        markdown ? (0, _preact.h)(TooltipMessageMarkdown, { markdown: message, markupOpts: {
                                components: _index.components,
                                allowEvents: true
                            } }) : (0, _preact.h)(
                            TooltipMessage,
                            null,
                            message
                        )
                    ),
                    closable && (0, _preact.h)(
                        CloseButton,
                        { onClick: onClose ? onClose : this.toggleTooltip },
                        (0, _preact.h)(CrossIconEl, { color: color })
                    )
                )
            )
        );
    };

    return Tooltip;
}(_preact.Component);

exports.default = Tooltip;