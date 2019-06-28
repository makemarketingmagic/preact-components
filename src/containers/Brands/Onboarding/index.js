import { h, Component, cloneElement } from 'preact'
import StepNavigation from '../../../components/Onboarding/StepNavigation';
import Step from './../../../components/Onboarding/Step';
import styled from 'styled-components';
import Targets from './Targets';
import UploadFiles from './UploadFiles';
import EstablishConnections from './EstablishConnections';
import TargetAudience from './TargetAudience';
import { colors } from '../../../components/common/scMixins';
import marked from 'marked'

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
    width: 100%;

	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
    
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`, SectionTitle = styled.div`
    line-height: 32px;
    font-size: 24px;
    color: ${colors.text};
`
export default class Onboarding extends Component {
    constructor(props) {
        super(props)
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        this.updateTimeout = {
            goals: null,
            audience: null,
            connections: null,
            files: null
        }
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
        translations.getLLMarked = (label, fallback, values = []) => {
            let translation = translations.getLL(label, fallback, values)
            if (typeof translation === 'string') {
                return <span dangerouslySetInnerHTML={{ __html: marked(translation, { sanitize: true }) }} />
            }
            return translation
        }
        this.translations = translations
        this.state = {
            currentStep: 0,
            goals: {
                klanten: '',
                gewensteKlanten: '',
                offertes: '',
                gesprekken: '',
                inDatabase: ''
            },
            audience: {
                spannendCommuniceren: 'null',
                schrijvenSpannend: 'null',
                leukCommuniceren: 'null',
                interviewer: 'null',
                stijlZakelijkPersoonlijk: 'null',
                stijlFormeelInformeel: 'null',
                stijlAanhef: 'null',
                voorbeeldUrl: ''
            },
            connections: {
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
            },
            steps: [
                { navigation: { info: this.translations.getLL('DEFINE_GOALS', 'Define Goals') }, step: { completed: false } },
                { navigation: { info: this.translations.getLL('TARGET_AUDIENCE_WRITING_STYLE', 'Target Audience & Writing Style') }, step: { completed: false } },
                { navigation: { info: this.translations.getLL('ESTABLISH_CONNECTIONS', 'Establish Connections') }, step: { completed: false } },
                { navigation: { info: this.translations.getLL('UPLOAD_FILES', 'Upload Files') }, step: { completed: false } }
            ]
        }
    }

    componentWillMount() {
        this.getOnBoardingDetails()
    }

    getOnBoardingDetails = async () => {
        this.setState({ loading: true }, async () => {
            const { events: { getOnBoardingDetails, getPercentage } } = this.props
            let { steps } = this.state
            if (getOnBoardingDetails) {
                let goals = await getOnBoardingDetails('goals')
                let audience = await getOnBoardingDetails('audience')
                let connections = await getOnBoardingDetails('connections')
                let files = await getOnBoardingDetails('files')
                steps[0].step.complete = getPercentage(goals) === 100
                steps[1].step.complete = getPercentage(audience) === 100
                steps[2].step.complete = getPercentage(connections) === 100
                steps[3].step.complete = getPercentage(files) === 100
                this.setState({ steps, goals, audience, connections, files, loading: false })
            }
        })
    }

    updateField = (sectionName, field, value) => {
        let section = this.state[sectionName],
            update = {}
        if (section && typeof section[field] !== 'undefined') {
            section[field] = value
        }
        update[sectionName] = section
        if (this.updateTimeout[sectionName]) {
            clearTimeout(this.updateTimeout[sectionName])
        }
        this.setState(update)
        this.updateTimeout[sectionName] = setTimeout(async () => {
            const { events: {
                submitOnboardingTargets,
                submitOnboardingTargetAudience,
                submitOnboardingConnections,
                submitOnboardingFiles
            } } = this.props
            switch (sectionName) {
                case 'goals':
                    await submitOnboardingTargets(section)
                    break;
                case 'audience':
                    await submitOnboardingTargetAudience(section)
                    break;
                case 'connections':
                    await submitOnboardingConnections(section)
                    break;
                case 'files':
                    await submitOnboardingFiles(section)
            }
        }, 500)

    }

    setActive = (id) => {
        this.setState({ currentStep: id })
    }

    canGoToStep = (id) => {
        return true;
    }



    render() {
        const { currentStep, steps } = this.state
        return (
            <div>
                <StepNavigation showLogo={false}>
                    {steps.map((props, i) => {
                        return (
                            cloneElement(<Step />, { ...props.navigation, id: i, setActive: this.setActive, active: this.state.currentStep === i, complete: props.step.complete, canGoToStep: this.canGoToStep })
                        )
                    })}
                </StepNavigation>
                <Divider />
                <Container>
                    {currentStep === 0 && <Targets
                        components={{ IFrameContainer, StepContents, Explaination, StepForm, Group }}
                        translations={this.translations}
                        updateField={this.updateField}
                        data={this.state.goals}
                    />}
                    {currentStep === 1 && <TargetAudience
                        components={{ IFrameContainer, StepContents, SectionTitle, Explaination, StepForm, Group }}
                        translations={this.translations}
                        updateField={this.updateField}
                        data={this.state.audience}
                    />}
                    {currentStep === 2 && <EstablishConnections
                        components={{ IFrameContainer, StepContents, SectionTitle, Explaination, StepForm, Group }}
                        translations={this.translations}
                        updateField={this.updateField}
                        data={this.state.connections}
                    />}
                    {currentStep === 3 && <UploadFiles
                        components={{ IFrameContainer, StepContents, SectionTitle, Explaination, StepForm, Group }}
                        translations={this.translations}
                        updateField={this.updateField}
                        data={this.state.files}
                    />}
                </Container>
            </div>
        )
    }
}