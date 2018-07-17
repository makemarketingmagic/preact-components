import { h, Component } from 'preact'
import styles from './SingleLineTextInput.less'
import classNames from 'classnames';

export default class SingleLineTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.initialValue
        }
    }

    handleChange = (e) => {
        const { onChange } = this.props
        this.setState({
            value: e.target.value
        })

        onChange && onChange(e)
    }

    render() {
        const { placeholder = '', variant = 'large' } = this.props,
            variantClass = {
                'large': styles.inputLarge,
                'medium': null,
                'small': styles.inputSmall
            }[variant]
        return (
            <input
                onChange={this.onChange}
                value={this.state.value}
                placeholder={placeholder}
                class={classNames(styles.input, variantClass)}
                type="text"
            />
        )
    }
}