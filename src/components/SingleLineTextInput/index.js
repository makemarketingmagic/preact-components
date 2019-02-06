import { h, Component } from 'preact'
import styles from './SingleLineTextInput.less'
import styled from 'styled-components'
import classNames from 'classnames'
import { colors } from '../common/scMixins'
import { rules } from './validation'
import TickIcon from './../icons/TickIcon';
import CrossIcon from './../icons/CrossIcon';

const Container = styled.div`
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
`
const Input = styled.input`
    color: ${colors.text};
    border: none;
    width: 100%;
    font-size: 14px;
    outline: none;
    padding: 8px 16px;
    &::placeholder {
        color: ${colors.grey};
    }
`
export default class SingleLineTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
            value: props.initialValue
        }
    }

    handleChange = (e) => {
        const { onChange, validation = /.*/ } = this.props
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

    renderValidIcon() {
        const Icon = this.state.valid ? TickIcon : CrossIcon
        return (
            <div stlye={{ marginRight: 4, marginRight: 4, display: 'flex' }}>
                <Icon width={14} height={10} color={this.state.valid ? colors.green : colors.red} />
            </div>
        )
    }

    render() {
        const { type = 'text', disabled = false, placeholder = '', iconLeft = false, Icon = null, value, validation = false } = this.props
        return (
            <Container>
                {iconLeft && <div style={{ marginLeft: 4, display: 'flex' }} ><Icon /></div>}
                <Input onChange={this.handleChange} placeholder={placeholder} type={type} value={value} disabled={disabled} />
                {(validation && value.length > 0) && this.renderValidIcon()}
            </Container>
        )
    }

    // render() {
    //     const { placeholder = '', variant = 'large', validation, showIcon, Icon = null,showValidIcon } = this.props,
    //         variantClass = {
    //             'large': styles.inputLarge,
    //             'medium': null,
    //             'small': styles.inputSmall
    //         }[variant],
    //         validationClass = validation && this.state.value ?
    //             this.state.valid ?
    //                 styles.inputValid : styles.inputInvalid
    //             : null,
    //         iconClass = showValidIcon ? styles.inputIcon : null,
    //         iconValid = showValidIcon && this.state.value ?
    //             this.state.valid ?
    //                 styles.inputIconValid : styles.inputIconInvalid
    //             : null
    //     return (
    //         <div className={classNames(iconClass, iconValid)}>
    //             <input
    //                 onInput={this.handleChange}
    //                 value={this.state.value}
    //                 placeholder={placeholder}
    //                 class={classNames(styles.input, variantClass, validationClass)}
    //                 type="text"
    //             />
    //         </div>
    //     )
    // }
}