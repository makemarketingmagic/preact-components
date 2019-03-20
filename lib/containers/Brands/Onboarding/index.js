'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _StepNavigation = require('../../../components/Onboarding/StepNavigation');

var _StepNavigation2 = _interopRequireDefault(_StepNavigation);

var _Step = require('./../../../components/Onboarding/Step');

var _Step2 = _interopRequireDefault(_Step);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Label = require('../../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _SingleLineTextInput = require('../../../components/SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _Targets = require('./Targets');

var _Targets2 = _interopRequireDefault(_Targets);

var _UploadFiles = require('./UploadFiles');

var _UploadFiles2 = _interopRequireDefault(_UploadFiles);

var _EstablishConnections = require('./EstablishConnections');

var _EstablishConnections2 = _interopRequireDefault(_EstablishConnections);

var _TargetAudience = require('./TargetAudience');

var _TargetAudience2 = _interopRequireDefault(_TargetAudience);

var _scMixins = require('../../../components/common/scMixins');

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__Divider'
})(['border-bottom:1px solid rgba(32,32,32,0.1);']),
    Container = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__Container'
})(['max-width:600px;width:90%;margin:64px auto;']),
    StepContents = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__StepContents'
})(['display:flex;flex-direction:column;align-items:center;']),
    StepForm = _styledComponents2.default.form.withConfig({
    displayName: 'Onboarding__StepForm'
})(['width:100%;']),
    Explaination = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__Explaination'
})(['width:100%;font-family:Varela Round;font-style:normal;font-weight:normal;line-height:16px;font-size:14px;margin-bottom:34px;color:#323232;']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__Group'
})(['margin:19px 0;']),
    IFrameContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__IFrameContainer'
})(['margin-bottom:64px;']),
    SectionTitle = _styledComponents2.default.div.withConfig({
    displayName: 'Onboarding__SectionTitle'
})(['line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text);

var Onboarding = function (_Component) {
    _inherits(Onboarding, _Component);

    function Onboarding(props) {
        var _this2 = this;

        _classCallCheck(this, Onboarding);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getOnBoardingDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var _this$props$events, getOnBoardingDetails, getPercentage, steps, goals, audience, connections, files;

                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _this$props$events = _this.props.events, getOnBoardingDetails = _this$props$events.getOnBoardingDetails, getPercentage = _this$props$events.getPercentage;
                                                steps = _this.state.steps;

                                                if (!getOnBoardingDetails) {
                                                    _context.next = 20;
                                                    break;
                                                }

                                                _context.next = 5;
                                                return getOnBoardingDetails('goals');

                                            case 5:
                                                goals = _context.sent;
                                                _context.next = 8;
                                                return getOnBoardingDetails('audience');

                                            case 8:
                                                audience = _context.sent;
                                                _context.next = 11;
                                                return getOnBoardingDetails('connections');

                                            case 11:
                                                connections = _context.sent;
                                                _context.next = 14;
                                                return getOnBoardingDetails('files');

                                            case 14:
                                                files = _context.sent;

                                                steps[0].step.complete = getPercentage(goals) === 100;
                                                steps[1].step.complete = getPercentage(audience) === 100;
                                                steps[2].step.complete = getPercentage(connections) === 100;
                                                steps[3].step.complete = getPercentage(files) === 100;
                                                _this.setState({ steps: steps, goals: goals, audience: audience, connections: connections, files: files, loading: false });

                                            case 20:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this2);
                            })));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.updateField = function (sectionName, field, value) {
            var section = _this.state[sectionName],
                update = {};
            if (section && typeof section[field] !== 'undefined') {
                section[field] = value;
            }
            update[sectionName] = section;
            if (_this.updateTimeout[sectionName]) {
                clearTimeout(_this.updateTimeout[sectionName]);
            }
            _this.setState(update);
            _this.updateTimeout[sectionName] = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this$props$events2, submitOnboardingTargets, submitOnboardingTargetAudience, submitOnboardingConnections, submitOnboardingFiles;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _this$props$events2 = _this.props.events, submitOnboardingTargets = _this$props$events2.submitOnboardingTargets, submitOnboardingTargetAudience = _this$props$events2.submitOnboardingTargetAudience, submitOnboardingConnections = _this$props$events2.submitOnboardingConnections, submitOnboardingFiles = _this$props$events2.submitOnboardingFiles;
                                _context3.t0 = sectionName;
                                _context3.next = _context3.t0 === 'goals' ? 4 : _context3.t0 === 'audience' ? 7 : _context3.t0 === 'connections' ? 10 : _context3.t0 === 'files' ? 13 : 15;
                                break;

                            case 4:
                                _context3.next = 6;
                                return submitOnboardingTargets(section);

                            case 6:
                                return _context3.abrupt('break', 15);

                            case 7:
                                _context3.next = 9;
                                return submitOnboardingTargetAudience(section);

                            case 9:
                                return _context3.abrupt('break', 15);

                            case 10:
                                _context3.next = 12;
                                return submitOnboardingConnections(section);

                            case 12:
                                return _context3.abrupt('break', 15);

                            case 13:
                                _context3.next = 15;
                                return submitOnboardingFiles(section);

                            case 15:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            })), 500);
        };

        _this.setActive = function (id) {
            _this.setState({ currentStep: id });
        };

        _this.canGoToStep = function (id) {
            return true;
        };

        var _this$props$translati = _this.props.translations,
            translations = _this$props$translati === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _this$props$translati;

        _this.updateTimeout = {
            goals: null,
            audience: null,
            connections: null,
            files: null
        };
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
        _this.translations = translations;
        _this.state = {
            currentStep: 0,
            goals: {
                klanten: '',
                gewensteKlanten: '',
                offertes: '',
                gesprekken: '',
                inDatabase: ''
            },
            audience: {
                spannendCommuniceren: 'null',
                schrijvenSpannend: 'null',
                leukCommuniceren: 'null',
                interviewer: 'null',
                stijlZakelijkPersoonlijk: 'null',
                stijlFormeelInformeel: 'null',
                stijlAanhef: 'null',
                voorbeeldUrl: ''
            },
            connections: {
                senderName: '',
                senderEmail: '',
                wbFullName: '',
                wbEmail: '',
                wbPhone: '',
                googleAnalyticsApproved: false,
                linkedInApproved: false,
                cmsApproved: false,
                dnsApproved: false,
                twitterAccess: false,
                facebookAccess: false,
                googlePlusAccess: false
            },
            files: {
                emailDatabase: null,
                socialSharing: null
            },
            steps: [{ navigation: { info: _this.translations.getLL('DEFINE_GOALS', 'Define Goals') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('TARGET_AUDIENCE_WRITING_STYLE', 'Target Audience & Writing Style') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('ESTABLISH_CONNECTIONS', 'Establish Connections') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('UPLOAD_FILES', 'Upload Files') }, step: { completed: false } }]
        };
        return _this;
    }

    Onboarding.prototype.componentWillMount = function componentWillMount() {
        this.getOnBoardingDetails();
    };

    Onboarding.prototype.render = function render() {
        var _this3 = this;

        var _state = this.state,
            currentStep = _state.currentStep,
            steps = _state.steps;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                _StepNavigation2.default,
                { showLogo: false },
                steps.map(function (props, i) {
                    return (0, _preact.cloneElement)((0, _preact.h)(_Step2.default, null), _extends({}, props.navigation, { id: i, setActive: _this3.setActive, active: _this3.state.currentStep === i, complete: props.step.complete, canGoToStep: _this3.canGoToStep }));
                })
            ),
            (0, _preact.h)(Divider, null),
            (0, _preact.h)(
                Container,
                null,
                currentStep === 0 && (0, _preact.h)(_Targets2.default, {
                    components: { IFrameContainer: IFrameContainer, StepContents: StepContents, Explaination: Explaination, StepForm: StepForm, Group: Group },
                    translations: this.translations,
                    updateField: this.updateField,
                    data: this.state.goals
                }),
                currentStep === 1 && (0, _preact.h)(_TargetAudience2.default, {
                    components: { IFrameContainer: IFrameContainer, StepContents: StepContents, SectionTitle: SectionTitle, Explaination: Explaination, StepForm: StepForm, Group: Group },
                    translations: this.translations,
                    updateField: this.updateField,
                    data: this.state.audience
                }),
                currentStep === 2 && (0, _preact.h)(_EstablishConnections2.default, {
                    components: { IFrameContainer: IFrameContainer, StepContents: StepContents, SectionTitle: SectionTitle, Explaination: Explaination, StepForm: StepForm, Group: Group },
                    translations: this.translations,
                    updateField: this.updateField,
                    data: this.state.connections
                }),
                currentStep === 3 && (0, _preact.h)(_UploadFiles2.default, {
                    components: { IFrameContainer: IFrameContainer, StepContents: StepContents, SectionTitle: SectionTitle, Explaination: Explaination, StepForm: StepForm, Group: Group },
                    translations: this.translations,
                    updateField: this.updateField,
                    data: this.state.files
                })
            )
        );
    };

    return Onboarding;
}(_preact.Component);

exports.default = Onboarding;