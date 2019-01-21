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
})(['max-width:1200px;width:90%;margin:64px auto;background-color:white;']),
    data = {
    tabs: [{
        text: 'Sales Opportunities',
        url: '/sales-opportunities'
    }, {
        text: 'AHA Planning',
        url: '/aha-planning'
    }, {
        text: 'Reports',
        url: '/reports'
    }, {
        text: 'Notes',
        url: '/notes'
    }, {
        text: 'Files',
        url: '/files'
    }, {
        text: 'Onboarding',
        url: '/onboarding'
    }, {
        text: 'Info',
        url: '/'
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
            (0, _preact.h)(_index2.default, { tabs: data.tabs }),
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