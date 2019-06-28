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
            // This first setion will include the details for the step navigation
            info: "This is the text to explain the 1st step"
        },
        // This is where each step will go, grouped into sections
        step: {
            name: 'General Information',
            sections: [
                {
                    // Each section has a name and an array of inputs
                    name: 'General Info', inputs: [
                        {
                            // The ExpandableMarkdownSection is to be used for showing the setup for Google Analytics, Facebook etc
                            // It can support any elements that we decide would be useful, including custom React Components
                            // title: string: The title of the expanding area
                            // content: string: The html (with some limitations and enhancements) to be displayed inside the expanding area
                            name: 'expandingTest', type: 'ExpandableMarkdownSection', settings: {
                                title: 'Expanding Test',
                                content: `<test href='http://www.google.com' text='Test Info'></test>
                            <link href='http://www.google.com' text='test'></link>
                            <complete href='http://www.google.com' text='Test Complete'></complete>`
                            }
                        },
                        {
                            // The UploadSection is pretty self-explanitory, it also has a markdown section that we can use to explain the
                            // details of the files being uploaded
                            // content: string: The html (with some limitations and enhancements) to be displayed next to the upload section
                            // multiple: boolean: Whether the file uploader supports multiple files
                            // minSize: int: The minimum size (in bytes) of files allowed
                            // maxSize: int: The maximum size (in bytes) of files allowed
                            // accept: string: The accepts attribute to use in the file uploader (https://www.freeformatter.com/mime-types-list.html#mime-types-list)
                            name: 'uploadingTest', type: 'UploadSection', settings: {
                                content: `<test href='http://www.google.com' text='Test Info'></test>
                            <link href='http://www.google.com' text='test'></link>
                            <complete href='http://www.google.com' text='Test Complete'></complete>`,
                                multiple: true,
                                accept: 'image/*'
                            },
                            // Normall the onBoarding is laid out in a 2 column grid, this will cause the step to span both columns 
                            span: true,
                            hideLabel: true
                        },
                        {
                            // placeholder: string: The placeholder used in the text box
                            // validation: string, regex: Either a regex validator or a string corresponding to a predefined validator (email, phone, phone-nl)
                            name: 'companyName', type: 'SingleLineTextInput', settings: {
                                placeholder: 'Text Placeholder',
                                validation: /MakeMarketingMagic/ig
                            }
                        },
                        {
                            // placeholder: string: The text displayed if no option is chosen
                            // options: The name (value) and text to be displayed in the dropdown
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
                }
            ],
            // Data from previous runs of the onboarding can be returned here, this allows us to easily save and pickup where we left off
            data: {
                uploadingTest: [],
                companyName: '',
                branch: '',
                companySize: '',
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
            },
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
            },
        }
    },
    {
        navigation: {
            info: "This is the text to explain the 3rd step"
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
            },
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
            
        }
    }

    setActive = (id) => {
        const { steps } = this.props
        if (this.canGoToStep(id) && id !== this.state.currentStep) {
            this.setState({ currentStep: id, step: steps[id] })
        }
    }

    canGoToStep = (id) => {
        const { currentStep } = this.state,
            { steps } = this.props,
            step = steps[currentStep]
        let tempCurrentStep = 0 + currentStep
        if (id === currentStep) return true
        if (step.step.completed || step.step.skippable) {
            while (tempCurrentStep < (id - 1)) {
                tempCurrentStep += 1
                if (steps[tempCurrentStep].step.completed || steps[tempCurrentStep].step.skippable) {

                } else {
                    return false;
                }
            }
            return true
        } else {
            return id < currentStep
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

    isFinalStep = () => {
        const { steps } = this.props
        return !steps[this.state.currentStep + 1]
    }

    nextStep = () => {
        const { steps } = this.props
        this.setActive((this.state.currentStep + 1) % steps.length)
    }

    isStepComplete = (id) => {
        const { steps } = this.props,
            { step } = steps[id]
        return typeof Object.values(step.data).find((val) => val.length === 0) === 'undefined'
    }

    isComplete = () => {
        return this.isStepComplete(this.state.currentStep)
    }

    onChange = ({ value, valid = true }, sectionName, name) => {
        const { steps } = this.props,
            { step } = steps[this.state.currentStep]
        if (valid) {
            step.data[name] = value
            if (this.isComplete()) {
                step.completed = true
                this.setState({ currentStepComplete: true })
            }
        }
    }

    allStepsComplete = () => {
        const { steps } = this.props
        if (steps.length === 0) return false
        return steps.reduce((acc, val) => val.step.completed && acc, true)
    }

    completeOnboarding = () => {
        const { steps } = this.props
        const data = steps.reduce((acc, value) => Object.assign(acc, value.step.data), {})
    }


    render() {
        const { steps } = this.props
        return (
            <div>
                <StepNavigation>
                    {steps.map((props, i) => {
                        return (
                            cloneElement(<Step />, { ...props.navigation, id: i, setActive: this.setActive, active: this.state.currentStep === i, complete: props.step.completed, canGoToStep: this.canGoToStep })
                        )
                    })}
                </StepNavigation>

                {steps.map((props, i) => {
                    return (
                        cloneElement(<StepContent />, {
                            ...props.step, id: i, active: this.state.currentStep === i, events: {
                                nextStep: this.nextStep,
                                canGoToNextStep: this.canGoToNextStep,
                                onChange: this.onChange,
                                isFinalStep: this.isFinalStep,
                                allStepsComplete: this.allStepsComplete,
                                completeOnboarding: this.completeOnboarding
                            }
                        })
                    )
                })}
            </div>
        )
    }
}