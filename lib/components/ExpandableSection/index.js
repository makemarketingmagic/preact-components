'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIRegular = _scMixins.typography.UIRegular;

var Title = (0, _styledComponents2.default)(UIRegular).withConfig({
    displayName: 'ExpandableSection__Title'
})(['margin-top:', ';margin-left:', ';transition:500ms;'], function (props) {
    return props.open ? '15px' : '7px';
}, function (props) {
    return props.open ? '0' : '9px';
});

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandableSection__Container'
})(['background:#FFFFFF;overflow:hidden;transition:250ms;padding:4px 16px 16px 16px;box-shadow:0px 1px 2px rgba(0,0,0,0.16),0px 4px 8px rgba(0,0,0,0.04);border-radius:4px;max-height:', ';'], function (props) {
    return props.open ? '800px' : '40px';
});

var TopBar = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandableSection__TopBar'
})(['height:40px;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;']);

var ExpandingSection = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandableSection__ExpandingSection'
})(['color:', ';'], _scMixins.colors.gray);

var ExpandableSection = function (_Component) {
    _inherits(ExpandableSection, _Component);

    function ExpandableSection(props) {
        _classCallCheck(this, ExpandableSection);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleOpen = function () {
            _this.setState({ open: !_this.state.open });
        };

        _this.state = {
            open: false
        };
        return _this;
    }

    ExpandableSection.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            children = _props.children;

        return (0, _preact.h)(
            Container,
            { open: this.state.open },
            (0, _preact.h)(
                TopBar,
                { onClick: this.toggleOpen },
                (0, _preact.h)(
                    Title,
                    { open: this.state.open },
                    title
                ),
                (0, _preact.h)(_Switch2.default, { value: this.state.open, onChange: this.toggleOpen, title: title })
            ),
            (0, _preact.h)(
                ExpandingSection,
                { open: this.state.open },
                children
            )
        );
    };

    return ExpandableSection;
}(_preact.Component);

exports.default = ExpandableSection;