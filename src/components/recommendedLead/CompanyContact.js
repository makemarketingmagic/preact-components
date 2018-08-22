import { h, Component } from 'preact'
import mixins from '../common/scMixins';
import styled from 'styled-components'
import ContactMethod from '../ContactMethod';

const ContactContainer = styled.div`
    margin-top: 16;
    padding: 32px 64px;
    background-color: #F2F8FA;
    ${mixins.media.mobile`padding: 16px 32px;`}
`

const ContactMethods = styled.div`
    display: flex;
    flex-direction: row;
    ${mixins.media.mobile`flex-direction: column;`}
`

const ContactTip = styled.div`
    margin-top: 24px;
    color: #88A5AD;
    span: {
        color: #323232;
    }

    ${mixins.media.mobile`margin-top: 12px;`}
`

export default class CompanyContact extends Component {
    render() {
        const { contactMethods } = this.props
        return (
            <ContactContainer>
                <ContactMethods>
                    {contactMethods.map((method) => (
                        <ContactMethod type={method.type} value={method.value} />
                    ))}
                </ContactMethods>
                <ContactTip>
                    <span>Tips voor het contact:</span> Introduceer jezelf vriendelijk, vermeld dat de prospect naar boven is gekomen met een analyse op je website, vrag of je ze ergens mee kan helpen en of een kop koffie een idee is.
                </ContactTip>
            </ContactContainer>
        )
    }
}