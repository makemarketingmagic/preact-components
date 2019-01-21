'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Navigation = require('./Navigation.less');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsEl = _styledComponents2.default.nav.withConfig({
    displayName: 'Tabs__TabsEl'
})(['display:flex;flex-direction:row;height:100%;background-color:', ';'], _scMixins.colors.white),
    TabEl = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__TabEl'
})(['display:flex;position:relative;flex-direction:column;align-items:center;margin:0 15px;cursor:pointer;justify-content:center;border-bottom:', ';transition:border-bottom 250ms ease-in-out,color 250ms ease-in-out;white-space:nowrap;&:hover{border-bottom:', ';color:', ';}'], function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '2px solid transparent';
}, function (props) {
    return props.active ? '2px solid ' + _scMixins.colors.red : '1px solid ' + _scMixins.colors.red;
}, _scMixins.colors.red);

var Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleOpen = function (tab, key) {
            var _tab$url = tab.url,
                url = _tab$url === undefined ? false : _tab$url;

            if (url) {
                window.location.href = url;
            }
            _this.setState({ subMenuOpen: tab.subMenu ? key : false });
            tab.subMenu && setTimeout(function () {
                var closeSubMenu = _this.closeSubMenu;
                document.addEventListener('click', function clickFunction() {
                    closeSubMenu();
                    document.removeEventListener('click', clickFunction);
                });
            }, 250);
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

        var _props$tabs = this.props.tabs,
            tabs = _props$tabs === undefined ? [] : _props$tabs;

        return (0, _preact.h)(
            TabsEl,
            null,
            tabs.map(function (tab, key) {
                return (0, _preact.h)(Tab, {
                    handleOpen: _this2.handleOpen,
                    tab: tab,
                    id: key,
                    active: tab.url === window.location.pathname,
                    subMenuOpen: _this2.state.subMenuOpen
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
        var _props = this.props,
            tab = _props.tab,
            id = _props.id,
            active = _props.active,
            subMenuOpen = _props.subMenuOpen;

        return (0, _preact.h)(
            TabEl,
            {
                onClick: this.handleOpen,
                active: active
            },
            tab.text,
            tab.subMenu && (0, _preact.h)(
                'div',
                { 'class': (0, _classnames2.default)(_Navigation2.default.subMenu, subMenuOpen === id ? _Navigation2.default.subMenuOpen : null) },
                tab.subMenu.map(function (subTab, subKey) {
                    return (0, _preact.h)(
                        'div',
                        { key: subKey, 'class': _Navigation2.default.subTab },
                        subTab.text
                    );
                })
            )
        );
    };

    return Tab;
}(_preact.Component);