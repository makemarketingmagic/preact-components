'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _Tabs = require('../../../components/Tabs');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _SearchIcon = require('./../../../components/icons/SearchIcon');

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _index = require('./../../../components/SingleLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _lodash = require('lodash');

var _Modal = require('../../../components/Modal');

var _Button = require('../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartTitle = _styledComponents2.default.h2.withConfig({
    displayName: 'Reports__ChartTitle'
})(['']),
    SectionTitle = _styledComponents2.default.h2.withConfig({
    displayName: 'Reports__SectionTitle'
})(['']),
    TableControls = _styledComponents2.default.div.withConfig({
    displayName: 'Reports__TableControls'
})(['display:flex;flex-direction:row;align-items:center;margin:16px 0;justify-content:space-between;& > *{margin:0 4px;}']);

var Reports = function (_Component) {
    _inherits(Reports, _Component);

    function Reports(props) {
        var _this2 = this;

        _classCallCheck(this, Reports);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.renderChartTab = function (translations) {
            var charts = Array.prototype.slice.call(document.querySelectorAll('we-d3-lines')),
                chartTitles = [translations.getLL('NUMBER_OF_VISITORS', 'Number of Visitors'), translations.getLL('VISIT_DURATION', 'Visit Duration'), translations.getLL('VISITOR_SOURCES', 'Sources of Visitors'), translations.getLL('VISITORS_THROUGH_LINKEDIN', 'Visitors through LinkedIn'), translations.getLL('VISITORS_THROUGH_FACEBOOK', 'Visitors through Facebook')];
            var elements = [];
            if (charts.length === 0) {
                return setTimeout(function () {
                    _this.setState({ timeout: new Date() });
                }, 500);
            }
            for (var i in charts) {
                elements.push((0, _preact.h)(
                    ChartTitle,
                    null,
                    chartTitles[i]
                ));
                elements.push((0, _preact.h)(GraphNode, { node: charts[i] }));
            }
            return elements;
        };

        _this.getAHAReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var getAHAReport, AHAReport;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            getAHAReport = _this.props.events.getAHAReport;
                            AHAReport = {};

                            if (!getAHAReport) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 5;
                            return getAHAReport();

                        case 5:
                            AHAReport = _context.sent;

                        case 6:
                            _this.setState({ mailings: AHAReport.mailings, readers: AHAReport.readers });

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.getSMRReport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var getSMRReport, SMRReport;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            getSMRReport = _this.props.events.getSMRReport;
                            SMRReport = {};

                            if (!getSMRReport) {
                                _context2.next = 6;
                                break;
                            }

                            _context2.next = 5;
                            return getSMRReport();

                        case 5:
                            SMRReport = _context2.sent;

                        case 6:
                            _this.setState({ blogs: SMRReport.blogs, totals: SMRReport.total });

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.renderAHATab = function (translations) {
            var brand_name = _this.props.brandInfo.brand_name,
                _this$state = _this.state,
                mailings = _this$state.mailings,
                readers = _this$state.readers;


            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('AHA_REPORT_FOR', 'AHA Report for %v1', [brand_name])
                ),
                (0, _preact.h)(
                    _Tabs.Tabs,
                    { index: 0 },
                    (0, _preact.h)(
                        _Tabs.Tab,
                        { label: translations.getLL('MAILINGS', 'Mailings') },
                        (0, _preact.h)(MailingsTable, { events: _this.props.events, mailings: mailings, translations: translations })
                    ),
                    (0, _preact.h)(
                        _Tabs.Tab,
                        { label: translations.getLL('READERS', 'Readers') },
                        (0, _preact.h)(ReadersTable, { events: _this.props.events, readers: readers, translations: translations })
                    )
                )
            );
        };

        _this.renderSocialMediaTab = function (translations) {
            var brand_name = _this.props.brandInfo.brand_name,
                _this$state2 = _this.state,
                blogs = _this$state2.blogs,
                totals = _this$state2.totals;

            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('SMR_REPORT_FOR', 'Socail Media Reminder report for %v1', [brand_name])
                ),
                (0, _preact.h)(
                    _Tabs.Tabs,
                    { index: 0 },
                    (0, _preact.h)(
                        _Tabs.Tab,
                        { label: translations.getLL('BLOGS', 'Blogs') },
                        (0, _preact.h)(BlogsTable, { events: _this.props.events, translations: translations, blogs: blogs })
                    ),
                    (0, _preact.h)(
                        _Tabs.Tab,
                        { label: translations.getLL('TOTAL', 'Total') },
                        (0, _preact.h)(TotalsTable, { events: _this.props.events, translations: translations, totals: totals })
                    )
                )
            );
        };

        _this.state = {
            loading: false,
            timeout: null,
            mailings: [],
            readers: [],
            blogs: [],
            totals: []
        };
        return _this;
    }

    Reports.prototype.componentDidMount = function componentDidMount() {
        this.getAHAReport();
        this.getSMRReport();
    };

    Reports.prototype.render = function render() {
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
            'div',
            null,
            (0, _preact.h)(
                _Tabs.Tabs,
                { index: 0 },
                (0, _preact.h)(
                    _Tabs.Tab,
                    { label: translations.getLL('MONTHLY', 'Monthly') },
                    this.renderChartTab(translations)
                ),
                (0, _preact.h)(
                    _Tabs.Tab,
                    { label: translations.getLL('AHA', 'AHA') },
                    this.renderAHATab(translations)
                ),
                (0, _preact.h)(
                    _Tabs.Tab,
                    { label: translations.getLL('SOCIAL_MEDIA_REMINDER', 'Social Media Reminder') },
                    this.renderSocialMediaTab(translations)
                )
            )
        );
    };

    return Reports;
}(_preact.Component);

