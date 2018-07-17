import { h, Component } from "preact";
import style from './Value.less'

export default class Value extends Component {
    render() {
        const { children } = this.props
        return (
            <div class={style.value}>
                {children}
            </div>
        )
    }
}