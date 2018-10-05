import { h, Component } from 'preact';
import Papers from '../Papers';
import CompanyDetails from './CompanyDetails';
import RecentVisits from './RecentVisits';
import CompanyContact from './CompanyContact';
import RecommendedLeadButtons from './RecommendedLeadButtons';
import Persona from './../Persona/index';
import FullScreenOverlay from './../FullScreenOverlay/index';

const sampleData = {
    tooltip: {
        name: 'Yoeri Kayser',
        position: 'Consultant',
        imageUrl: './assets/Yoeri.png',
        message: 'Bingo! Laat deze verkoopkans niet ontsnappen; neem contact op!'
    },
    company: {
        name: 'Viatel Infrastructure Nederland BV',
        city: 'Wognum',
        industry: 'Adviesverlening',
        visits: [
            { page: '/', date: new Date('02/17/2018') },
            { page: '/services', date: new Date('02/17/2018') },
            {
                page: '/services/design', date: new
                    Date('02/23/2018')
            },
            { page: '/contact', date: new Date('02/23/2018') }
        ]
    },
    contact: [
        { type: 'phone', value: '020 1234567' },
        { type: 'email', value: 'info@viatelinfrastructure.nl' },
        { type: 'address', value: 'Viatelstraat 1, Wognum' }
    ]
}

const sampleAddedData = {
    tooltip: {
        name: 'Yoeri Kayser',
        position: 'Consultant',
        imageUrl: './assets/Yoeri.png',
        message: 'Bingo! Laat deze verkoopkans niet ontsnappen; neem contact op!'
    },
    company: {
        name: 'Testing Some Stuff BV',
        city: 'Wognum',
        industry: 'Adviesverlening',
        visits: [
            { page: '/', date: new Date('02/17/2018') },
            { page: '/services', date: new Date('02/17/2018') },
            {
                page: '/services/design', date: new
                    Date('02/23/2018')
            },
            { page: '/contact', date: new Date('02/23/2018') }
        ]
    },
    contact: [
        { type: 'phone', value: '020 1234567' },
        { type: 'email', value: 'info@viatelinfrastructure.nl' },
        { type: 'address', value: 'Viatelstraat 1, Wognum' }
    ]
}

const defaultTranslations = {
    VISITED_PAGE: "Visited Page",
    DATE: "Date",
    REMIND_ME: "Remind me later",
    CONTACTED: "Contacted"
}

export default class RecommendedLead extends Component {
    render() {
        let {
        data = [sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData],
            buttonText = "Try the new layout!",
            actions,
            translations
        } = this.props;
        const defaultActions = {
            remindMe: () => { console.log("Remind me") },
            done: () => { console.log("Done") },
            fetchCards: async () => {
                function timeout(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                console.log("Starting fetch")
                await timeout(1000)
                console.log("Fetch finished")
                const result = {
                    props: { data: Object.assign({}, sampleAddedData), actions: this.actions, translations: this.translations },
                    component: RecommendedLeadComponent
                }
                return [result, result, result, result, result, result, result, result, result, result]
            }
        }
        this.translations = Object.assign(defaultTranslations, translations)
        this.actions = Object.assign(defaultActions, actions)
        this.data = data.reduce((acc, val) => {
            acc.push(Object.assign({ props: { data: val, actions: this.actions, translations: this.translations } }, { component: RecommendedLeadComponent }))
            return acc;
        }, [])
        return (
            <FullScreenOverlay buttonText={buttonText}>
                <Papers fetchCards={this.actions.fetchCards} pages={this.data} />
            </FullScreenOverlay>
        )
    }
}

export class RecommendedLeadComponent extends Component {
    render() {
        const { data, actions, nextPage, translations } = this.props
        return (
            <div>
                {data.tooltip ? <Persona
                    color={'orange'}
                    imageUrl={data.tooltip.imageUrl ? data.tooltip.imageUrl : 'defaultTooltipImage.png'}
                    name={data.tooltip.name ? data.tooltip.name : ''}
                    position={data.tooltip.position ? data.tooltip.position : ''}
                    message={data.tooltip.message ? data.tooltip.message : ''}
                /> : null}
                {data.company ? <CompanyDetails
                    name={data.company.name ? data.company.name : ''}
                    city={data.company.city ? data.company.city : ''}
                    industry={data.company.industry ? data.company.industry : ''}
                /> : null}
                {data.company.visits ? <RecentVisits
                    translations={{
                        VISITED_PAGE: translations.VISITED_PAGE,
                        DATE: translations.DATE
                    }}
                    visits={data.company.visits}
                /> : null}
                {data.contact ? <CompanyContact
                    contactMethods={data.contact}
                /> : null}
                <RecommendedLeadButtons
                    cardId={data.id}
                    translations={{
                        REMIND_ME: translations.REMIND_ME,
                        CONTACTED: translations.CONTACTED
                    }}
                    done={actions.done}
                    nextPage={nextPage}
                    remindMe={actions.remindMe}
                />
            </div>
        )
    }
}