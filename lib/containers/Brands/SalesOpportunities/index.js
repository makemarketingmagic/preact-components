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

var _index5 = require('./../../../components/RadioButtons/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./../../../components/Checkboxes/index');

var _index8 = _interopRequireDefault(_index7);

var _ExpandingSection = require('./ExpandingSection');

var _ExpandingSection2 = _interopRequireDefault(_ExpandingSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        _classCallCheck(this, SalesOpportunities);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

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

        _this.updateSearch = function (_ref) {
            var value = _ref.value;

            _this.setState({ search: value }, function () {
                _this.changeSearch();
            });
        };

        _this.state = {
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
        this.reloadFilters();
    };

    SalesOpportunities.prototype.calculatePages = function calculatePages() {
        var filteredLeads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var perPage = this.state.perPage;

        return Math.round(filteredLeads.length / perPage + 0.5);
    };

    SalesOpportunities.prototype.reloadFilters = function reloadFilters() {
        var _this2 = this;

        var leads = this.props.leads;
        var _state = this.state,
            direction = _state.direction,
            orderBy = _state.orderBy,
            search = _state.search;

        var filteredLeads = leads;
        if (search !== '') {
            filteredLeads = filteredLeads.filter(function (value, index) {
                for (var _iterator = _this2.searchColumns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
        if (this.state.filter.length > 0) {
            filteredLeads = filteredLeads.filter(function (val) {
                return _this2.state.filter.indexOf(val.label) >= 0;
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
        var _this3 = this;

        var pages = [];
        var _state2 = this.state,
            currentPage = _state2.currentPage,
            totalPages = _state2.totalPages;

        if (totalPages === 0) return pages;
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this3.changePage(1);
                } },
            '<<'
        ));
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this3.changePage(currentPage - 1);
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
                        return _this3.changePage(i);
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
                    return _this3.changePage(currentPage + 1);
                } },
            '>'
        ));
        pages.push((0, _preact.h)(
            PageNumber,
            { current: false, onClick: function onClick() {
                    return _this3.changePage(totalPages);
                } },
            '>>'
        ));
        return pages;
    };

    SalesOpportunities.prototype.render = function render() {
        var _this4 = this;

        var _state$filteredLeads = this.state.filteredLeads,
            filteredLeads = _state$filteredLeads === undefined ? [] : _state$filteredLeads,
            _props = this.props,
            leads = _props.leads,
            _props$labels = _props.labels,
            labels = _props$labels === undefined ? _MockFunctions.defaultLabels : _props$labels,
            _props$events = _props.events,
            downloadCsv = _props$events.downloadCsv,
            showBranche = _props$events.showBranche,
            getOpportunityDetails = _props$events.getOpportunityDetails,
            getEmployeeRange = _props$events.getEmployeeRange,
            updateLabelAndStatus = _props$events.updateLabelAndStatus,
            _props$translations = _props.translations,
            translations = _props$translations === undefined ? {
            getLL: function getLL(label, fallback) {
                var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

                var re = /(%v\d*)/ig;
                var isString = true;
                var result = [];
                fallback = fallback.split(re);
                for (var i = 0; i < fallback.length; i++) {
                    var fallbackFragment = fallback[i];
                    var match = /%v(\d*)/ig.exec(fallbackFragment);
                    if (match) {
                        var index = parseInt(match[1]);
                        if (values[index - 1].nodeName) {
                            isString = false;
                        }
                        result.push(values[index - 1]);
                    } else {
                        result.push(fallbackFragment);
                    }
                }
                return isString ? result.join('') : result;
            }
        } : _props$translations;

        var i = 0;
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
                            _this4.setState({ dialogOpen: false });
                            _this4.reloadFilters();
                        },
                        title: translations.getLL('FILTER_OPPORTUNITIES', 'Filter Opportunities'),
                        open: this.state.dialogOpen,
                        buttons: [{
                            text: translations.getLL('DONE', 'Done'), onClick: function onClick() {
                                _this4.setState({ dialogOpen: false });
                                _this4.reloadFilters();
                            }
                        }]
                    },
                    (0, _preact.h)(_index8.default, {
                        onChange: function onChange(options) {
                            var filter = options.filter(function (val) {
                                return val.selected;
                            }).map(function (val) {
                                return val.data.toString();
                            });
                            if (filter.length === options.length) filter = [];
                            _this4.setState({ filter: filter });
                        },
                        options: labels })
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
                                _this4.setState({ dialogOpen: true });
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