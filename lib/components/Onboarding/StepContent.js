'use strict';

exports.__esModule = true;
exports.StepSection = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../Button/index');

var _index2 = _interopRequireDefault(_index);

var _NavigateIcon = require('./../icons/NavigateIcon');

var _NavigateIcon2 = _interopRequireDefault(_NavigateIcon);

var _BasicInformation = require('./Steps/BasicInformation');

var _BasicInformation2 = _interopRequireDefault(_BasicInformation);

var _index3 = require('./../SingleLineTextInput/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./../Dropdown/index');

var _index6 = _interopRequireDefault(_index5);

var _scMixins = require('../common/scMixins');

var _index7 = require('./../Label/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./../ExpandableMarkdownSection/index');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('./../UploadSection/index');

var _index12 = _interopRequireDefault(_index11);

var _TickIcon = require('./../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _Persona = require('../Persona');

var _Persona2 = _interopRequireDefault(_Persona);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inputs = {
    SingleLineTextInput: _index4.default,
    Dropdown: _index6.default,
    ExpandableMarkdownSection: _index10.default,
    UploadSection: _index12.default
};

var StepContentEl = _styledComponents2.default.div.withConfig({
    displayName: 'StepContent__StepContentEl'
})(['max-width:1024px;margin:0 auto;display:flex;flex-direction:column;transition:all 250ms ease-in-out;height:', ';transform:scaleY(', ');'], function (props) {
    return props.active ? 'auto' : 0;
}, function (props) {
    return props.active ? 1 : 0;
}),
    NextStepContainer = _styledComponents2.default.div.withConfig({
    displayName: 'StepContent__NextStepContainer'
})(['width:100%;align-items:center;justify-content:space-between;margin:16px 0;display:flex;flex-direction:row;']),
    StepSectionTitle = _styledComponents2.default.div.withConfig({
    displayName: 'StepContent__StepSectionTitle'
})(['font-style:normal;font-weight:normal;line-height:32px;font-size:24px;color:', ';'], _scMixins.colors.text),
    InputGrid = _styledComponents2.default.div.withConfig({
    displayName: 'StepContent__InputGrid'
})(['display:grid;grid-template-columns:1fr 1fr;']),
    InputLabel = (0, _styledComponents2.default)(_index8.default).withConfig({
    displayName: 'StepContent__InputLabel'
})(['margin-bottom:4px;']),
    InputContainer = _styledComponents2.default.div.withConfig({
    displayName: 'StepContent__InputContainer'
})(['margin:16px 8px;grid-column:', ';'], function (props) {
    return props.span ? '1/3' : 'span 1';
});

var StepContent = function (_Component) {
    _inherits(StepContent, _Component);

    function StepContent() {
        _classCallCheck(this, StepContent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    StepContent.prototype.componentDidUpdate = function componentDidUpdate() {};

    StepContent.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    StepContent.prototype.render = function render() {
        var _props = this.props,
            active = _props.active,
            sections = _props.sections,
            tooltip = _props.tooltip,
            _props$events = _props.events,
            nextStep = _props$events.nextStep,
            canGoToNextStep = _props$events.canGoToNextStep,
            onChange = _props$events.onChange,
            isFinalStep = _props$events.isFinalStep,
            allStepsComplete = _props$events.allStepsComplete,
            completeOnboarding = _props$events.completeOnboarding,
            completed = _props.completed,
            skippable = _props.skippable,
            buttonText = completed ? 'Complete Step' : skippable ? 'Skip Step' : 'Complete Step';

        return (0, _preact.h)(
            StepContentEl,
            { active: active },
            (0, _preact.h)(
                NextStepContainer,
                null,
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(_Persona2.default, {
                        markdown: tooltip.markdown,
                        color: tooltip.color,
                        imageUrl: tooltip.imageUrl ? tooltip.imageUrl : 'defaultTooltipImage.png',
                        name: tooltip.name ? tooltip.name : '',
                        position: tooltip.position ? tooltip.position : '',
                        message: tooltip.message ? tooltip.message : ''
                    })
                ),
                isFinalStep() ? (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        { onClick: completeOnboarding, disabled: !allStepsComplete(), Icon: _TickIcon2.default },
                        'Complete Onboarding'
                    )
                ) : (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        { onClick: nextStep, disabled: !canGoToNextStep(), Icon: _NavigateIcon2.default },
                        buttonText
                    )
                )
            ),
            sections.map(function (_ref, i) {
                var name = _ref.name,
                    inputs = _ref.inputs;

                return (0, _preact.h)(StepSection, { name: name, inputs: inputs, key: i, onChange: onChange });
            }),
            (0, _preact.h)(
                NextStepContainer,
                null,
                (0, _preact.h)('div', null),
                isFinalStep() ? (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        { onClick: completeOnboarding, disabled: !allStepsComplete(), Icon: _TickIcon2.default },
                        'Complete Onboarding'
                    )
                ) : (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _index2.default,
                        { onClick: nextStep, disabled: !canGoToNextStep(), Icon: _NavigateIcon2.default },
                        buttonText
                    )
                )
            )
        );
    };

    return StepContent;
}(_preact.Component);

exports.default = StepContent;

var StepSection = exports.StepSection = function (_Component2) {
    _inherits(StepSection, _Component2);

    function StepSection() {
        _classCallCheck(this, StepSection);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    StepSection.prototype.render = function render() {
        var _props2 = this.props,
            inputs = _props2.inputs,
            _onChange = _props2.onChange,
            sectionName = this.props.name;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                StepSectionTitle,
                null,
                sectionName
            ),
            (0, _preact.h)(
                InputGrid,
                null,
                inputs.map(function (_ref2, i) {
                    var name = _ref2.name,
                        settings = _ref2.settings,
                        type = _ref2.type,
                        _ref2$span = _ref2.span,
                        span = _ref2$span === undefined ? false : _ref2$span,
                        _ref2$hideLabel = _ref2.hideLabel,
                        hideLabel = _ref2$hideLabel === undefined ? false : _ref2$hideLabel;

                    var El = Inputs[type];
                    return (0, _preact.h)(
                        InputContainer,
                        { span: span },
                        !hideLabel && (0, _preact.h)(
                            InputLabel,
                            null,
                            name
                        ),
                        (0, _preact.cloneElement)((0, _preact.h)(El, null), _extends({}, settings, { onChange: function onChange(update) {
                                return _onChange(update, sectionName, name);
                            }, id: i }))
                    );
                })
            )
        );
    };

    return StepSection;
}(_preact.Component);