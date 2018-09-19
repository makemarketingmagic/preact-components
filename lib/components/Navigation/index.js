'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _WOOLogo = require('../icons/WOOLogo');

var _WOOLogo2 = _interopRequireDefault(_WOOLogo);

var _CurrentUser = require('./CurrentUser');

var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _styledComponents2.default.header.withConfig({
    displayName: 'Navigation__Header'
})(['width:100%;height:48px;display:grid;grid-template-columns:1fr 1fr 1fr;background-color:', ';border-bottom:1px solid rgba(32,32,32,0.1);align-items:center;justify-content:space-between;'], _scMixins.colors.white);

var LogoContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Navigation__LogoContainer'
})(['margin-left:32px;']);

var Navigation = function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Navigation.prototype.render = function render() {
        return (0, _preact.h)(
            Header,
            null,
            (0, _preact.h)(
                LogoContainer,
                null,
                (0, _preact.h)(_WOOLogo2.default, null)
            ),
            (0, _preact.h)(_Tabs2.default, { tabs: [{ text: 'AHA Feedback' }, {
                    text: 'Rapportages', subMenu: [{ text: 'Submenu' }, { text: 'Submenu' }, { text: 'Submenu' }, { text: 'Submenu' }, { text: 'Submenu' }, { text: 'Submenu' }, { text: 'Submenu' }]
                }, {
                    text: 'Verkoopkansen', subMenu: [{ text: 'Another Submenu' }]
                }, { text: 'Notities' }, { text: 'Informatie' }] }),
            (0, _preact.h)(_CurrentUser2.default, null)
        );
    };

    return Navigation;
}(_preact.Component);

exports.default = Navigation;