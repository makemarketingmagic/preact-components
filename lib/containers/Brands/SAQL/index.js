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

var _Checkboxes = require('../../../components/Checkboxes');

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        var _this2 = this;

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
            var _this$state = _this.state,
                leads = _this$state.leads,
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

        _this.getLeads = function () {
            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var getLeads, leads;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                getLeads = _this.props.events.getLeads;

                                if (!getLeads) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 4;
                                return getLeads();

                            case 4:
                                _context.t0 = _context.sent;
                                _context.next = 8;
                                break;

                            case 7:
                                _context.t0 = _this.props.leads;

                            case 8:
                                leads = _context.t0;

                                _this.setState({ leads: leads, filteredLeads: leads, loading: false });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            })));
        };

        _this.editSAQL = function (field, value) {
            var editSAQL = _this.state.editSAQL;

            editSAQL[field] = value;
            _this.setState({ editSAQL: editSAQL });
        };

        _this.getKnownBrandNames = function () {
            var leads = _this.state.leads;

            return leads.map(function (lead) {
                return lead.company_name;
            });
        };

        _this.state = {
            search: '',
            leads: [],
            filteredLeads: [],
            orderBy: 'estimated_signing_date',
            direction: _Table.SORT_DIRECTION.DESC,
            selected: false,
            editSAQL: false,
            mode: FLAGS.NONE,
            solutions: Object.keys(_this.props.WeMicrosoftService.getAllSolutions())
        };
        _this.searchColumns = ['company_name', 'contact_full_name', 'solutions'];
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    SAQL.prototype.componentDidMount = function componentDidMount() {
        this.getLeads();
    };

    SAQL.prototype.renderModal = function renderModal(translations) {
        var _this3 = this;

        var _state = this.state,
            editSAQL = _state.editSAQL,
            mode = _state.mode,
            solutions = _state.solutions;
        var _props = this.props,
            SAQLModel = _props.SAQLModel,
            authToken = _props.authToken,
            accountId = _props.accountId,
            WeMicrosoftService = _props.WeMicrosoftService,
            WeBackendService = _props.WeBackendService;

        return (0, _preact.h)(
            _index5.Modal,
            {
                onDialogClose: function onDialogClose() {
                    _this3.setState({ editSAQL: false, mode: FLAGS.NONE, selected: false });
                },
                title: translations.getLL('ADD_EDIT_SAQL', 'Add / Edit SAQL'),
                open: editSAQL,
                buttons: [{
                    text: mode === FLAGS.EDIT ? translations.getLL('EDIT_SAQL', 'Edit SAQL') : translations.getLL('ADD_SAQL', 'Add SAQL'),
                    onClick: function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var SAQL, result;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            SAQL = new SAQLModel(editSAQL, authToken, accountId, _this3.getKnownBrandNames(), WeMicrosoftService, WeBackendService);

                                            if (!SAQL.isReadyToUpsert()) {
                                                _context2.next = 7;
                                                break;
                                            }

                                            _context2.next = 4;
                                            return SAQL.upsertSaql();

                                        case 4:
                                            result = _context2.sent;
                                            _context2.next = 7;
                                            return _this3.getLeads();

                                        case 7:
                                            _this3.setState({ editSAQL: false, mode: FLAGS.NONE });

                                        case 8:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, _this3);
                        }));

                        return function onClick() {
                            return _ref4.apply(this, arguments);
                        };
                    }()
                }, {
                    text: translations.getLL('CANCEL', 'Cancel'), secondary: true, onClick: function onClick() {
                        _this3.setState({ editSAQL: false, mode: FLAGS.NONE, selected: false });
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
                    (0, _preact.h)(_index2.default, { value: editSAQL.company_name, onChange: function onChange(_ref5) {
                            var value = _ref5.value;
                            _this3.editSAQL('company_name', value);
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
                    (0, _preact.h)(_index7.default, { value: (editSAQL.estimated_signing_date ? new Date(editSAQL.estimated_signing_date * 1000) : new Date()).toISOString().split('T')[0], onChange: function onChange(_ref6) {
                            var value = _ref6.value;
                            _this3.editSAQL('estimated_signing_date', value);
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
                    (0, _preact.h)(_index2.default, { value: editSAQL.partner_solution, onChange: function onChange(_ref7) {
                            var value = _ref7.value;
                            _this3.editSAQL('partner_solution', value);
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
                    (0, _preact.h)(_Checkboxes2.default, {
                        options: solutions.map(function (label) {
                            return { label: label, data: label, selected: editSAQL ? (editSAQL.solutions || []).indexOf(label) >= 0 : false };
                        }),
                        onChange: function onChange(options) {
                            var solutions = options.reduce(function (acc, val) {
                                if (val.selected) acc.push(val.data);
                                return acc;
                            }, []);
                            _this3.editSAQL('solutions', solutions);
                        }
                    })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('BUDGET', 'Budget')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.budget, onChange: function onChange(_ref8) {
                            var value = _ref8.value;
                            _this3.editSAQL('budget', value);
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
                    (0, _preact.h)(
                        'div',
                        { style: { display: 'flex' } },
                        (0, _preact.h)(_index2.default, { style: { flex: 0.4 }, value: editSAQL.contact_first_name, onChange: function onChange(_ref9) {
                                var value = _ref9.value;
                                _this3.editSAQL('contact_first_name', value);
                            } }),
                        (0, _preact.h)(_index2.default, { style: { flex: 0.2 }, value: editSAQL.contact_prefix, onChange: function onChange(_ref10) {
                                var value = _ref10.value;
                                _this3.editSAQL('contact_prefix', value);
                            } }),
                        (0, _preact.h)(_index2.default, { style: { flex: 0.4 }, value: editSAQL.contact_last_name, onChange: function onChange(_ref11) {
                                var value = _ref11.value;
                                _this3.editSAQL('contact_last_name', value);
                            } })
                    )
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('JOB_TITLE', 'Job Title')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_job_title, onChange: function onChange(_ref12) {
                            var value = _ref12.value;
                            _this3.editSAQL('contact_job_title', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('CONTACT_EMAIL', 'Contact Email Address')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_email, onChange: function onChange(_ref13) {
                            var value = _ref13.value;
                            _this3.editSAQL('contact_email', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('CONTACT_PHONE', 'Contact Phone Number')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_phone, onChange: function onChange(_ref14) {
                            var value = _ref14.value;
                            _this3.editSAQL('contact_phone', value);
                        } })
                ),
                (0, _preact.h)(
                    Group,
                    null,
                    (0, _preact.h)(
                        _Label2.default,
                        null,
                        translations.getLL('MOBILE_PHONE_NUMBER', 'Mobile Phone Number')
                    ),
                    (0, _preact.h)(_index2.default, { value: editSAQL.contact_mobile, onChange: function onChange(_ref15) {
                            var value = _ref15.value;
                            _this3.editSAQL('contact_mobile', value);
                        } })
                )
            )
        );
    };

    SAQL.prototype.render = function render() {
        var _this4 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state2 = this.state,
            leads = _state2.leads,
            filteredLeads = _state2.filteredLeads;

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
                                _this4.setState({ editSAQL: {}, mode: FLAGS.NEW });
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
                    'estimated_signing_date': translations.getLL('estimated_signing_date', 'Engagement Date')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                renderers: {
                    'estimated_signing_date': function estimated_signing_date(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    },
                    'solutions': function solutions(val) {
                        return val.map(function (val) {
                            return (0, _preact.h)(
                                'div',
                                null,
                                val
                            );
                        });
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