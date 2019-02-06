import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../../../components/common/scMixins';
import Button from './../../../components/Button/index';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import FilterIcon from './../../../components/icons/FilterIcon';
import DownloadArrow from '../../../components/icons/DownloadArrow';
import SearchIcon from './../../../components/icons/SearchIcon';
import Table, { SORT_DIRECTION } from '../../../components/Table'
import { debounce } from 'lodash'
import { defaultLabels } from '../MockFunctions';
import { Modal } from '../../../components/Modal';
import Checkboxes from './../../../components/Checkboxes/index';
import ExpandingSection from './ExpandingSection';

const PageTitle = styled.div`
    font-family: 'Varela Round';
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    font-size: 24px;

    color: #323232;
`, TitleArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
`, TableControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin: 0 4px;
    }
`, PageNumbers = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    justify-content: center;
`, PageNumber = styled.div`
    margin: 0 4px;
    cursor: pointer;
    padding: 4px;
    border: 1px solid ${colors.red};
    background-color: ${props => props.current ? colors.red : colors.white};
    color: ${props => props.current ? colors.white : colors.red};
`

export default class SalesOpportunities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredLeads: [],
            search: '',
            filter: [],
            orderBy: 'companyname',
            direction: SORT_DIRECTION.ASC,
            dialogOpen: false,
            currentPage: 1,
            totalPages: 0,
            perPage: 50,
            selected: false
        }
        this.searchColumns = ['companyname', 'city']
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    componentDidMount() {
        this.reloadFilters()
    }

    onSelect = (id) => {
        if (id) {
            this.setState({ selected: id })
        }
    }

    changePage = (i) => {
        this.setState({ currentPage: i })
    }

    setOrderBy = (field, direction) => {
        const { leads = [] } = this.props
        if (leads && leads[0] && typeof leads[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    calculatePages(filteredLeads = []) {
        let { perPage } = this.state
        return Math.round(filteredLeads.length / perPage + 0.5)
    }

    reloadFilters() {
        let { leads } = this.props
        let { direction, orderBy, search } = this.state
        let filteredLeads = leads
        if (search !== '') {
            filteredLeads = filteredLeads.filter((value, index) => {
                for (let key of this.searchColumns) {
                    if (value[key] && value[key].toLowerCase && value[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true
                    }
                }
                return false
            })
        }
        if (this.state.filter.length > 0) {
            filteredLeads = filteredLeads.filter((val) => {
                return this.state.filter.indexOf(val.label) >= 0
            })
        }
        filteredLeads = filteredLeads.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            if (orderBy === 'companyname') {
                field1 = field1.replace(/[.,"'+@\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase()
                field2 = field2.replace(/[.,"'+@\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase()
            } else if (orderBy === 'employees') {
                field1 = parseInt(field1) || -1
                field2 = parseInt(field2) || -1
            }
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        this.setState({ filteredLeads, totalPages: this.calculatePages(filteredLeads) })
    }

    renderPages() {
        let pages = []
        const { currentPage, totalPages } = this.state
        if (totalPages === 0) return pages
        pages.push(<PageNumber current={false} onClick={() => this.changePage(1)}>{'<<'}</PageNumber>)
        pages.push(<PageNumber current={false} onClick={() => this.changePage(currentPage - 1)}>{'<'}</PageNumber>)
        // let leftSide = 2, rightSide = 2
        // if (currentPage <= 2) {
        //     leftSide = currentPage - 1
        // }
        // if (currentPage + 2 > totalPages) {
        //     rightSide = currentPage - totalPages
        // }
        // debugger
        for (let i = 1; i <= totalPages; i++) {
            pages.push((<PageNumber
                current={i === currentPage}
                onClick={() => this.changePage(i)}
            >{i}</PageNumber>))
        }
        pages.push(<PageNumber current={false} onClick={() => this.changePage(currentPage + 1)}>{'>'}</PageNumber>)
        pages.push(<PageNumber current={false} onClick={() => this.changePage(totalPages)}>{'>>'}</PageNumber>)
        return pages
    }

    render() {
        const { filteredLeads = [] } = this.state,
            {
                leads,
                labels = defaultLabels,
                events: {
                    downloadCsv,
                    showBranche,
                    getOpportunityDetails,
                    getEmployeeRange,
                    updateLabelAndStatus
                },
            } = this.props
        let i = 0,
            { translations = { getTranslation: (label, fallback) => fallback } } = this.props
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
                <TitleArea>
                    <Modal
                        onDialogClose={() => {
                            this.setState({ dialogOpen: false })
                            this.reloadFilters()
                        }}
                        title={translations.getLL('FILTER_OPPORTUNITIES', 'Filter Opportunities')}
                        open={this.state.dialogOpen}
                        buttons={[
                            {
                                text: translations.getLL('DONE', 'Done'), onClick: () => {
                                    this.setState({ dialogOpen: false })
                                    this.reloadFilters()
                                }
                            }
                        ]}
                    >
                        <Checkboxes
                            onChange={(options) => {
                                let filter = options.filter((val) => val.selected).map((val) => val.data.toString())
                                if (filter.length === options.length) filter = []
                                this.setState({ filter })
                            }}
                            options={labels}
                            formStyle={{ margin: '0 16px' }} />
                    </Modal>
                    <PageTitle>
                        {translations.getLL('NUMBER_OF_LEADS_WITH_VALUE', 'You have %v1 leads', [<span style={{ color: colors.red }}>{leads.length}</span>])}
                    </PageTitle>
                    <TableControls>
                        <SingleLineTextInput
                            iconLeft={true}
                            value={this.state.search}
                            Icon={SearchIcon}
                            placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [leads.length])}
                            onChange={this.updateSearch}
                        />
                        <Button
                            iconLeft={true}
                            Icon={FilterIcon}
                            secondary={true}
                            onClick={() => { this.setState({ dialogOpen: true }) }}
                        >{translations.getLL('FILTERS', 'Filters')}</Button>
                        <Button
                            iconLeft={true}
                            Icon={DownloadArrow}
                            secondary={true}
                            onClick={downloadCsv}
                        >{translations.getLL('CSV', 'CSV')}</Button>
                    </TableControls>
                </TitleArea>
                <Table
                    data={filteredLeads.slice((this.state.currentPage - 1) * this.state.perPage, ((this.state.currentPage - 1) * this.state.perPage) + this.state.perPage)}
                    headers={{
                        companyname: translations.getLL('COMPANY_NAME', 'Company name'),
                        city: translations.getLL('CITY', 'City'),
                        sbiSectie: translations.getLL('BRANCH', 'Industry'),
                        totalVisits: translations.getLL('VISITS', 'Visits'),
                        lastVisit: translations.getLL('LAST_VISIT', 'Last visit'),
                        employees: translations.getLL('FTE', 'FTE')
                    }}
                    renderers={{
                        lastVisit: (val) => new Date(parseInt(val) * 1000).toDateString(),
                        companyname: (val) => val.length > 30 ? val.slice(0, 30) + '...' : val,
                        employees: (val) => getEmployeeRange ? getEmployeeRange(val) : val,
                        sbiSectie: (val) => showBranche ? showBranche(val) : val

                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    hasExpandingSection={true}
                    ExpandingSection={ExpandingSection}
                    expandingSectionProps={{
                        events: {
                            getOpportunityDetails,
                            updateLabelAndStatus
                        },
                        labels: labels.map((val) => ({ value: val.data, text: val.label })),
                        translations
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                />
                <PageNumbers>
                    {this.renderPages()}
                </PageNumbers>
            </div>
        )
    }
}