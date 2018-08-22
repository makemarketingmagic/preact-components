import { h, Component } from 'preact'
import styles from './Checkboxes.less'

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
        const { options = [] } = this.props
        return (
            <form>
                {options && options.map(({ label, data }, i) => {
                    return (
                        <label class={styles.label} key={i}>
                            <Checkbox
                                id={i}
                                checked={this.state.options[i].selected}
                                handleChange={this.handleChange}
                                data={data}
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

class Checkbox extends Component {
    handleChange = (e) => {
        const { handleChange, id } = this.props
        handleChange && id && handleChange(e, id)
    }

    render() {
        const { selected, data } = this.props
        return (
            <input
                class={styles.input}
                onChange={this.handleChange}
                checked={selected}
                type='checkbox'
                valud={data}
            />
        )
    }
}