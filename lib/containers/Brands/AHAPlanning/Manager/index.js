'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Annotator = require('../../../../components/Annotator');

var _Annotator2 = _interopRequireDefault(_Annotator);

var _scMixins = require('../../../../components/common/scMixins');

var _index = require('./../../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../../components/Tabs/index');

var _preactMarkdown = require('preact-markdown');

var _preactMarkdown2 = _interopRequireDefault(_preactMarkdown);

var _MockWebsite = require('./MockWebsite');

var _MockWebsite2 = _interopRequireDefault(_MockWebsite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackArea = _styledComponents2.default.div.withConfig({
    displayName: 'Manager__FeedbackArea'
})(['']),
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
})(['width:100%;height:90vh;border:none;']);

var AHAManager = function (_Component) {
    _inherits(AHAManager, _Component);

    function AHAManager(props) {
        var _this$state;

        _classCallCheck(this, AHAManager);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.addHighlight = function (highlight) {
            var highlights = _this.state.highlights;
            var i = highlights.push(highlight);
            _this.setState({ highlights: highlights });
            return i;
        };

        _this.updateHighlight = function (comment, i) {
            var highlights = [].concat(_this.state.highlights);
            highlights[i].comment = comment;
            _this.setState({ highlights: highlights });
        };

        _this.deleteHighlight = function (i) {
            var highlights = [].concat(_this.state.highlights);
            highlights.splice(i, 1);
            _this.setState({ highlights: highlights });
        };

        _this.updateFeedback = function (field, value) {
            var feedback = _this.state.feedback;

            if (!field) {
                field = 'general';
            }
            if (typeof feedback[field] !== 'undefined') {
                feedback[field] = value;
                _this.setState({ feedback: feedback });
            }
        };

        _this.state = (_this$state = {
            highlights: [],
            feedback: {
                general: '',
                subject: '',
                body: '',
                social: ''
            },
            all_journalists: {},
            brand: {}
        }, _this$state['feedback'] = {}, _this$state.formentry = {}, _this$state.sending = {}, _this$state.templates = {}, _this$state);
        return _this;
    }

    AHAManager.prototype.componentDidMount = function componentDidMount() {
        var _props$AHAManagement = this.props.AHAManagement,
            all_journalists = _props$AHAManagement.all_journalists,
            brand = _props$AHAManagement.brand,
            feedback = _props$AHAManagement.feedback,
            formentry = _props$AHAManagement.formentry,
            sending = _props$AHAManagement.sending,
            templates = _props$AHAManagement.templates;

        this.setState({
            all_journalists: all_journalists,
            brand: brand,
            feedback: feedback,
            formentry: formentry,
            sending: sending,
            templates: templates
        });
    };

    AHAManager.prototype.render = function render() {
        var _props = this.props,
            templateUrl = _props.templateUrl,
            _props$translations = _props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            highlights = _state.highlights,
            formentry = _state.formentry,
            brand = _state.brand;

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
        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(FeedbackArea, null),
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
                        (0, _preact.h)(FeedbackSection, { field: '', translations: translations, value: this.state.feedback.general })
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
                            formentry.aha_form_entrys_emailtitel
                        ),
                        (0, _preact.h)(FeedbackSection, { field: 'subject', translations: translations, value: this.state.feedback.subject })
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
                        (0, _preact.h)(FeedbackSection, { field: 'preheader', translations: translations, value: this.state.feedback.preheader })
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
                            _index3.Tabs,
                            { index: 0 },
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('NEW_TEXT', 'New Text') },
                                (0, _preact.h)(
                                    FeedbackLabel,
                                    null,
                                    translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')
                                ),
                                (0, _preact.h)('br', null),
                                (0, _preact.h)(
                                    JournalistContent,
                                    null,
                                    (0, _preact.h)(_Annotator2.default, { text: formentry.aha_form_entrys_emailbodytekst_raw, readonly: false, highlights: highlights, addHighlight: this.addHighlight, deleteHighlight: this.deleteHighlight, updateHighlight: this.updateHighlight })
                                )
                            ),
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('PREVIEW', 'Preview') },
                                (0, _preact.h)(
                                    JournalistContent,
                                    null,
                                    (0, _preact.h)(_preactMarkdown2.default, { markdown: (formentry.aha_form_entrys_emailbodytekst || '').replace('\n', '') })
                                )
                            )
                        ),
                        (0, _preact.h)(FeedbackSection, { field: 'emailBody', translations: translations, value: this.state.feedback.emailBody })
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
                        (0, _preact.h)(FeedbackSection, { field: 'buttonText', translations: translations, value: this.state.feedback.buttonText })
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
                        (0, _preact.h)(FeedbackSection, { field: 'image', translations: translations, value: this.state.feedback.image })
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
                        (0, _preact.h)(FeedbackSection, { field: 'pageTitle', translations: translations, value: this.state.feedback.pageTitle })
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
                            _index3.Tabs,
                            { index: 0 },
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('NEW_TEXT', 'New Text') },
                                (0, _preact.h)(
                                    FeedbackLabel,
                                    null,
                                    translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')
                                ),
                                (0, _preact.h)('br', null),
                                (0, _preact.h)(
                                    JournalistContent,
                                    null,
                                    (0, _preact.h)(_Annotator2.default, { text: formentry.aha_form_entrys_lpbodytekst_raw, readonly: false, highlights: highlights, addHighlight: this.addHighlight, deleteHighlight: this.deleteHighlight, updateHighlight: this.updateHighlight })
                                )
                            ),
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('PREVIEW', 'Preview') },
                                (0, _preact.h)(
                                    JournalistContent,
                                    null,
                                    (0, _preact.h)(_preactMarkdown2.default, { markdown: (formentry.aha_form_entrys_lpbodytekst || '').replace('\n', '') })
                                )
                            )
                        ),
                        (0, _preact.h)(FeedbackSection, { field: 'pageBody', translations: translations, value: this.state.feedback.pageBody })
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
                        (0, _preact.h)(FeedbackSection, { field: 'metaTitle', translations: translations, value: this.state.feedback.metaTitle })
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
                        (0, _preact.h)(FeedbackSection, { field: 'metaText', translations: translations, value: this.state.feedback.metaText })
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
                        (0, _preact.h)(FeedbackSection, { field: 'social', translations: translations, value: this.state.feedback.social })
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
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('EMAIL', 'Email') },
                                (0, _preact.h)(EmailTemplate, { ahaForm: formentry, templateUrl: templateUrl.templateUrl })
                            ),
                            (0, _preact.h)(
                                _index3.Tab,
                                { label: translations.getLL('WEB', 'Web') },
                                (0, _preact.h)(_MockWebsite2.default, { translations: translations, brandLogo: brand.brand_logo_image || '', ahaForm: formentry })
                            )
                        )
                    )
                )
            )
        );
    };

    return AHAManager;
}(_preact.Component);