exports.default = Reports;

var GraphNode = function (_Component2) {
    _inherits(GraphNode, _Component2);

    function GraphNode() {
        var _temp, _this3, _ret;

        _classCallCheck(this, GraphNode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.ref = null, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    GraphNode.prototype.componentDidMount = function componentDidMount() {
        var node = this.props.node;

        this.ref.appendChild(node);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 10);
    };

    GraphNode.prototype.render = function render() {
        var _this4 = this;

        return (0, _preact.h)('div', { ref: function ref(_ref3) {
                return _this4.ref = _ref3;
            } });
    };

    return GraphNode;
}(_preact.Component);

var ReportsTable = function (_Component3) {
    _inherits(ReportsTable, _Component3);

    function ReportsTable(props, extState) {
        _classCallCheck(this, ReportsTable);

        var _this5 = _possibleConstructorReturn(this, _Component3.call(this, props));

        _this5.reloadFilters = function () {

            var data = _this5.props[_this5.field];
            var _this5$state = _this5.state,
                direction = _this5$state.direction,
                orderBy = _this5$state.orderBy,
                search = _this5$state.search;

            var filteredData = data;
            if (search !== '') {
                filteredData = filteredData.filter(function (value) {
                    for (var _iterator = _this5.searchColumns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
            filteredData = filteredData.sort(function (a, b) {
                var field1 = a[orderBy],
                    field2 = b[orderBy];
                return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
            });
            var update = {};
            update[_this5.filteredField] = filteredData;
            _this5.setState(update);
        };

        _this5.updateSearch = function (_ref5) {
            var value = _ref5.value;

            _this5.setState({ search: value }, function () {
                _this5.changeSearch();
            });
        };

        _this5.setOrderBy = function (field, direction) {
            var data = _this5.props[_this5.field];
            if (data && data[0] && typeof data[0][field] !== 'undefined') {
                _this5.setState({ orderBy: field, direction: direction });
                _this5.reloadFilters();
            }
        };

        _this5.onSelect = function (id, val) {
            if (id && id !== _this5.state.selected) {
                _this5.setState({ selected: id });
            }
        };

        _this5.field = props.tableType;
        _this5.filteredField = 'filtered' + (props.tableType.charAt(0).toUpperCase() + props.tableType.slice(1));
        _this5.state = _extends({
            search: '',
            orderBy: '',
            direction: _Table.SORT_DIRECTION.DESC,
            selected: false
        }, extState);
        _this5.state[_this5.filteredField] = [];
        _this5.changeSearch = (0, _lodash.debounce)(_this5.reloadFilters.bind(_this5), 500);
        return _this5;
    }

    ReportsTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(oldProps, newProps) {
        this.reloadFilters();
    };

    return ReportsTable;
}(_preact.Component);

var BlogsTable = function (_ReportsTable) {
    _inherits(BlogsTable, _ReportsTable);

    function BlogsTable(props) {
        var _this7 = this;

        _classCallCheck(this, BlogsTable);

        var _this6 = _possibleConstructorReturn(this, _ReportsTable.call(this, _extends({}, props, { tableType: 'blogs' }), { blogDetails: [] }));

        _this6.searchColumns = ['subject'];

        _this6.onSelect = function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, val) {
                var getBlogDetails, blogDetails;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                getBlogDetails = _this6.props.events.getBlogDetails;

                                if (!(id && id !== _this6.state.selected)) {
                                    _context3.next = 6;
                                    break;
                                }

                                _context3.next = 4;
                                return getBlogDetails(val.id);

                            case 4:
                                blogDetails = _context3.sent;

                                _this6.setState({ blogDetails: blogDetails, selected: id });

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this7);
            }));

            return function (_x2, _x3) {
                return _ref6.apply(this, arguments);
            };
        }();

        return _this6;
    }

    BlogsTable.prototype.render = function render() {
        var _this8 = this;

        var _props = this.props,
            translations = _props.translations,
            blogs = _props.blogs,
            exportCsv = _props.events.exportCsv,
            _state = this.state,
            filteredBlogs = _state.filteredBlogs,
            blogDetails = _state.blogDetails,
            selected = _state.selected;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                _Modal.Modal,
                {
                    onDialogClose: function onDialogClose() {
                        _this8.setState({ selected: false });
                    },
                    title: translations.getLL('READERS_FOR_WITH_VAL', "Readers for Soial Reminder '%v1'", [blogs[selected] ? blogs[selected].subject : '' || '']),
                    open: selected !== false,
                    buttons: [{
                        text: translations.getLL('CANCEL', 'Cancel'),
                        onClick: function onClick() {
                            return _this8.setState({ selected: false });
                        }
                    }, {
                        text: translations.getLL('EXPORT_CSV', 'Export CSV'),
                        onClick: function onClick() {
                            return exportCsv(blogDetails, 2);
                        }
                    }]
                },
                (0, _preact.h)(BlogsDetailsTable, { translations: translations, details: blogDetails })
            ),
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        onClick: function onClick() {
                            return exportCsv(blogs, 0);
                        }
                    },
                    translations.getLL('EXPORT_CSV', 'Export CSV')
                ),
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredBlogs,
                headers: {
                    'subject': translations.getLL('SUBJECT', 'Subject'),
                    'date': translations.getLL('DATE', 'Date'),
                    'receivers': translations.getLL('RECIPIENTS', 'Recipients'),
                    'clicks': translations.getLL('CLICKS', 'Clicks'),
                    'ctr': translations.getLL('CTR', 'CTR'),
                    'webVisits': translations.getLL('VISITS', 'Visits')
                },
                renderers: {
                    'date': function date(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    },
                    'ctr': function ctr(val) {
                        return val + '%';
                    }
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                selected: this.state.selected,
                onSelect: this.onSelect
            })
        );
    };

    return BlogsTable;
}(ReportsTable);

