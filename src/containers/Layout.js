import { h, Component } from 'preact'
import styled from 'styled-components'
import Navigation from './../components/Navigation/index';

const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 64px auto;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
`, data = {
        tabs: [
            {
                "ID": 1,
                "TITLE": "Info",
                "URL": "#/brands/brand-details/1126061000019254072/info",
                "TITLE_TRANSLATION_LABEL": "INFO",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/info",
                "IS_ALLOWED": [21, 31, 41, 51, 61]
            }, {
                "ID": 2,
                "TITLE": "Notities",
                "TITLE_TRANSLATION_LABEL": "NOTES",
                "URL": "#/brands/brand-details/1126061000019254072/notities",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/notities",
                "IS_ALLOWED": [21, 31, 41, 61],
            }, {
                "ID": 3,
                "TITLE": "Verkoopkansen",
                "TITLE_TRANSLATION_LABEL": "OPPORTUNITIES",
                "URL": "#/brands/brand-details/1126061000019254072/verkoopkansen/lijst",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/verkoopkansen/lijst",
                "IS_ALLOWED": [21, 31, 41, 61, 81],
            }, {
                "ID": 4,
                "TITLE": "Onboarding",
                "TITLE_TRANSLATION_LABEL": "ONBOARDING",
                "URL": "#/brands/brand-details/1126061000019254072/producten/on-boarding/overzicht",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/producten/on-boarding/overzicht",
                "IS_ALLOWED": [21, 31, 41, 61],
                "$$hashKey": "object:87"
            }, {
                "ID": 5,
                "TITLE": "AHA planning",
                "TITLE_TRANSLATION_LABEL": "AHA_PLANNING",
                "URL": "#/brands/brand-details/1126061000019254072/aha-feedback/planning",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/aha-feedback/planning",
                "IS_ALLOWED": [21, 61],
            }, {
                "ID": 6,
                "TITLE": "Rapportages",
                "TITLE_TRANSLATION_LABEL": "REPORTS",
                "URL": "#/brands/brand-details/1126061000019254072/rapportages/maandelijks",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/rapportages/maandelijks",
            }, {
                "ID": 7,
                "TITLE": "FormGen",
                "TITLE_TRANSLATION_LABEL": "FORMGEN",
                "URL": "#/brands/brand-details/1126061000019254072/formgen",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/formgen",
                "IS_ALLOWED": [21, 31, 41]
            }, {
                "ID": 8,
                "TITLE": "Bestanden",
                "TITLE_TRANSLATION_LABEL": "FILES",
                "URL": "#/brands/brand-details/1126061000019254072/file-manager",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/file-manager",
                "IS_ALLOWED": [21, 31, 41, 61],
                "$$hashKey": "object:91"
            }, {
                "ID": 9,
                "TITLE": "MAQL",
                "URL": "#/brands/brand-details/1126061000019254072/maql",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/maql",
                "IS_ALLOWED": [21, 31, 41],
                "IS_MICROSOFT": true
            }, {
                "ID": 10,
                "TITLE": "SAQL",
                "URL": "#/brands/brand-details/1126061000019254072/saql",
                "DYNAMIC_URL": "#/brands/brand-details/:accountId/saql",
                "IS_ALLOWED": [21, 31, 41, 61],
                "IS_MICROSOFT": true
            }
        ]
    }

export default class Layout extends Component {
    render() {
        const { Component, componentProps, user } = this.props
        return (
            <div>
                <Navigation user={user} tabs={data.tabs} tramslations={componentProps.translations} />
                <Container>
                    <Component {...componentProps} />
                </Container>
            </div>
        )
    }
}