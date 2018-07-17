import { h, Component } from 'preact'
import styles from './MultiLineTextInput.less'
import classNames from 'classnames';

export default class MultiLineTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.initialValue
        }
    }

    componentDidMount() {
        this._handleTextAreaSize()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this._handleTextAreaSize()
        }
    }

    handleChange = (e) => {
        const { onChange } = this.props
        this.setState({
            value: e.target.value
        })

        this._handleTextAreaSize(e.target)

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
            <textarea
                onInput={this.handleChange}
                ref={(el) => this.el = el}
                value={this.state.value}
                placeholder={placeholder}
                class={classNames(styles.input, variantClass)}
                type="text"
            />
        )
    }

    _handleTextAreaSize = (target = this.el) => {
        target.style.height = 0
        target.style.height = `${target.scrollHeight + 2}px`
    }
}