'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Annotator = require('../../../../components/Annotator');

var _Annotator2 = _interopRequireDefault(_Annotator);

var _scMixins = require('../../../../components/common/scMixins');

var _index = require('./../../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../../components/Tabs/index');

var _MockWebsite = require('./MockWebsite');

var _MockWebsite2 = _interopRequireDefault(_MockWebsite);

var _Button = require('../../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _index4 = require('./../../../../components/Modal/index');

var _preactHelmet = require('preact-helmet');

var _preactHelmet2 = _interopRequireDefault(_preactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
*/

var FeedbackAreaEl = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__FeedbackAreaEl'
})(['padding:15px;margin-bottom:20px;background-color:', ';color:', ';border-color:', ';'], function (_ref) {
    var level = _ref.level;

    switch (level) {
        case 1:
            return '#f2dede';
        case 2:
            return '#fcf8e3';
    }
}, function (_ref2) {
    var level = _ref2.level;

    switch (level) {
        case 1:
            return '#a94442';
        case 2:
            return '#8a6d3b';
    }
}, function (_ref3) {
    var level = _ref3.level;

    switch (level) {
        case 1:
            return '#ebccd1';
        case 2:
            return '#faebcc';
    }
}),
    VideoContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__VideoContainer'
})(['display:flex;flex-direction:row;justify-content:center;margin-bottom:32px;']),
    ContentContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__ContentContainer'
})(['display:flex;flex-direction:row;']),
    LeftColumn = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__LeftColumn'
})(['flex:1;padding:32px;border:1px solid rgba(32,32,32,0.1);']),
    RightColumn = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__RightColumn'
})(['flex:1;border:1px solid rgba(32,32,32,0.1);']),
    Section = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__Section'
})(['margin-bottom:32px;']),
    SectionTitle = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__SectionTitle'
})(['font-size:24px;line-height:32px;color:', ';margin-bottom:16px;'], _scMixins.colors.text),
    FeedbackLabel = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__FeedbackLabel'
})(['margin-top:14px;line-height:16px;font-size:12px;']),
    JournalistContent = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__JournalistContent'
})(['line-height:24px;font-size:14px;color:', ';padding-left:14px;border-left:2px solid ', ';& > img{max-width:80%;}'], _scMixins.colors.text, _scMixins.colors.text),
    Sticky = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__Sticky'
})(['position:-webkit-sticky;position:sticky;top:16px;']),
    IFrameEl = _styledComponents2.default.iframe.withConfig({
    displayName: 'Manager__IFrameEl'
})(['width:100%;height:90vh;border:none;']),
    ButtonContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__ButtonContainer'
})(['display:flex;flex-direction:row;justify-content:flex-end;margin:16px 0;& > button{margin:4px;}']);

