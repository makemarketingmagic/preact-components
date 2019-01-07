import { h, Component, cloneElement } from 'preact';
import Step from './Step'
import StepNavigation from './StepNavigation';
import StepContent from './StepContent';
import Switch from '../Switch';
import ExpandableSection from './../ExpandableSection/index';
import ExpandableMarkdownSection from '../ExpandableMarkdownSection';
import UploadSection from './../UploadSection/index';

export const defaultSteps = [
    {
        navigation: {
            info: "This is the text to explain the 1st step"
        },
        step: {
            name: 'General Information',
            sections: [
                {
                    name: 'generalInformation', inputs: [
                        {
                            name: 'expandingTest', type: 'ExpandableMarkdownSection', settings: {
                                title: 'Expanding Test',
                                content: `<test href='http://www.google.com' text='Test Info'></test>
                                <link href='http://www.google.com' text='test'></link>
                                <complete href='http://www.google.com' text='Test Complete'></complete>`
                            }
                        },
                        {
                            name: 'uploadingTest', type: 'UploadSection', settings: {
                                title: 'Expanding Test',
                                content: `<test href='http://www.google.com' text='Test Info'></test>
                                <link href='http://www.google.com' text='test'></link>
                                <complete href='http://www.google.com' text='Test Complete'></complete>`,
                                multiple: true
                            }, span: true, hideLabel: true
                        },
                        {
                            name: 'companyName', type: 'SingleLineTextInput', settings: {
                                placeholder: 'Text Placeholder',
                                validation: /MakeMarketingMagic/ig
                            }
                        },
                        {
                            name: 'branch', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        },
                        {
                            name: 'companySize', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        }
                    ]
                },
                {
                    name: 'targetAudience', inputs: [
                        { name: 'solutionName', type: 'SingleLineTextInput' },
                        {
                            name: 'solutionArea', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        },
                        {
                            name: 'industryFocus', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        },
                        {
                            name: 'companySizeFocus', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        }
                    ]
                }
            ],
            data: {
                uploadingTest: [],
                companyName: '',
                branch: '',
                companySize: '',
                solutionName: '',
                solutionArea: '',
                industryFocus: '',
                companySizeFocus: ''
            },
            skippable: false,
            completed: false
        }
    },
    {
        navigation: {
            info: "This is the text to explain the 1st step"
        },
        step: {
            name: 'General Information',
            sections: [
                {
                    name: 'generalInformation', inputs: [

                        {
                            name: 'branch', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        }
                    ]
                },
                {
                    name: 'targetAudience', inputs: [
                        { name: 'solutionName', type: 'SingleLineTextInput' },
                        {
                            name: 'solutionArea', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        },
                        {
                            name: 'industryFocus', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        },
                        {
                            name: 'companySizeFocus', type: 'Dropdown', settings: {
                                placeholder: 'Blah blah blah',
                                options: [
                                    { name: 'test1', text: 'Test 1' },
                                    { name: 'test2', text: 'Test 2' }
                                ]
                            }
                        }
                    ]
                }
            ],
            data: {
                companyName: '',
                branch: '',
                companySize: '',
                solutionName: '',
                solutionArea: '',
                industryFocus: '',
                companySizeFocus: ''
            },
            skippable: false,
            completed: false
        }
    }
]
export class Onboarding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 0,
            currentStepComplete: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.steps !== prevProps.steps) {
            debugger
        }
    }

    setActive = (id) => {
        const { steps } = this.props
        if (steps[id].step.completed || steps[this.state.currentStep].step.completed || steps[this.state.currentStep].step.skippable) {
            this.setState({ currentStep: id, step: steps[id] })
        }
    }

    canGoToNextStep = () => {
        const { steps } = this.props,
            id = this.state.currentStep,
            currentStep = steps[id]
        if (!currentStep) {
            return false
        }
        return (currentStep.step.skippable || currentStep.step.completed) && steps[id + 1]
    }

    nextStep = () => {
        const { steps } = this.props
        this.setActive((this.state.currentStep + 1) % steps.length)
    }

    isComplete = () => {
        const { steps } = this.props,
            { step } = steps[this.state.currentStep],
            complete = typeof Object.values(step.data).find((val) => val.length === 0) === 'undefined'

        if (complete && !step.complete) {
            step.completed = true
        }
        this.setState({ currentStepComplete: complete })
        return complete
    }

    onChange = ({ value, valid = true }, sectionName, name) => {
        const { steps } = this.props,
            { step } = steps[this.state.currentStep]
        if (valid) {
            step.data[name] = value
        }
        this.isComplete()
    }

    canGoToStep = (id) => {

    }

    render() {
        const { steps } = this.props
        return (
            <div>
                <StepNavigation>
                    {steps.map((props, i) => {
                        return (
                            cloneElement(<Step />, { ...props.navigation, id: i, setActive: this.setActive, active: this.state.currentStep === i, complete: props.step.completed })
                        )
                    })}
                </StepNavigation>

                {steps.map((props, i) => {
                    return (
                        cloneElement(<StepContent />, {
                            ...props.step, id: i, active: this.state.currentStep === i, events: {
                                nextStep: this.nextStep, canGoToNextStep: this.canGoToNextStep, onChange: this.onChange
                            }
                        })
                    )
                })}
            </div>
        )
    }
}