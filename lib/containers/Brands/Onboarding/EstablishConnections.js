'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SingleLineTextInput = require('../../../components/SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _index = require('./../../../components/Checkboxes/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../components/Label/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EstablishConnections = function (_Component) {
    _inherits(EstablishConnections, _Component);

    function EstablishConnections() {
        _classCallCheck(this, EstablishConnections);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    EstablishConnections.prototype.render = function render() {
        var _h, _h2;

        var _props = this.props,
            _props$components = _props.components,
            StepContents = _props$components.StepContents,
            Explaination = _props$components.Explaination,
            StepForm = _props$components.StepForm,
            Group = _props$components.Group,
            IFrameContainer = _props$components.IFrameContainer,
            SectionTitle = _props$components.SectionTitle,
            _props$data = _props.data,
            senderName = _props$data.senderName,
            senderEmail = _props$data.senderEmail,
            wbFullName = _props$data.wbFullName,
            wbEmail = _props$data.wbEmail,
            wbPhone = _props$data.wbPhone,
            cmsApproved = _props$data.cmsApproved,
            googleAnalyticsApproved = _props$data.googleAnalyticsApproved,
            linkedInApproved = _props$data.linkedInApproved,
            dnsApproved = _props$data.dnsApproved,
            twitterAccess = _props$data.twitterAccess,
            facebookAccess = _props$data.facebookAccess,
            googlePlusAccess = _props$data.googlePlusAccess,
            updateField = _props.updateField,
            translations = _props.translations;


        return (0, _preact.h)(
            StepContents,
            null,
            (0, _preact.h)(
                IFrameContainer,
                null,
                (0, _preact.h)('iframe', { 'class': 'embed-responsive-item', src: translations.getLL('ONBOARDING_VIDEO_SRC_CONNECTIONS', 'https://www.youtube.com/embed/OvnX9Xm7F0Q?rel=0'),
                    frameborder: '0', allowfullscreen: true })
            ),
            (0, _preact.h)(Explaination, null),
            (0, _preact.h)(
                StepForm,
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('EMAIL_DATA', 'Email Details')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('YOUR_SENDING_EMAIL', 'E-mail adres waar vanuit we jouw AHAs kunnen gaan versturen.')
                    ),
                    (0, _preact.h)(_SingleLineTextInput2.default, (_h = { onChange: function onChange(_ref) {
                            var value = _ref.value;
                            return updateField('connections', 'senderName', value);
                        }, placeholder: translations.getLL('SENDER_NAME', 'Sender Name'), value: senderName }, _h['onChange'] = function onChange(_ref2) {
                        var value = _ref2.value;
                        return updateField('connections', 'senderName', value);
                    }, _h)),
                    (0, _preact.h)(_SingleLineTextInput2.default, (_h2 = { placeholder: translations.getLL('SENDER_EMAIL', 'Sender Email'), onChange: function onChange(_ref3) {
                            var value = _ref3.value;
                            return updateField('connections', 'senderEmail', value);
                        }, value: senderEmail }, _h2['onChange'] = function onChange(_ref4) {
                        var value = _ref4.value;
                        return updateField('connections', 'senderEmail', value);
                    }, _h2))
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('WEB_BUILDER', 'Web Builder')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('YOUR_WEB_BUILDER_CONTACT', 'Contact details of your web builder')
                    ),
                    (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: translations.getLL('FULL_NAME', 'Full Name'), value: wbFullName, onChange: function onChange(_ref5) {
                            var value = _ref5.value;
                            return updateField('connections', 'wbFullName', value);
                        } }),
                    (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: translations.getLL('EMAIL_ADDRESS', 'Email Address'), value: wbEmail, onChange: function onChange(_ref6) {
                            var value = _ref6.value;
                            return updateField('connections', 'wbEmail', value);
                        } }),
                    (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: translations.getLL('PHONE_NUMBER', 'Phone Number'), value: wbPhone, onChange: function onChange(_ref7) {
                            var value = _ref7.value;
                            return updateField('connections', 'wbPhone', value);
                        } })
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('ALLOWING_ACCESS', 'Allow Access')
                ),
                (0, _preact.h)(
                    _index4.default,
                    null,
                    translations.getLL('ENSURE_TECHNICAL_ACTS_COL', 'Provide a couple of technical actions')
                ),
                (0, _preact.h)(
                    'a',
                    { target: '_blank', download: true, href: translations.getLL('ON_BOARDING_DOCUMENTATION_PDF_FILE', '') },
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('DOWNLOAD_INSTRUCTIONS', 'Download instructions')
                    )
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLL('ACCESS_GRANTED_TO_CMS', 'Access granted to CMS'), data: true, selected: cmsApproved }],
                        onChange: function onChange(_ref8) {
                            var selected = _ref8[0].selected;

                            updateField('connections', 'cmsApproved', selected);
                        }
                    }),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLL('ACCESS_GRANTED_TO_GOOGLE_ANALYTICS', 'Access granted to [Google Analytics](https://analytics.google.com/)'), data: true, selected: googleAnalyticsApproved }],
                        onChange: function onChange(_ref9) {
                            var selected = _ref9[0].selected;

                            updateField('connections', 'googleAnalyticsApproved', selected);
                        }
                    }),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLLMarked('ACCESS_GRANTED_TO_LINKEDIN', 'Access granted to [LinkedIn](https://www.linkedin.com/)'), data: true, selected: linkedInApproved }],
                        onChange: function onChange(_ref10) {
                            var selected = _ref10[0].selected;

                            updateField('connections', 'linkedInApproved', selected);
                        }
                    }),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLL('ADJUST_SPF_RECORD', 'Change in SPF-record has been submitted in DNS'), data: true, selected: dnsApproved }],
                        onChange: function onChange(_ref11) {
                            var selected = _ref11[0].selected;

                            updateField('connections', 'dnsApproved', selected);
                        }
                    })
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('SOCIAL_MEDIA', 'Social Media')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('ACCESS_TO_OTHER_SOCIAL_MEDIA', 'Access to Social Media accounts other than LinkedIn')
                    ),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLLMarked('ACCESS_GRANTED_TO_TWITTER', 'Access granted to [Twitter](https://twitter.com/)'), data: true, selected: twitterAccess }],
                        onChange: function onChange(_ref12) {
                            var selected = _ref12[0].selected;

                            updateField('connections', 'twitterAccess', selected);
                        }
                    }),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLL('ACCESS_GRANTED_TO_FACEBOOK', 'Access granted to [Facebook](https://www.facebook.com/)'), data: true, selected: facebookAccess }],
                        onChange: function onChange(_ref13) {
                            var selected = _ref13[0].selected;

                            updateField('connections', 'facebookAccess', selected);
                        }
                    }),
                    (0, _preact.h)(_index2.default, {
                        options: [{ label: translations.getLL('ACCESS_GRANTED_TO_GOOGLE_PLUS', 'Access granted to [Google+](https://plus.google.com)'), data: true, selected: googlePlusAccess }],
                        onChange: function onChange(_ref14) {
                            var selected = _ref14[0].selected;

                            updateField('connections', 'googlePlusAccess', selected);
                        }
                    })
                )
            )
        );
    };

    return EstablishConnections;
}(_preact.Component);

exports.default = EstablishConnections;