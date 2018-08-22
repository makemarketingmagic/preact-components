'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Tooltip = require('./Tooltip.less');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CrossIcon = require('../icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_Component) {
    _inherits(Tooltip, _Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleTooltip = function () {
            _this.setState({ visible: !_this.state.visible });
        };

        _this.state = {
            visible: props.visible || true
        };
        return _this;
    }

    Tooltip.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            position = _props.position,
            message = _props.message,
            color = _props.color,
            _props$closable = _props.closable,
            closable = _props$closable === undefined ? true : _props$closable;

        return (0, _preact.h)(
            'div',
            { 'class': (0, _classnames2.default)(_Tooltip2.default.tooltipContainer, 'notranslate', this.state.visible ? _Tooltip2.default.tooltipContainerOpen : _Tooltip2.default.tooltipContainerClosed) },
            (0, _preact.h)(
                'div',
                { 'class': _Tooltip2.default.tooltip },
                (0, _preact.h)(
                    'div',
                    { 'class': _Tooltip2.default.tooltipContents },
                    (0, _preact.h)(
                        'div',
                        null,
                        (0, _preact.h)(
                            'div',
                            { 'class': _Tooltip2.default.tooltipName },
                            name
                        ),
                        (0, _preact.h)(
                            'div',
                            { className: (0, _classnames2.default)(_Tooltip2.default.tooltipPosition, _Tooltip2.default['tooltipPosition--' + color]) },
                            position
                        ),
                        (0, _preact.h)(
                            'div',
                            { 'class': _Tooltip2.default.tooltipMessage },
                            message
                        )
                    ),
                    closable && (0, _preact.h)(
                        'div',
                        { onClick: this.toggleTooltip, 'class': _Tooltip2.default.closeButton },
                        (0, _preact.h)(_CrossIcon2.default, { className: _Tooltip2.default['crossIcon--' + color] })
                    )
                )
            )
        );
    };

    return Tooltip;
}(_preact.Component);

exports.default = Tooltip;