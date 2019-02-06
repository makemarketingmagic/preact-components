'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../components/common/scMixins');

var _Button = require('../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Label = require('../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _SingleLineTextInput = require('../../components/SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _Dropdown = require('../../components/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__Container'
})(['display:flex;flex-direction:row;']),
    LeftSide = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__LeftSide'
})(['flex:0.25;margin-right:32px;']),
    ImageContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__ImageContainer'
})(['background-color:rgba(136,165,173,0.2);mix-blend-mode:normal;width:256px;height:256px;position:relative;margin-bottom:32px;&::after{content:\'\';height:256px;width:256px;position:absolute;left:0;background-color:rgba(136,165,173,0.2);mix-blend-mode:normal;}']),
    ProfileImage = _styledComponents2.default.img.withConfig({
    displayName: 'Profile__ProfileImage'
})(['max-height:256px;max-width:256px;']),
    RightSide = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__RightSide'
})(['flex:1;margin-left:32px;']),
    Title = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    ProfileForm = _styledComponents2.default.form.withConfig({
    displayName: 'Profile__ProfileForm'
})(['']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__Group'
})(['margin:19px 0;']);

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onChange = function (field, value) {
            var update = {};
            update[field] = value;
            _this.setState(update);
        };

        _this.state = {
            first_name: '',
            last_name: '',
            picture: '',
            company: '',
            email: '',
            birthdate: new Date(),
            languages: [{ text: 'English', value: 'en_GB' }]
        };
        return _this;
    }

    Profile.prototype.componentDidMount = function componentDidMount() {
        var user = this.props.user,
            languages = Object.entries(this.props.languages).map(function (_ref) {
            var key = _ref[0],
                value = _ref[1];

            return { value: key, text: value, selected: key === user.language };
        });

        if (user.birthdate) {
            user.birthdate = new Date(user.birthdate);
        }
        debugger;
        this.setState(_extends({}, user, { languages: languages }));
    };

    Profile.prototype.render = function render() {
        var _this2 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;

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
                    (0, _preact.h)(ProfileImage, { src: this.state.image })
                ),
                (0, _preact.h)(
                    _Button2.default,
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
                    translations.getLL('PROFILE', 'Profile')
                ),
                (0, _preact.h)(
                    ProfileForm,
                    null,
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('FIRST_NAME', 'First Name')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { value: this.state.first_name, onChange: function onChange(_ref2) {
                                var value = _ref2.value;
                                _this2.onChange('first_name', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('LAST_NAME', 'Last Name')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { value: this.state.last_name, onChange: function onChange(_ref3) {
                                var value = _ref3.value;
                                _this2.onChange('last_name', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('EMAIL_ADDRESS', 'Email Address')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: this.state.email, onChange: function onChange(_ref4) {
                                var value = _ref4.value;
                                _this2.onChange('email', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('COMPANY', 'Company')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: this.state.company, onChange: function onChange(_ref5) {
                                var value = _ref5.value;
                                _this2.onChange('company', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('DATE_OF_BIRTH', 'Date of Birth')
                        )
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('LANGUAGE', 'Language')
                        ),
                        (0, _preact.h)(_Dropdown2.default, { options: this.state.languages, onChange: function onChange(_ref6) {
                                var value = _ref6.value;
                                _this2.onChange('language', value);
                            } })
                    )
                )
            )
        );
    };

    return Profile;
}(_preact.Component);

exports.default = Profile;