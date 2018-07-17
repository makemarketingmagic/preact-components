import { h, Component } from 'preact'
import styles from './SingleLineTextInput.less'
import classNames from 'classnames'
import { rules } from './validation'

export default class SingleLineTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
            value: props.initialValue
        }
    }

    handleChange = (e) => {
        const { onChange, validation } = this.props
        let update = {
            value: e.target.value
        }
        if (validation instanceof RegExp) {
            update.valid = new RegExp(validation).test(e.target.value)
        } else if (typeof validation === 'string') {
            update.valid = rules[validation] ? new RegExp(rules[validation]).test(e.target.value) : false
        }
        this.setState(update)

        onChange && onChange(update)
    }

    render() {
        const { placeholder = '', variant = 'large', validation, showIcon } = this.props,
            variantClass = {
                'large': styles.inputLarge,
                'medium': null,
                'small': styles.inputSmall
            }[variant],
            validationClass = validation && this.state.value ?
                this.state.valid ?
                    styles.inputValid : styles.inputInvalid
                : null,
            iconClass = showIcon ? styles.inputIcon : null,
            iconValid = showIcon && this.state.value ?
                this.state.valid ?
                    styles.inputIconValid : styles.inputIconInvalid
                : null
        return (
            <div className={classNames(iconClass, iconValid)}>
                <input
                    onInput={this.handleChange}
                    value={this.state.value}
                    placeholder={placeholder}
                    class={classNames(styles.input, variantClass, validationClass)}
                    type="text"
                />
            </div>
        )
    }
}