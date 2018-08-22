'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _index = require('./../Label/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./../Value/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelValue = function (_Component) {
    _inherits(LabelValue, _Component);

    function LabelValue() {
        _classCallCheck(this, LabelValue);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    LabelValue.prototype.render = function render() {
        var _props = this.props,
            flipped = _props.flipped,
            labelText = _props.labelText,
            valueText = _props.valueText;

        var elements = [(0, _preact.h)(
            _index2.default,
            null,
            labelText
        ), (0, _preact.h)(
            _index4.default,
            null,
            valueText
        )];
        elements = flipped ? elements.reverse() : elements;
        return (0, _preact.h)(
            'div',
            null,
            elements.map(function (element) {
                return element;
            })
        );
    };

    return LabelValue;
}(_preact.Component);

exports.default = LabelValue;