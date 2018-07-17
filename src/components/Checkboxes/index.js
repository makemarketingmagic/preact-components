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
                            <input
                                class={styles.input}
                                onChange={(e) => { this.handleChange(e, i) }}
                                checked={this.state.options[i].selected}
                                type='checkbox'
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