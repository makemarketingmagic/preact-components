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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        }, { page: '/contact', date: new Date('02/23/2018') }],
        contact: [{ type: 'phone', value: '020 1234567' }, { type: 'email', value: 'info@viatelinfrastructure.nl' }, { type: 'address', value: 'Viatelstraat 1, Wognum' }]
    }
};

var RecommendedLead = function (_Component) {
    _inherits(RecommendedLead, _Component);

    function RecommendedLead() {
        _classCallCheck(this, RecommendedLead);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    RecommendedLead.prototype.render = function render() {
        var _props$data = this.props.data,
            data = _props$data === undefined ? [sampleData, sampleData, sampleData, sampleData, sampleData] : _props$data;

        debugger;
        data = data.reduce(function (acc, val) {
            acc.push(Object.assign({ props: { data: val } }, { component: RecommendedLeadComponent }));
            return acc;
        }, []);
        return (0, _preact.h)(_Papers2.default, { pages: data });
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
        var _props = this.props,
            data = _props.data,
            nextPage = _props.nextPage;

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
                visits: data.company.visits
            }),
            (0, _preact.h)(_CompanyContact2.default, {
                contactMethods: data.company.contact
            }),
            (0, _preact.h)(_RecommendedLeadButtons2.default, { nextPage: nextPage })
        );
    };

    return RecommendedLeadComponent;
}(_preact.Component);