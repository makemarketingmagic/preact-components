import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins'

const Input = styled.input`
    font-family: inherit;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.16);
    border-radius: 4px;
    border-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 0;
    margin-left: 4px;
    color: ${colors.text};
    width: 100%;
    font-size: 14px;
    padding: 8px 16px;

    &::-webkit-clear-button {
        display: none;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export default class DatePicker extends Component {
    handleChange = (e) => {
        return {
            value: e.target.value
        }
    }

    render() {
        const { value } = this.props

        return (
            <Input type="date" value={value} onChange={this.handleChange} />
        )
    }
}