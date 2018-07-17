import { h, Component } from 'preact'
import styles from './Dropdown.less'
import classNames from 'classnames';

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
            variantClass = {
                'large': styles.dropdownLarge,
                'medium': null,
                'small': null
            }[variant]
        let { options = [] } = this.props

        if (placeholder) {
            options = [{ value: '', text: placeholder, selected: true, disabled: true, hidden: true }, ...options]
        }
        return (
            <select ref={(select) => { this.select = select; }} onChange={this.onChange} required={true} class={classNames(styles.dropdown, variantClass)}>
                {options.map(({ value, text, selected, disabled, hidden }, i) => (
                    <option selected={selected} disabled={disabled} value={value} key={i} hidden={hidden}>{text}</option>
                ))}
            </select>
        )
    }
}