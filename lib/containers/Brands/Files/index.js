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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        var _this2 = this;

        _classCallCheck(this, Files);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.reloadFilters = function () {
            var _this$state = _this.state,
                files = _this$state.files,
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

        _this.getFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var _this$props$events$ge, getFiles, files;

                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _this$props$events$ge = _this.props.events.getFiles, getFiles = _this$props$events$ge === undefined ? null : _this$props$events$ge;

                                                if (!getFiles) {
                                                    _context.next = 7;
                                                    break;
                                                }

                                                _context.next = 4;
                                                return getFiles();

                                            case 4:
                                                _context.t0 = _context.sent;
                                                _context.next = 8;
                                                break;

                                            case 7:
                                                _context.t0 = _this.props.files;

                                            case 8:
                                                files = _context.t0;

                                                _this.setState({ files: files, filteredFiles: files, loading: false }, function () {
                                                    return _this.reloadFilters();
                                                });

                                            case 10:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this2);
                            })));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.saveFilename = function (file, newFileName) {
            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this$props$events$sa, saveFileName;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _this$props$events$sa = _this.props.events.saveFileName, saveFileName = _this$props$events$sa === undefined ? false : _this$props$events$sa;

                                if (!saveFileName) {
                                    _context3.next = 6;
                                    break;
                                }

                                _context3.next = 4;
                                return saveFileName(file, newFileName);

                            case 4:
                                _context3.next = 6;
                                return _this.getFiles();

                            case 6:
                                _this.setState({ selected: false, editFileName: '' });

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            })));
        };

        _this.openFile = function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(file) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    var _this$props$events$do, downloadFile;

                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    _this$props$events$do = _this.props.events.downloadFile, downloadFile = _this$props$events$do === undefined ? false : _this$props$events$do;

                                                    if (!downloadFile) {
                                                        _context4.next = 5;
                                                        break;
                                                    }

                                                    _context4.next = 4;
                                                    return downloadFile(file);

                                                case 4:
                                                    _this.setState({ loading: false });

                                                case 5:
                                                case 'end':
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, _this2);
                                })));

                            case 1:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this2);
            }));

            return function (_x) {
                return _ref4.apply(this, arguments);
            };
        }();

        _this.deleteFile = function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(file) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                    var _this$props$events$de, deleteFile;

                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                        while (1) {
                                            switch (_context6.prev = _context6.next) {
                                                case 0:
                                                    _this$props$events$de = _this.props.events.deleteFile, deleteFile = _this$props$events$de === undefined ? false : _this$props$events$de;

                                                    if (!deleteFile) {
                                                        _context6.next = 6;
                                                        break;
                                                    }

                                                    _context6.next = 4;
                                                    return deleteFile(file);

                                                case 4:
                                                    _context6.next = 6;
                                                    return _this.getFiles();

                                                case 6:
                                                case 'end':
                                                    return _context6.stop();
                                            }
                                        }
                                    }, _callee6, _this2);
                                })));

                            case 1:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, _this2);
            }));

            return function (_x2) {
                return _ref6.apply(this, arguments);
            };
        }();

        _this.updateSearch = function (_ref8) {
            var value = _ref8.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.onDrop = function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(files) {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                    var uploadFile;
                                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                        while (1) {
                                            switch (_context8.prev = _context8.next) {
                                                case 0:
                                                    uploadFile = _this.props.events.uploadFile;

                                                    if (!uploadFile) {
                                                        _context8.next = 6;
                                                        break;
                                                    }

                                                    _context8.next = 4;
                                                    return uploadFile(files);

                                                case 4:
                                                    _context8.next = 6;
                                                    return _this.getFiles();

                                                case 6:
                                                case 'end':
                                                    return _context8.stop();
                                            }
                                        }
                                    }, _callee8, _this2);
                                })));

                            case 1:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, _this2);
            }));

            return function (_x3) {
                return _ref9.apply(this, arguments);
            };
        }();

        _this.state = {
            files: [],
            filteredFiles: [],
            editFileName: '',
            orderBy: 'date_uploaded',
            direction: _Table.SORT_DIRECTION.DESC,
            search: '',
            selected: false
        };
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    Files.prototype.componentDidMount = function componentDidMount() {
        var files = this.props.files;

        this.getFiles();
        //this.setState({ files, filteredFiles: files })
    };

    Files.prototype.render = function render() {
        var _this3 = this;

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
                                (0, _preact.h)(_index2.default, { value: _this3.state.editFileName, onChange: function onChange(_ref11) {
                                        var value = _ref11.value;
                                        return _this3.onFileNameChange(value);
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
                                        _this3.saveFilename(value, _this3.state.editFileName);
                                    }
                                }) : (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('EDIT_FILENAME', 'Edit Filename'),
                                    Icon: _DotsIcon2.default,
                                    onClick: function onClick() {
                                        _this3.onSelect(_id, value.file_name);
                                    }
                                }),
                                (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('DOWNLOAD_FILE', 'Download File'),
                                    Icon: _DownloadArrow2.default,
                                    onClick: function onClick() {
                                        _this3.openFile(value);
                                    }
                                }),
                                (0, _preact.h)(_IconButton2.default, {
                                    title: translations.getLL('DELETE_FILE', 'Delete File'),
                                    Icon: _CrossIcon2.default,
                                    onClick: function onClick() {
                                        _this3.deleteFile(value);
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