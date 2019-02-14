import { h, Component, cloneElement } from 'preact'
import StepNavigation from '../../../components/Onboarding/StepNavigation';
import Step from './../../../components/Onboarding/Step';
import styled from 'styled-components';
import Label from '../../../components/Label';
import SingleLineTextInput from '../../../components/SingleLineTextInput';
import Targets from './Targets';

const Divider = styled.div`
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
`, Container = styled.div`
    max-width: 600px;
    width: 90%;
    margin: 64px auto;
`, StepContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`, StepForm = styled.form`
    width: 100%;
`, Explaination = styled.div`
    width: 100%;
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 14px;
    margin-bottom: 34px;
    color: #323232;
`, Group = styled.div`
    margin: 19px 0;
`, IFrameContainer = styled.div`
    margin-bottom: 64px;
`
export default class Onboarding extends Component {
    constructor(props) {
        super(props)
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
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
        this.translations = translations
        this.steps = [
            { navigation: { info: this.translations.getLL('DEFINE_GOALS', 'Define Goals') }, step: { completed: false } },
            { navigation: { info: this.translations.getLL('TARGET_AUDIENCE_WRITING_STYLE', 'Target Audience & Writing Style') }, step: { completed: false } },
            { navigation: { info: this.translations.getLL('ESTABLISH_CONNECTIONS', 'Establish Connections') }, step: { completed: false } },
            { navigation: { info: this.translations.getLL('UPLOAD_FILES', 'Upload Files') }, step: { completed: false } }
        ]
        this.state = {
            currentStep: 0,
            targets: {
                clients: '',
                futureClients: '',
                offers: '',
                conversations: '',
                inDatabase: ''
            },
            targetAudience: {
                excited: null,
                excitedForWriting: null,
                willOrganisationCommunicate: null,
                interviewOthers: null,
                corporate: null,
                formal: null,
                british: null,
                example: ''
            },
            establishConnections: {
                senderName: '',
                senderEmail: '',
                wbFullName: '',
                wbEmail: '',
                wbPhone: '',
                googleAnalyticsApproved: false,
                linkedInApproved: false,
                cmsApproved: false,
                dnsApproved: false,
                twitterAccess: false,
                facebookAccess: false,
                googlePlusAccess: false
            },
            files: {
                emailDatabase: null,
                socialSharing: null
            }
        }
    }

    updateField = (sectionName, field, value) => {
        let section = this.state[sectionName],
            update = {}
        if (section && typeof section[field] !== 'undefined') {
            section[field] = value
        }
        update[sectionName] = section
        this.setState(update)
    }

    setActive = (id) => {
        this.setState({ currentStep: id })
    }

    canGoToStep = (id) => {
        return true;
    }



    render() {
        return (
            <div>
                <StepNavigation showLogo={false}>
                    {this.steps.map((props, i) => {
                        return (
                            cloneElement(<Step />, { ...props.navigation, id: i, setActive: this.setActive, active: this.state.currentStep === i, complete: props.step.completed, canGoToStep: this.canGoToStep })
                        )
                    })}
                </StepNavigation>
                <Divider />
                <Container>
                    <Targets
                        components={{ IFrameContainer, StepContents, Explaination, StepForm, Group }}
                        translations={this.translations}
                        updateField={this.updateField}
                    />
                </Container>
            </div>
        )
    }
}