var AHAManager = function (_Component) {
    _inherits(AHAManager, _Component);

    function AHAManager(props) {
        var _this2 = this,
            _this$state4;

        _classCallCheck(this, AHAManager);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.setModal = function (type, value) {
            var update = {};
            if (typeof _this.state[type + 'AhaModal'] === 'boolean') {
                update[type + 'AhaModal'] = value;
            }
            _this.setState(update);
        };

        _this.setReason = function (value) {
            _this.setState({ cancelReason: value });
        };

        _this.cancelAha = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var cancelAha, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cancelAha = _this.props.events.cancelAha;

                            if (!(cancelAha && _this.state.cancelReason !== '')) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 4;
                            return cancelAha(_this.state.cancelReason);

                        case 4:
                            result = _context.sent;
                            return _context.abrupt('return', result);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.approveAha = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var approveAha, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            approveAha = _this.props.events.approveAha;

                            if (!approveAha) {
                                _context2.next = 6;
                                break;
                            }

                            _context2.next = 4;
                            return approveAha();

                        case 4:
                            result = _context2.sent;
                            return _context2.abrupt('return', result);

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));
        _this.submitFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var submitFeedback, _this$state, feedback, _this$state$sending$a, aha_sending_feedbackround, result;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            submitFeedback = _this.props.events.submitFeedback, _this$state = _this.state, feedback = _this$state.feedback, _this$state$sending$a = _this$state.sending.aha_sending_feedbackround, aha_sending_feedbackround = _this$state$sending$a === undefined ? '' : _this$state$sending$a;

                            if (!submitFeedback) {
                                _context3.next = 6;
                                break;
                            }

                            _context3.next = 4;
                            return submitFeedback(feedback, aha_sending_feedbackround);

                        case 4:
                            result = _context3.sent;
                            return _context3.abrupt('return', result);

                        case 6:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        }));

        _this.renderTabs = function (translations) {
            var _this$state2 = _this.state,
                templateUrl = _this$state2.templateUrl,
                emailHighlights = _this$state2.emailHighlights,
                lpHighlights = _this$state2.lpHighlights,
                formentry = _this$state2.formentry,
                brand = _this$state2.brand;

            var tabs = [];
            if (formentry) {
                tabs.push((0, _preact.h)(
                    _index3.Tab,
                    { label: translations.getLL('WEB', 'Web') },
                    (0, _preact.h)(_MockWebsite2.default, { translations: translations, brandLogo: brand.brand_logo_image || '', ahaForm: formentry })
                ));
            }
            if (formentry && templateUrl && templateUrl.iframeLink) {
                tabs.push((0, _preact.h)(
                    _index3.Tab,
                    { label: translations.getLL('EMAIL', 'Email') },
                    (0, _preact.h)(EmailTemplate, { ahaForm: formentry, iframeContent: templateUrl ? templateUrl.iframeContent : '', templateUrl: templateUrl ? templateUrl.iframeLink : '' })
                ));
            }
            return tabs;
        };

        _this.isSynchronised = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _ref8, sending, prevAha;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this.loadAHADetails();

                        case 2:
                            _ref8 = _context4.sent;
                            sending = _ref8.sending;
                            prevAha = _this.state.aha;

                            if (sending.aha_sending_submitted_more_than_once === '1') {
                                if (!_this.state.flags.outOfSync) _this.setState({ flags: _extends({}, _this.state.flags, { outOfSync: true }) });
                            }

                        case 6:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this2);
        }));
        _this.synchronise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var syncHighlighterFeedback, result, details;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            syncHighlighterFeedback = _this.props.events.syncHighlighterFeedback;
                            _context5.next = 3;
                            return syncHighlighterFeedback(_this.state.highlights[0] ? _this.state.highlights[0].round || 1 : 1);

                        case 3:
                            result = _context5.sent;
                            _context5.next = 6;
                            return _this.loadAHADetails();

                        case 6:
                            details = _context5.sent;

                            if (details.sending.aha_sending_submitted_more_than_once === '0') {
                                _this.setState({ flags: _extends({}, _this.state.flags, { outOfSync: false }) });
                            }
                            _context5.next = 10;
                            return _this.getAHADetails();

                        case 10:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        }));

        _this.addHighlight = function (type) {
            return function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(highlight) {
                    var highlightType, update, highlights, i, target, updateHighlight, aha_sending_feedbackround, result;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    if (!(highlight.start === highlight.end || highlight.content === '')) {
                                        _context6.next = 2;
                                        break;
                                    }

                                    return _context6.abrupt('return');

                                case 2:
                                    highlightType = type + 'Highlights', update = {}, highlights = _this.state[highlightType], i = highlights.push(highlight), target = type === 'email' ? 'email_highlights' : 'page_highlights';

                                    update[highlightType] = highlights;
                                    updateHighlight = _this.props.events.updateHighlight, aha_sending_feedbackround = _this.state.sending.aha_sending_feedbackround;
                                    result = void 0;

                                    if (!updateHighlight) {
                                        _context6.next = 10;
                                        break;
                                    }

                                    _context6.next = 9;
                                    return updateHighlight(highlights, target, aha_sending_feedbackround);

                                case 9:
                                    result = _context6.sent;

                                case 10:
                                    _this.setState(update);
                                    return _context6.abrupt('return', i);

                                case 12:
                                case 'end':
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, _this2);
                }));

                return function (_x) {
                    return _ref10.apply(this, arguments);
                };
            }();
        };

        _this.updateHighlight = function (type) {
            return function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(comment, i) {
                    var highlightType, update, highlights, target, updateHighlight, aha_sending_feedbackround, result;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    highlightType = type + 'Highlights', update = {}, highlights = _this.state[highlightType], target = type === 'email' ? 'email_highlights' : 'page_highlights';
                                    updateHighlight = _this.props.events.updateHighlight, aha_sending_feedbackround = _this.state.sending.aha_sending_feedbackround;

                                    highlights[i].comment = comment;
                                    update[highlightType] = highlights;
                                    result = void 0;

                                    if (!updateHighlight) {
                                        _context7.next = 9;
                                        break;
                                    }

                                    _context7.next = 8;
                                    return updateHighlight(highlights, target, aha_sending_feedbackround);

                                case 8:
                                    result = _context7.sent;

                                case 9:

                                    _this.setState(update);
                                    return _context7.abrupt('return', result);

                                case 11:
                                case 'end':
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, _this2);
                }));

                return function (_x2, _x3) {
                    return _ref11.apply(this, arguments);
                };
            }();
        };

        _this.deleteHighlight = function (type) {
            return function () {
                var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(i) {
                    var highlightType, update, highlights, target, updateHighlight, aha_sending_feedbackround, result;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    highlightType = type + 'Highlights', update = {}, highlights = _this.state[highlightType], target = type === 'email' ? 'email_highlights' : 'page_highlights';
                                    updateHighlight = _this.props.events.updateHighlight, aha_sending_feedbackround = _this.state.sending.aha_sending_feedbackround;

                                    highlights.splice(i, 1);
                                    update[highlightType] = highlights;
                                    result = void 0;

                                    if (!updateHighlight) {
                                        _context8.next = 9;
                                        break;
                                    }

                                    _context8.next = 8;
                                    return updateHighlight(highlights, target, aha_sending_feedbackround);

                                case 8:
                                    result = _context8.sent;

                                case 9:
                                    _this.setState(update);
                                    return _context8.abrupt('return', result);

                                case 11:
                                case 'end':
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, _this2);
                }));

                return function (_x4) {
                    return _ref12.apply(this, arguments);
                };
            }();
        };

        _this.updateFeedback = function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(field, value) {
                var _this$state3, feedback, aha_sending_feedbackround, updateFeedbackEntry, result;

                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _this$state3 = _this.state, feedback = _this$state3.feedback, aha_sending_feedbackround = _this$state3.sending.aha_sending_feedbackround;
                                updateFeedbackEntry = _this.props.events.updateFeedbackEntry;

                                if (!(value === '')) {
                                    _context10.next = 4;
                                    break;
                                }

                                return _context10.abrupt('return');

                            case 4:
                                if (!field) {
                                    field = 'general';
                                }
                                feedback[field] = value;
                                result = void 0;

                                _this.setState({ feedback: feedback });
                                if (updateFeedbackEntry) {
                                    if (_this.backendTimeout) clearTimeout(_this.backendTimeout);
                                    _this.backendTimeout = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                            while (1) {
                                                switch (_context9.prev = _context9.next) {
                                                    case 0:
                                                        _context9.next = 2;
                                                        return updateFeedbackEntry(feedback, aha_sending_feedbackround);

                                                    case 2:
                                                        result = _context9.sent;

                                                    case 3:
                                                    case 'end':
                                                        return _context9.stop();
                                                }
                                            }
                                        }, _callee9, _this2);
                                    })));
                                }
                                return _context10.abrupt('return', result);

                            case 10:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, _this2);
            }));

            return function (_x5, _x6) {
                return _ref13.apply(this, arguments);
            };
        }();

        _this.loadAHADetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var getAHADetails, details;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            getAHADetails = _this.props.events.getAHADetails;

                            if (!getAHADetails) {
                                _context11.next = 7;
                                break;
                            }

                            _context11.next = 4;
                            return getAHADetails();

                        case 4:
                            _context11.t0 = _context11.sent;
                            _context11.next = 8;
                            break;

                        case 7:
                            _context11.t0 = {};

                        case 8:
                            details = _context11.t0;
                            return _context11.abrupt('return', details);

                        case 10:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, _this2);
        }));
        _this.loadAHAManagement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var getAHAManagement, details;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            getAHAManagement = _this.props.events.getAHAManagement;

                            if (!getAHAManagement) {
                                _context12.next = 7;
                                break;
                            }

                            _context12.next = 4;
                            return getAHAManagement();

                        case 4:
                            _context12.t0 = _context12.sent;
                            _context12.next = 8;
                            break;

                        case 7:
                            _context12.t0 = {};

                        case 8:
                            details = _context12.t0;
                            return _context12.abrupt('return', {
                                aha: details.aha || {},
                                formentry: details.ahaForm || {},
                                feedback: details.newFeedbackRound || {},
                                brand: details.brand || {},
                                all_journalists: details.all_journalists || {}
                            });

                        case 10:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, _this2);
        }));

        _this.getAHADetails = function () {
            // getAHADetails: this.getAHADetails,
            //     getHighlighterFeedback: this.getHighlighterFeedback,
            //     loadEmailTemplate: this.loadEmailTemplate
            var SENDING_STATES = _this.props.SENDING_STATES;

            var notReady = false,
                feedbackAlreadyGiven = false,
                alreadyApproved = false,
                cancelled = false;
            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var _this$props$events, getHighlighterFeedback, loadEmailTemplate, details, highlights, templates, latestHighlights;

                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                _this$props$events = _this.props.events, getHighlighterFeedback = _this$props$events.getHighlighterFeedback, loadEmailTemplate = _this$props$events.loadEmailTemplate;
                                _context13.next = 3;
                                return _this.loadAHAManagement();

                            case 3:
                                details = _context13.sent;

                                if (details.aha.aha_sending_status === SENDING_STATES.ACTIVE.toString() || details.aha.aha_sending_status === SENDING_STATES.INACTIVE.toString()) {
                                    notReady = true;
                                } else if (details.aha.aha_sending_status === SENDING_STATES.FEEDBACK.toString()) {
                                    feedbackAlreadyGiven = true;
                                } else if (details.aha.aha_sending_status == SENDING_STATES.APPROVED.toString() || details.aha.aha_sending_status == SENDING_STATES.PLANNED.toString() || details.aha.aha_sending_status == SENDING_STATES.SENT.toString() || details.aha.aha_sending_status == SENDING_STATES.SMR_SENT.toString()) {
                                    alreadyApproved = true;
                                } else if (details.aha.aha_sending_status == SENDING_STATES.CANCELLED.toString()) {
                                    cancelled = true;
                                }

                                if (!getHighlighterFeedback) {
                                    _context13.next = 11;
                                    break;
                                }

                                _context13.next = 8;
                                return getHighlighterFeedback();

                            case 8:
                                _context13.t0 = _context13.sent;
                                _context13.next = 12;
                                break;

                            case 11:
                                _context13.t0 = {};

                            case 12:
                                highlights = _context13.t0;

                                if (!loadEmailTemplate) {
                                    _context13.next = 19;
                                    break;
                                }

                                _context13.next = 16;
                                return loadEmailTemplate();

                            case 16:
                                _context13.t1 = _context13.sent;
                                _context13.next = 20;
                                break;

                            case 19:
                                _context13.t1 = {};

                            case 20:
                                templates = _context13.t1;
                                latestHighlights = highlights[0] || {
                                    body: { highlights: [] },
                                    email: { highlights: [] }
                                };


                                if (!details.feedback) details.feedback = {};
                                _this.setState({
                                    loading: false,
                                    feedback: details.feedback,
                                    brand: details.brand,
                                    formentry: details.formentry,
                                    highlights: highlights,
                                    lpHighlights: latestHighlights.body.highlights,
                                    emailHighlights: latestHighlights.email.highlights,
                                    templateUrl: templates,
                                    all_journalists: details.all_journalists,
                                    sending: details.aha,
                                    flags: _extends({}, _this.state.flags, {
                                        notReady: notReady,
                                        alreadyApproved: alreadyApproved,
                                        feedbackAlreadyGiven: feedbackAlreadyGiven,
                                        cancelled: cancelled
                                    })
                                });

                            case 24:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, _this2);
            })));
        };

        _this.backendTimeout = null;
        _this.state = (_this$state4 = {
            loading: false,
            lpHighlights: [],
            emailHighlights: [],
            feedback: {
                general: '',
                subject: '',
                body: '',
                social: ''
            },
            all_journalists: {},
            brand: {}
        }, _this$state4['feedback'] = {}, _this$state4.formentry = {}, _this$state4.sending = {}, _this$state4.templates = {}, _this$state4.templateUrl = {}, _this$state4.flags = {
            outOfSync: false,
            notReady: false,
            feedbackAlreadyGiven: false,
            alreadyApproved: false,
            cancelled: false
        }, _this$state4.cancelReason = '', _this$state4.cancelAhaModal = false, _this$state4.submitAhaModal = false, _this$state4.approveAhaModal = false, _this$state4);
        return _this;
    }

    AHAManager.prototype.componentDidMount = function componentDidMount() {
        var _this3 = this;

        // let { AHAManagement: { all_journalists, brand, feedback, formentry, sending, templates } } = this.props
        // this.setState({
        //     all_journalists,
        //     brand,
        //     feedback,
        //     formentry,
        //     sending,
        //     templates
        // })
        this.getAHADetails();
        this.isSynchronised();
        clearInterval(this.syncInterval);
        this.syncInterval = setInterval(function () {
            _this3.isSynchronised();
        }, 10000);
    };

    AHAManager.prototype.render = function render() {
        var _this4 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            loading = _state.loading,
            templateUrl = _state.templateUrl,
            emailHighlights = _state.emailHighlights,
            lpHighlights = _state.lpHighlights,
            formentry = _state.formentry,
            brand = _state.brand,
            flags = _state.flags;

        translations.getLL = function (label, fallback) {
            var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var string = translations.getTranslation(label, fallback);
            var re = /(%v\d*)/ig;
            var isString = true;
            var result = [];
            string = string.split(re);
            for (var i = 0; i < string.length; i++) {
                var stringFragment = string[i];
                var match = /%v(\d*)/ig.exec(stringFragment);
                if (match) {
                    var index = parseInt(match[1]);
                    if (values[index - 1].nodeName) {
                        isString = false;
                    }
                    result.push(values[index - 1]);
                } else {
                    result.push(stringFragment);
                }
            }
            return isString ? result.join('') : result;
        };
        translations.getLLMarked = function (label, fallback) {
            var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var translation = translations.getLL(label, fallback, values);
            if (typeof translation === 'string') {
                return (0, _preact.h)('span', { dangerouslySetInnerHTML: { __html: (0, _marked2.default)(translation, { sanitize: true }) } });
            }
            return translation;
        };
        return loading ? (0, _preact.h)('div', null) : (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(_preactHelmet2.default, { title: translations.getLL('AHA_FEEDBACK', 'AHA Feedback') + ' | WOO' }),
            (0, _preact.h)(
                'div',
                null,
                Object.entries(flags).map(function (_ref18) {
                    var key = _ref18[0],
                        value = _ref18[1];

                    return value ? (0, _preact.h)(FeedbackArea, {
                        type: key,
                        translations: translations,
                        events: {
                            synchronise: _this4.synchronise
                        }
                    }) : null;
                })
            ),
            (0, _preact.h)(
                VideoContainer,
                null,
                (0, _preact.h)('iframe', { 'class': 'embed-responsive-item', width: '560', height: '315', src: translations.getLL('AHA_FEEDBACK_VIDEO_SRC', 'https://www.youtube.com/embed/pbAn6vJsVPA?rel=0'),
                    frameborder: '0', gesture: 'media', allow: 'encrypted-media', allowfullscreen: true })
            ),
            (0, _preact.h)(
                ContentContainer,
                null,
                (0, _preact.h)(
                    LeftColumn,
                    null,
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("GENERAL_REMARKS", "General Remarks")
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('', val);
                            }, field: '', translations: translations, value: this.state.feedback.general || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("EMAIL_SUBJECT", "Email Subject"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_onderwerp
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('subject', val);
                            }, field: 'subject', translations: translations, value: this.state.feedback.subject || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("EMAIL_PREHEADER", "Email Preheader"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_emailpreheader
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('preheader', val);
                            }, field: 'preheader', translations: translations, value: this.state.feedback.preheader || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("EMAIL_TITLE", 'Email Title'),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_emailtitel
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('emailTitle', val);
                            }, field: 'emailTitle', translations: translations, value: this.state.feedback.emailTitle || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("EMAIL_BODY_TEXT", "Email Body Text"),
                            ':'
                        ),
                        (0, _preact.h)(
                            FeedbackLabel,
                            null,
                            translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')
                        ),
                        (0, _preact.h)('br', null),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            (0, _preact.h)(_Annotator2.default, { text: formentry.aha_form_entrys_emailbodytekst_raw, readOnly: flags.notReady, highlights: emailHighlights, addHighlight: this.addHighlight('email'), deleteHighlight: this.deleteHighlight('email'), updateHighlight: this.updateHighlight('email') })
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('emailBody', val);
                            }, field: 'emailBody', translations: translations, value: this.state.feedback.emailBody || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("EMAIL_BUTTON_TEXT", "Email Button Text"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_emailbuttontekst
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('buttonText', val);
                            }, field: 'buttonText', translations: translations, value: this.state.feedback.buttonText || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("IMAGE", "Image"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            (0, _preact.h)('img', { src: formentry.aha_form_entrys_lpbeeld })
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('image', val);
                            }, field: 'image', translations: translations, value: this.state.feedback.image || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("PAGE_TITLE", "Page Title"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_paginatitel
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('pageTitle', val);
                            }, field: 'pageTitle', translations: translations, value: this.state.feedback.pageTitle || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("BODY_TEXT_WEBSITE", "Body Text Website"),
                            ':'
                        ),
                        (0, _preact.h)(
                            FeedbackLabel,
                            null,
                            translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')
                        ),
                        (0, _preact.h)('br', null),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            (0, _preact.h)(_Annotator2.default, { text: formentry.aha_form_entrys_lpbodytekst_raw, readOnly: flags.notReady, highlights: lpHighlights, addHighlight: this.addHighlight('lp'), deleteHighlight: this.deleteHighlight('lp'), updateHighlight: this.updateHighlight('lp') })
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('pageBody', val);
                            }, field: 'pageBody', translations: translations, value: this.state.feedback.pageBody || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("META_TITLE", "Meta Title"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_lpmetatitel
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('metaTitle', val);
                            }, field: 'metaTitle', translations: translations, value: this.state.feedback.metaTitle || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("META_TEXT", "Meta Text"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_lpmetatekst
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('metaText', val);
                            }, field: 'metaText', translations: translations, value: this.state.feedback.metaText || '' })
                    ),
                    (0, _preact.h)(
                        Section,
                        null,
                        (0, _preact.h)(
                            SectionTitle,
                            null,
                            translations.getLL("SOCIAL_SHARING_TEXT", "Social Sharing Text"),
                            ':'
                        ),
                        (0, _preact.h)(
                            JournalistContent,
                            null,
                            formentry.aha_form_entrys_dtSocialMediaReminder
                        ),
                        (0, _preact.h)(FeedbackSection, { disabled: flags.notReady, onChange: function onChange(val) {
                                return _this4.updateFeedback('social', val);
                            }, field: 'social', translations: translations, value: this.state.feedback.social || '' })
                    )
                ),
                (0, _preact.h)(
                    RightColumn,
                    null,
                    (0, _preact.h)(
                        Sticky,
                        null,
                        (0, _preact.h)(
                            _index3.Tabs,
                            { index: 0 },
                            this.renderTabs(translations)
                        )
                    )
                )
            ),
            (0, _preact.h)(
                ButtonContainer,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        secondary: true,
                        disabled: flags.notReady,
                        onClick: function onClick() {
                            return _this4.setModal('submit', true);
                        }
                    },
                    translations.getLL('SUBMIT_FEEDBACK', 'Submit AHAH Feedback')
                ),
                (0, _preact.h)(
                    _Button2.default,
                    {
                        secondary: true,
                        disabled: flags.notReady,
                        onClick: function onClick() {
                            return _this4.setModal('approve', true);
                        }
                    },
                    translations.getLL('APPROVE_SENDING', 'Approve AHA')
                ),
                (0, _preact.h)(
                    _Button2.default,
                    {
                        disabled: flags.notReady,
                        onClick: function onClick() {
                            return _this4.setModal('cancel', true);
                        }
                    },
                    translations.getLL('CANCEL_SENDING_AHA', 'Cancel AHA')
                )
            ),
            (0, _preact.h)(CancelAHAModal, {
                open: this.state.cancelAhaModal,
                onClose: function onClose() {
                    return _this4.setModal('cancel', false);
                },
                onDone: function onDone() {
                    return _this4.cancelAha();
                },
                translations: translations,
                reason: this.state.cancelReason,
                changeReason: function changeReason(_ref19) {
                    var value = _ref19.value;
                    return _this4.setReason(value);
                }
            }),
            (0, _preact.h)(ApproveAHAModal, {
                open: this.state.approveAhaModal,
                onClose: function onClose() {
                    return _this4.setModal('approve', false);
                },
                onDone: function onDone() {
                    return _this4.approveAha();
                },
                translations: translations
            }),
            (0, _preact.h)(SubmitFeedbackModal, {
                open: this.state.submitAhaModal,
                onClose: function onClose() {
                    return _this4.setModal('submit', false);
                },
                onDone: function onDone() {
                    return _this4.submitFeedback();
                },
                translations: translations,
                sendingName: this.state.sending.aha_sending_name,
                journalistFirstName: this.state.all_journalists.first_name,
                journalistLastName: this.state.all_journalists.last_name
            })
        );
    };

    return AHAManager;
}(_preact.Component);

