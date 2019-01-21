'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _polished = require('polished');

var _TickIcon = require('../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _DotsIcon = require('../icons/DotsIcon');

var _DotsIcon2 = _interopRequireDefault(_DotsIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Step__StepContainer'
})(['height:128px;width:128px;cursor:', ';margin:0px 8px;transition:background-color 250ms ease-in-out;opacity:', ';background-color:', ';box-shadow:0px 1px 2px rgba(0,0,0,0.16),0px 8px 16px rgba(0,0,0,0.08);border-radius:4px;padding:16px;display:flex;flex-direction:column;justify-content:space-between;'], function (props) {
    return props.canGoToStep ? 'pointer' : 'not-allowed';
}, function (props) {
    return props.canGoToStep ? 1 : 0.5;
}, function (props) {
    return (0, _polished.transparentize)(props.active ? 0 : 1, _scMixins.colors.red);
});

var StepInfo = _styledComponents2.default.div.withConfig({
    displayName: 'Step__StepInfo'
})(['font-style:normal;font-weight:normal;line-height:normal;font-size:14px;transition:color 250ms ease-in-out;color:', ';'], function (props) {
    return props.active ? _scMixins.colors.white : _scMixins.colors.text;
});

var IndicatorContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Step__IndicatorContainer'
})(['height:24px;width:100%;display:flex;justify-content:flex-end;']);

var IndicatorIncomplete = _styledComponents2.default.div.withConfig({
    displayName: 'Step__IndicatorIncomplete'
})(['height:24px;width:24px;border-radius:50%;background-color:', ';display:flex;align-items:center;justify-content:center;'], _scMixins.colors.actionIncomplete);

var IndicatorComplete = _styledComponents2.default.div.withConfig({
    displayName: 'Step__IndicatorComplete'
})(['height:24px;width:24px;border-radius:50%;background-color:', ';display:flex;align-items:center;justify-content:center;'], function (props) {
    return props.active ? _scMixins.colors.white : _scMixins.colors.red;
});

var Step = function (_Component) {
    _inherits(Step, _Component);

    function Step(props) {
        _classCallCheck(this, Step);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.toggleStep = function () {
            var _this$props = _this.props,
                setActive = _this$props.setActive,
                id = _this$props.id;

            setActive(id);
        };

        _this.renderIndicator = function () {
            var _this$props2 = _this.props,
                active = _this$props2.active,
                complete = _this$props2.complete;

            if (active && complete) {
                return (0, _preact.h)(
                    IndicatorComplete,
                    { active: active },
                    (0, _preact.h)(_TickIcon2.default, { color: _scMixins.colors.red })
                );
            } else if (!active && complete) {
                return (0, _preact.h)(
                    IndicatorComplete,
                    { active: active },
                    (0, _preact.h)(_TickIcon2.default, { color: _scMixins.colors.white })
                );
            } else if (!active && !complete) {
                return (0, _preact.h)(IndicatorIncomplete, null);
            } else {
                return (0, _preact.h)(
                    IndicatorIncomplete,
                    null,
                    (0, _preact.h)(_DotsIcon2.default, { color: _scMixins.colors.red })
                );
            }
        };

        return _this;
    }

    Step.prototype.render = function render() {
        var _props = this.props,
            id = _props.id,
            info = _props.info,
            active = _props.active,
            complete = _props.complete,
            canGoToStep = _props.canGoToStep;

        return (0, _preact.h)(
            StepContainer,
            { canGoToStep: canGoToStep(id), active: active, onClick: this.toggleStep },
            (0, _preact.h)(
                StepInfo,
                { active: active },
                info
            ),
            (0, _preact.h)(
                IndicatorContainer,
                null,
                this.renderIndicator()
            )
        );
    };

    return Step;
}(_preact.Component);

exports.default = Step;