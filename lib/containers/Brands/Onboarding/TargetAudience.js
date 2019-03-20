'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../../../components/RadioButtons/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../components/Label/index');

var _index4 = _interopRequireDefault(_index3);

var _SingleLineTextInput = require('../../../components/SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TargetAudience = function (_Component) {
    _inherits(TargetAudience, _Component);

    function TargetAudience() {
        _classCallCheck(this, TargetAudience);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TargetAudience.prototype.render = function render() {
        var _props = this.props,
            _props$components = _props.components,
            StepContents = _props$components.StepContents,
            Explaination = _props$components.Explaination,
            StepForm = _props$components.StepForm,
            Group = _props$components.Group,
            IFrameContainer = _props$components.IFrameContainer,
            SectionTitle = _props$components.SectionTitle,
            _props$data = _props.data,
            spannendCommuniceren = _props$data.spannendCommuniceren,
            schrijvenSpannend = _props$data.schrijvenSpannend,
            leukCommuniceren = _props$data.leukCommuniceren,
            interviewer = _props$data.interviewer,
            stijlZakelijkPersoonlijk = _props$data.stijlZakelijkPersoonlijk,
            stijlFormeelInformeel = _props$data.stijlFormeelInformeel,
            stijlAanhef = _props$data.stijlAanhef,
            voorbeeldUrl = _props$data.voorbeeldUrl,
            updateField = _props.updateField,
            translations = _props.translations;

        return (0, _preact.h)(
            StepContents,
            null,
            (0, _preact.h)(
                IFrameContainer,
                null,
                (0, _preact.h)('iframe', {
                    'class': 'embed-responsive-item',
                    src: translations.getLL('ONBOARDING_VIDEO_SRC_TARGET_GROUP', 'https://www.youtube.com/embed/rUaLSEnyMBE?rel=0'),
                    frameborder: '0',
                    allowfullscreen: true
                })
            ),
            (0, _preact.h)(
                Explaination,
                null,
                'Explaination here'
            ),
            (0, _preact.h)(
                StepForm,
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('COMMUNICATION', 'Communication')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL("IS_COMMUNICATION_EXCITING", "Vind je het spannend om te gaan communiceren?")
                    ),
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'spannendCommuniceren', value);
                        },
                        options: [{ label: translations.getLL('YES', 'Yes'), data: 'ja', selected: spannendCommuniceren === 'ja' }, { label: translations.getLL('NO', 'No'), data: 'nee', selected: spannendCommuniceren === 'nee' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('IS_GHOSTWRITER_EXCITING', 'Vind je het spannend dat iemand anders jouw teksten gaat schrijven?')
                    ),
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'schrijvenSpannend', value);
                        },
                        options: [{ label: translations.getLL('YES', 'Yes'), data: 'ja', selected: schrijvenSpannend === 'ja' }, { label: translations.getLL('NO', 'No'), data: 'nee', selected: schrijvenSpannend === 'nee' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('IS_CORPORATE_COMMUNICATION_EXCITING', 'Vindt de rest van de organisatie het leuk dat je gaat communiceren?')
                    ),
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'leukCommuniceren', value);
                        },
                        options: [{ label: translations.getLL('YES', 'Yes'), data: 'ja', selected: leukCommuniceren === 'ja' }, { label: translations.getLL('NO', 'No'), data: 'nee', selected: leukCommuniceren === 'nee' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('WHO_ARE_BEING_INTERVIEWED', 'Wie worden er geïnterviewd voor het schrijven van de blogartikelen?')
                    ),
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'interviewer', value);
                        },
                        options: [{ label: translations.getLL('ME', 'Myself'), data: 'ikzelf', selected: interviewer === 'ikzelf' }, { label: translations.getLL('OTHERS_AS_WELL', 'Others'), data: 'ookanderen', selected: interviewer === 'ookanderen' }]
                    })
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('PREFERENCES', 'Preferences')
                ),
                (0, _preact.h)(
                    _index4.default,
                    null,
                    translations.getLL('WHAT_STYLE_DO_YOU_WANT', 'Which style will you use for communication?')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'stijlZakelijkPersoonlijk', value);
                        },
                        formStyle: {
                            display: 'flex'
                        },
                        inputStyle: {
                            marginRight: 16
                        },
                        options: [{ label: translations.getLL('CORPORATE', 'Corporate'), data: 'zakelijk', selected: stijlZakelijkPersoonlijk === 'zakelijk' }, { label: translations.getLL('PERSONAL', 'Personal'), data: 'persoonlijk', selected: stijlZakelijkPersoonlijk === 'persoonlijk' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'stijlFormeelInformeel', value);
                        },
                        formStyle: {
                            display: 'flex'
                        },
                        inputStyle: {
                            marginRight: 16
                        },
                        options: [{ label: translations.getLL('FORMAL', 'Formal'), data: 'formeel', selected: stijlFormeelInformeel === 'formeel' }, { label: translations.getLL('INFORMAL', 'Informal'), data: 'informeel', selected: stijlFormeelInformeel === 'informeel' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(_index2.default, {
                        onChange: function onChange(value) {
                            return updateField('audience', 'stijlAanhef', value);
                        },
                        formStyle: {
                            display: 'flex'
                        },
                        inputStyle: {
                            marginRight: 16
                        },
                        options: [{ label: translations.getLL('FORMAL_MANNER_OF_ADDRESSING_SOMEONE', 'U'), data: 'u', selected: stijlAanhef === 'u' }, { label: translations.getLL('INFORMAL_MANNER_OF_ADDRESSING_SOMEONE', 'Je'), data: 'je', selected: stijlAanhef === 'je' }]
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        null,
                        translations.getLL('EXAMPLES_OF_ARTICLES_YOU_LIKE_COL', 'Voorbeeld van een artikel zoals jij ook zou willen communiceren:')
                    ),
                    (0, _preact.h)(_SingleLineTextInput2.default, {
                        onChange: function onChange(_ref) {
                            var value = _ref.value;
                            return updateField('audience', 'voorbeeldUrl', value);
                        },
                        value: voorbeeldUrl
                    })
                )
            )
        );
    };

    return TargetAudience;
}(_preact.Component);

exports.default = TargetAudience;