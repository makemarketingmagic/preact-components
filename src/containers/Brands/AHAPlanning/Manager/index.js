import { h, Component } from 'preact'
import styled from 'styled-components'
import Annotator from '../../../../components/Annotator';
import { colors } from '../../../../components/common/scMixins';
import SingleLineTextInput from './../../../../components/SingleLineTextInput/index';
import { Tabs, Tab } from './../../../../components/Tabs/index';
import Markdown from 'preact-markdown';
import MockWebsite from './MockWebsite';

const FeedbackArea = styled.div`

`, VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 32px;
`, ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`, LeftColumn = styled.div`
    flex: 1;
    padding: 32px;
    border: 1px solid rgba(32, 32, 32, 0.1);
`, RightColumn = styled.div`
    flex: 1;
    border: 1px solid rgba(32, 32, 32, 0.1);
`, Section = styled.div`
    margin-bottom: 32px;
`, SectionTitle = styled.div`
    font-size: 24px;
    line-height: 32px;
    color: ${colors.text};
    margin-bottom: 16px;
`, FeedbackLabel = styled.div`
    margin-top: 14px;
    line-height: 16px;
    font-size: 12px;
`, JournalistContent = styled.div`
    line-height: 24px;
    font-size: 14px;
    color: ${colors.text};
    padding-left: 14px;
    border-left: 2px solid ${colors.text};

    & > img {
        max-width: 80%;
    }
`, Sticky = styled.div`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 16px;
`, IFrameEl = styled.iframe`
    width: 100%;
    height: 90vh;
    border: none;
`
export default class AHAManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlights: [],
            feedback: {
                general: '',
                subject: '',
                body: '',
                social: ''
            },
            all_journalists: {},
            brand: {},
            feedback: {},
            formentry: {},
            sending: {},
            templates: {}
        }
    }

    addHighlight = (highlight) => {
        let highlights = this.state.highlights
        let i = highlights.push(highlight)
        this.setState({ highlights })
        return i
    }

    updateHighlight = (comment, i) => {
        let highlights = [...this.state.highlights]
        highlights[i].comment = comment
        this.setState({ highlights })
    }

    deleteHighlight = (i) => {
        let highlights = [...this.state.highlights]
        highlights.splice(i, 1)
        this.setState({ highlights })
    }

    updateFeedback = (field, value) => {
        let { feedback } = this.state
        if (!field) {
            field = 'general'
        }
        if (typeof feedback[field] !== 'undefined') {
            feedback[field] = value
            this.setState({ feedback })
        }
    }

    componentDidMount() {
        let { AHAManagement: { all_journalists, brand, feedback, formentry, sending, templates } } = this.props
        this.setState({
            all_journalists,
            brand,
            feedback,
            formentry,
            sending,
            templates
        })
    }

    render() {
        let { templateUrl, translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { highlights, formentry, brand } = this.state
        translations.getLL = (label, fallback, values = []) => {
            let string = translations.getTranslation(label, fallback)
            const re = /(%v\d*)/ig
            let isString = true
            let result = []
            string = string.split(re)
            for (var i = 0; i < string.length; i++) {
                let stringFragment = string[i]
                let match = (/%v(\d*)/ig).exec(stringFragment)
                if (match) {
                    let index = parseInt(match[1])
                    if (values[index - 1].nodeName) {
                        isString = false
                    }
                    result.push(values[index - 1])
                } else {
                    result.push(stringFragment)
                }
            }
            return isString ? result.join('') : result
        }
        return (
            <div>
                <FeedbackArea></FeedbackArea>
                <VideoContainer>
                    <iframe class="embed-responsive-item" width="560" height="315" src={translations.getLL('AHA_FEEDBACK_VIDEO_SRC', 'https://www.youtube.com/embed/pbAn6vJsVPA?rel=0')}
                        frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </VideoContainer>
                <ContentContainer>
                    <LeftColumn>
                        <Section>
                            <SectionTitle>{translations.getLL("GENERAL_REMARKS", "General Remarks")}</SectionTitle>
                            <FeedbackSection field='' translations={translations} value={this.state.feedback.general} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_SUBJECT", "Email Subject")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailtitel}</JournalistContent>
                            <FeedbackSection field='subject' translations={translations} value={this.state.feedback.subject} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_PREHEADER", "Email Preheader")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailpreheader}</JournalistContent>
                            <FeedbackSection field='preheader' translations={translations} value={this.state.feedback.preheader} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_BODY_TEXT", "Email Body Text")}:</SectionTitle>
                            <Tabs index={0}>
                                <Tab label={translations.getLL('NEW_TEXT', 'New Text')}>
                                    <FeedbackLabel>{translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')}</FeedbackLabel>
                                    <br />
                                    <JournalistContent>
                                        <Annotator text={formentry.aha_form_entrys_emailbodytekst_raw} readonly={false} highlights={highlights} addHighlight={this.addHighlight} deleteHighlight={this.deleteHighlight} updateHighlight={this.updateHighlight} />
                                    </JournalistContent>
                                </Tab>
                                <Tab label={translations.getLL('PREVIEW', 'Preview')}>
                                    <JournalistContent>
                                        <Markdown markdown={(formentry.aha_form_entrys_emailbodytekst || '').replace('\n', '')} />
                                    </JournalistContent>
                                </Tab>
                            </Tabs>
                            <FeedbackSection field='emailBody' translations={translations} value={this.state.feedback.emailBody} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_BUTTON_TEXT", "Email Button Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailbuttontekst}</JournalistContent>
                            <FeedbackSection field='buttonText' translations={translations} value={this.state.feedback.buttonText} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("IMAGE", "Image")}:</SectionTitle>
                            <JournalistContent><img src={formentry.aha_form_entrys_lpbeeld} /></JournalistContent>
                            <FeedbackSection field='image' translations={translations} value={this.state.feedback.image} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("PAGE_TITLE", "Page Title")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_paginatitel}</JournalistContent>
                            <FeedbackSection field='pageTitle' translations={translations} value={this.state.feedback.pageTitle} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("BODY_TEXT_WEBSITE", "Body Text Website")}:</SectionTitle>
                            <Tabs index={0}>
                                <Tab label={translations.getLL('NEW_TEXT', 'New Text')}>
                                    <FeedbackLabel>{translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')}</FeedbackLabel>
                                    <br />
                                    <JournalistContent>
                                        <Annotator text={formentry.aha_form_entrys_lpbodytekst_raw} readonly={false} highlights={highlights} addHighlight={this.addHighlight} deleteHighlight={this.deleteHighlight} updateHighlight={this.updateHighlight} />
                                    </JournalistContent>
                                </Tab>
                                <Tab label={translations.getLL('PREVIEW', 'Preview')}>
                                    <JournalistContent>
                                        <Markdown markdown={(formentry.aha_form_entrys_lpbodytekst || '').replace('\n', '')} />
                                    </JournalistContent>
                                </Tab>
                            </Tabs>
                            <FeedbackSection field='pageBody' translations={translations} value={this.state.feedback.pageBody} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("META_TITLE", "Meta Title")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_lpmetatitel}</JournalistContent>
                            <FeedbackSection field='metaTitle' translations={translations} value={this.state.feedback.metaTitle} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("META_TEXT", "Meta Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_lpmetatekst}</JournalistContent>
                            <FeedbackSection field='metaText' translations={translations} value={this.state.feedback.metaText} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("SOCIAL_SHARING_TEXT", "Social Sharing Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_dtSocialMediaReminder}</JournalistContent>
                            <FeedbackSection field='social' translations={translations} value={this.state.feedback.social} />
                        </Section>
                    </LeftColumn>
                    <RightColumn>
                        <Sticky>
                            <Tabs index={0}>
                                <Tab label={translations.getLL('EMAIL', 'Email')}>
                                    <EmailTemplate ahaForm={formentry} templateUrl={templateUrl.templateUrl} />
                                </Tab>
                                <Tab label={translations.getLL('WEB', 'Web')}>
                                    <MockWebsite translations={translations} brandLogo={brand.brand_logo_image || ''} ahaForm={formentry} />
                                </Tab>
                            </Tabs>
                        </Sticky>
                    </RightColumn>
                </ContentContainer>
                {/* <Annotator highlights={highlights} addHighlight={this.addHighlight} />
                <Annotator readOnly={false} highlights={highlights} addHighlight={this.addHighlight} deleteHighlight={this.deleteHighlight} updateHighlight={this.updateHighlight} /> */}
            </div>
        )
    }
}

