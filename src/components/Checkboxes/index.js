import { h, Component } from 'preact'
import styled from 'styled-components'
import { media, typography, colors } from '../common/scMixins'
import { transparentize } from 'polished'
import check from './Check.svg'

const Checkmark = styled.div`
    height: 32px;
    width: 32px;
    background: ${colors.white};
    display: inline-block;
    border-radius: 15%;
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
        background-image: url(${check});
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
`,
    Label = styled.label`
        display: flex;
        margin: 8px 0;
        flex-direction: row;
        align-items: center;
        position: relative;
        cursor: pointer;
        min-height: 32px;

        &:hover {
            ${Input}[type=checkbox]:not(:checked) ~ ${Checkmark} {
                &::before {
                    opacity: 1;
                    transform: scale(.5);
                }
            }
            ${Input}[type=checkbox]:checked ~ ${Checkmark} {
                &::before {
                    opacity: 1;
                    transform: scale(.75);
                }
            }
        }
`,
    CheckboxLabelText = styled(typography.LabelDark)`
        padding-left: 48px;
`,
    Input = styled.input`
        position: absolute;
        visibility: hidden;

        &[type=checkbox]:checked ~ ${Checkmark} {
            &::before {
                opacity: 1;
                transform: scale(1);
            }
        }
    `
export default class Checkboxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
    }

    componentWillMount() {
        const { options } = this.props
        this.state.options !== options && this.setState({ options })
    }

    handleChange = (e, i) => {
        const { onChange } = this.props
        let options = this.state.options
        options[i].selected = !options[i].selected
        this.setState({
            options
        })
        onChange && onChange(options)
    }

    render() {
        const { options = [] } = this.state
        const { formStyle } = this.props
        return (
            <form style={formStyle}>
                {options && options.map(({ selected, label, data }, i) => {
                    return (
                        <Label key={i}>
                            <Checkbox
                                id={i}
                                selected={selected}
                                handleChange={this.handleChange}
                                data={data}
                            />
                            <Checkmark />
                            <CheckboxLabelText>{label}</CheckboxLabelText>
                        </Label>
                    )
                }
                )}
            </form>
        )
    }
}

class Checkbox extends Component {
    handleChange = (e) => {
        const { handleChange, id } = this.props
        handleChange && id >= 0 && handleChange(e, id)
    }

    render() {
        const { selected, data } = this.props
        return (
            <Input
                onChange={this.handleChange}
                checked={selected}
                type='checkbox'
                value={data}
            />
        )
    }
}