var ReadersTable = function (_ReportsTable2) {
    _inherits(ReadersTable, _ReportsTable2);

    function ReadersTable(props) {
        _classCallCheck(this, ReadersTable);

        var _this9 = _possibleConstructorReturn(this, _ReportsTable2.call(this, _extends({}, props, { tableType: 'readers' })));

        _this9.searchColumns = ['email', 'status'];
        return _this9;
    }

    ReadersTable.prototype.render = function render() {
        var _props2 = this.props,
            translations = _props2.translations,
            readers = _props2.readers,
            exportCsv = _props2.events.exportCsv,
            filteredReaders = this.state.filteredReaders;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        onClick: function onClick() {
                            return exportCsv(readers, 4);
                        }
                    },
                    translations.getLL('EXPORT_CSV', 'Export CSV')
                ),
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [readers.length]),
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredReaders,
                headers: {
                    'email': translations.getLL('EMAIL', 'Email'),
                    'mailsRead': translations.getLL('CLICKS', 'Clicks'),
                    'lastActivity': translations.getLL('LAST_ACTIVITY', 'Last Activity'),
                    'status': translations.getLL('ACTIVITIES', 'Activities')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                renderers: {
                    'lastActivity': function lastActivity(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    }
                },
                selected: this.state.selected,
                onSelect: this.onSelect
            })
        );
    };

    return ReadersTable;
}(ReportsTable);

