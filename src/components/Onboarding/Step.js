import { h, Component } from 'preact';
import styled from 'styled-components';
import { colors } from '../common/scMixins';
import { textInputs, transparentize } from 'polished';

const StepContainer = styled.div`
    height: 128px;
    width: 128px;
    cursor: pointer;
    margin: 0px 8px;
    transition: background-color 250ms ease-in-out;
    background-color: ${props => (transparentize(props.active ? 0 : 1, colors.red))};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StepInfo = styled.div`
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 14px;
    transition: color 250ms ease-in-out;
    color: ${props => (props.active ? colors.white : colors.text)};
`

const IndicatorContainer = styled.div`
    height: 24px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const Indicator = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background-color: ${colors.actionIncomplete};
`

export default class Step extends Component {
    constructor(props) {
        super(props)
    }

    toggleStep = () => {
        const { setActive, id } = this.props
        setActive(id)
    }

    render() {
        const { info, active } = this.props
        return (
            <StepContainer active={active} onClick={this.toggleStep}>
                <StepInfo active={active}>{info}</StepInfo>
                <IndicatorContainer>
                    <Indicator />
                </IndicatorContainer>
            </StepContainer>
        )
    }
}