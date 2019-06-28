'use strict';

exports.__esModule = true;
exports.Onboarding = exports.defaultSteps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _StepNavigation = require('./StepNavigation');

var _StepNavigation2 = _interopRequireDefault(_StepNavigation);

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _index = require('./../ExpandableSection/index');

var _index2 = _interopRequireDefault(_index);

var _ExpandableMarkdownSection = require('../ExpandableMarkdownSection');

var _ExpandableMarkdownSection2 = _interopRequireDefault(_ExpandableMarkdownSection);

var _index3 = require('./../UploadSection/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultSteps = exports.defaultSteps = [{
    navigation: {
        // This first setion will include the details for the step navigation
        info: "This is the text to explain the 1st step"
    },
    // This is where each step will go, grouped into sections
    step: {
        name: 'General Information',
        sections: [{
            // Each section has a name and an array of inputs
            name: 'General Info', inputs: [{
                // The ExpandableMarkdownSection is to be used for showing the setup for Google Analytics, Facebook etc
                // It can support any elements that we decide would be useful, including custom React Components
                // title: string: The title of the expanding area
                // content: string: The html (with some limitations and enhancements) to be displayed inside the expanding area
                name: 'expandingTest', type: 'ExpandableMarkdownSection', settings: {
                    title: 'Expanding Test',
                    content: '<test href=\'http://www.google.com\' text=\'Test Info\'></test>\n                            <link href=\'http://www.google.com\' text=\'test\'></link>\n                            <complete href=\'http://www.google.com\' text=\'Test Complete\'></complete>'
                }
            }, {
                // The UploadSection is pretty self-explanitory, it also has a markdown section that we can use to explain the
                // details of the files being uploaded
                // content: string: The html (with some limitations and enhancements) to be displayed next to the upload section
                // multiple: boolean: Whether the file uploader supports multiple files
                // minSize: int: The minimum size (in bytes) of files allowed
                // maxSize: int: The maximum size (in bytes) of files allowed
                // accept: string: The accepts attribute to use in the file uploader (https://www.freeformatter.com/mime-types-list.html#mime-types-list)
                name: 'uploadingTest', type: 'UploadSection', settings: {
                    content: '<test href=\'http://www.google.com\' text=\'Test Info\'></test>\n                            <link href=\'http://www.google.com\' text=\'test\'></link>\n                            <complete href=\'http://www.google.com\' text=\'Test Complete\'></complete>',
                    multiple: true,
                    accept: 'image/*'
                },
                // Normall the onBoarding is laid out in a 2 column grid, this will cause the step to span both columns 
                span: true,
                hideLabel: true
            }, {
                // placeholder: string: The placeholder used in the text box
                // validation: string, regex: Either a regex validator or a string corresponding to a predefined validator (email, phone, phone-nl)
                name: 'companyName', type: 'SingleLineTextInput', settings: {
                    placeholder: 'Text Placeholder',
                    validation: /MakeMarketingMagic/ig
                }
            }, {
                // placeholder: string: The text displayed if no option is chosen
                // options: The name (value) and text to be displayed in the dropdown
                name: 'branch', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }, {
                name: 'companySize', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }]
        }],
        // Data from previous runs of the onboarding can be returned here, this allows us to easily save and pickup where we left off
        data: {
            uploadingTest: [],
            companyName: '',
            branch: '',
            companySize: ''
        },
        // Not sure if this will be used but allows sections to be skippable
        skippable: true,
        completed: false,
        tooltip: {
            name: 'Yoeri Kayser',
            position: 'Consultant',
            imageUrl: './assets/Yoeri.png',
            message: "<test href='http://www.google.com' text='Test Info'></test><link href='http://www.google.com' text='test'></link><complete href='http://www.google.com' text='Test Complete'></complete>",
            markdown: true,
            color: 'orange'
        }
    }
}, {
    navigation: {
        info: "This is the text to explain the 1st step"
    },
    step: {
        name: 'General Information',
        sections: [{
            name: 'generalInformation', inputs: [{
                name: 'branch', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }]
        }, {
            name: 'targetAudience', inputs: [{ name: 'solutionName', type: 'SingleLineTextInput' }, {
                name: 'solutionArea', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }, {
                name: 'industryFocus', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }, {
                name: 'companySizeFocus', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }]
        }],
        data: {
            branch: '',
            solutionName: '',
            solutionArea: '',
            industryFocus: '',
            companySizeFocus: ''
        },
        skippable: false,
        completed: false,
        tooltip: {
            name: 'Yoeri Kayser',
            position: 'Consultant',
            imageUrl: './assets/Yoeri.png',
            message: 'Some text explaining the step goes here',
            color: 'orange'
        }
    }
}, {
    navigation: {
        info: "This is the text to explain the 3rd step"
    },
    step: {
        name: 'General Information',
        sections: [{
            name: 'generalInformation', inputs: [{
                name: 'branch', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }]
        }, {
            name: 'targetAudience', inputs: [{ name: 'solutionName', type: 'SingleLineTextInput' }, {
                name: 'solutionArea', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }, {
                name: 'industryFocus', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }, {
                name: 'companySizeFocus', type: 'Dropdown', settings: {
                    placeholder: 'Blah blah blah',
                    options: [{ name: 'test1', text: 'Test 1' }, { name: 'test2', text: 'Test 2' }]
                }
            }]
        }],
        data: {
            branch: '',
            solutionName: '',
            solutionArea: '',
            industryFocus: '',
            companySizeFocus: ''
        },
        skippable: false,
        completed: false,
        tooltip: {
            name: 'Yoeri Kayser',
            position: 'Consultant',
            imageUrl: './assets/Yoeri.png',
            message: 'Some text explaining the step goes here',
            color: 'orange'
        }
    }
}];

