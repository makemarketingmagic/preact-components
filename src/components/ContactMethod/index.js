import { h, Component } from 'preact'
import PhoneIcon from '../icons/PhoneIcon';
import EmailIcon from './../icons/EmailIcon';
import NavigateIcon from './../icons/NavigateIcon';
import style from './ContactMethod.less';

const icons = {
    phone: PhoneIcon,
    email: EmailIcon,
    address: NavigateIcon
}

const actions = {
    phone: (val) => `tel:${val}`,
    email: (val) => `mailto:${val}`,
    address: (val) => `https://www.google.com/maps/search/${val}`
}

export default class ContactMethod extends Component {
    render() {
        const { type, value } = this.props,
            Icon = icons[type],
            href = actions[type](value)
        return (
            <div class={style.contactMethod}>
                <a target='_system' href={href}><Icon />{value}</a>
            </div>
        )
    }
}

