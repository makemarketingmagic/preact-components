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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
})(['margin-bottom:64px;']);

var Onboarding = function (_Component) {
    _inherits(Onboarding, _Component);

    function Onboarding(props) {
        _classCallCheck(this, Onboarding);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.updateField = function (sectionName, field, value) {
            var section = _this.state[sectionName],
                update = {};
            if (section && typeof section[field] !== 'undefined') {
                section[field] = value;
            }
            update[sectionName] = section;
            _this.setState(update);
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
        _this.translations = translations;
        _this.steps = [{ navigation: { info: _this.translations.getLL('DEFINE_GOALS', 'Define Goals') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('TARGET_AUDIENCE_WRITING_STYLE', 'Target Audience & Writing Style') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('ESTABLISH_CONNECTIONS', 'Establish Connections') }, step: { completed: false } }, { navigation: { info: _this.translations.getLL('UPLOAD_FILES', 'Upload Files') }, step: { completed: false } }];
        _this.state = {
            currentStep: 0,
            targets: {
                clients: '',
                futureClients: '',
                offers: '',
                conversations: '',
                inDatabase: ''
            },
            targetAudience: {
                excited: null,
                excitedForWriting: null,
                willOrganisationCommunicate: null,
                interviewOthers: null,
                corporate: null,
                formal: null,
                british: null,
                example: ''
            },
            establishConnections: {
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
            }
        };
        return _this;
    }

    Onboarding.prototype.render = function render() {
        var _this2 = this;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                _StepNavigation2.default,
                { showLogo: false },
                this.steps.map(function (props, i) {
                    return (0, _preact.cloneElement)((0, _preact.h)(_Step2.default, null), _extends({}, props.navigation, { id: i, setActive: _this2.setActive, active: _this2.state.currentStep === i, complete: props.step.completed, canGoToStep: _this2.canGoToStep }));
                })
            ),
            (0, _preact.h)(Divider, null),
            (0, _preact.h)(
                Container,
                null,
                (0, _preact.h)(_Targets2.default, {
                    components: { IFrameContainer: IFrameContainer, StepContents: StepContents, Explaination: Explaination, StepForm: StepForm, Group: Group },
                    translations: this.translations,
                    updateField: this.updateField
                })
            )
        );
    };

    return Onboarding;
}(_preact.Component);

exports.default = Onboarding;