var TotalsTable = function (_ReportsTable3) {
    _inherits(TotalsTable, _ReportsTable3);

    function TotalsTable(props) {
        _classCallCheck(this, TotalsTable);

        var _this10 = _possibleConstructorReturn(this, _ReportsTable3.call(this, _extends({}, props, { tableType: 'totals' })));

        _this10.searchColumns = ['email'];
        return _this10;
    }

    TotalsTable.prototype.render = function render() {
        var _props3 = this.props,
            translations = _props3.translations,
            totals = _props3.totals,
            exportCsv = _props3.events.exportCsv,
            filteredTotals = this.state.filteredTotals;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        onClick: function onClick() {
                            return exportCsv(totals, 1);
                        }
                    },
                    translations.getLL('EXPORT_CSV', 'Export CSV')
                ),
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [totals.length]),
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredTotals,
                headers: {
                    'emailaddress': translations.getLL('EMAIL', 'Email'),
                    'smrsReceived': translations.getLL('CLICKED_IN_REMINDERS', 'Clicked in Reminders'),
                    'last_activity': translations.getLL('LAST_ACTIVITY', 'Last Activity'),
                    'webVisits': translations.getLL('VISITS', 'Visits')
                },
                renderers: {
                    'smrsReceived': function smrsReceived(val, selected, value) {
                        return translations.getLL('A_OF_B_REMINDERS_CLICKED', 'Clicked %v1% of the %v2 reminders sent', [value.clickedInRemindersPercentage, val]);
                    },
                    'last_activity': function last_activity(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    }
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.search
            })
        );
    };

    return TotalsTable;
}(ReportsTable);

var MailingsDetailsTable = function (_ReportsTable4) {
    _inherits(MailingsDetailsTable, _ReportsTable4);

    function MailingsDetailsTable(props) {
        _classCallCheck(this, MailingsDetailsTable);

        var _this11 = _possibleConstructorReturn(this, _ReportsTable4.call(this, _extends({}, props, { tableType: 'details' })));

        _this11.searchColumns = ['email'];
        return _this11;
    }

    MailingsDetailsTable.prototype.render = function render() {
        var _props4 = this.props,
            translations = _props4.translations,
            details = _props4.details,
            filteredDetails = this.state.filteredDetails;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [details.length]),
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredDetails,
                headers: {
                    'emailaddress': translations.getLL('EMAIL', 'Email'),
                    'clicks': translations.getLL('CLICKS', 'Clicks'),
                    'status': translations.getLL('ACTIVITIES', 'Activities')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction
            })
        );
    };

    return MailingsDetailsTable;
}(ReportsTable);

var BlogsDetailsTable = function (_ReportsTable5) {
    _inherits(BlogsDetailsTable, _ReportsTable5);

    function BlogsDetailsTable(props) {
        _classCallCheck(this, BlogsDetailsTable);

        var _this12 = _possibleConstructorReturn(this, _ReportsTable5.call(this, _extends({}, props, { tableType: 'details' })));

        _this12.searchColumns = ['emailaddress'];
        return _this12;
    }

    BlogsDetailsTable.prototype.render = function render() {
        var _props5 = this.props,
            translations = _props5.translations,
            details = _props5.details,
            filteredDetails = this.state.filteredDetails;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [details.length]),
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredDetails,
                headers: {
                    'emailaddress': translations.getLL('EMAIL', 'Email'),
                    'clicks': translations.getLL('SHARES', 'Shares'),
                    'webVisits': translations.getLL('VISITS', 'Visits')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction
            })
        );
    };

    return BlogsDetailsTable;
}(ReportsTable);

