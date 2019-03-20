'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Label = require('../../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _index = require('./../../../components/DragDropZone/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadFiles = function (_Component) {
    _inherits(UploadFiles, _Component);

    function UploadFiles(props) {
        _classCallCheck(this, UploadFiles);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            selected: false,
            fileName: '',
            size: 0,
            files: [],
            emailDatabase: null,
            socialSharing: null
        };
        return _this;
    }

    UploadFiles.prototype.renderFileDetails = function renderFileDetails(size) {
        var suffixes = ['B', 'KB', 'MB', 'GB'];
        var factor = 1,
            tempSize = size;
        while (tempSize > 1000) {
            tempSize = tempSize / 1000;
            factor += 1;
        }

        tempSize = Math.round(tempSize * 10) / 10;

        return tempSize + ' ' + suffixes[factor - 1];
    };

    UploadFiles.prototype.renderInfoOrFileDetails = function renderInfoOrFileDetails(file) {
        return file ? file.filename ? file.filename + ' already uploaded' : file.name + ' selected, ' + this.renderFileDetails(file.size) : 'Click here to select a file or drag and drop it in the area';
    };

    UploadFiles.prototype.render = function render() {
        var _props = this.props,
            _props$components = _props.components,
            StepContents = _props$components.StepContents,
            Explaination = _props$components.Explaination,
            StepForm = _props$components.StepForm,
            Group = _props$components.Group,
            IFrameContainer = _props$components.IFrameContainer,
            SectionTitle = _props$components.SectionTitle,
            _props$data = _props.data,
            socialSharing = _props$data.socialSharing,
            emailDatabase = _props$data.emailDatabase,
            updateField = _props.updateField,
            translations = _props.translations;

        return (0, _preact.h)(
            StepContents,
            null,
            (0, _preact.h)(
                IFrameContainer,
                null,
                (0, _preact.h)('iframe', { 'class': 'embed-responsive-item', src: translations.getLL('ONBOARDING_VIDEO_SRC_FILES', 'https://www.youtube.com/embed/XhEp4EH10lI?rel=0'),
                    frameborder: '0', allowfullscreen: true })
            ),
            (0, _preact.h)(Explaination, null),
            (0, _preact.h)(
                StepForm,
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('SELECT_EMAIL_DATABASE_FILE', '1. Select the email database file')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('SELECT_YOUR_LIST_WITH_CONTACTS_FOR_MAILING_COL', 'Select your list with contacts we can mail. These persons must have approved to get mailed:')
                    ),
                    (0, _preact.h)(
                        _index2.default,
                        { onDrop: function onDrop(_ref) {
                                var file = _ref[0];
                                return updateField('files', 'emailDatabase', file);
                            }, multiple: false },
                        (0, _preact.h)(
                            'span',
                            { style: { flex: 1, textAlign: 'center' } },
                            this.renderInfoOrFileDetails(emailDatabase)
                        )
                    )
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('KEY_PLAYER_LIST', '2. Key player list')
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('SELECT_YOUR_LIST_WITH_CONTACTS_FOR_SHARING', 'Select your list with contacts we can ask to share your AHAs in their social media network')
                    ),
                    (0, _preact.h)(
                        _index2.default,
                        { onDrop: function onDrop(_ref2) {
                                var file = _ref2[0];
                                return updateField('files', 'socialSharing', file);
                            }, multiple: false },
                        (0, _preact.h)(
                            'span',
                            { style: { flex: 1, textAlign: 'center' } },
                            this.renderInfoOrFileDetails(socialSharing)
                        )
                    )
                )
            )
        );
    };

    return UploadFiles;
}(_preact.Component);

exports.default = UploadFiles;