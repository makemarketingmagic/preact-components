'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _WOOLogo = require('../icons/WOOLogo');

var _WOOLogo2 = _interopRequireDefault(_WOOLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepNavEl = _styledComponents2.default.nav.withConfig({
    displayName: 'StepNavigation__StepNavEl'
})(['height:160px;background-color:', ';padding:16px 64px;display:flex;flex-direction:row;align-items:center;justify-content:center;'], _scMixins.colors.white),
    LogoContainer = _styledComponents2.default.div.withConfig({
    displayName: 'StepNavigation__LogoContainer'
})(['margin-right:64px;']);

var StepNavigation = function (_Component) {
    _inherits(StepNavigation, _Component);

    function StepNavigation() {
        _classCallCheck(this, StepNavigation);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    StepNavigation.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            _props$showLogo = _props.showLogo,
            showLogo = _props$showLogo === undefined ? true : _props$showLogo;

        return (0, _preact.h)(
            StepNavEl,
            null,
            showLogo && (0, _preact.h)(
                LogoContainer,
                null,
                (0, _preact.h)(_WOOLogo2.default, null)
            ),
            children
        );
    };

    return StepNavigation;
}(_preact.Component);

exports.default = StepNavigation;