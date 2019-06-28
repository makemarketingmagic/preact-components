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

var _index = require('./../../components/DatePicker/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../components/DragDropZone/index');

var _index4 = _interopRequireDefault(_index3);

var _Modal = require('../../components/Modal');

var _reactImageCrop = require('react-image-crop');

var _reactImageCrop2 = _interopRequireDefault(_reactImageCrop);

require('react-image-crop/dist/ReactCrop.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
})(['margin-bottom:16px;']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__Group'
})(['margin:19px 0;& > label{margin-bottom:12px;display:block;}']),
    CropContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Profile__CropContainer'
})(['width:100%;height:100%;max-height:60vh;display:flex;justify-content:center;']);

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        var _this2 = this;

        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.initialise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user, languages;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _this.getUserDetails();

                        case 2:
                            user = _context.sent;
                            _context.next = 5;
                            return _this.getLanguages(user.language);

                        case 5:
                            languages = _context.sent;

                            _this.setState(_extends({}, user, { languages: languages, originalLanguage: user.language }));

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.getUserDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var getUserDetails, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            getUserDetails = _this.props.events.getUserDetails;
                            result = void 0;

                            if (!getUserDetails) {
                                _context2.next = 6;
                                break;
                            }

                            _context2.next = 5;
                            return getUserDetails();

                        case 5:
                            result = _context2.sent;

                        case 6:
                            return _context2.abrupt('return', result);

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.getLanguages = function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(language) {
                var getLanguages, result;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                getLanguages = _this.props.events.getLanguages;
                                result = void 0;

                                if (!getLanguages) {
                                    _context3.next = 7;
                                    break;
                                }

                                _context3.next = 5;
                                return getLanguages();

                            case 5:
                                result = _context3.sent;

                                result = result.map(function (val) {
                                    val.selected = val.data === language;
                                    val.value = val.data;
                                    return val;
                                });

                            case 7:
                                return _context3.abrupt('return', result);

                            case 8:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }();

        _this.savePassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var savePassword, new_password, result;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            savePassword = _this.props.events.savePassword, new_password = _this.state.new_password;
                            result = void 0;

                            if (!savePassword) {
                                _context4.next = 8;
                                break;
                            }

                            _context4.next = 5;
                            return savePassword(new_password);

                        case 5:
                            result = _context4.sent;
                            _context4.next = 8;
                            return _this.initialise();

                        case 8:
                            return _context4.abrupt('return', result);

                        case 9:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this2);
        }));
        _this.saveProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var saveProfile, originalLanguage, result, user;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            saveProfile = _this.props.events.saveProfile, originalLanguage = _this.state.originalLanguage;
                            result = void 0, user = {
                                first_name: _this.state.first_name,
                                last_name: _this.state.last_name,
                                company: _this.state.company,
                                email: _this.state.email,
                                id: _this.state.id,
                                birthdate: _this.state.birthdate,
                                language: _this.state.language
                            };

                            if (!saveProfile) {
                                _context5.next = 7;
                                break;
                            }

                            _context5.next = 5;
                            return saveProfile(user);

                        case 5:
                            result = _context5.sent;

                            if (user.language !== originalLanguage) {
                                window.location.reload();
                            } else {
                                _this.initialise();
                            }

                        case 7:
                            return _context5.abrupt('return', result);

                        case 8:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        }));

        _this.uploadPhoto = function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(photo) {
                var uploadPhoto, result;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                uploadPhoto = _this.props.events.uploadPhoto;
                                result = void 0;

                                if (!uploadPhoto) {
                                    _context6.next = 8;
                                    break;
                                }

                                _context6.next = 5;
                                return uploadPhoto(photo);

                            case 5:
                                result = _context6.sent;
                                _context6.next = 8;
                                return _this.initialise();

                            case 8:
                                return _context6.abrupt('return', result);

                            case 9:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, _this2);
            }));

            return function (_x2) {
                return _ref6.apply(this, arguments);
            };
        }();

        _this.onDrop = function (_ref7) {
            var file = _ref7[0];

            _this.setState({ imageSelected: file });
        };

        _this.saveChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var saveChanges, _this$state, first_name, last_name, company, email, birthdate, languages, language, result;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            saveChanges = _this.props.events.saveChanges, _this$state = _this.state, first_name = _this$state.first_name, last_name = _this$state.last_name, company = _this$state.company, email = _this$state.email, birthdate = _this$state.birthdate, languages = _this$state.languages, language = languages.reduce(function (acc, val) {
                                return val.selected ? val.value : '';
                            }, '');

                            _this.setState({ lockdown: true });
                            _context7.next = 4;
                            return saveChanges({
                                first_name: first_name,
                                last_name: last_name,
                                company: company,
                                email: email,
                                birthdate: birthdate,
                                language: language
                            });

                        case 4:
                            result = _context7.sent;

                            if (result) {}
                            _this.setState({ lockdown: true });

                        case 7:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this2);
        }));

        _this.onChange = function (field, value) {
            var update = {};
            update[field] = value;
            _this.setState(update);
        };

        _this.getCroppedImg = function (img, pixelCrop, fileName) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = pixelCrop.width;
                    canvas.height = pixelCrop.height;
                    var ctx = canvas.getContext('2d');

                    ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);

                    // As Base64 string
                    var base64Image = canvas.toDataURL('image/jpeg');
                    resolve(base64Image);
                    // As a blob
                    // canvas.toBlob(blob => {
                    //     blob.name = fileName;
                    //     resolve(blob);
                    // }, 'image/jpeg');
                };
                image.src = img;
            });
        };

        _this.state = {
            lockdown: false,
            first_name: '',
            last_name: '',
            picture: '',
            company: '',
            email: '',
            birthdate: new Date().toISOString().split('T')[0],
            languages: [{ text: 'English', value: 'en_GB' }],
            old_password: '',
            new_password: '',
            new_password2: '',
            imageSelected: false,
            crop: {},
            originalLanguage: ''
        };
        return _this;
    }

    Profile.prototype.componentDidMount = function componentDidMount() {
        this.initialise();
    };

    Profile.prototype.render = function render() {
        var _this3 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var lockdown = this.state.lockdown;

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
                _Modal.Modal,
                {
                    onDialogClose: function onDialogClose() {
                        _this3.setState({ imageSelected: false, crop: null });
                    },
                    open: this.state.imageSelected,
                    title: translations.getLL('CROP_PROFILE_PHOTO', 'Crop Profile Photo'),
                    buttons: [{
                        text: translations.getLL('UPLOAD_IMAGE', 'Upload Image'),
                        onClick: function () {
                            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                var _state, pixelCrop, imageSelected, cropped;

                                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                    while (1) {
                                        switch (_context8.prev = _context8.next) {
                                            case 0:
                                                _state = _this3.state, pixelCrop = _state.pixelCrop, imageSelected = _state.imageSelected;
                                                _context8.next = 3;
                                                return _this3.getCroppedImg(URL.createObjectURL(imageSelected), pixelCrop, 'profile.jpeg');

                                            case 3:
                                                cropped = _context8.sent;

                                                _this3.setState({ imageSelected: false, crop: null });
                                                _context8.next = 7;
                                                return _this3.uploadPhoto(cropped);

                                            case 7:
                                            case 'end':
                                                return _context8.stop();
                                        }
                                    }
                                }, _callee8, _this3);
                            }));

                            return function onClick() {
                                return _ref9.apply(this, arguments);
                            };
                        }()
                    }, {
                        text: translations.getLL('CANCEL', 'Cancel'),
                        onClick: function onClick() {
                            _this3.setState({ imageSelected: false, crop: null });
                        }
                    }]
                },
                this.state.imageSelected && (0, _preact.h)(
                    CropContainer,
                    null,
                    (0, _preact.h)(_reactImageCrop2.default, {
                        src: URL.createObjectURL(this.state.imageSelected),
                        crop: _extends({}, this.state.crop, { aspect: 1 }),
                        onChange: function onChange(crop, pixelCrop) {
                            return _this3.setState({ crop: crop, pixelCrop: pixelCrop });
                        },
                        keepSelection: true,
                        style: { height: '100%' }
                    })
                )
            ),
            (0, _preact.h)(
                LeftSide,
                null,
                (0, _preact.h)(
                    ImageContainer,
                    null,
                    (0, _preact.h)(ProfileImage, { src: this.state.image })
                ),
                (0, _preact.h)(
                    _index4.default,
                    {
                        multiple: false,
                        onDrop: this.onDrop,
                        style: {},
                        activeStyle: {},
                        rejectStyle: {},
                        accept: 'image/*'
                    },
                    (0, _preact.h)(
                        _Button2.default,
                        { secondary: true },
                        translations.getLL('UPLOAD_NEW_IMAGE', 'Upload new image')
                    )
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
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: lockdown, value: this.state.first_name, onChange: function onChange(_ref10) {
                                var value = _ref10.value;
                                _this3.onChange('first_name', value);
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
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: lockdown, value: this.state.last_name, onChange: function onChange(_ref11) {
                                var value = _ref11.value;
                                _this3.onChange('last_name', value);
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
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: this.state.email, onChange: function onChange(_ref12) {
                                var value = _ref12.value;
                                _this3.onChange('email', value);
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
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: true, value: this.state.company, onChange: function onChange(_ref13) {
                                var value = _ref13.value;
                                _this3.onChange('company', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('DATE_OF_BIRTH', 'Date of Birth')
                        ),
                        (0, _preact.h)(_index2.default, { disabled: lockdown, value: this.state.birthdate, onChange: function onChange(_ref14) {
                                var value = _ref14.value;
                                _this3.onChange('birthdate', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('LANGUAGE', 'Language')
                        ),
                        (0, _preact.h)(_Dropdown2.default, { disabled: lockdown, options: this.state.languages, onChange: function onChange(_ref15) {
                                var value = _ref15.value;
                                _this3.onChange('language', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Button2.default,
                            { disabled: lockdown, onClick: function onClick() {
                                    _this3.saveProfile();
                                }, secondary: true },
                            translations.getLL('SAVE_CHANGES', 'Save changes')
                        )
                    )
                ),
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('PASSWORD', 'Password')
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
                            translations.getLL('CURRENT_PASSWORD', 'Current Password')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: lockdown, type: 'password', value: this.state.old_password, onChange: function onChange(_ref16) {
                                var value = _ref16.value;
                                _this3.onChange('old_password', value);
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('NEW_PASSWORD', 'New Password')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: lockdown, type: 'password', value: this.state.new_password, onChange: function onChange(_ref17) {
                                var value = _ref17.value;
                                _this3.onChange('new_password', value);
                            }, validation: 'password' })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('REPEAT_NEW_PASSWORD', 'Repeat New Password')
                        ),
                        (0, _preact.h)(_SingleLineTextInput2.default, { disabled: lockdown, type: 'password', value: this.state.new_password2, onChange: function onChange(_ref18) {
                                var value = _ref18.value;
                                _this3.onChange('new_password2', value);
                            }, validation: 'password' })
                    ),
                    (0, _preact.h)(
                        _Button2.default,
                        { secondary: true, onClick: function onClick() {
                                _this3.savePassword();
                            }, disabled: lockdown },
                        translations.getLL('SAVE_NEW_PASSWORD', 'Save new password')
                    )
                )
            )
        );
    };

    return Profile;
}(_preact.Component);

exports.default = Profile;