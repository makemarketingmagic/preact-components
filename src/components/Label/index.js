import { h, Component } from "preact";
import style from './Label.less'

export default class Label extends Component {
    render() {
        const { children } = this.props
        return (
            <div class={style.label}>
                {children}
            </div>
        )
    }
}