exports.default = AHAManager;


function FeedbackSection(props) {
    var _props2 = this.props,
        value = _props2.value,
        translations = _props2.translations,
        _onChange = _props2.onChange,
        field = _props2.field;

    return (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)(
            FeedbackLabel,
            null,
            translations.getLL('YOUR_FEEDBACK', 'Your Feedback'),
            ':'
        ),
        (0, _preact.h)(_index2.default, { value: value, onChange: function onChange(_ref) {
                var value = _ref.value;
                return _onChange(field, value);
            } })
    );
}

var EmailTemplate = function (_Component2) {
    _inherits(EmailTemplate, _Component2);

    function EmailTemplate() {
        var _temp, _this2, _ret;

        _classCallCheck(this, EmailTemplate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.loaded = false, _this2.onLoad = function (e) {
            var document = e.target.contentDocument || e.tartget.contentWindow.document;
            if (document) {
                _this2.loaded = true;
                _this2.updateView(document);
            }
        }, _this2.updateView = function (document) {
            var ahaForm = _this2.props.ahaForm;

            var emailImagePointer = document.querySelector('.lp-beeld'),
                emailTitlePointer = document.querySelector('.email-titel'),
                emailBodyTextPointer = document.querySelector('.email-bodytekst'),
                emailButtonTekstPointer = document.querySelector('.email-buttontekst'),
                imageSrc = ahaForm.aha_form_entrys_lpbeeld ? ahaForm.aha_form_entrys_lpbeeld : 'images/aha/placeholder.jpg';

            emailImagePointer.src = imageSrc;
            emailTitlePointer.innerText = ahaForm.aha_form_entrys_emailtitel;
            emailBodyTextPointer.innerHTML = ahaForm.aha_form_entrys_emailbodytekst;
            emailButtonTekstPointer.innerText = ahaForm.aha_form_entrys_emailbuttontekst;
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    EmailTemplate.prototype.componentDidMount = function componentDidMount() {};

    EmailTemplate.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps, oldProps) {
        var _this3 = this;

        if (this.loaded && newProps.active) setTimeout(function () {
            return _this3.updateView(_this3.frame.base.contentDocument || _this3.frame.base.contentWindow.document);
        }, 100);
    };

    EmailTemplate.prototype.render = function render() {
        var _this4 = this;

        var templateUrl = this.props.templateUrl;

        return (0, _preact.h)(IFrameEl, { onLoad: this.onLoad, ref: function ref(_ref2) {
                return _this4.frame = _ref2;
            }, src: templateUrl });
    };

    return EmailTemplate;
}(_preact.Component);