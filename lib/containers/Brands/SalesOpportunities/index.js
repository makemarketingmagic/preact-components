'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../../components/common/scMixins');

var _index = require('./../../../components/Button/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../../../components/SingleLineTextInput/index');

var _index4 = _interopRequireDefault(_index3);

var _FilterIcon = require('./../../../components/icons/FilterIcon');

var _FilterIcon2 = _interopRequireDefault(_FilterIcon);

var _DownloadArrow = require('../../../components/icons/DownloadArrow');

var _DownloadArrow2 = _interopRequireDefault(_DownloadArrow);

var _SearchIcon = require('./../../../components/icons/SearchIcon');

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _lodash = require('lodash');

var _MockFunctions = require('../MockFunctions');

var _Modal = require('../../../components/Modal');

var _index5 = require('./../../../components/Checkboxes/index');

var _index6 = _interopRequireDefault(_index5);

var _ExpandingSection = require('./ExpandingSection');

var _ExpandingSection2 = _interopRequireDefault(_ExpandingSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageTitle = _styledComponents2.default.div.withConfig({
    displayName: 'SalesOpportunities__PageTitle'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:#323232;']),
    TitleArea = _styledComponents2.default.div.withConfig({
    displayName: 'SalesOpportunities__TitleArea'
})(['display:flex;flex-direction:row;justify-content:space-between;margin-bottom:32px;']),
    TableControls = _styledComponents2.default.div.withConfig({
    displayName: 'SalesOpportunities__TableControls'
})(['display:flex;flex-direction:row;align-items:center;& > *{margin:0 4px;}']),
    PageNumbers = _styledComponents2.default.div.withConfig({
    displayName: 'SalesOpportunities__PageNumbers'
})(['display:flex;flex-direction:row;margin-top:32px;justify-content:center;']),
    PageNumber = _styledComponents2.default.div.withConfig({
    displayName: 'SalesOpportunities__PageNumber'
})(['margin:0 4px;cursor:pointer;padding:4px;border:1px solid ', ';background-color:', ';color:', ';'], _scMixins.colors.red, function (props) {
    return props.current ? _scMixins.colors.red : _scMixins.colors.white;
}, function (props) {
    return props.current ? _scMixins.colors.white : _scMixins.colors.red;
});

var SalesOpportunities = function (_Component) {
    _inherits(SalesOpportunities, _Component);

    function SalesOpportunities(props) {
        var _this2 = this;

        _classCallCheck(this, SalesOpportunities);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getOpportunities = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var getOpportunities, leads;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                getOpportunities = _this.props.events.getOpportunities;

                                                if (!getOpportunities) {
                                                    _context.next = 7;
                                                    break;
                                                }

                                                _context.next = 4;
                                                return getOpportunities;

                                            case 4:
                                                _context.t0 = _context.sent;
                                                _context.next = 8;
                                                break;

                                            case 7:
                                                _context.t0 = _this.props.leads;

                                            case 8:
                                                leads = _context.t0;

                                                _this.setState({ leads: leads, filteredLeads: leads }, function () {
                                                    _this.reloadFilters();
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

        _this.onSelect = function (id) {
            if (id) {
                _this.setState({ selected: id });
            }
        };

        _this.changePage = function (i) {
            _this.setState({ currentPage: i });
        };

        _this.setOrderBy = function (field, direction) {
            var _this$props$leads = _this.props.leads,
                leads = _this$props$leads === undefined ? [] : _this$props$leads;

            if (leads && leads[0] && typeof leads[0][field] !== 'undefined') {
                _this.setState({ orderBy: field, direction: direction });
                _this.reloadFilters();
            }
        };

        _this.updateSearch = function (_ref3) {
            var value = _ref3.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.state = {
            leads: [],
            filteredLeads: [],
            search: '',
            filter: [],
            orderBy: 'companyname',
            direction: _Table.SORT_DIRECTION.ASC,
            dialogOpen: false,
            currentPage: 1,
            totalPages: 0,
            perPage: 50,
            selected: false
        };
        _this.searchColumns = ['companyname', 'city'];
        _this.changeSearch = (0, _lodash.debounce)(_this.reloadFilters.bind(_this), 500);
        return _this;
    }

    SalesOpportunities.prototype.componentDidMount = function componentDidMount() {
        this.getOpportunities();
    };

    SalesOpportunities.prototype.calculatePages = function calculatePages() {
        var filteredLeads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var perPage = this.state.perPage;

        return Math.round(filteredLeads.length / perPage + 0.5);
    };

    SalesOpportunities.prototype.reloadFilters = function reloadFilters() {
        var _this3 = this;

        var leads = this.state.leads;
        var _state = this.state,
            direction = _state.direction,
            orderBy = _state.orderBy,
            search = _state.search;

        var filteredLeads = leads;
        if (search !== '') {
            filteredLeads = filteredLeads.filter(function (value, index) {
                for (var _iterator = _this3.searchColumns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                    var _ref4;

                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref4 = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref4 = _i.value;
                    }

                    var key = _ref4;

                    if (value[key] && value[key].toLowerCase && value[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true;
                    }
                }
                return false;
            });
        }
        if (this.state.filter.length > 0) {
            filteredLeads = filteredLeads.filter(function (val) {
                return _this3.state.filter.indexOf(val.label) >= 0;
            });
        }
        filteredLeads = filteredLeads.sort(function (a, b) {
            var field1 = a[orderBy],
                field2 = b[orderBy];
            if (orderBy === 'companyname') {
                field1 = field1.replace(/[.,"'+@\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
                field2 = field2.replace(/[.,"'+@\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
            } else if (orderBy === 'employees') {
                field1 = parseInt(field1) || -1;
                field2 = parseInt(field2) || -1;
            }
            return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
        });
        this.setState({ filteredLeads: filteredLeads, totalPages: this.calculatePages(filteredLeads) });
    };

    SalesOpportunities.prototype.renderPages = function renderPages() {
        var _this4 = this;

        var pages = [];
        var _state2 = this.state,
            currentPage = _state2.currentPage,
            totalPages = _state2.totalPages;

        if (totalPages === 0) return pages;
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this4.changePage(1);
                } },
            '<<'
        ));
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this4.changePage(currentPage - 1);
                } },
            '<'
        ));
        // let leftSide = 2, rightSide = 2
        // if (currentPage <= 2) {
        //     leftSide = currentPage - 1
        // }
        // if (currentPage + 2 > totalPages) {
        //     rightSide = currentPage - totalPages
        // }
        // debugger

        var _loop = function _loop(i) {
            pages.push((0, _preact.h)(
                PageNumber,
                {
                    current: i === currentPage,
                    onClick: function onClick() {
                        return _this4.changePage(i);
                    }
                },
                i
            ));
        };

        for (var i = 1; i <= totalPages; i++) {
            _loop(i);
        }
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this4.changePage(currentPage + 1);
                } },
            '>'
        ));
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this4.changePage(totalPages);
                } },
            '>>'
        ));
        return pages;
    };

    SalesOpportunities.prototype.render = function render() {
        var _this5 = this;

        var _state3 = this.state,
            _state3$filteredLeads = _state3.filteredLeads,
            filteredLeads = _state3$filteredLeads === undefined ? [] : _state3$filteredLeads,
            leads = _state3.leads,
            _props = this.props,
            _props$labels = _props.labels,
            labels = _props$labels === undefined ? _MockFunctions.defaultLabels : _props$labels,
            _props$events = _props.events,
            downloadCsv = _props$events.downloadCsv,
            showBranche = _props$events.showBranche,
            getOpportunityDetails = _props$events.getOpportunityDetails,
            getEmployeeRange = _props$events.getEmployeeRange,
            updateLabelAndStatus = _props$events.updateLabelAndStatus;
        var i = 0,
            _props$translations = this.props.translations,
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
            'div',
            null,
            (0, _preact.h)(
                TitleArea,
                null,
                (0, _preact.h)(
                    _Modal.Modal,
                    {
                        onDialogClose: function onDialogClose() {
                            _this5.setState({ dialogOpen: false });
                            _this5.reloadFilters();
                        },
                        title: translations.getLL('FILTER_OPPORTUNITIES', 'Filter Opportunities'),
                        open: this.state.dialogOpen,
                        buttons: [{
                            text: translations.getLL('DONE', 'Done'), onClick: function onClick() {
                                _this5.setState({ dialogOpen: false });
                                _this5.reloadFilters();
                            }
                        }]
                    },
                    (0, _preact.h)(_index6.default, {
                        onChange: function onChange(options) {
                            var filter = options.filter(function (val) {
                                return val.selected;
                            }).map(function (val) {
                                return val.data.toString();
                            });
                            if (filter.length === options.length) filter = [];
                            _this5.setState({ filter: filter });
                        },
                        options: labels,
                        formStyle: { margin: '0 16px' } })
                ),
                (0, _preact.h)(
                    PageTitle,
                    null,
                    translations.getLL('NUMBER_OF_LEADS_WITH_VALUE', 'You have %v1 leads', [(0, _preact.h)(
                        'span',
                        { style: { color: _scMixins.colors.red } },
                        leads.length
                    )])
                ),
                (0, _preact.h)(
                    TableControls,
                    null,
                    (0, _preact.h)(_index4.default, {
                        iconLeft: true,
                        value: this.state.search,
                        Icon: _SearchIcon2.default,
                        placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [leads.length]),
                        onChange: this.updateSearch
                    }),
                    (0, _preact.h)(
                        _index2.default,
                        {
                            iconLeft: true,
                            Icon: _FilterIcon2.default,
                            secondary: true,
                            onClick: function onClick() {
                                _this5.setState({ dialogOpen: true });
                            }
                        },
                        translations.getLL('FILTERS', 'Filters')
                    ),
                    (0, _preact.h)(
                        _index2.default,
                        {
                            iconLeft: true,
                            Icon: _DownloadArrow2.default,
                            secondary: true,
                            onClick: downloadCsv
                        },
                        translations.getLL('CSV', 'CSV')
                    )
                )
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredLeads.slice((this.state.currentPage - 1) * this.state.perPage, (this.state.currentPage - 1) * this.state.perPage + this.state.perPage),
                headers: {
                    companyname: translations.getLL('COMPANY_NAME', 'Company name'),
                    city: translations.getLL('CITY', 'City'),
                    sbiSectie: translations.getLL('BRANCH', 'Industry'),
                    totalVisits: translations.getLL('VISITS', 'Visits'),
                    lastVisit: translations.getLL('LAST_VISIT', 'Last visit'),
                    employees: translations.getLL('FTE', 'FTE')
                },
                renderers: {
                    lastVisit: function lastVisit(val) {
                        return new Date(parseInt(val) * 1000).toDateString();
                    },
                    companyname: function companyname(val) {
                        return val.length > 30 ? val.slice(0, 30) + '...' : val;
                    },
                    employees: function employees(val) {
                        return getEmployeeRange ? getEmployeeRange(val) : val;
                    },
                    sbiSectie: function sbiSectie(val) {
                        return showBranche ? showBranche(val) : val;
                    }

                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                hasExpandingSection: true,
                ExpandingSection: _ExpandingSection2.default,
                expandingSectionProps: {
                    events: {
                        getOpportunityDetails: getOpportunityDetails,
                        updateLabelAndStatus: updateLabelAndStatus
                    },
                    labels: labels.map(function (val) {
                        return { value: val.data, text: val.label };
                    }),
                    translations: translations
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                selected: this.state.selected,
                onSelect: this.onSelect
            }),
            (0, _preact.h)(
                PageNumbers,
                null,
                this.renderPages()
            )
        );
    };

    return SalesOpportunities;
}(_preact.Component);

exports.default = SalesOpportunities;