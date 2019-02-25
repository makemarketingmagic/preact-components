'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _SearchIcon = require('./../../../components/icons/SearchIcon');

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _scMixins = require('../../../components/common/scMixins');

var _lodash = require('lodash');

var _index3 = require('./../../../components/Button/index');

var _index4 = _interopRequireDefault(_index3);

var _PlusIcon = require('./../../../components/icons/PlusIcon');

var _PlusIcon2 = _interopRequireDefault(_PlusIcon);

var _index5 = require('./../../../components/Modal/index');

var _Label = require('../../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _index6 = require('./../../../components/DatePicker/index');

var _index7 = _interopRequireDefault(_index6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = _styledComponents2.default.div.withConfig({
    displayName: 'SAQL__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    TitleArea = _styledComponents2.default.div.withConfig({
    displayName: 'SAQL__TitleArea'
})(['display:flex;flex-direction:row;justify-content:space-between;margin-bottom:32px;']),
    SAQLControls = _styledComponents2.default.div.withConfig({
    displayName: 'SAQL__SAQLControls'
})(['display:flex;flex-direction:row;align-items:center;& > *{margin:0 4px;}']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'SAQL__Group'
})(['margin:19px 0;']),
    SAQLForm = _styledComponents2.default.form.withConfig({
    displayName: 'SAQL__SAQLForm'
})(['margin:0 32px;']);

var FLAGS = {
    NONE: 0,
    EDIT: 1,
    NEW: 2
};

var SAQL = function (_Component) {
    _inherits(SAQL, _Component);

    function SAQL(props) {
        _classCallCheck(this, SAQL);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.updateSearch = function (_ref) {
            var value = _ref.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.onSelect = function (id, val) {
            if (id && id !== _this.state.selected) {
                _this.setState({ selected: id, editSAQL: val, mode: FLAGS.EDIT });
            }
        };

        _this.reloadFilters = function () {
            var leads = _this.props.leads;
            var _this$state = _this.state,
                direction = _this$state.direction,
                orderBy = _this$state.orderBy,
                search = _this$state.search;

            var filteredLeads = leads;
            if (search !== '') {
                filteredLeads = filteredLeads.filter(function (value) {
                    for (var _iterator = _this.searchColumns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref2;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref2 = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref2 = _i.value;
                        }

                        var key = _ref2;

                        if (value[key] && value[key].toLowerCase && value[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            filteredLeads = filteredLeads.sort(function (a, b) {
                var field1 = a[orderBy],
                    field2 = b[orderBy];
                return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
            });
            _this.setState({ filteredLeads: filteredLeads });
        };

        _this.setOrderBy = function (field, direction) {
            var _this$props$leads = _this.props.leads,
                leads = _this$props$leads === undefined ? [] : _this$props$leads;

            if (leads && leads[0] && typeof leads[0][field] !== 'undefined') {
                _this.setState({ orderBy: field, direction: direction });
                _this.reloadFilters();
            }
        };

        _this.editSAQL = function (field, value) {
            var editSAQL = _this.state.editSAQL;

            editSAQL[field] = value;
            _this.setState({ editSAQL: editSAQL });
        };

        _this.state = {
            search: '',
            leads: [],
            filteredLeads: [],
            orderBy: 'engagement_date',
            direction: _Table.SORT_DIRECTION.DESC,
            selected: false,
            editSAQL: false,
            mode: FLAGS.NONE
        };
        _this.searchColumns = ['company_name', 'contact_full_name', 'solutions'];
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    SAQL.prototype.componentDidMount = function componentDidMount() {
        var leads = this.props.leads;

        this.setState({ leads: leads, filteredLeads: leads });
    };

    SAQL.prototype.renderModal = function renderModal(translations) {
        var _this2 = this;

        var editSAQL = this.state.editSAQL;

        return (0, _preact.h)(
            _index5.Modal,
            {
                onDialogClose: function onDialogClose() {
                    _this2.setState({ editSAQL: false, mode: FLAGS.NONE });
                },
                title: translations.getLL('ADD_EDIT_SAQL', 'Add / Edit SAQL'),
                open: editSAQL,
                buttons: [{
                    text: translations.getLL('ADD_SAQL', 'Add SAQL'), onClick: function onClick() {
                        _this2.setState({ editSAQL: false, mode: FLAGS.NONE });
                    }
                }, {
                    text: translations.getLL('CANCEL', 'Cancel'), secondary: true, onClick: function onClick() {
                        _this2.setState({ editSAQL: false, mode: FLAGS.NONE });
                    }
                }]
            },
            (0, _preact.h)(
                SAQLForm,
                null,
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('COMPANY_NAME', 'Company Name')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.company_name, onChange: function onChange(_ref3) {
                            var value = _ref3.value;
                            _this2.editSAQL('company_name', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('DATE_EXPECTED_TO_SIGN', 'When is the company expected to sign?')
                    ),
                    (0, _preact.h)(_index7.default, { value: editSAQL.engagement_date, onChange: function onChange(_ref4) {
                            var value = _ref4.value;
                            _this2.editSAQL('engagement_date', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('PARTNER_SOLUTION', 'Partner Solution')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.partner_solution, onChange: function onChange(_ref5) {
                            var value = _ref5.value;
                            _this2.editSAQL('partner_solution', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('SOLUTIONS', 'Solutions')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.solutions, onChange: function onChange(_ref6) {
                            var value = _ref6.value;
                            _this2.editSAQL('solutions', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('BUDGET', 'Budget')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.budget, onChange: function onChange(_ref7) {
                            var value = _ref7.value;
                            _this2.editSAQL('budget', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('CONTACT_NAME', 'Contact Name')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_full_name, onChange: function onChange(_ref8) {
                            var value = _ref8.value;
                            _this2.editSAQL('contact_full_name', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('PHONE_NUMBER', 'Phone Number')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_phone, onChange: function onChange(_ref9) {
                            var value = _ref9.value;
                            _this2.editSAQL('contact_phone', value);
                        } })
                )
            )
        );
    };

    SAQL.prototype.render = function render() {
        var _this3 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            leads = _state.leads,
            filteredLeads = _state.filteredLeads;

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
            this.renderModal(translations),
            (0, _preact.h)(
                TitleArea,
                null,
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('NUMBER_OF_SAQLS_WITH_VALUE', 'You have %v1 Sales Qualified Leads', [(0, _preact.h)(
                        'span',
                        { style: { color: _scMixins.colors.red } },
                        leads.length
                    )])
                ),
                (0, _preact.h)(
                    SAQLControls,
                    null,
                    (0, _preact.h)(
                        _index4.default,
                        {
                            secondary: true,
                            Icon: _PlusIcon2.default,
                            iconLeft: true,
                            onClick: function onClick() {
                                _this3.setState({ editSAQL: {}, mode: FLAGS.NEW });
                            }
                        },
                        translations.getLL('NEW', 'New')
                    ),
                    (0, _preact.h)(_index2.default, {
                        iconLeft: true,
                        value: this.state.search,
                        Icon: _SearchIcon2.default,
                        placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [leads.length]),
                        onChange: this.updateSearch
                    })
                )
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredLeads,
                headers: {
                    'company_name': translations.getLL('COMPANY', 'Company'),
                    'contact_full_name': translations.getLL('CONTACT', 'Contact'),
                    'contact_phone': translations.getLL('PHONE', 'Phone'),
                    'solutions': translations.getLL('SOLUTIONS', 'Solution(s)'),
                    'engagement_date': translations.getLL('ENGAGEMENT_DATE', 'Engagement Date')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                renderers: {
                    'engagement_date': function engagement_date(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    }
                },
                selected: this.state.selected,
                onSelect: this.onSelect,
                selectedBackground: _scMixins.colors.white
            })
        );
    };

    return SAQL;
}(_preact.Component);

exports.default = SAQL;