function FeedbackSection(props) {
    const { value, translations, onChange, field } = this.props
    return (
        <div>
            <FeedbackLabel>{translations.getLL('YOUR_FEEDBACK', 'Your Feedback')}:</FeedbackLabel>
            <SingleLineTextInput value={value} onChange={({ value }) => onChange(field, value)} />
        </div>
    )
}

class EmailTemplate extends Component {
    loaded = false
    componentDidMount() {
    }

    onLoad = (e) => {
        let document = e.target.contentDocument || e.tartget.contentWindow.document
        if (document) {
            this.loaded = true
            this.updateView(document)
        }
    }

    componentWillReceiveProps(newProps, oldProps) {
        if (this.loaded && newProps.active) setTimeout(() => this.updateView(this.frame.base.contentDocument || this.frame.base.contentWindow.document), 100)
    }

    updateView = (document) => {
        const { ahaForm } = this.props
        let emailImagePointer = document.querySelector('.lp-beeld'),
            emailTitlePointer = document.querySelector('.email-titel'),
            emailBodyTextPointer = document.querySelector('.email-bodytekst'),
            emailButtonTekstPointer = document.querySelector('.email-buttontekst'),
            imageSrc = ahaForm.aha_form_entrys_lpbeeld ? ahaForm.aha_form_entrys_lpbeeld : 'images/aha/placeholder.jpg'

        emailImagePointer.src = imageSrc
        emailTitlePointer.innerText = ahaForm.aha_form_entrys_emailtitel
        emailBodyTextPointer.innerHTML = ahaForm.aha_form_entrys_emailbodytekst
        emailButtonTekstPointer.innerText = ahaForm.aha_form_entrys_emailbuttontekst
    }

    render() {
        const { templateUrl } = this.props
        return (
            <IFrameEl onLoad={this.onLoad} ref={ref => this.frame = ref} src={templateUrl} />
        )
    }
}