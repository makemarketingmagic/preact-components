'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../../components/common/scMixins');

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _index = require('./../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _SearchIcon = require('./../../../components/icons/SearchIcon');

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _UploadIcon = require('./../../../components/icons/UploadIcon');

var _UploadIcon2 = _interopRequireDefault(_UploadIcon);

var _index3 = require('./../../../components/Button/index');

var _index4 = _interopRequireDefault(_index3);

var _IconButton = require('../../../components/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _DownloadArrow = require('./../../../components/icons/DownloadArrow');

var _DownloadArrow2 = _interopRequireDefault(_DownloadArrow);

var _CrossIcon = require('./../../../components/icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

var _DotsIcon = require('./../../../components/icons/DotsIcon');

var _DotsIcon2 = _interopRequireDefault(_DotsIcon);

var _TickIcon = require('./../../../components/icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _index5 = require('./../../../components/DragDropZone/index');

var _index6 = _interopRequireDefault(_index5);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = _styledComponents2.default.div.withConfig({
    displayName: 'Files__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    TitleArea = _styledComponents2.default.div.withConfig({
    displayName: 'Files__TitleArea'
})(['display:flex;flex-direction:row;justify-content:space-between;margin-bottom:32px;']),
    FilesControls = _styledComponents2.default.div.withConfig({
    displayName: 'Files__FilesControls'
})(['display:flex;flex-direction:row;align-items:center;& > *{margin:0 4px;}']),
    FileButtons = _styledComponents2.default.div.withConfig({
    displayName: 'Files__FileButtons'
})(['display:flex;flex-direction:row;width:100%;justify-content:center;button{margin:0 4px;}']),
    FileNameEdit = _styledComponents2.default.div.withConfig({
    displayName: 'Files__FileNameEdit'
})(['width:100%;']);

var Files = function (_Component) {
    _inherits(Files, _Component);

    function Files(props) {
        _classCallCheck(this, Files);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.reloadFilters = function () {
            var files = _this.props.files;
            var _this$state = _this.state,
                direction = _this$state.direction,
                orderBy = _this$state.orderBy,
                search = _this$state.search;

            var filteredFiles = files;
            if (search !== '') {
                filteredFiles = filteredFiles.filter(function (value) {
                    if (value['file_name'] && value['file_name'].toLowerCase && value['file_name'].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            filteredFiles = filteredFiles.sort(function (a, b) {
                var field1 = a[orderBy],
                    field2 = b[orderBy];
                return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
            });
            _this.setState({ filteredFiles: filteredFiles });
        };

        _this.setOrderBy = function (field, direction) {
            var _this$props$files = _this.props.files,
                files = _this$props$files === undefined ? [] : _this$props$files;

            if (files && files[0] && typeof files[0][field] !== 'undefined') {
                _this.setState({ orderBy: field, direction: direction });
                _this.reloadFilters();
            }
        };

        _this.onSelect = function (id, editFileName) {
            if (id && id !== _this.state.selected) {
                _this.setState({ selected: id, editFileName: editFileName });
            }
        };

        _this.onFileNameChange = function (editFileName) {
            _this.setState({ editFileName: editFileName });
        };

        _this.saveFilename = function (file, newFileName) {
            var _this$props$events$sa = _this.props.events.saveFile,
                saveFile = _this$props$events$sa === undefined ? false : _this$props$events$sa;

            if (saveFile) {
                saveFile(file, newFileName);
            }
            _this.setState({ selected: false, editFileName: '' });
        };

        _this.openFile = function (file) {
            var _this$props$events$do = _this.props.events.downloadFile,
                downloadFile = _this$props$events$do === undefined ? false : _this$props$events$do;

            if (downloadFile) {
                downloadFile(file);
            }
        };

        _this.deleteFile = function (file) {
            var _this$props$events$de = _this.props.events.deleteFile,
                deleteFile = _this$props$events$de === undefined ? false : _this$props$events$de;

            if (deleteFile) {
                deleteFile(file);
            }
        };

        _this.updateSearch = function (_ref) {
            var value = _ref.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.onDrop = function (file) {};

        _this.state = {
            files: [],
            filteredFiles: [],
            editFileName: '',
            orderBy: 'date_uploaded',
            direction: _Table.SORT_DIRECTION.ASC,
            search: '',
            selected: false
        };
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    Files.prototype.componentDidMount = function componentDidMount() {
        var files = this.props.files;

        this.setState({ files: files, filteredFiles: files });
    };

    Files.prototype.render = function render() {
        var _this2 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            files = _state.files,
            filteredFiles = _state.filteredFiles;

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
            (0, _preact.h)(
                TitleArea,
                null,
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('NUMBER_OF_FILES_WITH_VALUE', 'You have %v1 files', [(0, _preact.h)(
                        'span',
                        { style: { color: _scMixins.colors.red } },
                        files.length
                    )])
                ),
                (0, _preact.h)(
                    FilesControls,
                    null,
                    (0, _preact.h)(
                        _index6.default,
                        {
                            multiple: true,
                            onDrop: this.onDrop,
                            style: {},
                            activeStyle: {},
                            rejectStyle: {}
                        },
                        (0, _preact.h)(
                            _index4.default,
                            {
                                secondary: true,
                                Icon: _UploadIcon2.default,
                                iconLeft: true
                            },
                            translations.getLL('UPLOAD', 'Upload')
                        )
                    ),
                    (0, _preact.h)(_index2.default, {
                        iconLeft: true,
                        value: this.state.search,
                        Icon: _SearchIcon2.default,
                        placeholder: translations.getLL('SEARCH_X_FILES', 'Search %v1 files', [files.length]),
                        onChange: this.updateSearch
                    })
                )
            ),
            (0, _preact.h)(
                _index6.default,
                {
                    multiple: true,
                    onDrop: this.onDrop,
                    disableClick: true,
                    style: {
                        borderWidth: 2,
                        borderColor: 'transparent',
                        borderStyle: 'dashed',
                        borderRadius: 16
                    },
                    activeStyle: {
                        borderStyle: 'solid',
                        borderColor: _scMixins.colors.placeholder
                    },
                    rejectStyle: {
                        borderStyle: 'solid',
                        borderColor: _scMixins.colors.red
                    }
                },
                (0, _preact.h)(_Table2.default, {
                    data: filteredFiles,
                    headers: {
                        'file_name': translations.getLL('FILENAME', 'File Name'),
                        'extension': translations.getLL('EXTENSION', 'Extension'),
                        'uploaded_by': translations.getLL('CREATED_BY', 'Created By'),
                        'date_uploaded': translations.getLL('CREATED_ON', 'Created On'),
                        // Need to render an empty column so pick one that's not been used
                        'id': ''
                    },
                    events: {
                        setOrderBy: this.setOrderBy
                    },
                    selected: this.state.selected,
                    selectedBackground: _scMixins.colors.white,
                    renderers: {
                        'date_uploaded': function date_uploaded(val) {
                            return new Date(val * 1000).toISOString().split('T')[0];
                        },
                        'file_name': function file_name(keyVal, selected, value) {
                            return selected ? (0, _preact.h)(
                                FileNameEdit,
                                null,
                                (0, _preact.h)(_index2.default, { value: _this2.state.editFileName, onChange: function onChange(_ref2) {
                                        var value = _ref2.value;
                                        return _this2.onFileNameChange(value);
                                    }
                                })
                            ) : keyVal;
                        },
                        'id': function id(_id, selected, value) {
                            return (0, _preact.h)(
                                FileButtons,
                                null,
                                selected ? (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('SAVE_FILENAME', 'Save Filename'),
                                    Icon: _TickIcon2.default,
                                    onClick: function onClick() {
                                        _this2.saveFilename(value, _this2.state.editFileName);
                                    }
                                }) : (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('EDIT_FILENAME', 'Edit Filename'),
                                    Icon: _DotsIcon2.default,
                                    onClick: function onClick() {
                                        _this2.onSelect(_id, value.file_name);
                                    }
                                }),
                                (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('DOWNLOAD_FILE', 'Download File'),
                                    Icon: _DownloadArrow2.default,
                                    onClick: function onClick() {
                                        _this2.openFile(value);
                                    }
                                }),
                                (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('DELETE_FILE', 'Delete File'),
                                    Icon: _CrossIcon2.default,
                                    onClick: function onClick() {
                                        _this2.deleteFile(value);
                                    }
                                })
                            );
                        }
                    },
                    orderBy: this.state.orderBy,
                    direction: this.state.direction

                })
            )
        );
    };

    return Files;
}(_preact.Component);

exports.default = Files;