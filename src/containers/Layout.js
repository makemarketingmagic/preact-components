import { h, Component, cloneElement } from 'preact'
import styled from 'styled-components'
import Navigation from './../components/Navigation/index';

const StyledContainer = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 64px auto;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
`, StyledBigContainer = styled.div`
    margin: 64px auto;
    background-color: white;
    margin-top: 0px;
    width: 100%;
    max-width: 100%;
    font-family: 'Montserrat', sans-serif;
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

export default class Layout extends Component {
    render() {
        const { Component, componentProps, user, $location, accountId, tabs = data.tabs, big = false } = this.props
        const Container = big ? BigContainer : RegularContainer
        return (
            <div>
                <Navigation $location={$location} accountId={accountId} user={user} tabs={tabs} translations={componentProps.translations} />
                <Container>
                    <Component {...componentProps} />
                </Container>
            </div>
        )
    }
}