import { h, Component } from 'preact'
import styled from 'styled-components'
import { media, colors } from '../common/scMixins'
import dropdownArrowClosed from '../../assets/DropdownArrowClosed.png'
import dropdownArrowOpen from '../../assets/dropdownArrowOpen.png'
import { transparentize } from 'polished';

const BaseDropdown = styled.div`
    width: 100%;
    max-width: 504px;
    font-family: inherit;
    padding: 8px 32px 8px 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 14px;
    background-image: url(${dropdownArrowClosed});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    border-radius: 4px;
    border-color: transparent;
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 ${transparentize(0.96, colors.black)}, 0 1px 2px 0 ${transparentize(0.84, colors.black)};
    border-radius: 4px;
    outline: none;

    &:focus {
        background-image: url(${dropdownArrowOpen});
    }

    &:invalid {
        color: ${colors.grey};
    }

    option:not(:checked) {
        color: ${colors.text};
    }
`
const DropdownLarge = styled(BaseDropdown)`
    height: 40px;
`
export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
    }

    onChange = (e) => {
        const { onChange } = this.props
        e.target.blur()
        this.setState({
            selected: e.target.value
        })
        onChange && onChange(e)
    }

    render() {
        const { variant = 'large', placeholder = false } = this.props,
            DropdownEl = {
                'large': DropdownLarge,
                'medium': BaseDropdown,
                'small': BaseDropdown
            }[variant]
        let { options = [] } = this.props

        if (placeholder) {
            options = [{ value: '', text: placeholder, selected: true, disabled: true, hidden: true }, ...options]
        }
        return (
            <DropdownEl ref={(select) => { this.select = select; }} onChange={this.onChange} required={true}>
                {options.map(({ value, text, selected, disabled, hidden }, i) => (
                    <option selected={selected} disabled={disabled} value={value} key={i} hidden={hidden}>{text}</option>
                ))}
            </DropdownEl>
        )
    }
}