'use strict';

exports.__esModule = true;
exports.Tab = exports.Tabs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = _styledComponents2.default.nav.withConfig({
    displayName: 'Tabs__Navigation'
})(['display:flex;flex-direction:row;justify-content:center;border-bottom:1px solid rgba(32,32,32,0.1);']),
    Pointer = _styledComponents2.default.span.withConfig({
    displayName: 'Tabs__Pointer'
})(['position:absolute;width:0;height:2px;margin-top:-1px;background-color:', ';transition-timing-function:ease-in-out;transition-duration:250ms;transition-property:left,width;'], _scMixins.colors.red),
    TabsEl = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__TabsEl'
})(['position:relative;']),
    Label = _styledComponents2.default.label.withConfig({
    displayName: 'Tabs__Label'
})(['color:', ';font-weight:500;line-height:18px;font-size:14px;text-align:center;padding:16px 12px;cursor:pointer;'], function (_ref) {
    var active = _ref.active;
    return active ? _scMixins.colors.red : _scMixins.colors.text;
}),
    TabEl = _styledComponents2.default.div.withConfig({
    displayName: 'Tabs__TabEl'
})(['display:', ';'], function (_ref2) {
    var active = _ref2.active;
    return active ? 'block' : 'none';
});

var Tabs = exports.Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleClick = function (index) {
            _this.setState({
                index: index,
                pointer: _this._pointerPosition(index)
            });
            if (_this.props.onChange) _this.props.onChange(_this);
        };

        _this.state = {
            index: _this.props.index

        };

        return _this;
    }

    Tabs.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        setTimeout(function () {
            _this2.setState({ pointer: _this2._pointerPosition(_this2.state.index) });
        }, 100);
    };

    Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(next_props) {
        var index = next_props.index || this.state.index;
        this.setState({
            index: index,
            pointer: this._pointerPosition(index)
        });
    };

    Tabs.prototype._pointerPosition = function _pointerPosition() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (!this.tabs || !this.navigation) return {};
        var startPoint = this.tabs.base.getBoundingClientRect().left;
        var label = this.navigation.base.children[index].getBoundingClientRect();

        return {
            top: this.navigation.base.getBoundingClientRect().height + 'px',
            left: label.left - startPoint + 'px',
            width: label.width + 'px'
        };
    };

    Tabs.prototype.active = function active(value) {
        this.setState({ active: value });
        if (this.props.onActive && value) {
            this.props.onActive(this);
        }
    };

    Tabs.prototype.renderLabels = function renderLabels(labels) {
        return labels.map(function (props) {
            return (0, _preact.h)(
                Label,
                props,
                props.label
            );
        });
    };

    Tabs.prototype.render = function render() {
        var _this3 = this;

        var labels = [];
        var tabs = this.props.children.map(function (tab, index) {
            var active = _this3.state.index === index,
                _tab$props = tab.props,
                label = _tab$props.label,
                disabled = _tab$props.disabled,
                hidden = _tab$props.hidden;


            labels.push({
                label: label,
                key: index,
                active: active,
                disabled: disabled,
                hidden: hidden,
                onClick: !disabled ? _this3.handleClick.bind(_this3, index) : null
            });

            return (0, _preact.cloneElement)(tab, { active: active, key: index, tabIndex: index });
        });
        return (0, _preact.h)(
            TabsEl,
            { ref: function ref(_ref4) {
                    return _this3.tabs = _ref4;
                } },
            (0, _preact.h)(
                Navigation,
                { ref: function ref(_ref3) {
                        return _this3.navigation = _ref3;
                    } },
                this.renderLabels(labels)
            ),
            (0, _preact.h)(Pointer, { style: this.state.pointer }),
            tabs
        );
    };

    return Tabs;
}(_preact.Component);

var Tab = exports.Tab = function (_Component2) {
    _inherits(Tab, _Component2);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    Tab.prototype.render = function render() {
        var _this5 = this;

        return (0, _preact.h)(
            TabEl,
            this.props,
            this.props.children.map(function (element, index) {
                return (0, _preact.cloneElement)(element, _extends({}, _this5.props));
            })
        );
    };

    return Tab;
}(_preact.Component);