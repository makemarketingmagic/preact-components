import { h, Component } from 'preact';
import Papers from '../Papers';
import CompanyDetails from './CompanyDetails';
import RecentVisits from './RecentVisits';
import CompanyContact from './CompanyContact';
import RecommendedLeadButtons from './RecommendedLeadButtons';
import Persona from './../Persona/index';

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
        ],
        contact: [
            { type: 'phone', value: '020 1234567' },
            { type: 'email', value: 'info@viatelinfrastructure.nl' },
            { type: 'address', value: 'Viatelstraat 1, Wognum' }
        ]
    }
}

export default class RecommendedLead extends Component {
    render() {
        let { data = [sampleData, sampleData, sampleData, sampleData, sampleData] } = this.props;
        debugger;
        data = data.reduce((acc, val) => {
            acc.push(Object.assign({ props: { data: val } }, { component: RecommendedLeadComponent }))
            return acc;
        }, [])
        return (
            <Papers pages={data} />
        )
    }
}

export class RecommendedLeadComponent extends Component {
    render() {
        const { data, nextPage } = this.props
        return (
            <div>
                <Persona
                    color={'orange'}
                    imageUrl={data.tooltip.imageUrl}
                    name={data.tooltip.name}
                    position={data.tooltip.position}
                    message={data.tooltip.message}
                />
                <CompanyDetails
                    name={data.company.name}
                    city={data.company.city}
                    industry={data.company.industry}
                />
                <RecentVisits
                    visits={data.company.visits}
                />
                <CompanyContact
                    contactMethods={data.company.contact}
                />
                <RecommendedLeadButtons nextPage={nextPage} />
            </div>
        )
    }
}