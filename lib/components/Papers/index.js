'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n        margin-top: 28px;\n    '], ['\n        margin-top: 28px;\n    ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n        padding: 16px 0;\n    '], ['\n        padding: 16px 0;\n    ']);

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var animationLength = 250;

var PaperEl = _styledComponents2.default.div.withConfig({
    displayName: 'Papers__PaperEl'
})(['width:100%;padding:2px;display:flex;flex-direction:column;position:', ';', ';', ' transition:transform ', 'ms ease-in-out,z-index 1ms ease-in-out ', 'ms;top:0;opacity:', ';transform:', ';'], function (props) {
    return props.level === 0 ? 'relative' : 'absolute';
}, function (props) {
    return props.level === 0 ? 'margin-top: 48px' : 'margin-top: 0';
}, _scMixins.media.mobile(_templateObject), animationLength, animationLength, function (props) {
    return props.level <= 2 ? 1 : 0;
}, function (props) {
    return props.level === 1 ? 'translate(0, -16px) scaleX(.95)' : props.level >= 2 ? 'translate(0, -32px) scaleX(.9)' : props.level < 0 ? 'translateX(-100%)' : '';
});

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Papers__Container'
})(['z-index:3;background-color:', ';box-shadow:0 8px 16px 0 ', ',0 1px 2px 1px ', ';border-radius:16px;max-width:800px;width:100%;color:#323232;margin:0 auto;display:flex;flex-direction:column;justify-content:center;padding:32px 0;', ''], _scMixins.colors.white, (0, _polished.transparentize)(0.92, _scMixins.colors.black), (0, _polished.transparentize)(0.84, _scMixins.colors.black), _scMixins.media.mobile(_templateObject2));

var Papers = function (_Component) {
    _inherits(Papers, _Component);

    function Papers(props) {
        _classCallCheck(this, Papers);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.nextPage = function () {
            var pages = _this.props.pages,
                nextPage = _this.state.currentPage + 1 > pages.length ? 0 : _this.state.currentPage + 1;

            _this.setState({ currentPage: nextPage });
        };

        _this.pageRefs = [];
        _this.state = {
            currentPage: 0,
            totalPages: 0
        };
        return _this;
    }

    Papers.prototype.componentDidMount = function componentDidMount() {
        var _props$pages = this.props.pages,
            pages = _props$pages === undefined ? [] : _props$pages,
            papers = pages.length >= 2 ? 2 : pages.length - 1;

        this.setState({ papers: papers, totalPages: this.props.pages.length });
    };

    Papers.prototype.render = function render() {
        var _this2 = this;

        var pages = this.props.pages;

        return (0, _preact.h)(
            'div',
            { style: {
                    overflow: 'hidden',
                    paddingBottom: 16
                } },
            (0, _preact.h)(
                'div',
                { style: {
                        position: 'relative'
                    } },
                pages.map(function (_ref, key) {
                    var Component = _ref.component,
                        props = _ref.props;

                    return (0, _preact.h)(
                        PaperEl,
                        {
                            level: key - _this2.state.currentPage,
                            ref: function ref(_ref2) {
                                return _this2.pageRefs[key] = _ref2;
                            },
                            style: { zIndex: _this2.state.totalPages - key }
                        },
                        (0, _preact.h)(
                            Container,
                            null,
                            (0, _preact.h)(Component, _extends({ nextPage: _this2.nextPage }, props))
                        )
                    );
                })
            )
        );
    };

    return Papers;
}(_preact.Component);

exports.default = Papers;