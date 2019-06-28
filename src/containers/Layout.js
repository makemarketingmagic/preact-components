import { h, Component, cloneElement } from 'preact'
import styled from 'styled-components'
import Navigation from './../components/Navigation/index';
import { colors } from '../components/common/scMixins';
import { desaturate, darken } from 'polished'
import Cookie from '../utils/Cookie'
const StyledContainer = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 106px auto 64px auto;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
`, StyledBigContainer = styled.div`
    margin: 64px auto;
    background-color: white;
    margin-top: 42px;
    width: 100%;
    max-width: 100%;
    font-family: 'Montserrat', sans-serif;
`, FeedbackArea = styled.div`
    display: flex;
    flex-direction: column;
    & > div {
        margin: 16px 0;
    }
`, Feedback = styled.div`
    background-color: ${(props) => {
            switch (props.level) {
                case FEEDBACK_LEVELS.ERROR:
                    return desaturate(0.25, colors.red)
                case FEEDBACK_LEVELS.WARNING:
                    return desaturate(0.25, colors.orange)
                case FEEDBACK_LEVELS.SUCCESS:
                    return desaturate(0.25, colors.green)
            }
        }};
`, FeedbackTitle = styled.div`
    padding: 4px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => {
            switch (props.level) {
                case FEEDBACK_LEVELS.ERROR:
                    return darken(0.5, colors.red)
                case FEEDBACK_LEVELS.WARNING:
                    return darken(0.5, colors.orange)
                case FEEDBACK_LEVELS.SUCCESS:
                    return darken(0.5, colors.green)
            }
        }};
    color: ${(props) => {
            switch (props.level) {
                case FEEDBACK_LEVELS.ERROR:
                    return darken(0.5, colors.red)
                case FEEDBACK_LEVELS.WARNING:
                    return darken(0.5, colors.orange)
                case FEEDBACK_LEVELS.SUCCESS:
                    return darken(0.5, colors.green)
            }
        }};
`, FeedbackMessage = styled.div`
    padding: 4px;
    margin-top: 8px;
    color: ${(props) => {
            switch (props.level) {
                case FEEDBACK_LEVELS.ERROR:
                    return darken(0.5, colors.red)
                case FEEDBACK_LEVELS.WARNING:
                    return darken(0.5, colors.orange)
                case FEEDBACK_LEVELS.SUCCESS:
                    return darken(0.5, colors.green)
            }
        }};
`, data = {
        tabs: [
            {
                "ID": 1,
                "TITLE": "Info",
                "URL": "/brands/brand-details/1126061000019254072/info",
                "TITLE_TRANSLATION_LABEL": "INFO",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/info",
                "IS_ALLOWED": [21, 31, 41, 51, 61]
            }, {
                "ID": 2,
                "TITLE": "Notities",
                "TITLE_TRANSLATION_LABEL": "NOTES",
                "URL": "#/brands/brand-details/1126061000019254072/notities",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/notities",
                "IS_ALLOWED": [21, 31, 41, 61],
            }, {
                "ID": 3,
                "TITLE": "Verkoopkansen",
                "TITLE_TRANSLATION_LABEL": "OPPORTUNITIES",
                "URL": "#/brands/brand-details/1126061000019254072/verkoopkansen/lijst",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/verkoopkansen/lijst",
                "IS_ALLOWED": [21, 31, 41, 61, 81],
            }, {
                "ID": 4,
                "TITLE": "Onboarding",
                "TITLE_TRANSLATION_LABEL": "ONBOARDING",
                "URL": "#/brands/brand-details/1126061000019254072/producten/on-boarding/overzicht",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/producten/on-boarding/overzicht",
                "IS_ALLOWED": [21, 31, 41, 61],
                "$$hashKey": "object:87"
            }, {
                "ID": 5,
                "TITLE": "AHA planning",
                "TITLE_TRANSLATION_LABEL": "AHA_PLANNING",
                "URL": "#/brands/brand-details/1126061000019254072/aha-feedback/planning",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/aha-feedback/planning",
                "IS_ALLOWED": [21, 61],
            }, {
                "ID": 6,
                "TITLE": "Rapportages",
                "TITLE_TRANSLATION_LABEL": "REPORTS",
                "URL": "#/brands/brand-details/1126061000019254072/rapportages/maandelijks",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/rapportages/maandelijks",
            }, {
                "ID": 7,
                "TITLE": "FormGen",
                "TITLE_TRANSLATION_LABEL": "FORMGEN",
                "URL": "#/brands/brand-details/1126061000019254072/formgen",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/formgen",
                "IS_ALLOWED": [21, 31, 41]
            }, {
                "ID": 8,
                "TITLE": "Bestanden",
                "TITLE_TRANSLATION_LABEL": "FILES",
                "URL": "#/brands/brand-details/1126061000019254072/file-manager",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/file-manager",
                "IS_ALLOWED": [21, 31, 41, 61],
                "$$hashKey": "object:91"
            }, {
                "ID": 9,
                "TITLE": "MAQL",
                "URL": "#/brands/brand-details/1126061000019254072/maql",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/maql",
                "IS_ALLOWED": [21, 31, 41],
                "IS_MICROSOFT": true
            }, {
                "ID": 10,
                "TITLE": "SAQL",
                "URL": "#/brands/brand-details/1126061000019254072/saql",
                "DYNAMIC_URL": "/brands/brand-details/:accountid/saql",
                "IS_ALLOWED": [21, 31, 41, 61],
                "IS_MICROSOFT": true
            }
        ]
    }

function RegularContainer(props) {
    const { children, matches, path, url } = props
    return (
        <StyledContainer>
            {children.map((child) => cloneElement(child, {
                matches,
                path,
                url
            }))}
        </StyledContainer>
    )
}

function BigContainer(props) {
    const { children, matches, path, url } = props
    return (
        <StyledBigContainer>
            {children.map((child) => cloneElement(child, {
                matches,
                path,
                url
            }))}
        </StyledBigContainer>
    )
}

export const FEEDBACK_LEVELS = {
    NONE: 0,
    WARNING: 1,
    SUCCESS: 2,
    ERROR: 3
}

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedback: [],
        }
        Cookie.set('redesign', true, { days: 31 })
    }

    clearCurrentFeedback = () => {
        let { feedback } = this.state,
            currentFeedback = feedback.pop()
        this.setState({ feedback })
    }



    addFeedback = (title, message, feedbackLevel) => {
        let { feedback } = this.state
        feedback.push({ feedbackTitle: title, feedbackMessage: message, feedbackLevel })
        feedback = feedback.sort((a, b) => a.feedbackLevel - b.feedbackLevel)
        this.setState({ feedback })
    }

    render() {
        const { isMicrosoft = false, Component, componentProps, user, $location, accountId, tabs = data.tabs, big = false } = this.props
        const Container = big ? BigContainer : RegularContainer
        const { feedback } = this.state
        return (
            <div>
                <Navigation isMicrosoft={isMicrosoft} $location={$location} accountId={accountId} user={user} tabs={tabs} translations={componentProps.translations} />
                <Container>
                    <FeedbackArea>
                        {feedback.map((feedback) =>
                            <Feedback level={feedback.feedbackLevel}>
                                <FeedbackTitle level={feedback.feedbackLevel}>{feedback.feedbackTitle}</FeedbackTitle>
                                <FeedbackMessage level={feedback.feedbackLevel}>{feedback.feedbackMessage}</FeedbackMessage>
                            </Feedback>
                        )}
                    </FeedbackArea>
                    <Component {...componentProps} />
                </Container>
            </div>
        )
    }
}