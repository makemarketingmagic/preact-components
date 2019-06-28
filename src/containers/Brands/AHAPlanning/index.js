import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../../../components/common/scMixins';
import Button from './../../../components/Button/index';
import Table, { SORT_DIRECTION } from '../../../components/Table';
import { Modal } from '../../../components/Modal';
import { returnAhaStateName, AHA_SENDING_STATES } from '../MockFunctions';
import FilterIcon from './../../../components/icons/FilterIcon';
import Checkboxes from '../../../components/Checkboxes';
import DatePicker from '../../../components/DatePicker';
import Label from '../../../components/Label';
import Helmet from "preact-helmet";

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
`, AHAControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin: 0 4px;
    }
`, Group = styled.div`
    margin: 19px 8px;
`

export default class AHAPlanning extends Component {
    constructor(props) {
        super(props)
        let d = new Date()
        this.state = {
            AHAs: [],
            filteredAHAs: [],
            statusFilter: [],
            startDateFilter: new Date(new Date().setMonth((12 + (d.getMonth() - 1)) % 12)),
            endDateFilter: new Date(new Date().setMonth((12 + (d.getMonth() + 1)) % 12)),
            orderBy: 'aha_sending_id',
            direction: SORT_DIRECTION.ASC,
            selected: false,
            dialogOpen: false
        }
    }

    reloadFilters = () => {
        let { AHAs } = this.props
        let { direction, orderBy, startDateFilter, endDateFilter, statusFilter } = this.state
        let filteredAHAs = AHAs
        let willStatusFilter = statusFilter.length > 0
        filteredAHAs = filteredAHAs.filter((val) => {
            const d = new Date(val['aha_sending_date'])
            let statusFilterResult = true
            if (willStatusFilter) {
                statusFilterResult = statusFilter.indexOf(parseInt(val['aha_sending_state'])) >= 0
            }
            return startDateFilter <= d && d <= endDateFilter && statusFilterResult
        })
        filteredAHAs = filteredAHAs.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            if (orderBy === 'aha_sending_date') {
                field1 = new Date(field1)
                field2 = new Date(field2)
                direction = !direction
            } else if (orderBy === 'aha_sending_name') {
                field1 = field1.toLowerCase()
                field2 = field2.toLowerCase()
            }
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        this.setState({ filteredAHAs })
    }

    setOrderBy = (field, direction) => {
        const { AHAs = [] } = this.props
        if (AHAs && AHAs[0] && typeof AHAs[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    onSelect = (id, value) => {
        const { events: { onSelect } } = this.props
        onSelect ? onSelect(value) :
            window.location.hash = window.location.href.replace('planning', 'manager').replace(window.location.origin + '/', '') + '/' + value['aha_sending_id']
    }

    componentDidMount() {
        this.getAllAHAs()
    }

    getAllAHAs() {
        this.setState({ loading: true }, async () => {
            const { events: { getAllAHAs } } = this.props
            let AHAs = getAllAHAs ? await getAllAHAs() : this.props.AHAs
            this.setState({ AHAs, filteredAHAs: AHAs, loading: false })
        })
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { AHAs, filteredAHAs } = this.state
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
                <Helmet title={`${translations.getLL('AHA_PLANNING', 'AHA Planning')} | WOO`} />
                <TitleArea>
                    <Modal
                        open={this.state.dialogOpen}
                        onDialogClose={() => { this.setState({ dialogOpen: false }) }}
                        title={translations.getLL('FILTER', 'Filter')}
                        buttons={[
                            {
                                text: translations.getLL('DONE', 'Done'), onClick: () => {
                                    this.setState({ dialogOpen: false })
                                    this.reloadFilters()
                                }
                            }
                        ]}
                        containerProperties={{
                            paddingLeft: 32,
                            paddingRight: 32
                        }}
                    >
                        <Group>
                            <Label>{translations.getLL('STATUS', 'Status')}</Label>
                            <Checkboxes
                                options={AHA_SENDING_STATES.map((val) => {
                                    return {
                                        label: translations.getLL(val.TITLE_TRANSLATION_LABEL, val.TITLE),
                                        data: val.ID,
                                        selected: this.state.statusFilter.length === 0 || this.state.statusFilter.indexOf(val.ID) >= 0
                                    }
                                })}
                                onChange={(value) => {
                                    this.setState({
                                        statusFilter: value.reduce((acc, val) => {
                                            if (val.selected) {
                                                acc.push(val.data)
                                            }
                                            return acc
                                        }, [])
                                    })
                                }}
                            />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('FILTER_START_DATE', 'Start Date')}</Label>
                            <DatePicker value={this.state.startDateFilter.toISOString().split('T')[0]} onChange={({ value }) => { this.setState({ startDateFilter: new Date(value) }) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('FILTER_END_DATE', 'End Date')}</Label>
                            <DatePicker value={this.state.endDateFilter.toISOString().split('T')[0]} onChange={({ value }) => { this.setState({ endDateFilter: new Date(value) }) }} />
                        </Group>
                    </Modal>
                    <Title>{translations.getLL('NUMBER_OF_AHAs_WITH_VALUE', 'You have %v1 AHAs', [<span style={{ color: colors.red }}>{AHAs.length}</span>])}</Title>
                    <AHAControls>
                        <Button
                            secondary={true}
                            Icon={FilterIcon}
                            iconLeft={true}
                            onClick={() => { this.setState({ dialogOpen: true }) }}
                        >
                            {translations.getLL('FILTER', 'Filter')}
                        </Button>
                    </AHAControls>
                </TitleArea>
                <Table
                    data={filteredAHAs}
                    headers={{
                        'aha_sending_id': translations.getLL('AHA_NUMBER', 'AHA #'),
                        'aha_sending_name': translations.getLL('TOPIC', 'Topic'),
                        'aha_sending_date': translations.getLL('SENDING_DATE', 'Sending Date'),
                        'aha_sending_status': translations.getLL('STATUS', 'Status')
                    }}
                    renderers={{
                        'aha_sending_status': (value) => returnAhaStateName(value, translations)
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    selected={this.state.selected}
                    onSelect={this.onSelect}
                    orderBy={this.state.orderBy}
                    direction={this.state.direction}
                />
            </div>
        )
    }
}