var MailingsTable = function (_ReportsTable6) {
    _inherits(MailingsTable, _ReportsTable6);

    function MailingsTable(props) {
        var _this14 = this;

        _classCallCheck(this, MailingsTable);

        var _this13 = _possibleConstructorReturn(this, _ReportsTable6.call(this, _extends({}, props, { tableType: 'mailings' }), { mailingDetails: [] }));

        _this13.searchColumns = ['subject', 'link'];

        _this13.onSelect = function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, val) {
                var getMailingDetails, mailingDetails;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                getMailingDetails = _this13.props.events.getMailingDetails;

                                if (!(id && id !== _this13.state.selected)) {
                                    _context4.next = 6;
                                    break;
                                }

                                _context4.next = 4;
                                return getMailingDetails(val.id);

                            case 4:
                                mailingDetails = _context4.sent;

                                _this13.setState({ mailingDetails: mailingDetails, selected: id });

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this14);
            }));

            return function (_x4, _x5) {
                return _ref7.apply(this, arguments);
            };
        }();

        return _this13;
    }

    MailingsTable.prototype.render = function render() {
        var _this15 = this;

        var _props6 = this.props,
            translations = _props6.translations,
            mailings = _props6.mailings,
            exportCsv = _props6.events.exportCsv,
            _state2 = this.state,
            filteredMailings = _state2.filteredMailings,
            selected = _state2.selected,
            mailingDetails = _state2.mailingDetails;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                _Modal.Modal,
                {
                    onDialogClose: function onDialogClose() {
                        _this15.setState({ selected: false });
                    },
                    title: translations.getLL('READERS_FOR_AHA_X', "Readers for AHA '%v1'", [mailings[selected] ? mailings[selected].subject : '' || '']),
                    open: selected !== false,
                    buttons: [{
                        text: translations.getLL('CANCEL', 'Cancel'),
                        onClick: function onClick() {
                            return _this15.setState({ selected: false });
                        }
                    }, {
                        text: translations.getLL('EXPORT_CSV', 'Export CSV'),
                        onClick: function onClick() {
                            return exportCsv(mailingDetails, 5);
                        }
                    }]
                },
                (0, _preact.h)(MailingsDetailsTable, { translations: translations, details: mailingDetails })
            ),
            (0, _preact.h)(
                TableControls,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        onClick: function onClick() {
                            return exportCsv(mailings, 3);
                        }
                    },
                    translations.getLL('EXPORT_CSV', 'Export CSV')
                ),
                (0, _preact.h)(_index2.default, {
                    iconLeft: true,
                    value: this.state.search,
                    Icon: _SearchIcon2.default,
                    placeholder: translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [mailings.length]),
                    onChange: this.updateSearch
                })
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredMailings,
                headers: {
                    'subject': translations.getLL('SUBJECT', 'Subject'),
                    'date': translations.getLL('DATE', 'Date'),
                    'receivers': translations.getLL('RECEIVERS', 'Recipients'),
                    'opens': translations.getLL('OPENS', 'Opens'),
                    'clicks': translations.getLL('CLICKS', 'Clicks'),
                    'ctr': translations.getLL('CTR', 'CTR'),
                    'uitschrijvingen': translations.getLL('UNSUBSCRIPTIONS', 'Unsubscriptions'),
                    'bounces': translations.getLL('BOUNCES', 'Bounces'),
                    'link': translations.getLL('WEBSITE', 'Website')
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                orderBy: this.state.orderBy,
                direction: this.state.direction,
                renderers: {
                    'subject': function subject(val) {
                        return (0, _preact.h)(
                            'div',
                            { style: { maxWidth: 100 } },
                            val
                        );
                    },
                    'date': function date(val) {
                        return new Date(val * 1000).toISOString().split('T')[0];
                    },
                    'link': function link(val) {
                        return (0, _preact.h)(
                            'a',
                            { href: val },
                            translations.getLL('CLICK_HERE', 'Click here')
                        );
                    }

                },
                selected: this.state.selected,
                onSelect: this.onSelect
            })
        );
    };

    return MailingsTable;
}(ReportsTable);