import { h, Component } from 'preact'
import styled from 'styled-components';
import { colors } from '../common/scMixins';
import { transparentize } from 'polished';

const Input = styled.textarea`
    margin: 4px 0;
    color: ${colors.text};
    width: 100%;
    max-height: 240px;
    resize: none;
    max-width: 504px;
    font-size: 14px;
    outline: none;
    font-family: inherit;
    background: ${colors.white};
    box-shadow: 0 4px 8px 0 ${transparentize(0.96, colors.black)}, 0 1px 2px 0 ${transparentize(0.84, colors.black)};
    border-radius: 4px;
    border-color: transparent;

    &::placeholder {
        color: ${colors.grey};
    }
`

const InputLarge = styled(Input)`
    height: 40px;
    min-height: 40px;
    padding: 8px 16px;
`

const InputSmall = styled(Input)`
    height: 32px;
    min-height: 32px;
    padding: 6px 16px;
`

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

        onChange && onChange({
            value: e.target.value
        })
    }

    render() {
        const { placeholder = '', variant = 'large', style } = this.props,
            InputEl = {
                'large': InputLarge,
                'medium': Input,
                'small': InputSmall
            }[variant]
        return (
            <InputEl
                onInput={this.handleChange}
                ref={(el) => this.el = el}
                value={this.state.value}
                placeholder={placeholder}
                type="text"
                style={style}
            />
        )
    }

    _handleTextAreaSize = (target = this.el) => {
        if (target.style) {
            target.style.height = 0
            target.style.height = `${target.scrollHeight + 2}px`
        }
    }
}