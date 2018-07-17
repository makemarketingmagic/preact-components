import { h, Component } from 'preact';
import style from './Persona.less';
import Avatar from '../Avatar';
import Tooltip from '../Tooltip';

export default class Persona extends Component {
    render() {
        const { name, position, message, color, imageUrl } = this.props
        return (
            <div class={style.container}>
                <Avatar
                    imageUrl={imageUrl}
                    name={name}
                    color={color}
                />
                <Tooltip
                    name={name}
                    position={position}
                    message={message}
                    color={color}
                />
            </div>
        )
    }
}
