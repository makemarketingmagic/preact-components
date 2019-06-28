import { h, Component } from 'preact'
import { Tabs, Tab } from '../../../components/Tabs';
import styled from 'styled-components';
import Table, { SORT_DIRECTION } from '../../../components/Table';
import SearchIcon from './../../../components/icons/SearchIcon';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import { debounce } from 'lodash';
import { Modal } from '../../../components/Modal';
import Button from '../../../components/Button';


const ChartTitle = styled.h2`

`, SectionTitle = styled.h2`

`, TableControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px 0;
    justify-content: space-between;
    
    & > * {
        margin: 0 4px;
    }
`
export default class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            timeout: null,
            mailings: [],
            readers: [],
            blogs: [],
            totals: []
        }
    }

    componentDidMount() {
        this.getAHAReport()
        this.getSMRReport()
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
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
                <Tabs index={0}>
                    <Tab label={translations.getLL('MONTHLY', 'Monthly')}>
                        {this.renderChartTab(translations)}
                    </Tab>
                    <Tab label={translations.getLL('AHA', 'AHA')}>
                        {this.renderAHATab(translations)}
                    </Tab>
                    <Tab label={translations.getLL('SOCIAL_MEDIA_REMINDER', 'Social Media Reminder')}>
                        {this.renderSocialMediaTab(translations)}
                    </Tab>
                </Tabs>
            </div>
        )
    }

    renderChartTab = (translations) => {
        const charts = Array.prototype.slice.call(document.querySelectorAll('we-d3-lines')),
            chartTitles = [
                translations.getLL('NUMBER_OF_VISITORS', 'Number of Visitors'),
                translations.getLL('VISIT_DURATION', 'Visit Duration'),
                translations.getLL('VISITOR_SOURCES', 'Sources of Visitors'),
                translations.getLL('VISITORS_THROUGH_LINKEDIN', 'Visitors through LinkedIn'),
                translations.getLL('VISITORS_THROUGH_FACEBOOK', 'Visitors through Facebook')
            ]
        let elements = []
        if (charts.length === 0) {
            return setTimeout(() => {
                this.setState({ timeout: new Date() })
            }, 500)
        }
        for (let i in charts) {
            elements.push(<ChartTitle>{chartTitles[i]}</ChartTitle>)
            elements.push(<GraphNode node={charts[i]} />)
        }
        return elements
    }

    getAHAReport = async () => {
        const { events: { getAHAReport } } = this.props
        let AHAReport = {}
        if (getAHAReport) {
            AHAReport = await getAHAReport()
        }
        this.setState({ mailings: AHAReport.mailings, readers: AHAReport.readers })
    }

    getSMRReport = async () => {
        const { events: { getSMRReport } } = this.props
        let SMRReport = {}
        if (getSMRReport) {
            SMRReport = await getSMRReport()
        }
        this.setState({ blogs: SMRReport.blogs, totals: SMRReport.total })
    }

    renderAHATab = (translations) => {
        const { brandInfo: { brand_name } } = this.props,
            { mailings, readers } = this.state

        return (
            <div>
                <SectionTitle>{translations.getLL('AHA_REPORT_FOR', 'AHA Report for %v1', [brand_name])}</SectionTitle>
                <Tabs index={0}>
                    <Tab label={translations.getLL('MAILINGS', 'Mailings')}>
                        <MailingsTable events={this.props.events} mailings={mailings} translations={translations} />
                    </Tab>
                    <Tab label={translations.getLL('READERS', 'Readers')}>
                        <ReadersTable events={this.props.events} readers={readers} translations={translations} />
                    </Tab>
                </Tabs>
            </div>
        )
    }

    renderSocialMediaTab = (translations) => {
        const { brandInfo: { brand_name } } = this.props,
            { blogs, totals } = this.state
        return (
            <div>
                <SectionTitle>{translations.getLL('SMR_REPORT_FOR', 'Socail Media Reminder report for %v1', [brand_name])}</SectionTitle>
                <Tabs index={0}>
                    <Tab label={translations.getLL('BLOGS', 'Blogs')}>
                        <BlogsTable events={this.props.events} translations={translations} blogs={blogs} />
                    </Tab>
                    <Tab label={translations.getLL('TOTAL', 'Total')}>
                        <TotalsTable events={this.props.events} translations={translations} totals={totals} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

class GraphNode extends Component {
    ref = null

    componentDidMount() {
        const { node } = this.props
        this.ref.appendChild(node)
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 10)
    }

    render() {
        return (<div ref={(ref) => this.ref = ref}></div>)
    }
}

class ReportsTable extends Component {
    constructor(props, extState) {
        super(props)
        this.field = props.tableType
        this.filteredField = `filtered${props.tableType.charAt(0).toUpperCase() + props.tableType.slice(1)}`
        this.state = {
            search: '',
            orderBy: '',
            direction: SORT_DIRECTION.DESC,
            selected: false,
            ...extState
        }
        this.state[this.filteredField] = []
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    reloadFilters = () => {

        const data = this.props[this.field]
        let { direction, orderBy, search } = this.state
        let filteredData = data
        if (search !== '') {
            filteredData = filteredData.filter((value) => {
                for (let key of this.searchColumns) {
                    if (value[key] && value[key].toLowerCase && value[key].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                        return true
                    }
                }
                return false
            })
        }
        filteredData = filteredData.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        let update = {}
        update[this.filteredField] = filteredData
        this.setState(update)
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    setOrderBy = (field, direction) => {
        const data = this.props[this.field]
        if (data && data[0] && typeof data[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    onSelect = (id, val) => {
        if (id && id !== this.state.selected) {
            this.setState({ selected: id })
        }
    }

    componentWillReceiveProps(oldProps, newProps) {
        this.reloadFilters()
    }
}

class BlogsTable extends ReportsTable {
    searchColumns = ['subject']

    constructor(props) {
        super({ ...props, tableType: 'blogs' }, { blogDetails: [] })
    }

    onSelect = async (id, val) => {
        const { events: { getBlogDetails } } = this.props
        if (id && id !== this.state.selected) {
            let blogDetails = await getBlogDetails(val.id)
            this.setState({ blogDetails, selected: id })
        }
    }

    render() {
        const { translations, blogs, events: { exportCsv } } = this.props,
            { filteredBlogs, blogDetails, selected } = this.state
        return (
            <div>
                <Modal
                    onDialogClose={() => { this.setState({ selected: false }) }}
                    title={translations.getLL('READERS_FOR_WITH_VAL', "Readers for Soial Reminder '%v1'", [blogs[selected] ? blogs[selected].subject : '' || ''])}
                    open={selected !== false}
                    buttons={[
                        {
                            text: translations.getLL('CANCEL', 'Cancel'),
                            onClick: () => this.setState({ selected: false })
                        },
                        {
                            text: translations.getLL('EXPORT_CSV', 'Export CSV'),
                            onClick: () => exportCsv(blogDetails, 2)
                        }
                    ]}
                >
                    <BlogsDetailsTable translations={translations} details={blogDetails} />
                </Modal>
                <TableControls>
                    <Button
                        onClick={() => exportCsv(blogs, 0)}
                    >{translations.getLL('EXPORT_CSV', 'Export CSV')}</Button>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredBlogs}
                    headers={{
                        'subject': translations.getLL('SUBJECT', 'Subject'),
                        'date': translations.getLL('DATE', 'Date'),
                        'receivers': translations.getLL('RECIPIENTS', 'Recipients'),
                        'clicks': translations.getLL('CLICKS', 'Clicks'),
                        'ctr': translations.getLL('CTR', 'CTR'),
                        'webVisits': translations.getLL('VISITS', 'Visits')
                    }}
                    renderers={{
                        'date': (val) => new Date(val * 1000).toISOString().split('T')[0],
                        'ctr': (val) => `${val}%`
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}

class ReadersTable extends ReportsTable {
    searchColumns = ['email', 'status']

    constructor(props) {
        super({ ...props, tableType: 'readers' })
    }

    render() {
        const { translations, readers, events: { exportCsv } } = this.props,
            { filteredReaders } = this.state
        return (
            <div>
                <TableControls>
                    <Button
                        onClick={() => exportCsv(readers, 4)}
                    >{translations.getLL('EXPORT_CSV', 'Export CSV')}</Button>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [readers.length])}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredReaders}
                    headers={{
                        'email': translations.getLL('EMAIL', 'Email'),
                        'mailsRead': translations.getLL('CLICKS', 'Clicks'),
                        'lastActivity': translations.getLL('LAST_ACTIVITY', 'Last Activity'),
                        'status': translations.getLL('ACTIVITIES', 'Activities')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                    renderers={{
                        'lastActivity': (val) => new Date(val * 1000).toISOString().split('T')[0]
                    }}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}

class TotalsTable extends ReportsTable {
    searchColumns = ['email']
    constructor(props) {
        super({ ...props, tableType: 'totals' })
    }

    render() {
        const { translations, totals, events: { exportCsv } } = this.props,
            { filteredTotals } = this.state
        return (
            <div>
                <TableControls>
                    <Button
                        onClick={() => exportCsv(totals, 1)}
                    >{translations.getLL('EXPORT_CSV', 'Export CSV')}</Button>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [totals.length])}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredTotals}
                    headers={{
                        'emailaddress': translations.getLL('EMAIL', 'Email'),
                        'smrsReceived': translations.getLL('CLICKED_IN_REMINDERS', 'Clicked in Reminders'),
                        'last_activity': translations.getLL('LAST_ACTIVITY', 'Last Activity'),
                        'webVisits': translations.getLL('VISITS', 'Visits')
                    }}
                    renderers={{
                        'smrsReceived': (val, selected, value) => translations.getLL('A_OF_B_REMINDERS_CLICKED', 'Clicked %v1% of the %v2 reminders sent', [value.clickedInRemindersPercentage, val]),
                        'last_activity': (val) => new Date(val * 1000).toISOString().split('T')[0]
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.search}
                />
            </div>
        )
    }
}

class MailingsDetailsTable extends ReportsTable {
    searchColumns = ['email']

    constructor(props) {
        super({ ...props, tableType: 'details' })
    }

    render() {
        const { translations, details } = this.props,
            { filteredDetails } = this.state
        return (
            <div>
                <TableControls>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [details.length])}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredDetails}
                    headers={{
                        'emailaddress': translations.getLL('EMAIL', 'Email'),
                        'clicks': translations.getLL('CLICKS', 'Clicks'),
                        'status': translations.getLL('ACTIVITIES', 'Activities')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                />
            </div>
        )
    }
}

class BlogsDetailsTable extends ReportsTable {
    searchColumns = ['emailaddress']

    constructor(props) {
        super({ ...props, tableType: 'details' })
    }

    render() {
        const { translations, details } = this.props,
            { filteredDetails } = this.state
        return (
            <div>
                <TableControls>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [details.length])}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredDetails}
                    headers={{
                        'emailaddress': translations.getLL('EMAIL', 'Email'),
                        'clicks': translations.getLL('SHARES', 'Shares'),
                        'webVisits': translations.getLL('VISITS', 'Visits')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                />
            </div>
        )
    }
}

class MailingsTable extends ReportsTable {
    searchColumns = ['subject', 'link']

    constructor(props) {
        super({ ...props, tableType: 'mailings' }, { mailingDetails: [] })
    }

    onSelect = async (id, val) => {
        const { events: { getMailingDetails } } = this.props
        if (id && id !== this.state.selected) {
            let mailingDetails = await getMailingDetails(val.id)
            this.setState({ mailingDetails, selected: id })
        }
    }

    render() {
        const { translations, mailings, events: { exportCsv } } = this.props,
            { filteredMailings, selected, mailingDetails } = this.state
        return (
            <div>
                <Modal
                    onDialogClose={() => { this.setState({ selected: false }) }}
                    title={translations.getLL('READERS_FOR_AHA_X', "Readers for AHA '%v1'", [mailings[selected] ? mailings[selected].subject : '' || ''])}
                    open={selected !== false}
                    buttons={[
                        {
                            text: translations.getLL('CANCEL', 'Cancel'),
                            onClick: () => this.setState({ selected: false })
                        },
                        {
                            text: translations.getLL('EXPORT_CSV', 'Export CSV'),
                            onClick: () => exportCsv(mailingDetails, 5)
                        }
                    ]}
                >
                    <MailingsDetailsTable translations={translations} details={mailingDetails} />
                </Modal>
                <TableControls>
                    <Button
                        onClick={() => exportCsv(mailings, 3)}
                    >{translations.getLL('EXPORT_CSV', 'Export CSV')}</Button>
                    <SingleLineTextInput
                        iconLeft={true}
                        value={this.state.search}
                        Icon={SearchIcon}
                        placeholder={translations.getLL('SEARCH_X_LEADS', 'Search %v1 leads', [mailings.length])}
                        onChange={this.updateSearch}
                    />
                </TableControls>
                <Table
                    data={filteredMailings}
                    headers={{
                        'subject': translations.getLL('SUBJECT', 'Subject'),
                        'date': translations.getLL('DATE', 'Date'),
                        'receivers': translations.getLL('RECEIVERS', 'Recipients'),
                        'opens': translations.getLL('OPENS', 'Opens'),
                        'clicks': translations.getLL('CLICKS', 'Clicks'),
                        'ctr': translations.getLL('CTR', 'CTR'),
                        'uitschrijvingen': translations.getLL('UNSUBSCRIPTIONS', 'Unsubscriptions'),
                        'bounces': translations.getLL('BOUNCES', 'Bounces'),
                        'link': translations.getLL('WEBSITE', 'Website')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                    renderers={{
                        'subject': (val) => <div style={{ maxWidth: 100 }}>{val}</div>,
                        'date': (val) => new Date(val * 1000).toISOString().split('T')[0],
                        'link': (val) => <a href={val}>{translations.getLL('CLICK_HERE', 'Click here')}</a>,

                    }}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}