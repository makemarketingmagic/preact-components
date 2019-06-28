'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../../../components/common/scMixins');

var _index = require('./../../../components/Button/index');

var _index2 = _interopRequireDefault(_index);

var _Table = require('../../../components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Modal = require('../../../components/Modal');

var _MockFunctions = require('../MockFunctions');

var _FilterIcon = require('./../../../components/icons/FilterIcon');

var _FilterIcon2 = _interopRequireDefault(_FilterIcon);

var _Checkboxes = require('../../../components/Checkboxes');

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _DatePicker = require('../../../components/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Label = require('../../../components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _preactHelmet = require('preact-helmet');

var _preactHelmet2 = _interopRequireDefault(_preactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = _styledComponents2.default.div.withConfig({
    displayName: 'AHAPlanning__Title'
})(['font-family:\'Varela Round\';font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    TitleArea = _styledComponents2.default.div.withConfig({
    displayName: 'AHAPlanning__TitleArea'
})(['display:flex;flex-direction:row;justify-content:space-between;margin-bottom:32px;']),
    AHAControls = _styledComponents2.default.div.withConfig({
    displayName: 'AHAPlanning__AHAControls'
})(['display:flex;flex-direction:row;align-items:center;& > *{margin:0 4px;}']),
    Group = _styledComponents2.default.div.withConfig({
    displayName: 'AHAPlanning__Group'
})(['margin:19px 8px;']);

var AHAPlanning = (_temp = _class = function (_Component) {
    _inherits(AHAPlanning, _Component);

    function AHAPlanning(props) {
        _classCallCheck(this, AHAPlanning);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        var d = new Date();
        _this.state = {
            AHAs: [],
            filteredAHAs: [],
            statusFilter: [],
            startDateFilter: new Date(new Date().setMonth((12 + (d.getMonth() - 1)) % 12)),
            endDateFilter: new Date(new Date().setMonth((12 + (d.getMonth() + 1)) % 12)),
            orderBy: 'aha_sending_id',
            direction: _Table.SORT_DIRECTION.ASC,
            selected: false,
            dialogOpen: false
        };
        return _this;
    }

    AHAPlanning.prototype.componentDidMount = function componentDidMount() {
        this.getAllAHAs();
    };

    AHAPlanning.prototype.getAllAHAs = function getAllAHAs() {
        var _this2 = this;

        this.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var getAllAHAs, AHAs;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            getAllAHAs = _this2.props.events.getAllAHAs;

                            if (!getAllAHAs) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 4;
                            return getAllAHAs();

                        case 4:
                            _context.t0 = _context.sent;
                            _context.next = 8;
                            break;

                        case 7:
                            _context.t0 = _this2.props.AHAs;

                        case 8:
                            AHAs = _context.t0;

                            _this2.setState({ AHAs: AHAs, filteredAHAs: AHAs, loading: false });

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })));
    };

    AHAPlanning.prototype.render = function render() {
        var _this3 = this;

        var _props$translations = this.props.translations,
            translations = _props$translations === undefined ? { getTranslation: function getTranslation(label, fallback) {
                return fallback;
            } } : _props$translations;
        var _state = this.state,
            AHAs = _state.AHAs,
            filteredAHAs = _state.filteredAHAs;

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
            (0, _preact.h)(_preactHelmet2.default, { title: translations.getLL('AHA_PLANNING', 'AHA Planning') + ' | WOO' }),
            (0, _preact.h)(
                TitleArea,
                null,
                (0, _preact.h)(
                    _Modal.Modal,
                    {
                        open: this.state.dialogOpen,
                        onDialogClose: function onDialogClose() {
                            _this3.setState({ dialogOpen: false });
                        },
                        title: translations.getLL('FILTER', 'Filter'),
                        buttons: [{
                            text: translations.getLL('DONE', 'Done'), onClick: function onClick() {
                                _this3.setState({ dialogOpen: false });
                                _this3.reloadFilters();
                            }
                        }],
                        containerProperties: {
                            paddingLeft: 32,
                            paddingRight: 32
                        }
                    },
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('STATUS', 'Status')
                        ),
                        (0, _preact.h)(_Checkboxes2.default, {
                            options: _MockFunctions.AHA_SENDING_STATES.map(function (val) {
                                return {
                                    label: translations.getLL(val.TITLE_TRANSLATION_LABEL, val.TITLE),
                                    data: val.ID,
                                    selected: _this3.state.statusFilter.length === 0 || _this3.state.statusFilter.indexOf(val.ID) >= 0
                                };
                            }),
                            onChange: function onChange(value) {
                                _this3.setState({
                                    statusFilter: value.reduce(function (acc, val) {
                                        if (val.selected) {
                                            acc.push(val.data);
                                        }
                                        return acc;
                                    }, [])
                                });
                            }
                        })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('FILTER_START_DATE', 'Start Date')
                        ),
                        (0, _preact.h)(_DatePicker2.default, { value: this.state.startDateFilter.toISOString().split('T')[0], onChange: function onChange(_ref2) {
                                var value = _ref2.value;
                                _this3.setState({ startDateFilter: new Date(value) });
                            } })
                    ),
                    (0, _preact.h)(
                        Group,
                        null,
                        (0, _preact.h)(
                            _Label2.default,
                            null,
                            translations.getLL('FILTER_END_DATE', 'End Date')
                        ),
                        (0, _preact.h)(_DatePicker2.default, { value: this.state.endDateFilter.toISOString().split('T')[0], onChange: function onChange(_ref3) {
                                var value = _ref3.value;
                                _this3.setState({ endDateFilter: new Date(value) });
                            } })
                    )
                ),
                (0, _preact.h)(
                    Title,
                    null,
                    translations.getLL('NUMBER_OF_AHAs_WITH_VALUE', 'You have %v1 AHAs', [(0, _preact.h)(
                        'span',
                        { style: { color: _scMixins.colors.red } },
                        AHAs.length
                    )])
                ),
                (0, _preact.h)(
                    AHAControls,
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        {
                            secondary: true,
                            Icon: _FilterIcon2.default,
                            iconLeft: true,
                            onClick: function onClick() {
                                _this3.setState({ dialogOpen: true });
                            }
                        },
                        translations.getLL('FILTER', 'Filter')
                    )
                )
            ),
            (0, _preact.h)(_Table2.default, {
                data: filteredAHAs,
                headers: {
                    'aha_sending_id': translations.getLL('AHA_NUMBER', 'AHA #'),
                    'aha_sending_name': translations.getLL('TOPIC', 'Topic'),
                    'aha_sending_date': translations.getLL('SENDING_DATE', 'Sending Date'),
                    'aha_sending_status': translations.getLL('STATUS', 'Status')
                },
                renderers: {
                    'aha_sending_status': function aha_sending_status(value) {
                        return (0, _MockFunctions.returnAhaStateName)(value, translations);
                    }
                },
                events: {
                    setOrderBy: this.setOrderBy
                },
                selected: this.state.selected,
                onSelect: this.onSelect,
                orderBy: this.state.orderBy,
                direction: this.state.direction
            })
        );
    };

    return AHAPlanning;
}(_preact.Component), _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.reloadFilters = function () {
        var AHAs = _this4.props.AHAs;
        var _state2 = _this4.state,
            direction = _state2.direction,
            orderBy = _state2.orderBy,
            startDateFilter = _state2.startDateFilter,
            endDateFilter = _state2.endDateFilter,
            statusFilter = _state2.statusFilter;

        var filteredAHAs = AHAs;
        var willStatusFilter = statusFilter.length > 0;
        filteredAHAs = filteredAHAs.filter(function (val) {
            var d = new Date(val['aha_sending_date']);
            var statusFilterResult = true;
            if (willStatusFilter) {
                statusFilterResult = statusFilter.indexOf(parseInt(val['aha_sending_state'])) >= 0;
            }
            return startDateFilter <= d && d <= endDateFilter && statusFilterResult;
        });
        filteredAHAs = filteredAHAs.sort(function (a, b) {
            var field1 = a[orderBy],
                field2 = b[orderBy];
            if (orderBy === 'aha_sending_date') {
                field1 = new Date(field1);
                field2 = new Date(field2);
                direction = !direction;
            } else if (orderBy === 'aha_sending_name') {
                field1 = field1.toLowerCase();
                field2 = field2.toLowerCase();
            }
            return direction ? field1 > field2 ? 1 : -1 : field1 > field2 ? -1 : 1;
        });
        _this4.setState({ filteredAHAs: filteredAHAs });
    };

    this.setOrderBy = function (field, direction) {
        var _props$AHAs = _this4.props.AHAs,
            AHAs = _props$AHAs === undefined ? [] : _props$AHAs;

        if (AHAs && AHAs[0] && typeof AHAs[0][field] !== 'undefined') {
            _this4.setState({ orderBy: field, direction: direction });
            _this4.reloadFilters();
        }
    };

    this.onSelect = function (id, value) {
        var onSelect = _this4.props.events.onSelect;

        onSelect ? onSelect(value) : window.location.hash = window.location.href.replace('planning', 'manager').replace(window.location.origin + '/', '') + '/' + value['aha_sending_id'];
    };
}, _temp);
exports.default = AHAPlanning;