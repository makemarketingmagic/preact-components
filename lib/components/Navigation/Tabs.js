'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _preactRouter = require('preact-router');

var _match = require('preact-router/match');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsEl = _styledComponents2.default.nav.withConfig({
    displayName: 'Tabs__TabsEl'
})(['display:flex;flex-direction:row;height:100%;background-color:', ';'], _scMixins.colors.white),
    TabEl = (0, _styledComponents2.default)(_match.Link).withConfig({
    displayName: 'Tabs__TabEl'
})(['display:flex;position:relative;flex-direction:column;align-items:center;margin:0 15px;cursor:pointer;justify-content:center;border-bottom:', ';transition:border-bottom 250ms ease-in-out,color 250ms ease-in-out;white-space:nowrap;color:', ';text-decoration:none;&:hover{border-bottom:', ';color:', ';}'], function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '1px solid transparent';
}, _scMixins.colors.text, function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '1px solid ' + _scMixins.colors.red;
}, _scMixins.colors.red),
    SubMenu = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__SubMenu'
})(['position:absolute;display:flex;flex-direction:column;transform:translateY(', ');opacity:', ';top:0;background-color:', ';padding:16px;z-index:30;box-shadow:2px 2px 0 rgba(32,32,32,0.1);transition:transform 250ms ease-in-out,opacity 250ms ease-in-out;'], function (props) {
    return props.open ? '48px' : '-100%';
}, function (props) {
    return props.open ? '1' : '0';
}, _scMixins.colors.white),
    SubTab = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__SubTab'
})(['color:', ';margin:4px 0;&:hover{color:', ';}'], _scMixins.colors.text, _scMixins.colors.red);

var Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.isActive = function (tab) {
            var _tab$DYNAMIC_URL = tab.DYNAMIC_URL,
                DYNAMIC_URL = _tab$DYNAMIC_URL === undefined ? false : _tab$DYNAMIC_URL,
                URL = tab.URL;

            var vars = {};
            var accountId = _this.props.brandId;
            // /brand-details/:accountId/info
            if (DYNAMIC_URL) {
                var re = /:(\w+)/ig,
                    url = DYNAMIC_URL;
                //     match = re.exec(url)
                // while (match) {
                //     vars[match[1]] = {
                //         index: match.index + 1
                //     }
                url = url.replace(re, '.+?');
                return new RegExp(url).test(window.location.pathname);
                // url = url.slice(match.index + 1 + match[1].length)
                // match = re.exec(url)
                // }
            } else {
                if (URL[0] === '#') return window.location.hash === URL;else return window.location.pathname === URL;
            }
        };

        _this.handleOpen = function (tab, key) {
            var _tab$DYNAMIC_URL2 = tab.DYNAMIC_URL,
                DYNAMIC_URL = _tab$DYNAMIC_URL2 === undefined ? false : _tab$DYNAMIC_URL2,
                URL = tab.URL;
            var brandId = _this.props.brandId;

            if (DYNAMIC_URL) {
                (0, _preactRouter.route)(DYNAMIC_URL.replace(/:accountid/ig, brandId), true);
            } else {
                if (URL[0] === '#') window.location.hash = URL;else window.location.pathname = URL;
            }
            // this.setState({ subMenuOpen: tab.subMenu ? key : false })
            // tab.subMenu && setTimeout(() => {
            //     let closeSubMenu = this.closeSubMenu
            //     document.addEventListener('click', function clickFunction() {
            //         closeSubMenu()
            //         document.removeEventListener('click', clickFunction)
            //     })
            // }, 250)
        };

        _this.closeSubMenu = function () {
            _this.setState({ subMenuOpen: false });
        };

        _this.state = {
            active: 0,
            subMenuOpen: false
        };
        return _this;
    }

    Tabs.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$tabs = _props.tabs,
            tabs = _props$tabs === undefined ? [] : _props$tabs,
            translations = _props.translations,
            brandId = _props.brandId;

        return (0, _preact.h)(
            TabsEl,
            null,
            tabs.map(function (tab, key) {
                return (0, _preact.h)(Tab, {
                    brandId: brandId,
                    tab: tab,
                    id: key,
                    active: _this2.isActive(tab),
                    subMenuOpen: _this2.state.subMenuOpen,
                    translations: translations
                });
            })
        );
    };

    return Tabs;
}(_preact.Component);

exports.default = Tabs;

var Tab = function (_Component2) {
    _inherits(Tab, _Component2);

    function Tab() {
        var _temp, _this3, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.handleOpen = function (e) {
            var _this3$props = _this3.props,
                handleOpen = _this3$props.handleOpen,
                tab = _this3$props.tab,
                id = _this3$props.id;

            handleOpen && tab && id >= 0 && handleOpen(tab, id);
            e.stopPropagation();
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    Tab.prototype.render = function render() {
        var _props2 = this.props,
            brandId = _props2.brandId,
            _props2$tab = _props2.tab,
            TITLE = _props2$tab.TITLE,
            TITLE_TRANSLATION_LABEL = _props2$tab.TITLE_TRANSLATION_LABEL,
            URL = _props2$tab.URL,
            DYNAMIC_URL = _props2$tab.DYNAMIC_URL,
            IS_ALLOWED = _props2$tab.IS_ALLOWED,
            _props2$tab$IS_MICROS = _props2$tab.IS_MICROSOFT,
            IS_MICROSOFT = _props2$tab$IS_MICROS === undefined ? false : _props2$tab$IS_MICROS,
            id = _props2.id,
            active = _props2.active,
            subMenuOpen = _props2.subMenuOpen,
            translations = _props2.translations;

        return (0, _preact.h)(
            TabEl,
            {
                onClick: this.handleOpen,
                active: active,
                activeClassName: 'active', href: DYNAMIC_URL.replace(/:accountid/ig, brandId)
            },
            translations.getLL(TITLE_TRANSLATION_LABEL || TITLE, TITLE)
        );
    };

    return Tab;
}(_preact.Component);