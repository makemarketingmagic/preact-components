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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    return props.level < -1 ? 0 : props.level <= 2 ? 1 : 0;
}, function (props) {
    return props.level === 1 ? 'translate(0, -16px) scaleX(.95)' : props.level >= 2 ? 'translate(0, -32px) scaleX(.9)' : props.level < 0 ? 'translateX(-110%)' : '';
});

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Papers__Container'
})(['z-index:3;background-color:', ';box-shadow:0 8px 16px 0 ', ',0 1px 2px 1px ', ';border-radius:16px;max-width:800px;width:100%;color:#323232;margin:0 auto;display:flex;flex-direction:column;justify-content:center;padding:32px 0;', ''], _scMixins.colors.white, (0, _polished.transparentize)(0.92, _scMixins.colors.black), (0, _polished.transparentize)(0.84, _scMixins.colors.black), _scMixins.media.mobile(_templateObject2));

var Papers = function (_Component) {
    _inherits(Papers, _Component);

    function Papers(props) {
        var _this2 = this;

        _classCallCheck(this, Papers);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.nextPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var pages, _this$props, fetchCards, _this$props$toggleOve, toggleOverlay, dismissedPages, nextPage, newPages, combinedPages, papers;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            pages = _this.state.pages, _this$props = _this.props, fetchCards = _this$props.fetchCards, _this$props$toggleOve = _this$props.toggleOverlay, toggleOverlay = _this$props$toggleOve === undefined ? function () {} : _this$props$toggleOve, dismissedPages = _this.state.dismissedPages + 1, nextPage = _this.state.currentPage + 1 > pages.length ? 0 : _this.state.currentPage + 1;

                            _this.setState({ currentPage: nextPage, dismissedPages: dismissedPages });

                            if (!(_this.state.totalPages - _this.state.currentPage <= 5)) {
                                _context.next = 9;
                                break;
                            }

                            _context.next = 5;
                            return fetchCards();

                        case 5:
                            newPages = _context.sent;
                            combinedPages = [].concat(_this.state.pages, newPages);
                            papers = combinedPages.length >= 2 ? 2 : combinedPages.length - 1;

                            _this.setState({
                                pages: combinedPages, papers: papers, totalPages: combinedPages.length
                            });

                        case 9:
                            if (_this.isLastPage()) {
                                toggleOverlay();
                            }

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.isLastPage = function () {
            return _this.state.currentPage === _this.state.totalPages;
        };

        _this.pageRefs = [];
        _this.state = {
            currentPage: 0,
            totalPages: 0,
            dismissedPages: 0,
            pages: []
        };
        return _this;
    }

    Papers.prototype.componentDidMount = function componentDidMount() {
        var _props$pages = this.props.pages,
            pages = _props$pages === undefined ? [] : _props$pages,
            papers = pages.length >= 2 ? 2 : pages.length - 1;

        this.setState({
            papers: papers,
            pages: pages,
            totalPages: this.props.pages.length
        });
    };

    Papers.prototype.render = function render() {
        var _this3 = this;

        var start = void 0,
            end = void 0,
            currentIndex = void 0,
            pages = void 0;
        var dismissed = this.state.dismissedPages,
            total = this.state.totalPages,
            limit = 10;
        if (dismissed === 0) {
            start = 0;
            end = 10;
            currentIndex = 0;
        } else if (dismissed > 0) {
            if (total - dismissed >= limit) {
                start = dismissed - 1;
                currentIndex = 1;
                end = start + 10;
            } else if (total < limit) {
                start = 0;
                end = 10;
                currentIndex = dismissed;
            } else {
                currentIndex = limit - (total - dismissed);
                start = dismissed - currentIndex;
                end = start + 10;
            }
        }
        pages = this.state.pages.slice(start, end);
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
                pages.map(function (_ref2, key) {
                    var Component = _ref2.component,
                        props = _ref2.props;

                    return (0, _preact.h)(
                        PaperEl,
                        {
                            key: start + key,
                            test: start + key,
                            level: key - currentIndex,
                            ref: function ref(_ref3) {
                                return _this3.pageRefs[key] = _ref3;
                            },
                            style: { zIndex: _this3.state.totalPages - key }
                        },
                        (0, _preact.h)(
                            Container,
                            null,
                            (0, _preact.h)(Component, _extends({ nextPage: _this3.nextPage }, props))
                        )
                    );
                })
            )
        );
    };

    return Papers;
}(_preact.Component);

exports.default = Papers;