exports.default = AHAManager;


function FeedbackSection(props) {
    var _props = this.props,
        value = _props.value,
        translations = _props.translations,
        _onChange = _props.onChange,
        field = _props.field,
        _props$disabled = _props.disabled,
        disabled = _props$disabled === undefined ? false : _props$disabled;

    return (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)(
            FeedbackLabel,
            null,
            translations.getLL('YOUR_FEEDBACK', 'Your Feedback'),
            ':'
        ),
        (0, _preact.h)(_index2.default, { disabled: disabled, value: value, onChange: function onChange(_ref20) {
                var value = _ref20.value;
                return _onChange(value);
            } })
    );
}

function FeedbackArea(props) {
    var translations = props.translations,
        type = props.type,
        flags = {
        alreadyApproved: {
            content: (0, _preact.h)(
                'div',
                null,
                translations.getLLMarked('WATCH_OUT_AHA_ALREADY_APPROVED', '**Let op!** Deze AHA is al goedgekeurd. Je kunt daarom nu geen feedback meer geven op deze AHA.')
            ),
            level: 1
        },
        notReady: {
            content: (0, _preact.h)(
                'div',
                null,
                translations.getLLMarked('JOURNALIST_STILL_WRITING_ALERT', '**Let op!** De journalist is nog bezig met het schrijven van deze AHA. Je kunt daarom nog geen feedback geven.')
            ),
            level: 2
        },
        outOfSync: {
            content: (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'div',
                    null,
                    translations.getLLMarked('WATCH_OUT_AHA_ALREADY_SUBMITTED', '**Let op!** De journalist heeft zojuist een nieuwe versie van deze AHA ingeleverd. Daarom komt jouw huidige feedback te vervallen.')
                ),
                (0, _preact.h)(
                    'div',
                    { style: { display: 'flex', justifyContent: 'center', marginTop: 10 } },
                    (0, _preact.h)(
                        _Button2.default,
                        { onClick: props.events.synchronise },
                        translations.getLL('FETCH_NEW_VERSION', 'Fetch New Version')
                    )
                )
            ),
            level: 1
        },
        feedbackAlreadyGiven: {
            content: (0, _preact.h)(
                'div',
                null,
                translations.getLLMarked('ALREADY_GAVE_FEEDBACK_ALERT', '**Let op!** Je hebt al feedback gegeven op deze AHA. Je kunt weer feedback geven als de journalist jouw feedback heeft verwerkt.')
            ),
            level: 2
        },
        cancelled: {
            content: (0, _preact.h)(
                'div',
                null,
                translations.getLLMarked('WATCH_OUT_AHA_HAS_BEEN_CANCELLED', '**Let op!** Deze AHA is geannuleerd. Je kunt daarom nu geen feedback meer geven op deze AHA.')
            ),
            level: 1
        }
    },
        flag = flags[type];


    return flag ? (0, _preact.h)(
        FeedbackAreaEl,
        { level: flag.level },
        flag.content
    ) : null;
}

