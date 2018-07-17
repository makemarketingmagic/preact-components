import { h, Component } from 'preact';
import style from './Papers.less'
export default class Papers extends Component {
    render() {
        const { children } = this.props
        return (
            <div class={style.papers}>
                <div class={style.container}>
                    {children}
                </div>
            </div>
        )
    }
}