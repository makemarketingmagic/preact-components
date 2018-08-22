import { h, Component } from 'preact'
import styles from './RadioButtons.less'

export default class RadioButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: false
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
        onChange && onChange(e.target.valeu)
    }

    render() {
        const { options = [] } = this.props
        return (
            <form>
                {options && options.map(({ label, data }) => {
                    return (
                        <label class={styles.label}>
                            <input
                                class={styles.input}
                                onChange={this.handleChange}
                                checked={this.state.selectedOption === data}
                                type='radio'
                                value={data}
                            />
                            <div class={styles.checkmark} />
                            <span class={styles.labelText}>{label}</span>
                        </label>
                    )
                }
                )}
            </form>
        )
    }
}