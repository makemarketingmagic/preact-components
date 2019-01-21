import { h, Component, cloneElement } from 'preact'
import styled from 'styled-components';
import Button from './../Button/index';
import NavigateIcon from './../icons/NavigateIcon';
import BasicInformation from './Steps/BasicInformation';
import SingleLineTextInput from './../SingleLineTextInput/index';
import Dropdown from './../Dropdown/index';
import { colors } from '../common/scMixins';
import Label from './../Label/index';
import ExpandableMarkdownSection from './../ExpandableMarkdownSection/index';
import UploadSection from './../UploadSection/index';
import TickIcon from './../icons/TickIcon';
import Persona from '../Persona';

const Inputs = {
    SingleLineTextInput,
    Dropdown,
    ExpandableMarkdownSection,
    UploadSection
}

const StepContentEl = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    transition: all 250ms ease-in-out;
    height: ${props => props.active ? 'auto' : 0};
    transform: scaleY(${props => props.active ? 1 : 0});
`,
    NextStepContainer = styled.div`
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin: 16px 0;
        display: flex;
        flex-direction: row;
    `,
    StepSectionTitle = styled.div`
        font-style: normal;
        font-weight: normal;
        line-height: 32px;
        font-size: 24px;
        color: ${colors.text};
    `,
    InputGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
    `,
    InputLabel = styled(Label)`
        margin-bottom: 4px;
    `,
    InputContainer = styled.div`
        margin: 16px 8px;
        grid-column: ${props => props.span ? '1/3' : 'span 1'};
    `

export default class StepContent extends Component {
    componentDidUpdate() {

    }

    componentWillReceiveProps() {

    }

    render() {
        const { active, sections, tooltip, events: { nextStep, canGoToNextStep, onChange, isFinalStep, allStepsComplete, completeOnboarding }, completed, skippable } = this.props,
            buttonText = completed ? 'Complete Step' : skippable ? 'Skip Step' : 'Complete Step'
        return (
            <StepContentEl active={active}>
                <NextStepContainer>
                    <div>
                        <Persona
                            markdown={tooltip.markdown}
                            color={tooltip.color}
                            imageUrl={tooltip.imageUrl ? tooltip.imageUrl : 'defaultTooltipImage.png'}
                            name={tooltip.name ? tooltip.name : ''}
                            position={tooltip.position ? tooltip.position : ''}
                            message={tooltip.message ? tooltip.message : ''}
                        />
                    </div>
                    {isFinalStep() ?
                        (<div><Button onClick={completeOnboarding} disabled={!allStepsComplete()} Icon={TickIcon}>Complete Onboarding</Button></div>)
                        : (<div><Button onClick={nextStep} disabled={!canGoToNextStep()} Icon={NavigateIcon}>{buttonText}</Button></div>)
                    }

                </NextStepContainer>
                {sections.map(({ name, inputs }, i) => {
                    return (
                        <StepSection name={name} inputs={inputs} key={i} onChange={onChange} />
                    )
                })}
                <NextStepContainer>
                    <div></div>
                    {isFinalStep() ?
                        (<div><Button onClick={completeOnboarding} disabled={!allStepsComplete()} Icon={TickIcon}>Complete Onboarding</Button></div>)
                        : (<div><Button onClick={nextStep} disabled={!canGoToNextStep()} Icon={NavigateIcon}>{buttonText}</Button></div>)
                    }
                </NextStepContainer>
            </StepContentEl>
        )
    }
}

export class StepSection extends Component {
    render() {
        const { inputs, onChange } = this.props,
            sectionName = this.props.name
        return (
            <div>
                <StepSectionTitle>{sectionName}</StepSectionTitle>
                <InputGrid>
                    {inputs.map(({ name, settings, type, span = false, hideLabel = false }, i) => {
                        const El = Inputs[type]
                        return (
                            <InputContainer span={span}>
                                {!hideLabel && <InputLabel>{name}</InputLabel>}
                                {cloneElement(<El />, { ...settings, onChange: (update) => onChange(update, sectionName, name), id: i })}
                            </InputContainer>
                        )
                    })}
                </InputGrid>
            </div>
        )
    }
}