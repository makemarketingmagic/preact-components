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
    render() {
        const data = { ...this.props.events.getOpportunityDetails(this.props.data.id), ...this.props.data }
        return (
            <Container>
                <VisitsContacts>
                    <SectionTitle>Most recently visited pages:</SectionTitle>
                    {data.visits && data.visits.map((val) =>
                        <Visit>{val.pageTitle || val.pageTitleGa}</Visit>
                    )}
                    <SectionTitle>Contacts that have visited your website:</SectionTitle>
                    {data.contacts && data.contacts.map((val) =>
                        <Visit>{val}</Visit>
                    )}
                </VisitsContacts>
                <ButtonsContainer>
                    <Dropdown options={[
                        { name: 'test', text: 'Testing 1 2 3 4 5 6 ' }
                    ]} placeholder='No Label' />
                    {data.Url && data.Url.map && data.Url.map((val) =>
                        <ContactButton secondary={true}>{val}</ContactButton>
                    )}
                    {data.telephone && <ContactButton>{data.telephone}</ContactButton>}
                </ButtonsContainer>
            </Container>
        )
    }
}