var EmailTemplate = function (_Component2) {
    _inherits(EmailTemplate, _Component2);

    function EmailTemplate() {
        var _temp, _this5, _ret;

        _classCallCheck(this, EmailTemplate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this5 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this5), _this5.loaded = false, _this5.onLoad = function (e) {
            var document = e.target.contentDocument || e.target.contentWindow ? e.target.contentWindow.document : false;
            if (document) {
                _this5.loaded = true;
                _this5.updateView(document);
            }
        }, _this5.updateView = function (document) {
            if (_this5.frame.base) _this5.frame.base.srcdoc = _this5.props.iframeContent;
            var ahaForm = _this5.props.ahaForm;

            var emailImagePointer = document.querySelector('.lp-beeld'),
                emailTitlePointer = document.querySelector('.email-titel'),
                emailBodyTextPointer = document.querySelector('.email-bodytekst'),
                emailButtonTekstPointer = document.querySelector('.email-buttontekst'),
                imageSrc = ahaForm.aha_form_entrys_lpbeeld ? ahaForm.aha_form_entrys_lpbeeld : 'images/aha/placeholder.jpg';

            emailImagePointer.src = imageSrc;
            emailTitlePointer.innerText = ahaForm.aha_form_entrys_emailtitel;
            emailBodyTextPointer.innerHTML = ahaForm.aha_form_entrys_emailbodytekst;
            emailButtonTekstPointer.innerText = ahaForm.aha_form_entrys_emailbuttontekst;
        }, _temp), _possibleConstructorReturn(_this5, _ret);
    }

    EmailTemplate.prototype.componentDidMount = function componentDidMount() {};

    EmailTemplate.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps, oldProps) {
        var _this6 = this;

        if (this.loaded && newProps.active) setTimeout(function () {
            return _this6.updateView(_this6.frame.base.contentDocument || _this6.frame.base.contentWindow.document);
        }, 100);
    };

    EmailTemplate.prototype.render = function render() {
        var _this7 = this;

        var _props2 = this.props,
            templateUrl = _props2.templateUrl,
            iframeContent = _props2.iframeContent;

        return (0, _preact.h)(IFrameEl, { onLoad: this.onLoad, ref: function ref(_ref21) {
                return _this7.frame = _ref21;
            }, src: templateUrl, sandbox: 'allow-same-origin' });
    };

    return EmailTemplate;
}(_preact.Component);

