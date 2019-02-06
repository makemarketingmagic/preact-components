import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../../../components/common/scMixins';
import Button from '../../../components/Button';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import SearchIcon from './../../../components/icons/SearchIcon';
import PlusIcon from './../../../components/icons/PlusIcon';
import Table, { SORT_DIRECTION } from '../../../components/Table';
import { debounce } from 'lodash';
import ExpandingSection from './ExpandingSection';
import Dropdown from './../../../components/Dropdown/index';

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
`, NotesControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin: 0 4px;
    }
`

export default class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            filteredNotes: [],
            search: '',
            orderby: 'dateCreated',
            direction: SORT_DIRECTION.DESC,
            selected: false
        }
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    componentDidMount() {
        let { notes } = this.props
        this.setState({ notes, filteredNotes: notes })
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    setOrderBy = (field, direction) => {
        const { notes = [] } = this.props
        if (notes && notes[0] && typeof notes[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    onSelect = (id) => {
        if (id && id !== this.state.selected) {
            this.setState({ selected: id })
        }
    }

    onChangeType = (val) => {
        console.debug(val)
    }

    reloadFilters = () => {
        let { notes } = this.props
        let { direction, orderBy, search } = this.state
        let filteredNotes = notes
        if (search !== '') {
            filteredNotes = filteredNotes.filter((value) => {
                if (value['innerContent'] && value['innerContent'].toLowerCase && value['innerContent'].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                    return true
                } else {
                    return false
                }
            })
        }
        filteredNotes = filteredNotes.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        this.setState({ filteredNotes })
    }

    stripHtmlTags(string) {
        return string.replace(/<.*?>/g, '');
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { notes, filteredNotes } = this.state
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
                    <Title>{translations.getLL('NUMBER_OF_NOTES_WITH_VALUE', 'You have %v1 notes', [<span style={{ color: colors.red }}>{notes.length}</span>])}</Title>
                    <NotesControls>
                        <Button
                            secondary={true}
                            Icon={PlusIcon}
                            iconLeft={true}
                        >
                            {translations.getLL('NEW', 'New')}
                        </Button>
                        <SingleLineTextInput
                            iconLeft={true}
                            value={this.state.search}
                            Icon={SearchIcon}
                            placeholder={translations.getLL('SEARCH_X_NOTES', 'Search %v1 notes', [notes.length])}
                            onChange={this.updateSearch}
                        />
                    </NotesControls>
                </TitleArea>
                <Table
                    data={filteredNotes}
                    headers={{
                        innerContent: translations.getLL('NOTE', 'Note'),
                        dateCreated: translations.getLL('CREATED', 'Created'),
                        private: translations.getLL('TYPE', 'Type')
                    }}
                    renderers={{
                        innerContent: (value) => (<span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{this.stripHtmlTags(value)}</span>),
                        dateCreated: (value) => value,
                        private: (value, selected) =>
                            selected ?
                                (<Dropdown options={[
                                    { name: 'false', text: translations.getLL('PUBLIC', 'Public'), selected: value === 'false' },
                                    { name: 'true', text: translations.getLL('PRIVATE', 'Private'), selected: value === 'true' }
                                ]} onChange={(val) => {
                                    this.onChangeType(val)
                                }} />) :
                                value == 'true' ? translations.getLL('PRIVATE', 'Private') : translations.getLL('PUBLIC', 'Public')
                    }}
                    events={{
                        setOrderBy: this.setOrderBy
                    }}
                    hasExpandingSection={true}
                    ExpandingSection={ExpandingSection}
                    expandingSectionProps={{
                        translations
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