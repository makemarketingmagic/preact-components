import { h, Component } from 'preact'
import style from './style.less'
import ContactMethod from '../ContactMethod';

export default class CompanyContact extends Component {
    render() {
        const { contactMethods } = this.props
        return (
            <div class={style.contactContainer}>
                <div class={style.contactMethods}>
                    {contactMethods.map((method) => (
                        <ContactMethod type={method.type} value={method.value} />
                    ))}
                </div>
                <div class={style.contactTip}>
                    <span>Tips voor het contact:</span> Introduceer jezelf vriendelijk, vermeld dat de prospect naar boven is gekomen met een analyse op je website, vrag of je ze ergens mee kan helpen en of een kop koffie een idee is.
            </div>
            </div>
        )
    }
}