function CancelAHAModal(props) {
    var open = props.open,
        onClose = props.onClose,
        translations = props.translations,
        onDone = props.onDone,
        reason = props.reason,
        changeReason = props.changeReason;


    return (0, _preact.h)(
        _index4.Modal,
        {
            open: open,
            onClose: onClose,
            title: translations.getLL('NO_LONGER_SEND_AHA', 'Cancel Sending AHA'),
            buttons: [{
                text: translations.getLL('NO_LONGER_SEND_AHA', 'Cancel Sending AHA'),
                onClick: onDone
            }, {
                text: translations.getLL('CLOSE', 'Close'),
                onClick: onClose
            }]
        },
        (0, _preact.h)(
            Section,
            null,
            translations.getLLMarked('NO_LONGER_SEND_AHA_MSG', '*Je staat op het punt om deze AHA niet meer te laten versturen. Weet je zeker dat je dat wilt doen?* *Je kunt hieronder de reden opgeven waarom je deze AHA niet meer wilt versturen:*'),
            (0, _preact.h)(_index2.default, { value: reason, onChange: changeReason })
        )
    );
}

function ApproveAHAModal(props) {
    var open = props.open,
        onClose = props.onClose,
        translations = props.translations,
        onDone = props.onDone;


    return (0, _preact.h)(
        _index4.Modal,
        {
            open: open,
            onClose: onClose,
            title: translations.getLL('APPROVE_AHA', 'Approve AHA'),
            buttons: [{
                text: translations.getLL('APPROVE_AHA', 'Approve AHA'),
                onClick: onDone
            }, {
                text: translations.getLL('CLOSE', 'Close'),
                onClick: onClose
            }]
        },
        (0, _preact.h)(
            Section,
            null,
            translations.getLL('YOU_ARE_ABOUT_TO_APPROVE_AHA', 'Je staat op het punt om deze AHA goed te keuren. Weet je zeker dat je dat wilt doen?')
        )
    );
}

