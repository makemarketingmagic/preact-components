import { h, Component } from "preact";
import styled from 'styled-components';
import { colors } from "../common/scMixins";

const ValueEl = styled.div`
    font-size: 24px;
    line-height: 32px;
    color: ${colors.text};
`

export default class Value extends Component {
    render() {
        const { children } = this.props
        return (
            <ValueEl>
                {children}
            </ValueEl>
        )
    }
}