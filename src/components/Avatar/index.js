import { h, Component } from 'preact'
import style from './Avatar.less'
import classNames from 'classnames'

export default class Avatar extends Component {
    render() {
        const { imageUrl, name, color } = this.props
        return (
            <div className={classNames(style.avatar, style[`avatar--${color}`])}>
                <img class={style.avatarImage} src={imageUrl} alt={name} />
            </div>
        )
    }
}