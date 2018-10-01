'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _CrossIcon = require('../icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animationLength = 250;

var OverlayButton = (0, _styledComponents2.default)(_Button2.default).withConfig({
    displayName: 'FullScreenOverlay__OverlayButton'
})(['z-index:2;']);

var CloseButton = _styledComponents2.default.div.withConfig({
    displayName: 'FullScreenOverlay__CloseButton'
})(['position:absolute;top:25px;right:25px;line-height:8px;padding:8px;cursor:pointer;border-radius:50%;background-color:', ';&:hover{background-color:', ';}'], (0, _polished.transparentize)(1, _scMixins.colors.grey), (0, _polished.transparentize)(.94, _scMixins.colors.grey));

var Overlay = _styledComponents2.default.div.withConfig({
    displayName: 'FullScreenOverlay__Overlay'
})(['display:flex;visibility:', ';opacity:', ';background-color:rgba(255,255,255,0.85);position:fixed;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;z-index:1030;transition:opacity ', 'ms ease-in-out;& > *{transition:all ', 'ms ease-in-out;transform:scale(', ');}'], function (props) {
    return props.open || props.animating ? 'visible' : 'hidden';
}, function (props) {
    return props.open ? 1 : 0;
}, animationLength, animationLength, function (props) {
    return props.open ? 1 : 0;
});

var FullScreenOverlay = function (_Component) {
    _inherits(FullScreenOverlay, _Component);

    function FullScreenOverlay(props) {
        _classCallCheck(this, FullScreenOverlay);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleOverlay = function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(_this.finishedAnimating, animationLength);
            _this.setState({ open: !_this.state.open, animating: true });
        };

        _this.finishedAnimating = function () {
            _this.setState({ animating: false });
        };

        _this.timeout = null;
        _this.state = { open: false, animating: false };

        return _this;
    }

    FullScreenOverlay.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            _props$buttonText = _props.buttonText,
            buttonText = _props$buttonText === undefined ? "Open Overlay" : _props$buttonText;

        var childrenWithProps = children.map(function (child) {
            return (0, _preact.cloneElement)(child, { toggleOverlay: _this2.toggleOverlay });
        });
        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                Overlay,
                { open: this.state.open, animating: this.state.animating },
                (0, _preact.h)(
                    CloseButton,
                    { onClick: this.toggleOverlay },
                    (0, _preact.h)(_CrossIcon2.default, null)
                ),
                childrenWithProps
            ),
            (0, _preact.h)(
                OverlayButton,
                { onClick: this.toggleOverlay },
                'Open Overlay'
            )
        );
    };

    return FullScreenOverlay;
}(_preact.Component);

exports.default = FullScreenOverlay;