import { h, Component } from 'preact'
import styled from 'styled-components'
import Dropdown from '../../../components/Dropdown';
import Button from './../../../components/Button/index';

const Container = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: row;
`, VisitsContacts = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 32px;
`, ButtonsContainer = styled.div`
    display: flex;
    margin-top: 12px;
    margin-left: 32px;
    flex-direction: column;
    flex: 0.4;
    & > * {
        margin: 4px 0;
    }
    
`, Visit = styled.div`
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 14px;

    color: #88A5AD;
    background-color: #fff;
    border-radius: 4px;
    padding: 11px 16px;
    margin: 4px 0;
`, SectionTitle = styled.div`
    margin-bottom: 12px;
    margin-top: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 14px;

    color: #888888;
`, ContactButton = styled(Button)`
    margin: 4px;
`

export default class ExpandingSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opportunityDetails: null,
            init: false,
            labels: []
        }
    }

    getOpportunityDetails = (id) => {
        return new Promise((resolve, reject) => {
            this.props.events.getOpportunityDetails(id).then((value) => {
                resolve(value)
            })
        })
    }

    componentDidMount() {
        this.initialise()
    }

    componentDidUpdate = (prevProps) => {
        let { id } = this.props.data,
            { id: prevId } = prevProps.data

        if (id !== prevId) {
            this.initialise()
        }
    }

    initialise = async () => {
        let { labels } = this.props,
            { label, id } = this.props.data
        this.setState({ opportunityDetails: null, loading: true }, async () => {
            if (labels.length && label) {
                labels = labels.map((val) =>
                    ({ ...val, selected: label === val.value.toString() })
                )
                this.setState({ labels })
            }
            let opportunityDetails = await this.getOpportunityDetails(id)
            this.setState({ opportunityDetails, loading: false })
        })
    }

    renderDropdown() {
        const { events: { updateLabelAndStatus } } = this.props
        return (<Dropdown options={this.state.labels} onChange={(val) => {
            this.setState({ loading: true }, async () => {
                await updateLabelAndStatus({ ...this.props.data, label: val.value })
            })
        }} placeholder='No Label' />)
    }

    render() {

        const data = { ...this.state.opportunityDetails, ...this.props.data },
            { opportunityDetails } = this.state,
            { labels, translations } = this.props
        return (
            <Container>
                <VisitsContacts>
                    <SectionTitle>{translations.getLL('MOST_RECENTLY_VISITED_PAGES', 'Most recently visited pages')}:</SectionTitle>
                    {opportunityDetails ? opportunityDetails.visits.map((val) =>
                        <Visit onClick={() => {
                            window.open(val.url, '_BLANK')
                        }}>{val.title}</Visit>
                    ) :
                        <div>
                            <i class="fa fa-spinner fa-spin"></i> {translations.getLL('FETCHING_VISITED_PAGES', 'Fetching visited pages...')}
                        </div>
                    }
                    <SectionTitle>{translations.getLL('CONTACTS_RECENTLY_VISITED', 'Contacts that have visited your website')}:</SectionTitle>
                    {opportunityDetails ? data.contacts.map((val) =>
                        <Visit>{val}</Visit>
                    ) :
                        <div>
                            <i class="fa fa-spinner fa-spin"></i> {translations.getLL('FETCHING_EMAIL_ADDRESSES', 'Fetching email addresses...')}
                        </div>
                    }
                </VisitsContacts>
                <ButtonsContainer>
                    {this.renderDropdown()}
                    {data.Url && data.Url.map && data.Url.map((val) =>
                        <ContactButton secondary={true}>{val}</ContactButton>
                    )}
                    {data.telephone && <ContactButton>{data.telephone}</ContactButton>}
                </ButtonsContainer>
            </Container>
        )
    }
}