var Onboarding = exports.Onboarding = function (_Component) {
    _inherits(Onboarding, _Component);

    function Onboarding(props) {
        _classCallCheck(this, Onboarding);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.setActive = function (id) {
            var steps = _this.props.steps;

            if (_this.canGoToStep(id) && id !== _this.state.currentStep) {
                _this.setState({ currentStep: id, step: steps[id] });
            }
        };

        _this.canGoToStep = function (id) {
            var currentStep = _this.state.currentStep,
                steps = _this.props.steps,
                step = steps[currentStep];

            var tempCurrentStep = 0 + currentStep;
            if (id === currentStep) return true;
            if (step.step.completed || step.step.skippable) {
                while (tempCurrentStep < id - 1) {
                    tempCurrentStep += 1;
                    if (steps[tempCurrentStep].step.completed || steps[tempCurrentStep].step.skippable) {} else {
                        return false;
                    }
                }
                return true;
            } else {
                return id < currentStep;
            }
        };

        _this.canGoToNextStep = function () {
            var steps = _this.props.steps,
                id = _this.state.currentStep,
                currentStep = steps[id];

            if (!currentStep) {
                return false;
            }
            return (currentStep.step.skippable || currentStep.step.completed) && steps[id + 1];
        };

        _this.isFinalStep = function () {
            var steps = _this.props.steps;

            return !steps[_this.state.currentStep + 1];
        };

        _this.nextStep = function () {
            var steps = _this.props.steps;

            _this.setActive((_this.state.currentStep + 1) % steps.length);
        };

        _this.isStepComplete = function (id) {
            var steps = _this.props.steps,
                step = steps[id].step;

            return typeof Object.values(step.data).find(function (val) {
                return val.length === 0;
            }) === 'undefined';
        };

        _this.isComplete = function () {
            return _this.isStepComplete(_this.state.currentStep);
        };

        _this.onChange = function (_ref, sectionName, name) {
            var value = _ref.value,
                _ref$valid = _ref.valid,
                valid = _ref$valid === undefined ? true : _ref$valid;
            var steps = _this.props.steps,
                step = steps[_this.state.currentStep].step;

            if (valid) {
                step.data[name] = value;
                if (_this.isComplete()) {
                    step.completed = true;
                    _this.setState({ currentStepComplete: true });
                }
            }
        };

        _this.allStepsComplete = function () {
            var steps = _this.props.steps;

            if (steps.length === 0) return false;
            return steps.reduce(function (acc, val) {
                return val.step.completed && acc;
            }, true);
        };

        _this.completeOnboarding = function () {
            var steps = _this.props.steps;

            var data = steps.reduce(function (acc, value) {
                return Object.assign(acc, value.step.data);
            }, {});
        };

        _this.state = {
            currentStep: 0,
            currentStepComplete: false
        };
        return _this;
    }

    Onboarding.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.steps !== prevProps.steps) {}
    };

    Onboarding.prototype.render = function render() {
        var _this2 = this;

        var steps = this.props.steps;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(
                _StepNavigation2.default,
                null,
                steps.map(function (props, i) {
                    return (0, _preact.cloneElement)((0, _preact.h)(_Step2.default, null), _extends({}, props.navigation, { id: i, setActive: _this2.setActive, active: _this2.state.currentStep === i, complete: props.step.completed, canGoToStep: _this2.canGoToStep }));
                })
            ),
            steps.map(function (props, i) {
                return (0, _preact.cloneElement)((0, _preact.h)(_StepContent2.default, null), _extends({}, props.step, { id: i, active: _this2.state.currentStep === i, events: {
                        nextStep: _this2.nextStep,
                        canGoToNextStep: _this2.canGoToNextStep,
                        onChange: _this2.onChange,
                        isFinalStep: _this2.isFinalStep,
                        allStepsComplete: _this2.allStepsComplete,
                        completeOnboarding: _this2.completeOnboarding
                    }
                }));
            })
        );
    };

    return Onboarding;
}(_preact.Component);