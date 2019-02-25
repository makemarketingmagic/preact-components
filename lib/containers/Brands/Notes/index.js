'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../../components/common/scMixins');

var _Button = require('../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _index = require('./../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _SearchIcon = require('./../../../components/icons/SearchIcon');

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _PlusIcon = require('./../../../components/icons/PlusIcon');

var _PlusIcon2 = _interopRequireDefault(_PlusIcon);

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _lodash = require('lodash');

var _ExpandingSection = require('./ExpandingSection');

var _ExpandingSection2 = _interopRequireDefault(_ExpandingSection);

var _index3 = require('./../../../components/Dropdown/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = _styledComponents2.default.div.withConfig({
    displayName: 'Notes__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    TitleArea = _styledComponents2.default.div.withConfig({
    displayName: 'Notes__TitleArea'
})(['display:flex;flex-direction:row;justify-content:space-between;margin-bottom:32px;']),
    NotesControls = _styledComponents2.default.div.withConfig({
    displayName: 'Notes__NotesControls'
})(['display:flex;flex-direction:row;align-items:center;& > *{margin:0 4px;}']);

var Notes = function (_Component) {
    _inherits(Notes, _Component);

    function Notes(props) {
        _classCallCheck(this, Notes);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.updateSearch = function (_ref) {
            var value = _ref.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.setOrderBy = function (field, direction) {
            var _this$props$notes = _this.props.notes,
                notes = _this$props$notes === undefined ? [] : _this$props$notes;

            if (notes && notes[0] && typeof notes[0][field] !== 'undefined') {
                _this.setState({ orderBy: field, direction: direction });
                _this.reloadFilters();
            }
        };

        _this.onSelect = function (id) {
            if (id && id !== _this.state.selected) {
                _this.setState({ selected: id });
            }
        };

        _this.onChangeType = function (val) {
            console.debug(val);
        };

        _this.reloadFilters = function () {
            var notes = _this.props.notes;
            var _this$state = _this.state,
                direction = _this$state.direction,
                orderBy = _this$state.orderBy,
                search = _this$state.search;

            var filteredNotes = notes;
            if (search !== '') {
                filteredNotes = filteredNotes.filter(function (value) {
                    if (value['innerContent'] && value['innerContent'].toLowerCase && value['innerContent'].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
            filteredNotes = filteredNotes.sort(function (a, b) {
                var field1 = a[orderBy],
                    field2 = b[orderBy];
                return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
            });
            _this.setState({ filteredNotes: filteredNotes });
        };

        _this.state = {
            notes: [],
            filteredNotes: [],
            search: '',
            orderby: 'dateCreated',
            direction: _Table.SORT_DIRECTION.DESC,
            selected: false
        };
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    Notes.prototype.componentDidMount = function componentDidMount() {
        var notes = this.props.notes;

        this.setState({ notes: notes, filteredNotes: notes });
    };

    Notes.prototype.stripHtmlTags = function stripHtmlTags(string) {
        return string.replace(/<.*?>/g, '');
    };

    Notes.prototype.render = function render() {
        var _this2 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            notes = _state.notes,
            filteredNotes = _state.filteredNotes;

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
                    translations.getLL('NUMBER_OF_NOTES_WITH_VALUE', 'You have %v1 notes', [(0, _preact.h)(
                        'span',
                        { style: { color: _scMixins.colors.red } },
                        notes.length
                    )])
                ),
                (0, _preact.h)(
                    NotesControls,
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        {
                            secondary: true,
                            Icon: _PlusIcon2.default,
                            iconLeft: true
                        },
                        translations.getLL('NEW', 'New')
                    ),
                    (0, _preact.h)(_index2.default, {
                        iconLeft: true,
                        value: this.state.search,
                        Icon: _SearchIcon2.default,
                        placeholder: translations.getLL('SEARCH_X_NOTES', 'Search %v1 notes', [notes.length]),
                        onChange: this.updateSearch
                    })
                )
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredNotes,
                headers: {
                    innerContent: translations.getLL('NOTE', 'Note'),
                    dateCreated: translations.getLL('CREATED', 'Created'),
                    private: translations.getLL('TYPE', 'Type')
                },
                renderers: {
                    innerContent: function innerContent(value) {
                        return (0, _preact.h)(
                            'span',
                            { style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            _this2.stripHtmlTags(value)
                        );
                    },
                    dateCreated: function dateCreated(value) {
                        return value;
                    },
                    private: function _private(value, selected) {
                        return selected ? (0, _preact.h)(_index4.default, { options: [{ name: 'false', text: translations.getLL('PUBLIC', 'Public'), selected: value === 'false' }, { name: 'true', text: translations.getLL('PRIVATE', 'Private'), selected: value === 'true' }], onChange: function onChange(val) {
                                _this2.onChangeType(val);
                            } }) : value == 'true' ? translations.getLL('PRIVATE', 'Private') : translations.getLL('PUBLIC', 'Public');
                    }
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                hasExpandingSection: true,
                ExpandingSection: _ExpandingSection2.default,
                expandingSectionProps: {
                    translations: translations
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                selected: this.state.selected,
                onSelect: this.onSelect
            })
        );
    };

    return Notes;
}(_preact.Component);

exports.default = Notes;