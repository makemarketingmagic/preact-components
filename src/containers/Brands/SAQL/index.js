import { h, Component } from 'preact'
import styled from 'styled-components'
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import SearchIcon from './../../../components/icons/SearchIcon';
import Table, { SORT_DIRECTION } from '../../../components/Table';
import { colors } from '../../../components/common/scMixins';
import { debounce } from 'lodash';
import Button from './../../../components/Button/index';
import PlusIcon from './../../../components/icons/PlusIcon';
import { Modal } from './../../../components/Modal/index';
import Label from '../../../components/Label';
import DatePicker from './../../../components/DatePicker/index';

const Title = styled.div`
    font-family: 'Varela Round';
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    font-size: 24px;

    color: ${colors.text};
`, TitleArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
`, SAQLControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin: 0 4px;
    }
`, Group = styled.div`
    margin: 19px 0;
`, SAQLForm = styled.form`
    margin: 0 32px;
`

const FLAGS = {
    NONE: 0,
    EDIT: 1,
    NEW: 2
}

export default class SAQL extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            leads: [],
            filteredLeads: [],
            orderBy: 'engagement_date',
            direction: SORT_DIRECTION.DESC,
            selected: false,
            editSAQL: false,
            mode: FLAGS.NONE
        }
        this.searchColumns = ['company_name', 'contact_full_name', 'solutions']
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    onSelect = (id, val) => {
        if (id && id !== this.state.selected) {
            this.setState({ selected: id, editSAQL: val, mode: FLAGS.EDIT })
        }
    }

    reloadFilters = () => {
        let { leads } = this.props
        let { direction, orderBy, search } = this.state
        let filteredLeads = leads
        if (search !== '') {
            filteredLeads = filteredLeads.filter((value) => {
                for (let key of this.searchColumns) {
                    if (value[key] && value[key].toLowerCase && value[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true
                    }
                }
                return false
            })
        }
        filteredLeads = filteredLeads.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        this.setState({ filteredLeads })
    }

    setOrderBy = (field, direction) => {
        const { leads = [] } = this.props
        if (leads && leads[0] && typeof leads[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    componentDidMount() {
        let { leads } = this.props
        this.setState({ leads, filteredLeads: leads })
    }

    editSAQL = (field, value) => {
        let { editSAQL } = this.state
        editSAQL[field] = value
        this.setState({ editSAQL })
    }

    renderModal(translations) {
        const { editSAQL } = this.state
        return (<Modal
            onDialogClose={() => {
                this.setState({ editSAQL: false, mode: FLAGS.NONE })
            }}
            title={translations.getLL('ADD_EDIT_SAQL', 'Add / Edit SAQL')}
            open={editSAQL}
            buttons={[
                {
                    text: translations.getLL('ADD_SAQL', 'Add SAQL'), onClick: () => {
                        this.setState({ editSAQL: false, mode: FLAGS.NONE })
                    }
                },
                {
                    text: translations.getLL('CANCEL', 'Cancel'), secondary: true, onClick: () => {
                        this.setState({ editSAQL: false, mode: FLAGS.NONE })
                    }
                }
            ]}
        >
            <SAQLForm>
                <Group>
                    <Label>{translations.getLL('COMPANY_NAME', 'Company Name')}</Label>
                    <SingleLineTextInput value={editSAQL.company_name} onChange={({ value }) => { this.editSAQL('company_name', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('DATE_EXPECTED_TO_SIGN', 'When is the company expected to sign?')}</Label>
                    <DatePicker value={editSAQL.engagement_date} onChange={({ value }) => { this.editSAQL('engagement_date', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('PARTNER_SOLUTION', 'Partner Solution')}</Label>
                    <SingleLineTextInput value={editSAQL.partner_solution} onChange={({ value }) => { this.editSAQL('partner_solution', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('SOLUTIONS', 'Solutions')}</Label>
                    <SingleLineTextInput value={editSAQL.solutions} onChange={({ value }) => { this.editSAQL('solutions', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('BUDGET', 'Budget')}</Label>
                    <SingleLineTextInput value={editSAQL.budget} onChange={({ value }) => { this.editSAQL('budget', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('CONTACT_NAME', 'Contact Name')}</Label>
                    <SingleLineTextInput value={editSAQL.contact_full_name} onChange={({ value }) => { this.editSAQL('contact_full_name', value) }} />
                </Group>
                <Group>
                    <Label>{translations.getLL('PHONE_NUMBER', 'Phone Number')}</Label>
                    <SingleLineTextInput value={editSAQL.contact_phone} onChange={({ value }) => { this.editSAQL('contact_phone', value) }} />
                </Group>
            </SAQLForm>
        </Modal>)
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { leads, filteredLeads } = this.state
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

        return (
            <div>
                {this.renderModal(translations)}
                <TitleArea>
                    <Title>{translations.getLL('NUMBER_OF_SAQLS_WITH_VALUE', 'You have %v1 Sales Qualified Leads', [<span style={{ color: colors.red }}>{leads.length}</span>])}</Title>
                    <SAQLControls>
                        <Button
                            secondary={true}
                            Icon={PlusIcon}
                            iconLeft={true}
                            onClick={() => {
                                this.setState({ editSAQL: {}, mode: FLAGS.NEW })
                            }}
                        >
                            {translations.getLL('NEW', 'New')}
                        </Button>
                        <SingleLineTextInput
                            iconLeft={true}
                            value={this.state.search}
                            Icon={SearchIcon}
                            placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [leads.length])}
                            onChange={this.updateSearch}
                        />
                    </SAQLControls>
                </TitleArea>
                <Table
                    data={filteredLeads}
                    headers={{
                        'company_name': translations.getLL('COMPANY', 'Company'),
                        'contact_full_name': translations.getLL('CONTACT', 'Contact'),
                        'contact_phone': translations.getLL('PHONE', 'Phone'),
                        'solutions': translations.getLL('SOLUTIONS', 'Solution(s)'),
                        'engagement_date': translations.getLL('ENGAGEMENT_DATE', 'Engagement Date')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                    renderers={{
                        'engagement_date': (val) => new Date(val * 1000).toISOString().split('T')[0]
                    }}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                    selectedBackground={colors.white}
                />
            </div>
        )
    }
}