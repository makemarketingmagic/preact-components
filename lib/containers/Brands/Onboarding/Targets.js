'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _index = require('./../../../components/Label/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../components/SingleLineTextInput/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Targets = function (_Component) {
    _inherits(Targets, _Component);

    function Targets() {
        _classCallCheck(this, Targets);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Targets.prototype.render = function render() {
        var _props = this.props,
            _props$components = _props.components,
            StepContents = _props$components.StepContents,
            Explaination = _props$components.Explaination,
            StepForm = _props$components.StepForm,
            Group = _props$components.Group,
            IFrameContainer = _props$components.IFrameContainer,
            translations = _props.translations,
            clients = _props.clients,
            futureClients = _props.futureClients,
            offers = _props.offers,
            conversations = _props.conversations,
            inDatabase = _props.inDatabase,
            updateField = _props.updateField;

        return (0, _preact.h)(
            StepContents,
            null,
            (0, _preact.h)(
                IFrameContainer,
                null,
                (0, _preact.h)('iframe', { width: '504', height: '284', src: translations.getLL('ONBOARDING_VIDEO_SRC_GOALS', 'https://www.youtube.com/embed/2vtO__uWTtw'), frameborder: '0', allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture', allowfullscreen: true })
            ),
            (0, _preact.h)(
                Explaination,
                null,
                'SOME TEXT HERE'
            ),
            (0, _preact.h)(
                StepForm,
                null,
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        null,
                        translations.getLL('HOW_MANY_CLIENTS', 'How many clients do you currently have?')
                    ),
                    (0, _preact.h)(_index4.default, { value: clients, onChange: function onChange(_ref) {
                            var value = _ref.value;
                            return updateField('targets', 'clients', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        null,
                        translations.getLL('HOW_MANY_CLIENTS_FUTURE', 'How many clients would you like to add in the next 12 months?')
                    ),
                    (0, _preact.h)(_index4.default, { value: futureClients, onChange: function onChange(_ref2) {
                            var value = _ref2.value;
                            return updateField('targets', 'futureClients', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        null,
                        translations.getLL('HOW_MANY_OFFERS', 'How many offers do you have to submit for this?')
                    ),
                    (0, _preact.h)(_index4.default, { value: offers, onChange: function onChange(_ref3) {
                            var value = _ref3.value;
                            return updateField('targets', 'offers', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        null,
                        translations.getLL('HOW_MANY_CONVERSATIONS', 'How many conversations should you have to be able to submit an offer?')
                    ),
                    (0, _preact.h)(_index4.default, { value: conversations, onChange: function onChange(_ref4) {
                            var value = _ref4.value;
                            return updateField('targets', 'conversations', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        null,
                        translations.getLL('HOW_MANY_IN_DATABASE', 'How many addresses are there in your email database?')
                    ),
                    (0, _preact.h)(_index4.default, { value: inDatabase, onChange: function onChange(_ref5) {
                            var value = _ref5.value;
                            return updateField('targets', 'inDatabase', value);
                        } })
                )
            )
        );
    };

    return Targets;
}(_preact.Component);

exports.default = Targets;