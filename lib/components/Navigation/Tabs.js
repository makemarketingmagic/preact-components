'use strict';

exports.__esModule = true;
exports.MobileTabs = exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsEl = _styledComponents2.default.nav.withConfig({
    displayName: 'Tabs__TabsEl'
})(['display:flex;flex-direction:row;height:100%;background-color:', ';grid-area:nav;justify-content:center;'], _scMixins.colors.white),
    TabEl = _styledComponents2.default.a.withConfig({
    displayName: 'Tabs__TabEl'
})(['display:flex;position:relative;flex-direction:column;align-items:center;margin:0 15px;cursor:pointer;justify-content:center;border-bottom:', ';transition:border-bottom 250ms ease-in-out,color 250ms ease-in-out;white-space:nowrap;color:', ';text-decoration:none;&:hover{border-bottom:', ';color:', ';}'], function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '1px solid transparent';
}, function (props) {
    return props.active ? _scMixins.colors.red : _scMixins.colors.text;
}, function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '1px solid ' + _scMixins.colors.red;
}, _scMixins.colors.red),
    CurrentTab = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__CurrentTab'
})(['display:flex;']),
    MobileTabsEl = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__MobileTabsEl'
})(['display:grid;grid-template-columns:', ';height:100%;background-color:', ';overflow-x:scroll;&::after{pointer-events:none;content:"";display:block;height:100%;width:64px;position:sticky;right:0;background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);}'], function (props) {
    return Array.apply(null, Array(props.tabs + 1)).map(function () {
        return "auto";
    }).join(' ');
}, _scMixins.colors.white),
    SubMenu = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__SubMenu'
})(['position:absolute;display:flex;flex-direction:column;transform:translateY(', ');opacity:', ';top:0;background-color:', ';padding:16px;z-index:30;box-shadow:2px 2px 0 rgba(32,32,32,0.1);transition:transform 250ms ease-in-out,opacity 250ms ease-in-out;'], function (props) {
    return props.open ? '48px' : '-100%';
}, function (props) {
    return props.open ? '1' : '0';
}, _scMixins.colors.white),
    SubTab = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__SubTab'
})(['color:', ';margin:4px 0;&:hover{color:', ';}'], _scMixins.colors.text, _scMixins.colors.red),
    MobileContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__MobileContainer'
})(['display:flex;flex-direction:row;height:100%;background-color:', ';grid-area:nav;justify-content:center;max-width:calc(100vw - 180px);'], _scMixins.colors.white);

var Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.isActive = function (tab) {
            var _tab$DYNAMIC_URL = tab.DYNAMIC_URL,
                DYNAMIC_URL = _tab$DYNAMIC_URL === undefined ? false : _tab$DYNAMIC_URL,
                URL = tab.URL;
            var $location = _this.props.$location;

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
                return new RegExp(url).test('#' + $location.path());
                // url = url.slice(match.index + 1 + match[1].length)
                // match = re.exec(url)
                // }
            } else {
                if (URL[0] === '#') return '#' + $location.path() === URL;else return window.location.pathname === URL;
            }
        };

        _this.handleOpen = function (tab, key) {
            var _tab$DYNAMIC_URL2 = tab.DYNAMIC_URL,
                DYNAMIC_URL = _tab$DYNAMIC_URL2 === undefined ? false : _tab$DYNAMIC_URL2,
                URL = tab.URL;
            var _this$props = _this.props,
                brandId = _this$props.brandId,
                $location = _this$props.$location;

            if (DYNAMIC_URL) {
                $location.path(DYNAMIC_URL.replace(/:accountid/ig, brandId), false);
            } else {
                $location.path(URL);
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

        _this.canViewTab = function (tab) {
            var _this$props2 = _this.props,
                user = _this$props2.user,
                isMicrosoft = _this$props2.isMicrosoft,
                _tab$IS_ALLOWED = tab.IS_ALLOWED,
                IS_ALLOWED = _tab$IS_ALLOWED === undefined ? [] : _tab$IS_ALLOWED,
                _tab$IS_MICROSOFT = tab.IS_MICROSOFT,
                IS_MICROSOFT = _tab$IS_MICROSOFT === undefined ? false : _tab$IS_MICROSOFT;

            if (IS_ALLOWED.indexOf(parseInt(user.rights_id)) >= 0 || IS_ALLOWED.length === 0) {
                if (IS_MICROSOFT === isMicrosoft) {
                    return true;
                } else if (IS_MICROSOFT === false && isMicrosoft) {
                    return true;
                }
            }
            return false;
        };

        _this.state = {
            active: 0,
            subMenuOpen: false
        };
        window.onhashchange = function () {
            _this.setState({});
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
            tabs.filter(this.canViewTab).map(function (tab, key) {
                return (0, _preact.h)(Tab, {
                    brandId: brandId,
                    tab: tab,
                    id: key,
                    handleOpen: _this2.handleOpen,
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
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    // handleOpen = (e) => {
    //     const { handleOpen, tab, id } = this.props
    //     handleOpen && tab && id >= 0 && handleOpen(tab, id)
    //     e.stopPropagation()
    // }

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

        var currentUrl = window.location.hash.replace(/^#/, ''),
            dynamicUrl = '' + DYNAMIC_URL.replace(/:accountid/i, brandId);
        return (0, _preact.h)(
            TabEl
            // onClick={this.handleOpen}
            ,
            { active: active,
                href: dynamicUrl
            },
            translations.getLL(TITLE_TRANSLATION_LABEL || TITLE, TITLE)
        );
    };

    return Tab;
}(_preact.Component);

var MobileTabs = exports.MobileTabs = function (_Tabs) {
    _inherits(MobileTabs, _Tabs);

    function MobileTabs() {
        _classCallCheck(this, MobileTabs);

        return _possibleConstructorReturn(this, _Tabs.apply(this, arguments));
    }

    MobileTabs.prototype.render = function render() {
        var _this5 = this;

        var _props3 = this.props,
            translations = _props3.translations,
            brandId = _props3.brandId,
            _props3$tabs = _props3.tabs,
            tabs = _props3$tabs === undefined ? [] : _props3$tabs;

        var currentTab = tabs.find(function (value) {
            return _this5.isActive(value);
        }),
            rest = tabs.filter(function (value) {
            return !_this5.isActive(value);
        }).filter(this.canViewTab);
        return (0, _preact.h)(
            MobileContainer,
            null,
            currentTab && (0, _preact.h)(
                CurrentTab,
                null,
                (0, _preact.h)(Tab, {
                    brandId: brandId,
                    tab: currentTab,
                    id: -1,
                    handleOpen: this.handleOpen,
                    active: this.isActive(currentTab),
                    subMenuOpen: this.state.subMenuOpen,
                    translations: translations
                })
            ),
            (0, _preact.h)(
                MobileTabsEl,
                { tabs: rest.length },
                rest.map(function (tab, key) {
                    return (0, _preact.h)(Tab, {
                        brandId: brandId,
                        tab: tab,
                        id: key,
                        handleOpen: _this5.handleOpen,
                        active: _this5.isActive(tab),
                        subMenuOpen: _this5.state.subMenuOpen,
                        translations: translations
                    });
                })
            )
        );
    };

    return MobileTabs;
}(Tabs);