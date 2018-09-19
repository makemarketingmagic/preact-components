import { h, Component } from "preact";
import styled from 'styled-components';
import { colors } from "../common/scMixins";

const LabelEl = styled.div`
    font-size: 14px;
    line-height: 16px;
    color: ${colors.label};
`
export default class Label extends Component {
    render() {
        const { children } = this.props
        return (
            <LabelEl>
                {children}
            </LabelEl>
        )
    }
}