import { h, Component } from 'preact';
import styled from 'styled-components';
import { colors } from '../common/scMixins';

const StepContainer = styled.div`
    height: 128px;
    width: 128px;
    background: ${colors.white};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
`

export default class Step extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: props.complete ? props.complete : 0
        }
    }

    render() {
        return (
            <StepContainer>

            </StepContainer>
        )
    }
}