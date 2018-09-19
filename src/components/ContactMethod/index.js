import { h, Component } from 'preact'
import PhoneIcon from '../icons/PhoneIcon';
import EmailIcon from './../icons/EmailIcon';
import NavigateIcon from './../icons/NavigateIcon';
import styled from 'styled-components'
import { media, colors } from '../common/scMixins'

const ContactMethodLink = styled.a`
    font-size: 12px;
    line-height: 16px;
    color: ${colors.red};
    margin-right: 64px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    svg {
        margin-right: 8px;
    }
    ${media.mobile`
        margin-bottom: 8px;
    `}
`

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
            <div>
                <ContactMethodLink target='_system' href={href}><Icon />{value}</ContactMethodLink>
            </div>
        )
    }
}

