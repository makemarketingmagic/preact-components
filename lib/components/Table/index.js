'use strict';

exports.__esModule = true;
exports.SORT_DIRECTION = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _SortAscIcon = require('./../icons/SortAscIcon');

var _SortAscIcon2 = _interopRequireDefault(_SortAscIcon);

var _SortDescIcon = require('./../icons/SortDescIcon');

var _SortDescIcon2 = _interopRequireDefault(_SortDescIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = _styledComponents2.default.div.withConfig({
    displayName: 'Table__Grid'
})(['display:grid;grid-template-columns:', ';width:100%;'], function (props) {
    return props.headers.map(function (val) {
        return 'auto';
    }).join(' ');
}),
    HeaderRow = _styledComponents2.default.div.withConfig({
    displayName: 'Table__HeaderRow'
})(['']),
    HeaderCell = _styledComponents2.default.div.withConfig({
    displayName: 'Table__HeaderCell'
})(['cursor:', ';font-family:\'Montserrat\';font-style:normal;font-weight:600;line-height:18px;font-size:14px;border-bottom:', ';padding-bottom:7px;color:#323232;display:flex;align-items:center;'], function (props) {
    return props.value ? 'pointer' : 'default';
}, function (props) {
    return props.ordered ? '2px solid ' + _scMixins.colors.red : '1px solid rgba(32, 32, 32, 0.1)';
}),
    StyledCell = _styledComponents2.default.div.withConfig({
    displayName: 'Table__StyledCell'
})(['height:48px;min-width:0;border-bottom:1px solid rgba(32,32,32,0.1);font-style:normal;font-weight:normal;line-height:18px;font-size:14px;padding-right:16px;display:flex;align-items:center;color:#888888;background-color:', ';'], function (props) {
    return props.selected ? props.selectedBackground : _scMixins.colors.white;
}),
    SortIcon = _styledComponents2.default.img.withConfig({
    displayName: 'Table__SortIcon'
})(['margin-left:4px;transition:all 250ms ease-in-out;display:inline-block;width:8px;height:8px;transform:', ';'], function (props) {
    return props.direction ? 'rotate(180deg)' : 'rotate(0deg)';
}),
    ExpandableContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Table__ExpandableContainer'
})(['grid-column:1 / ', ';background-color:', ';'], function (props) {
    return props.columns + 1;
}, function (props) {
    return props.selected ? props.selectedBackground : _scMixins.colors.white;
});

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Table.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            setOrderBy = _props.events.setOrderBy,
            orderBy = _props.orderBy,
            direction = _props.direction,
            data = _props.data,
            headers = _props.headers,
            _props$renderers = _props.renderers,
            renderers = _props$renderers === undefined ? {} : _props$renderers,
            _props$hasExpandingSe = _props.hasExpandingSection,
            hasExpandingSection = _props$hasExpandingSe === undefined ? false : _props$hasExpandingSe,
            _props$ExpandingSecti = _props.ExpandingSection,
            ExpandingSection = _props$ExpandingSecti === undefined ? null : _props$ExpandingSecti,
            _props$selected = _props.selected,
            selected = _props$selected === undefined ? false : _props$selected,
            _props$onSelect = _props.onSelect,
            onSelect = _props$onSelect === undefined ? null : _props$onSelect,
            _props$selectedBackgr = _props.selectedBackground,
            selectedBackground = _props$selectedBackgr === undefined ? _scMixins.colors.actionIncomplete : _props$selectedBackgr,
            headersArray = Object.entries(headers);

        return (0, _preact.h)(
            Grid,
            { headers: headersArray },
            headersArray.map(function (_ref) {
                var key = _ref[0],
                    value = _ref[1];

                return (0, _preact.h)(Heading, {
                    onClick: function onClick() {
                        return value ? setOrderBy(key, orderBy !== key ? true : !direction) : false;
                    },
                    text: value,
                    field: key,
                    ordered: orderBy === key,
                    direction: direction
                });
            }),
            data.map(function (val, i) {
                return [headersArray.map(function (_ref2) {
                    var key = _ref2[0],
                        value = _ref2[1];

                    return (0, _preact.h)(
                        StyledCell,
                        {
                            selected: selected === val.id,
                            selectedBackground: selectedBackground,
                            onClick: function onClick() {
                                onSelect && onSelect(val.id, val);
                            }
                        },
                        renderers[key] ? renderers[key](val[key], selected === val.id, val) : val[key]
                    );
                }), hasExpandingSection && ExpandingSection && selected === val.id ? (0, _preact.h)(
                    ExpandableContainer,
                    { selectedBackground: selectedBackground, columns: headersArray.length, selected: selected === val.id },
                    (0, _preact.createElement)(ExpandingSection, _extends({ data: val, i: i }, _this2.props.expandingSectionProps))
                ) : null];
            })
        );
    };

    return Table;
}(_preact.Component);

exports.default = Table;


var SORT_DIRECTION = {
    ASC: true,
    DESC: false
};

exports.SORT_DIRECTION = SORT_DIRECTION;

var Heading = function (_Component2) {
    _inherits(Heading, _Component2);

    function Heading() {
        _classCallCheck(this, Heading);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    Heading.prototype.render = function render() {
        var _props2 = this.props,
            text = _props2.text,
            onClick = _props2.onClick,
            _props2$ordered = _props2.ordered,
            ordered = _props2$ordered === undefined ? false : _props2$ordered,
            _props2$direction = _props2.direction,
            direction = _props2$direction === undefined ? false : _props2$direction;

        return (0, _preact.h)(
            HeaderCell,
            { ordered: ordered, onClick: onClick },
            text,
            ordered ? (0, _preact.h)(SortIcon, { direction: direction, src: require('../icons/SortIcon.svg') }) : null
        );
    };

    return Heading;
}(_preact.Component);