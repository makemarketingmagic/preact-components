'use strict';

exports.__esModule = true;
exports.RecommendedLeadComponent = exports.default = undefined;

var _preact = require('preact');

var _Papers = require('../Papers');

var _Papers2 = _interopRequireDefault(_Papers);

var _CompanyDetails = require('./CompanyDetails');

var _CompanyDetails2 = _interopRequireDefault(_CompanyDetails);

var _RecentVisits = require('./RecentVisits');

var _RecentVisits2 = _interopRequireDefault(_RecentVisits);

var _CompanyContact = require('./CompanyContact');

var _CompanyContact2 = _interopRequireDefault(_CompanyContact);

var _RecommendedLeadButtons = require('./RecommendedLeadButtons');

var _RecommendedLeadButtons2 = _interopRequireDefault(_RecommendedLeadButtons);

var _index = require('./../Persona/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../FullScreenOverlay/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sampleData = {
    tooltip: {
        name: 'Yoeri Kayser',
        position: 'Consultant',
        imageUrl: './assets/Yoeri.png',
        message: 'Bingo! Laat deze verkoopkans niet ontsnappen; neem contact op!'
    },
    company: {
        name: 'Viatel Infrastructure Nederland BV',
        city: 'Wognum',
        industry: 'Adviesverlening',
        visits: [{ page: '/', date: new Date('02/17/2018') }, { page: '/services', date: new Date('02/17/2018') }, {
            page: '/services/design', date: new Date('02/23/2018')
        }, { page: '/contact', date: new Date('02/23/2018') }]
    },
    contact: [{ type: 'phone', value: '020 1234567' }, { type: 'email', value: 'info@viatelinfrastructure.nl' }, { type: 'address', value: 'Viatelstraat 1, Wognum' }]
};

var sampleAddedData = {
    tooltip: {
        name: 'Yoeri Kayser',
        position: 'Consultant',
        imageUrl: './assets/Yoeri.png',
        message: 'Bingo! Laat deze verkoopkans niet ontsnappen; neem contact op!'
    },
    company: {
        name: 'Testing Some Stuff BV',
        city: 'Wognum',
        industry: 'Adviesverlening',
        visits: [{ page: '/', date: new Date('02/17/2018') }, { page: '/services', date: new Date('02/17/2018') }, {
            page: '/services/design', date: new Date('02/23/2018')
        }, { page: '/contact', date: new Date('02/23/2018') }]
    },
    contact: [{ type: 'phone', value: '020 1234567' }, { type: 'email', value: 'info@viatelinfrastructure.nl' }, { type: 'address', value: 'Viatelstraat 1, Wognum' }]
};

var defaultTranslations = {
    VISITED_PAGE: "Visited Page",
    DATE: "Date",
    REMIND_ME: "Remind me later",
    CONTACTED: "Contacted"
};

var RecommendedLead = function (_Component) {
    _inherits(RecommendedLead, _Component);

    function RecommendedLead() {
        _classCallCheck(this, RecommendedLead);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    RecommendedLead.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$data = _props.data,
            data = _props$data === undefined ? [sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData] : _props$data,
            _props$buttonText = _props.buttonText,
            buttonText = _props$buttonText === undefined ? "Try the new layout!" : _props$buttonText,
            actions = _props.actions,
            translations = _props.translations;

        var defaultActions = {
            remindMe: function remindMe() {
                console.log("Remind me");
            },
            done: function done() {
                console.log("Done");
            },
            fetchCards: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var timeout, result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    timeout = function timeout(ms) {
                                        return new Promise(function (resolve) {
                                            return setTimeout(resolve, ms);
                                        });
                                    };

                                    console.log("Starting fetch");
                                    _context.next = 4;
                                    return timeout(1000);

                                case 4:
                                    console.log("Fetch finished");
                                    result = {
                                        props: { data: Object.assign({}, sampleAddedData), actions: _this2.actions, translations: _this2.translations },
                                        component: RecommendedLeadComponent
                                    };
                                    return _context.abrupt('return', [result, result, result, result, result, result, result, result, result, result]);

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function fetchCards() {
                    return _ref.apply(this, arguments);
                };
            }()
        };
        this.translations = Object.assign(defaultTranslations, translations);
        this.actions = Object.assign(defaultActions, actions);
        this.data = data.reduce(function (acc, val) {
            acc.push(Object.assign({ props: { data: val, actions: _this2.actions, translations: _this2.translations } }, { component: RecommendedLeadComponent }));
            return acc;
        }, []);
        return (0, _preact.h)(
            _index4.default,
            { buttonText: buttonText },
            (0, _preact.h)(_Papers2.default, { fetchCards: this.actions.fetchCards, pages: this.data })
        );
    };

    return RecommendedLead;
}(_preact.Component);

exports.default = RecommendedLead;

var RecommendedLeadComponent = exports.RecommendedLeadComponent = function (_Component2) {
    _inherits(RecommendedLeadComponent, _Component2);

    function RecommendedLeadComponent() {
        _classCallCheck(this, RecommendedLeadComponent);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    RecommendedLeadComponent.prototype.render = function render() {
        var _props2 = this.props,
            data = _props2.data,
            actions = _props2.actions,
            nextPage = _props2.nextPage,
            translations = _props2.translations;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(_index2.default, {
                color: 'orange',
                imageUrl: data.tooltip.imageUrl,
                name: data.tooltip.name,
                position: data.tooltip.position,
                message: data.tooltip.message
            }),
            (0, _preact.h)(_CompanyDetails2.default, {
                name: data.company.name,
                city: data.company.city,
                industry: data.company.industry
            }),
            (0, _preact.h)(_RecentVisits2.default, {
                translations: {
                    VISITED_PAGE: translations.VISITED_PAGE,
                    DATE: translations.DATE
                },
                visits: data.company.visits
            }),
            (0, _preact.h)(_CompanyContact2.default, {
                contactMethods: data.contact
            }),
            (0, _preact.h)(_RecommendedLeadButtons2.default, {
                cardId: data.id,
                translations: {
                    REMIND_ME: translations.REMIND_ME,
                    CONTACTED: translations.CONTACTED
                },
                done: actions.done,
                nextPage: nextPage,
                remindMe: actions.remindMe
            })
        );
    };

    return RecommendedLeadComponent;
}(_preact.Component);