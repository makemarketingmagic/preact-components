import { h, Component } from 'preact'
import styled from 'styled-components'
import Annotator from '../../../../components/Annotator';
import { colors } from '../../../../components/common/scMixins';
import SingleLineTextInput from './../../../../components/SingleLineTextInput/index';
import { Tabs, Tab } from './../../../../components/Tabs/index';
import Markdown from 'preact-markdown';
import MockWebsite from './MockWebsite';
import Button from '../../../../components/Button';
import marked from 'marked'
import { Modal } from './../../../../components/Modal/index';

/* 
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
*/

const FeedbackAreaEl = styled.div`
    padding: 15px;
    margin-bottom: 20px;

    background-color: ${({ level }) => {
        switch (level) {
            case 1: return '#f2dede'
            case 2: return '#fcf8e3'
        }
    }};
    color: ${({ level }) => {
        switch (level) {
            case 1: return '#a94442'
            case 2: return '#8a6d3b'
        }
    }};
    border-color: ${({ level }) => {
        switch (level) {
            case 1: return '#ebccd1'
            case 2: return '#faebcc'
        }
    }};
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
`, ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 16px 0;

    & > button {
        margin: 4px;
    }
`
export default class AHAManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            lpHighlights: [],
            emailHighlights: [],
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
            templates: {},
            templateUrl: {},
            flags: {
                outOfSync: false,
                notReady: false,
                feedbackAlreadyGiven: false
            },
            cancelReason: '',
            cancelAhaModal: false,
            submitAhaModal: false,
            approveAhaModal: false
        }
    }

    setModal = (type, value) => {
        let update = {}
        if (typeof this.state[`${type}AhaModal`] === 'boolean') {
            update[`${type}AhaModal`] = value
        }
        this.setState(update)
    }

    setReason = (value) => {
        this.setState({ cancelReason: value })
    }

    cancelAha = async () => {
        const { events: { cancelAha } } = this.props
        if (cancelAha && this.state.cancelReason !== '') {
            let result = await cancelAha(this.state.cancelReason)
            return result
        }
    }

    approveAha = async () => {
        const { events: { approveAha } } = this.props
        if (approveAha) {
            let result = await approveAha()
            return result
        }
    }

    submitFeedback = async () => {
        const { events: { submitFeedback } } = this.props,
            { feedback, sending: { aha_sending_feedbackround = '' } } = this.state
        if (submitFeedback) {
            let result = await submitFeedback(feedback, aha_sending_feedbackround)
            return result
        }
    }

    renderTabs = (translations) => {
        const { templateUrl, emailHighlights, lpHighlights, formentry, brand } = this.state
        let tabs = []
        if (formentry) {
            tabs.push(<Tab label={translations.getLL('WEB', 'Web')}>
                <MockWebsite translations={translations} brandLogo={brand.brand_logo_image || ''} ahaForm={formentry} />
            </Tab>)
        }
        if (formentry && templateUrl && templateUrl.iframeLink) {
            tabs.push(<Tab label={translations.getLL('EMAIL', 'Email')}>
                <EmailTemplate ahaForm={formentry} iframeContent={templateUrl ? templateUrl.iframeContent : ''} templateUrl={templateUrl ? templateUrl.iframeLink : ''} />
            </Tab>)
        }
        return tabs
    }

    isSynchronised = async () => {
        let { sending } = await this.loadAHADetails(),
            prevAha = this.state.aha
        if (sending.aha_sending_submitted_more_than_once === '1') {
            if (!this.state.flags.outOfSync) this.setState({ flags: { ...this.state.flags, outOfSync: true } })
        }
    }

    synchronise = async () => {
        const { events: { syncHighlighterFeedback } } = this.props
        let result = await syncHighlighterFeedback(this.state.highlights[0] ? this.state.highlights[0].round || 1 : 1)
        let details = await this.loadAHADetails()
        if (details.sending.aha_sending_submitted_more_than_once === '0') {
            this.setState({ flags: { ...this.state.flags, outOfSync: false } })
        }
        await this.getAHADetails()
    }

    addHighlight = (type) => (highlight) => {
        if (highlight.start === highlight.end || highlight.content === '') return
        let highlightType = `${type}Highlights`,
            update = {},
            highlights = this.state[highlightType],
            i = highlights.push(highlight)
        update[highlightType] = highlights
        this.setState(update)
        return i
    }

    updateHighlight = (type) => (comment, i) => {
        let highlightType = `${type}Highlights`,
            update = {},
            highlights = this.state[highlightType]
        highlights[i].comment = comment
        update[highlightType] = highlights
        this.setState(update)
    }

    deleteHighlight = (type) => (i) => {
        let highlightType = `${type}Highlights`,
            update = {},
            highlights = this.state[highlightType]
        highlights.splice(i, 1)
        update[highlightType] = highlights
        this.setState(update)
    }

    updateFeedback = (field, value) => {
        let { feedback } = this.state
        if (!field) {
            field = 'general'
        }
        feedback[field] = value
        this.setState({ feedback })
    }

    componentDidMount() {
        // let { AHAManagement: { all_journalists, brand, feedback, formentry, sending, templates } } = this.props
        // this.setState({
        //     all_journalists,
        //     brand,
        //     feedback,
        //     formentry,
        //     sending,
        //     templates
        // })
        this.getAHADetails()
        this.isSynchronised()
        clearInterval(this.syncInterval)
        this.syncInterval = setInterval(() => {
            this.isSynchronised()
        }, 10000)
    }

    loadAHADetails = async () => {
        const { events: { getAHADetails } } = this.props
        let details = getAHADetails ? await getAHADetails() : {}
        return details
    }

    loadAHAManagement = async () => {
        const { events: { getAHAManagement } } = this.props
        let details = getAHAManagement ? await getAHAManagement() : {}
        return {
            aha: details.aha || {},
            formentry: details.ahaForm || {},
            feedback: details.feedback || {},
            brand: details.brand || {},
            all_journalists: details.all_journalists || {}
        }
    }

    getAHADetails = () => {
        // getAHADetails: this.getAHADetails,
        //     getHighlighterFeedback: this.getHighlighterFeedback,
        //     loadEmailTemplate: this.loadEmailTemplate
        const { SENDING_STATES } = this.props
        let notReady = false,
            feedbackAlreadyGiven = false
        this.setState({ loading: true }, async () => {
            const { events: { getHighlighterFeedback, loadEmailTemplate } } = this.props
            let details = await this.loadAHAManagement()
            if (details.aha.aha_sending_status === SENDING_STATES.ACTIVE ||
                details.aha.aha_sending_status === SENDING_STATES.INACTIVE) {
                notReady = true
            } else if (details.aha.aha_sending_status === SENDING_STATES.FEEDBACK) {
                feedbackAlreadyGiven = true
            }
            let highlights = getHighlighterFeedback ? await getHighlighterFeedback() : {}
            let templates = loadEmailTemplate ? await loadEmailTemplate() : {}
            if (!details.feedback) details.feedback = {}
            this.setState({
                loading: false,
                ...details,
                highlights,
                templateUrl: templates,
                flags: {
                    ...this.state.flags,
                    notReady,
                    feedbackAlreadyGiven
                }
            })
        })
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { loading, templateUrl, emailHighlights, lpHighlights, formentry, brand, flags } = this.state
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
        translations.getLLMarked = function (label, fallback, values = []) {
            let translation = translations.getLL(label, fallback, values)
            if (typeof translation === 'string') {
                return <span dangerouslySetInnerHTML={{ __html: marked(translation, { sanitize: true }) }} />
            }
            return translation
        };
        return loading ? (<div></div>) : (
            <div>
                <div>
                    {Object.entries(flags).map(([key, value]) => {
                        return value ? <FeedbackArea
                            type={key}
                            translations={translations}
                            events={{
                                synchronise: this.synchronise
                            }}
                        /> : null
                    })}
                </div>
                <VideoContainer>
                    <iframe class="embed-responsive-item" width="560" height="315" src={translations.getLL('AHA_FEEDBACK_VIDEO_SRC', 'https://www.youtube.com/embed/pbAn6vJsVPA?rel=0')}
                        frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </VideoContainer>
                <ContentContainer>
                    <LeftColumn>
                        <Section>
                            <SectionTitle>{translations.getLL("GENERAL_REMARKS", "General Remarks")}</SectionTitle>
                            <FeedbackSection onChange={(val) => this.updateFeedback('', val)} field='' translations={translations} value={this.state.feedback.general || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_SUBJECT", "Email Subject")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailtitel}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('subject', val)} field='subject' translations={translations} value={this.state.feedback.subject || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_PREHEADER", "Email Preheader")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailpreheader}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('preheader', val)} field='preheader' translations={translations} value={this.state.feedback.preheader || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_BODY_TEXT", "Email Body Text")}:</SectionTitle>

                            <FeedbackLabel>{translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')}</FeedbackLabel>
                            <br />
                            <JournalistContent>
                                <Annotator text={formentry.aha_form_entrys_emailbodytekst_raw} readOnly={false} highlights={emailHighlights} addHighlight={this.addHighlight('email')} deleteHighlight={this.deleteHighlight('email')} updateHighlight={this.updateHighlight('email')} />
                            </JournalistContent>

                            <FeedbackSection onChange={(val) => this.updateFeedback('emailBody', val)} field='emailBody' translations={translations} value={this.state.feedback.emailBody || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("EMAIL_BUTTON_TEXT", "Email Button Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_emailbuttontekst}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('buttonText', val)} field='buttonText' translations={translations} value={this.state.feedback.buttonText || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("IMAGE", "Image")}:</SectionTitle>
                            <JournalistContent><img src={formentry.aha_form_entrys_lpbeeld} /></JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('image', val)} field='image' translations={translations} value={this.state.feedback.image || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("PAGE_TITLE", "Page Title")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_paginatitel}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('pageTitle', val)} field='pageTitle' translations={translations} value={this.state.feedback.pageTitle || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("BODY_TEXT_WEBSITE", "Body Text Website")}:</SectionTitle>
                            <FeedbackLabel>{translations.getLL('SELECT_TEXT_COMMENT', 'Select text to add a comment')}</FeedbackLabel>
                            <br />
                            <JournalistContent>
                                <Annotator text={formentry.aha_form_entrys_lpbodytekst_raw} readOnly={false} highlights={lpHighlights} addHighlight={this.addHighlight('lp')} deleteHighlight={this.deleteHighlight('lp')} updateHighlight={this.updateHighlight('lp')} />
                            </JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('pageBody', val)} field='pageBody' translations={translations} value={this.state.feedback.pageBody || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("META_TITLE", "Meta Title")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_lpmetatitel}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('metaTitle', val)} field='metaTitle' translations={translations} value={this.state.feedback.metaTitle || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("META_TEXT", "Meta Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_lpmetatekst}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('metaText', val)} field='metaText' translations={translations} value={this.state.feedback.metaText || ''} />
                        </Section>
                        <Section>
                            <SectionTitle>{translations.getLL("SOCIAL_SHARING_TEXT", "Social Sharing Text")}:</SectionTitle>
                            <JournalistContent>{formentry.aha_form_entrys_dtSocialMediaReminder}</JournalistContent>
                            <FeedbackSection onChange={(val) => this.updateFeedback('social', val)} field='social' translations={translations} value={this.state.feedback.social || ''} />
                        </Section>
                    </LeftColumn>
                    <RightColumn>
                        <Sticky>
                            <Tabs index={0}>
                                {this.renderTabs(translations)}
                            </Tabs>
                        </Sticky>
                    </RightColumn>
                </ContentContainer>
                <ButtonContainer>
                    <Button
                        secondary={true}
                        onClick={() => this.setModal('submit', true)}
                    >{translations.getLL('SUBMIT_FEEDBACK', 'Submit AHAH Feedback')}</Button>
                    <Button
                        secondary={true}
                        onClick={() => this.setModal('approve', true)}
                    >{translations.getLL('APPROVE_SENDING', 'Approve AHA')}</Button>
                    <Button
                        onClick={() => this.setModal('cancel', true)}
                    >{translations.getLL('CANCEL_SENDING_AHA', 'Cancel AHA')}</Button>
                </ButtonContainer>
                <CancelAHAModal
                    open={this.state.cancelAhaModal}
                    onClose={() => this.setModal('cancel', false)}
                    onDone={() => this.cancelAha()}
                    translations={translations}
                    reason={this.state.cancelReason}
                    changeReason={({ value }) => this.setReason(value)}
                />
                <ApproveAHAModal
                    open={this.state.approveAhaModal}
                    onClose={() => this.setModal('approve', false)}
                    onDone={() => this.approveAha()}
                    translations={translations}
                />
                <SubmitFeedbackModal
                    open={this.state.submitAhaModal}
                    onClose={() => this.setModal('submit', false)}
                    onDone={() => this.submitFeedback()}
                    translations={translations}
                    sendingName={this.state.aha_sending_name}
                    journalistFirstName={this.state.all_journalists.first_name}
                    journalistLastName={this.state.all_journalists.last_name}
                />
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

function FeedbackArea(props) {
    const { translations, type } = props,
        flags = {
            notReady: {
                content: (
                    <div>
                        {translations.getLLMarked('JOURNALIST_STILL_WRITING_ALERT', '**Let op!** De journalist is nog bezig met het schrijven van deze AHA. Je kunt daarom nog geen feedback geven.')}
                    </div>
                ),
                level: 2
            },
            outOfSync: {
                content: (
                    <div>
                        <div>
                            {translations.getLLMarked('WATCH_OUT_AHA_ALREADY_SUBMITTED', '**Let op!** De journalist heeft zojuist een nieuwe versie van deze AHA ingeleverd. Daarom komt jouw huidige feedback te vervallen.')}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                            <Button onClick={props.events.synchronise}>
                                {translations.getLL('FETCH_NEW_VERSION', 'Fetch New Version')}
                            </Button>
                        </div>
                    </div>
                ),
                level: 1
            },
            feedbackAlreadyGiven: {
                content: (
                    <div>
                        {translations.getLLMarked('ALREADY_GAVE_FEEDBACK_ALERT', '**Let op!** Je hebt al feedback gegeven op deze AHA. Je kunt weer feedback geven als de journalist jouw feedback heeft verwerkt.')}
                    </div>
                )
            }
        },
        flag = flags[type]

    return flag ? (
        <FeedbackAreaEl level={flag.level}>
            {flag.content}
        </FeedbackAreaEl>
    ) : null
}

class EmailTemplate extends Component {
    loaded = false
    componentDidMount() {
    }

    onLoad = (e) => {
        let document = e.target.contentDocument || e.target.contentWindow ? e.target.contentWindow.document : false
        if (document) {
            this.loaded = true
            this.updateView(document)
        }
    }

    componentWillReceiveProps(newProps, oldProps) {
        if (this.loaded && newProps.active) setTimeout(() => this.updateView(this.frame.base.contentDocument || this.frame.base.contentWindow.document), 100)
    }

    updateView = (document) => {
        if (this.frame.base) this.frame.base.srcdoc = this.props.iframeContent
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
        const { templateUrl, iframeContent } = this.props
        return (
            <IFrameEl onLoad={this.onLoad} ref={ref => this.frame = ref} srcdoc={iframeContent} sandbox="allow-same-origin" />
        )
    }
}

function CancelAHAModal(props) {
    const { open, onClose, translations, onDone, reason, changeReason } = props

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={translations.getLL('NO_LONGER_SEND_AHA', 'Cancel Sending AHA')}
            buttons={[
                {
                    text: translations.getLL('NO_LONGER_SEND_AHA', 'Cancel Sending AHA'),
                    onClick: onDone,
                },
                {
                    text: translations.getLL('CLOSE', 'Close'),
                    onClick: onClose
                }
            ]}
        >
            <Section>
                {translations.getLLMarked('NO_LONGER_SEND_AHA_MSG', '*Je staat op het punt om deze AHA niet meer te laten versturen. Weet je zeker dat je dat wilt doen?* *Je kunt hieronder de reden opgeven waarom je deze AHA niet meer wilt versturen:*')}
                <SingleLineTextInput value={reason} onChange={changeReason} />
            </Section>
        </Modal>
    )
}

function ApproveAHAModal(props) {
    const { open, onClose, translations, onDone } = props

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={translations.getLL('APPROVE_AHA', 'Approve AHA')}
            buttons={[
                {
                    text: translations.getLL('APPROVE_AHA', 'Approve AHA'),
                    onClick: onDone
                },
                {
                    text: translations.getLL('CLOSE', 'Close'),
                    onClick: onClose
                }
            ]}
        >
            <Section>
                {translations.getLL('YOU_ARE_ABOUT_TO_APPROVE_AHA', 'Je staat op het punt om deze AHA goed te keuren. Weet je zeker dat je dat wilt doen?')}
            </Section>
        </Modal>
    )
}

function SubmitFeedbackModal(props) {
    const { open, onClose, onDone, translations, sendingName = '', journalistFirstName = '', journalistLastName = '' } = props
    return (
        <Modal
            open={open}
            onClose={onClose}
            title={translations.getLL('SEND_FEEDBACK', 'Send Feedback')}
            buttons={[
                {
                    text: translations.getLL('SEND_FEEDBACK', 'Send Feedback'),
                    onClick: onDone
                },
                {
                    text: translations.getLL('CLOSE', 'Close'),
                    onClick: onClose
                }
            ]}
        >
            <Section>
                {translations.getLL('SEND_AHA_FEEDBACK_MSG', 'Je staat op het punt om feedback te versturen voor de aha %v1 naar de journalist %v2 %v3. Weet je zeker dat je dat wilt doen?', [sendingName, journalistFirstName, journalistLastName])}
            </Section>
        </Modal>
    )
}