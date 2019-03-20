'use strict';

exports.__esModule = true;
exports.Modal = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animationLength = 250;

var Overlay = _styledComponents2.default.div.withConfig({
    displayName: 'Modal__Overlay'
})(['display:flex;visibility:', ';opacity:', ';background:rgba(157,189,198,0.2);position:fixed;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;z-index:1030;transition:opacity ', 'ms ease-in-out;& > *{transition:all ', 'ms ease-in-out;transform:scale(', ');}'], function (props) {
    return props.open || props.animating ? 'visible' : 'hidden';
}, function (props) {
    return props.open ? 1 : 0;
}, animationLength, animationLength, function (props) {
    return props.open ? 1 : 0;
}),
    Container = _styledComponents2.default.div.withConfig({
    displayName: 'Modal__Container'
})(['z-index:3;background-color:', ';box-shadow:0 8px 16px 0 ', ',0 1px 2px 1px ', ';border-radius:4px;max-width:800px;max-height:90vh;width:100%;color:#323232;margin:0 auto;display:flex;flex-direction:column;justify-content:center;'], _scMixins.colors.white, (0, _polished.transparentize)(0.92, _scMixins.colors.black), (0, _polished.transparentize)(0.84, _scMixins.colors.black)),
    Title = _styledComponents2.default.div.withConfig({
    displayName: 'Modal__Title'
})(['color:', ';padding-top:28px;padding-bottom:20px;text-align:center;font-family:\'Montserrat\';font-style:normal;font-weight:normal;line-height:22px;font-size:18px;border-bottom:1px solid rgba(32,32,32,0.1);'], _scMixins.colors.red),
    ButtonSection = _styledComponents2.default.div.withConfig({
    displayName: 'Modal__ButtonSection'
})(['padding:32px 0;display:flex;justify-content:center;border-top:1px solid rgba(32,32,32,0.1);']),
    ScrollSection = _styledComponents2.default.div.withConfig({
    displayName: 'Modal__ScrollSection'
})(['overflow-y:scroll;padding-top:32px;&::-webkit-scrollbar-track{background-color:#F5F5F5;}&::-webkit-scrollbar{width:12px;background-color:#F5F5F5;}&::-webkit-scrollbar-thumb{background-color:', ';}'], _scMixins.colors.red);

var Modal = exports.Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onOverlayClick = function (e) {
            var onDialogClose = _this.props.onDialogClose;

            if (e.currentTarget === e.target) {
                onDialogClose && onDialogClose(e);
            }
        };

        _this.state = {
            animating: false
        };
        return _this;
    }

    Modal.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            _props$containerPrope = _props.containerProperties,
            containerProperties = _props$containerPrope === undefined ? {} : _props$containerPrope,
            open = _props.open,
            onDialogClose = _props.onDialogClose,
            isAnimating = _props.isAnimating,
            _props$title = _props.title,
            title = _props$title === undefined ? 'Modal Title' : _props$title,
            _props$buttons = _props.buttons,
            buttons = _props$buttons === undefined ? [{ text: 'Close', onClick: this.props.onDialogClose }] : _props$buttons;


        return (0, _preact.h)(
            Overlay,
            { open: open, isAnimating: false, onClick: this.onOverlayClick },
            (0, _preact.h)(
                Container,
                null,
                (0, _preact.h)(
                    Title,
                    null,
                    title
                ),
                (0, _preact.h)(
                    ScrollSection,
                    { style: containerProperties },
                    children
                ),
                (0, _preact.h)(
                    ButtonSection,
                    null,
                    buttons.map(function (_ref) {
                        var text = _ref.text,
                            rest = _objectWithoutProperties(_ref, ['text']);

                        return (0, _preact.h)(
                            _Button2.default,
                            rest,
                            text
                        );
                    })
                )
            )
        );
    };

    return Modal;
}(_preact.Component);