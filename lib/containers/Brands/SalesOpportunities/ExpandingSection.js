'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Dropdown = require('../../../components/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _index = require('./../../../components/Button/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Container'
})(['padding:20px 24px;display:flex;flex-direction:row;']),
    VisitsContacts = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__VisitsContacts'
})(['display:flex;flex-direction:column;flex:1;margin-right:32px;']),
    ButtonsContainer = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__ButtonsContainer'
})(['display:flex;margin-top:12px;margin-left:32px;flex-direction:column;flex:0.4;']),
    Visit = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Visit'
})(['font-style:normal;font-weight:normal;line-height:18px;font-size:14px;color:#88A5AD;background-color:#fff;border-radius:4px;padding:11px 16px;margin:4px 0;']),
    SectionTitle = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__SectionTitle'
})(['margin-bottom:12px;margin-top:12px;font-style:normal;font-weight:normal;line-height:18px;font-size:14px;color:#888888;']),
    ContactButton = (0, _styledComponents2.default)(_index2.default).withConfig({
    displayName: 'ExpandingSection__ContactButton'
})(['margin:4px;']);

var ExpandingSection = function (_Component) {
    _inherits(ExpandingSection, _Component);

    function ExpandingSection(props) {
        var _this2 = this;

        _classCallCheck(this, ExpandingSection);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getOpportunityDetails = function (id) {
            return new Promise(function (resolve, reject) {
                _this.props.events.getOpportunityDetails(id).then(function (value) {
                    resolve(value);
                });
            });
        };

        _this.componentDidUpdate = function (prevProps) {
            var id = _this.props.data.id,
                prevId = prevProps.data.id;


            if (id !== prevId) {
                _this.initialise();
            }
        };

        _this.initialise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var labels, _this$props$data, label, id;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            labels = _this.props.labels, _this$props$data = _this.props.data, label = _this$props$data.label, id = _this$props$data.id;

                            _this.setState({ opportunityDetails: null, loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                var opportunityDetails;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (labels.length && label) {
                                                    labels = labels.map(function (val) {
                                                        return _extends({}, val, { selected: label === val.value.toString() });
                                                    });
                                                    _this.setState({ labels: labels });
                                                }
                                                _context.next = 3;
                                                return _this.getOpportunityDetails(id);

                                            case 3:
                                                opportunityDetails = _context.sent;

                                                _this.setState({ opportunityDetails: opportunityDetails, loading: false });

                                            case 5:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this2);
                            })));

                        case 2:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.state = {
            opportunityDetails: null,
            init: false,
            labels: []
        };
        return _this;
    }

    ExpandingSection.prototype.componentDidMount = function componentDidMount() {
        this.initialise();
    };

    ExpandingSection.prototype.renderDropdown = function renderDropdown() {
        var _this3 = this;

        var updateLabelAndStatus = this.props.events.updateLabelAndStatus;

        return (0, _preact.h)(_Dropdown2.default, { options: this.state.labels, onChange: function onChange(val) {
                _this3.setState({ loading: true }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return updateLabelAndStatus(_extends({}, _this3.props.data, { label: val.value }));

                                case 2:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this3);
                })));
            }, placeholder: 'No Label' });
    };

    ExpandingSection.prototype.render = function render() {
        var data = _extends({}, this.state.opportunityDetails, this.props.data),
            opportunityDetails = this.state.opportunityDetails,
            _props = this.props,
            labels = _props.labels,
            translations = _props.translations;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(
                VisitsContacts,
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('MOST_RECENTLY_VISITED_PAGES', 'Most recently visited pages'),
                    ':'
                ),
                opportunityDetails ? opportunityDetails.visits.map(function (val) {
                    return (0, _preact.h)(
                        Visit,
                        { onClick: function onClick() {
                                window.open(val.url, '_BLANK');
                            } },
                        val.title
                    );
                }) : (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)('i', { 'class': 'fa fa-spinner fa-spin' }),
                    ' ',
                    translations.getLL('FETCHING_VISITED_PAGES', 'Fetching visited pages...')
                ),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    translations.getLL('CONTACTS_RECENTLY_VISITED', 'Contacts that have visited your website'),
                    ':'
                ),
                opportunityDetails ? data.contacts.map(function (val) {
                    return (0, _preact.h)(
                        Visit,
                        null,
                        val
                    );
                }) : (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)('i', { 'class': 'fa fa-spinner fa-spin' }),
                    ' ',
                    translations.getLL('FETCHING_EMAIL_ADDRESSES', 'Fetching email addresses...')
                )
            ),
            (0, _preact.h)(
                ButtonsContainer,
                null,
                this.renderDropdown(),
                data.Url && data.Url.map && data.Url.map(function (val) {
                    return (0, _preact.h)(
                        ContactButton,
                        { secondary: true },
                        val
                    );
                }),
                data.telephone && (0, _preact.h)(
                    ContactButton,
                    null,
                    data.telephone
                )
            )
        );
    };

    return ExpandingSection;
}(_preact.Component);

exports.default = ExpandingSection;