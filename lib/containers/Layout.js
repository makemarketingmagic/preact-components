'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../components/Navigation/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__Container'
})(['max-width:1200px;width:90%;margin:64px auto;background-color:white;font-family:\'Montserrat\',sans-serif;']),
    data = {
    tabs: [{
        "ID": 1,
        "TITLE": "Info",
        "URL": "#/brands/brand-details/1126061000019254072/info",
        "TITLE_TRANSLATION_LABEL": "INFO",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/info",
        "IS_ALLOWED": [21, 31, 41, 51, 61]
    }, {
        "ID": 2,
        "TITLE": "Notities",
        "TITLE_TRANSLATION_LABEL": "NOTES",
        "URL": "#/brands/brand-details/1126061000019254072/notities",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/notities",
        "IS_ALLOWED": [21, 31, 41, 61]
    }, {
        "ID": 3,
        "TITLE": "Verkoopkansen",
        "TITLE_TRANSLATION_LABEL": "OPPORTUNITIES",
        "URL": "#/brands/brand-details/1126061000019254072/verkoopkansen/lijst",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/verkoopkansen/lijst",
        "IS_ALLOWED": [21, 31, 41, 61, 81]
    }, {
        "ID": 4,
        "TITLE": "Onboarding",
        "TITLE_TRANSLATION_LABEL": "ONBOARDING",
        "URL": "#/brands/brand-details/1126061000019254072/producten/on-boarding/overzicht",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/producten/on-boarding/overzicht",
        "IS_ALLOWED": [21, 31, 41, 61],
        "$$hashKey": "object:87"
    }, {
        "ID": 5,
        "TITLE": "AHA planning",
        "TITLE_TRANSLATION_LABEL": "AHA_PLANNING",
        "URL": "#/brands/brand-details/1126061000019254072/aha-feedback/planning",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/aha-feedback/planning",
        "IS_ALLOWED": [21, 61]
    }, {
        "ID": 6,
        "TITLE": "Rapportages",
        "TITLE_TRANSLATION_LABEL": "REPORTS",
        "URL": "#/brands/brand-details/1126061000019254072/rapportages/maandelijks",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/rapportages/maandelijks"
    }, {
        "ID": 7,
        "TITLE": "FormGen",
        "TITLE_TRANSLATION_LABEL": "FORMGEN",
        "URL": "#/brands/brand-details/1126061000019254072/formgen",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/formgen",
        "IS_ALLOWED": [21, 31, 41]
    }, {
        "ID": 8,
        "TITLE": "Bestanden",
        "TITLE_TRANSLATION_LABEL": "FILES",
        "URL": "#/brands/brand-details/1126061000019254072/file-manager",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/file-manager",
        "IS_ALLOWED": [21, 31, 41, 61],
        "$$hashKey": "object:91"
    }, {
        "ID": 9,
        "TITLE": "MAQL",
        "URL": "#/brands/brand-details/1126061000019254072/maql",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/maql",
        "IS_ALLOWED": [21, 31, 41],
        "IS_MICROSOFT": true
    }, {
        "ID": 10,
        "TITLE": "SAQL",
        "URL": "#/brands/brand-details/1126061000019254072/saql",
        "DYNAMIC_URL": "#/brands/brand-details/:accountId/saql",
        "IS_ALLOWED": [21, 31, 41, 61],
        "IS_MICROSOFT": true
    }]
};

var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Layout.prototype.render = function render() {
        var _props = this.props,
            Component = _props.Component,
            componentProps = _props.componentProps;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(_index2.default, { tabs: data.tabs, tramslations: componentProps.translations }),
            (0, _preact.h)(
                Container,
                null,
                (0, _preact.h)(Component, componentProps)
            )
        );
    };

    return Layout;
}(_preact.Component);

exports.default = Layout;