function SubmitFeedbackModal(props) {
    var open = props.open,
        onClose = props.onClose,
        onDone = props.onDone,
        translations = props.translations,
        _props$sendingName = props.sendingName,
        sendingName = _props$sendingName === undefined ? '' : _props$sendingName,
        _props$journalistFirs = props.journalistFirstName,
        journalistFirstName = _props$journalistFirs === undefined ? '' : _props$journalistFirs,
        _props$journalistLast = props.journalistLastName,
        journalistLastName = _props$journalistLast === undefined ? '' : _props$journalistLast;

    return (0, _preact.h)(
        _index4.Modal,
        {
            open: open,
            onClose: onClose,
            title: translations.getLL('SEND_FEEDBACK', 'Send Feedback'),
            buttons: [{
                text: translations.getLL('SEND_FEEDBACK', 'Send Feedback'),
                onClick: onDone
            }, {
                text: translations.getLL('CLOSE', 'Close'),
                onClick: onClose
            }]
        },
        (0, _preact.h)(
            Section,
            null,
            translations.getLL('SEND_AHA_FEEDBACK_MSG', 'Je staat op het punt om feedback te versturen voor de aha %v1 naar de journalist %v2 %v3. Weet je zeker dat je dat wilt doen?', [sendingName, journalistFirstName, journalistLastName])
        )
    );
}