import { h, Component } from 'preact'
import SingleLineTextInput from '../../../components/SingleLineTextInput';
import Checkboxes from './../../../components/Checkboxes/index';
import Label from './../../../components/Label/index';
import Helmet from "preact-helmet";

export default class EstablishConnections extends Component {
    render() {
        const {
            components: {
                StepContents,
                Explaination,
                StepForm,
                Group,
                IFrameContainer,
                SectionTitle
            },
            data: {
                senderName,
                senderEmail,
                wbFullName,
                wbEmail,
                wbPhone,
                cmsApproved,
                googleAnalyticsApproved,
                linkedInApproved,
                dnsApproved,
                twitterAccess,
                facebookAccess,
                googlePlusAccess
            },
            updateField,
            translations,
        } = this.props

        return (
            <StepContents>
                <Helmet title={`${translations.getLL('ONBOARDING', 'Onboarding')} | ${translations.getLL('ESTABLISH_CONNECTIONS', 'Establish Connections')} | WOO`} />
                <IFrameContainer>
                    <iframe class="embed-responsive-item" src={translations.getLL('ONBOARDING_VIDEO_SRC_CONNECTIONS', 'https://www.youtube.com/embed/OvnX9Xm7F0Q?rel=0')}
                        frameborder="0" allowfullscreen />
                </IFrameContainer>

                <Explaination></Explaination>

                <StepForm>
                    <SectionTitle>{translations.getLL('EMAIL_DATA', 'Email Details')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL('YOUR_SENDING_EMAIL', 'E-mail adres waar vanuit we jouw AHAs kunnen gaan versturen.')}</Label>
                        <SingleLineTextInput onChange={({ value }) => updateField('connections', 'senderName', value)} placeholder={translations.getLL('SENDER_NAME', 'Sender Name')} value={senderName} onChange={({ value }) => updateField('connections', 'senderName', value)} />
                        <SingleLineTextInput placeholder={translations.getLL('SENDER_EMAIL', 'Sender Email')} onChange={({ value }) => updateField('connections', 'senderEmail', value)} value={senderEmail} onChange={({ value }) => updateField('connections', 'senderEmail', value)} />
                    </Group>
                    <SectionTitle>{translations.getLL('WEB_BUILDER', 'Web Builder')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL('YOUR_WEB_BUILDER_CONTACT', 'Contact details of your web builder')}</Label>
                        <SingleLineTextInput placeholder={translations.getLL('FULL_NAME', 'Full Name')} value={wbFullName} onChange={({ value }) => updateField('connections', 'wbFullName', value)} />
                        <SingleLineTextInput placeholder={translations.getLL('EMAIL_ADDRESS', 'Email Address')} value={wbEmail} onChange={({ value }) => updateField('connections', 'wbEmail', value)} />
                        <SingleLineTextInput placeholder={translations.getLL('PHONE_NUMBER', 'Phone Number')} value={wbPhone} onChange={({ value }) => updateField('connections', 'wbPhone', value)} />
                    </Group>
                    <SectionTitle>{translations.getLL('ALLOWING_ACCESS', 'Allow Access')}</SectionTitle>
                    <Label>{translations.getLL('ENSURE_TECHNICAL_ACTS_COL', 'Provide a couple of technical actions')}</Label>
                    <a target="_blank" download href={translations.getLL('ON_BOARDING_DOCUMENTATION_PDF_FILE', '')}>
                        <Label>{translations.getLL('DOWNLOAD_INSTRUCTIONS', 'Download instructions')}</Label>
                    </a>
                    <Group>
                        <Checkboxes
                            options={[
                                { label: translations.getLL('ACCESS_GRANTED_TO_CMS', 'Access granted to CMS'), data: true, selected: cmsApproved }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'cmsApproved', selected)
                            }}
                        />
                        <Checkboxes
                            options={[
                                { label: translations.getLL('ACCESS_GRANTED_TO_GOOGLE_ANALYTICS', `Access granted to [Google Analytics](https://analytics.google.com/)`), data: true, selected: googleAnalyticsApproved }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'googleAnalyticsApproved', selected)
                            }}
                        />
                        <Checkboxes
                            options={[
                                { label: translations.getLLMarked('ACCESS_GRANTED_TO_LINKEDIN', `Access granted to [LinkedIn](https://www.linkedin.com/)`), data: true, selected: linkedInApproved }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'linkedInApproved', selected)
                            }}
                        />
                        <Checkboxes
                            options={[
                                { label: translations.getLL('ADJUST_SPF_RECORD', 'Change in SPF-record has been submitted in DNS'), data: true, selected: dnsApproved }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'dnsApproved', selected)
                            }}
                        />
                    </Group>
                    <SectionTitle>{translations.getLL('SOCIAL_MEDIA', 'Social Media')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL('ACCESS_TO_OTHER_SOCIAL_MEDIA', 'Access to Social Media accounts other than LinkedIn')}</Label>
                        <Checkboxes
                            options={[
                                { label: translations.getLLMarked('ACCESS_GRANTED_TO_TWITTER', `Access granted to [Twitter](https://twitter.com/)`), data: true, selected: twitterAccess }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'twitterAccess', selected)
                            }}
                        />
                        <Checkboxes
                            options={[
                                { label: translations.getLL('ACCESS_GRANTED_TO_FACEBOOK', `Access granted to [Facebook](https://www.facebook.com/)`), data: true, selected: facebookAccess }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'facebookAccess', selected)
                            }}
                        />
                        <Checkboxes
                            options={[
                                { label: translations.getLL('ACCESS_GRANTED_TO_GOOGLE_PLUS', `Access granted to [Google+](https://plus.google.com)`), data: true, selected: googlePlusAccess }
                            ]}
                            onChange={([{ selected }]) => {
                                updateField('connections', 'googlePlusAccess', selected)
                            }}
                        />
                    </Group>
                </StepForm>
            </StepContents>
        )
    }
}