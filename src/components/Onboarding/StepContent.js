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

const Inputs = {
    SingleLineTextInput,
    Dropdown,
    ExpandableMarkdownSection
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
        align-items: flex-end;
        display: flex;
        flex-direction: column;
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
    `

export default class StepContent extends Component {
    componentDidUpdate() {

    }

    componentWillReceiveProps() {

    }

    render() {
        const { active, sections, events: { nextStep, canGoToNextStep, onChange }, completed, skippable } = this.props,
            buttonText = completed ? 'Complete Step' : skippable ? 'Skip Step' : 'Complete Step'
        return (
            <StepContentEl active={active}>
                <NextStepContainer>
                    <div><Button onClick={nextStep} disabled={!canGoToNextStep()} Icon={NavigateIcon}>{buttonText}</Button></div>
                </NextStepContainer>
                {sections.map(({ name, inputs }, i) => {
                    return (
                        <StepSection name={name} inputs={inputs} key={i} onChange={onChange} />
                    )
                })}
                <NextStepContainer>
                    <div><Button onClick={nextStep} disabled={!canGoToNextStep()} Icon={NavigateIcon}>{buttonText}</Button></div>
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
                    {inputs.map(({ name, settings, type }, i) => {
                        const El = Inputs[type]
                        return (
                            <InputContainer>
                                <InputLabel>{name}</InputLabel>
                                {cloneElement(<El />, { ...settings, onChange: (update) => onChange(update, sectionName, name), id: i })}
                            </InputContainer>
                        )
                    })}
                </InputGrid>
            </div>
        )
    }
}