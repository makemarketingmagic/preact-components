import { h, Component } from 'preact'
import styled from 'styled-components'
import { transparentize } from 'polished';
import { colors } from '../common/scMixins';

const Label = styled.label`
    display: flex;
    margin: 8px 0;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
    min-height: 32px;

    &:hover {
        ${Input}[type=radio]:not(:checked) ~ ${Checkmark} {
            &::before {
                opacity: 1;
                transform: scale(.5);
            }
        }
    }
`, LabelText = styled.span`
    padding-left: 48px;
`, Input = styled.input`
    position: absolute;
    visibility: hidden;
    &:checked ~ ${Checkmark} {
        border-color: ${colors.red};
        &::before {
            opacity: 1;
            transform: scale(1);
        }
    }
`, Checkmark = styled.div`
    height: 32px;
    width: 32px;
    background: ${colors.white};
    display: inline-block;
    border-radius: 50%;
    position: absolute;
box-shadow: 0 4px 8px 0 ${transparentize(0.96, colors.black)}, 0 1px 2px 0 ${transparentize(0.92, colors.black)};
    border: 2px solid transparent;
    box-sizing: content-box;
    transition: border-color 150ms ease-in-out;

    &:before {
        display: block;
        height: 16px;
        width: 16px;
        position: absolute;
        border-radius: 8px;
        background-color: ${colors.red};
        background-size: 100% 100%;
        background-repeat: no-repeat;
        box-shadow: 0 4px 8px 0 ${transparentize(0.96, colors.red)}, 0 1px 2px 0 ${transparentize(0.92, colors.red)};
        top: 8px;
        left: 8px;
        content: '';
        opacity: 0;
        transform: scale(0);
        transition: all 150ms ease-in-out;
    }
`

export default class RadioButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: undefined
        }
    }

    componentWillMount() {
        const { options } = this.props,
            selectedOptions = options.filter((value) => value.selected),
            selectedOption = selectedOptions.length && selectedOptions[0]
        selectedOption && this.state.selectedOption !== selectedOption.data && this.setState({ selectedOption: selectedOption.data })
    }

    handleChange = (e) => {
        const { onChange } = this.props
        if (this.state.selectedOption !== e.target.value) {
            this.setState({
                selectedOption: e.target.value
            })
        }
        onChange && onChange(e.target.value)
    }

    render() {
        const { options = [], formStyle, inputStyle = {} } = this.props
        return (
            <form style={formStyle}>
                {options && options.map(({ label, data }) => {
                    return (
                        <Label style={inputStyle}>
                            <Input
                                onChange={this.handleChange}
                                checked={this.state.selectedOption === data}
                                type='radio'
                                value={data}
                            />
                            <Checkmark />
                            <LabelText>{label}</LabelText>
                        </Label>
                    )
                }
                )}
            </form>
        )
    }
}