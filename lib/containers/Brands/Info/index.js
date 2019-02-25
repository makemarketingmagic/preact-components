'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../../components/common/scMixins');

var _index = require('./../../../components/Button/index');

var _index2 = _interopRequireDefault(_index);

var _Label = require('../../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _SingleLineTextInput = require('../../../components/SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Info__Container'
})(['display:flex;flex-direction:row;']),
    LeftSide = _styledComponents2.default.div.withConfig({
    displayName: 'Info__LeftSide'
})(['flex:0.25;margin-right:32px;']),
    ImageContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Info__ImageContainer'
})(['background-color:rgba(136,165,173,0.2);mix-blend-mode:normal;width:256px;height:256px;position:relative;margin-bottom:32px;&::after{content:\'\';height:256px;width:256px;position:absolute;left:0;background-color:rgba(136,165,173,0.2);mix-blend-mode:normal;}']),
    BrandImage = _styledComponents2.default.img.withConfig({
    displayName: 'Info__BrandImage'
})(['max-height:256px;max-width:256px;']),
    RightSide = _styledComponents2.default.div.withConfig({
    displayName: 'Info__RightSide'
})(['flex:1;margin-left:32px;']),
    Title = _styledComponents2.default.div.withConfig({
    displayName: 'Info__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    InfoForm = _styledComponents2.default.form.withConfig({
    displayName: 'Info__InfoForm'
})(['']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'Info__Group'
})(['margin:19px 0;']);

var Info = function (_Component) {
    _inherits(Info, _Component);

    function Info(props) {
        _classCallCheck(this, Info);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            info: {},
            contacts: [],
            journalist: {},
            advertisingManager: {}
        };
        return _this;
    }

    Info.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            brandInfo = _props.brandInfo,
            journalist = _props.journalist,
            advertisingManager = _props.advertisingManager;

        this.setState(_extends({}, brandInfo, { journalist: journalist, advertisingManager: advertisingManager }));
    };

    Info.prototype.render = function render() {
        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            info = _state.info,
            contacts = _state.contacts,
            journalist = _state.journalist,
            advertisingManager = _state.advertisingManager;

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
            Container,
            null,
            (0, _preact.h)(
                LeftSide,
                null,
                (0, _preact.h)(
                    ImageContainer,
                    null,
                    (0, _preact.h)(BrandImage, { src: this.state.image })
                ),
                (0, _preact.h)(
                    _index2.default,
                    { secondary: true },
                    translations.getLL('UPLOAD_NEW_IMAGE', 'Upload new image')
                )
            ),
            (0, _preact.h)(
                RightSide,
                null,
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('CONTACTS', 'Contacts')
                ),
                contacts.map(function (val) {
                    return (0, _preact.h)(
                        InfoForm,
                        null,
                        (0, _preact.h)(
                            Group,
                            null,
                            (0, _preact.h)(
                                _Label2.default,
                                null,
                                translations.getLL('NAME', 'Name')
                            ),
                            (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: val.first_name + ' ' + val.last_name })
                        ),
                        (0, _preact.h)(
                            Group,
                            null,
                            (0, _preact.h)(
                                _Label2.default,
                                null,
                                translations.getLL('PHONE', 'Phone')
                            ),
                            (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: val.mobile })
                        ),
                        (0, _preact.h)(
                            Group,
                            null,
                            (0, _preact.h)(
                                _Label2.default,
                                null,
                                translations.getLL('EMAIL_ADDRESS', 'Email Address')
                            ),
                            (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: val.email })
                        )
                    );
                }),
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('MARKETING_TEAM', 'Marketing Team')
                ),
                (0, _preact.h)(
                    InfoForm,
                    null,
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('MARKETING_MANAGER', 'Marketing Manager')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.marketingmanager || '' })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('JOURNALIST', 'Journalist')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: journalist.first_name + ' ' + journalist.last_name })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('ADVERTSING_MANAGER', 'Advertising Manager')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: advertisingManager.first_name + ' ' + advertisingManager.last_name })
                    )
                ),
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('CONTACT_INFORMATION', 'Contact Information')
                ),
                (0, _preact.h)(
                    InfoForm,
                    null,
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('BRAND_NAME', 'Brand Name')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.brand_name })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('PHONE', 'Phone')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.phone })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('EMAIL_ADDRESS', 'Email Address')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: '' })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('STREET', 'Street')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.billing_street })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('POSTAL_CODE', 'Postal Code')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.billing_code })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('CITY', 'City')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.billing_city })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('LANGUAGE', 'Language')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: info.language })
                    )
                )
            )
        );
    };

    return Info;
}(_preact.Component);

exports.default = Info;