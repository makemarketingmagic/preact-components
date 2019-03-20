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
            selected: false,
            loading: false
        }
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    componentDidMount() {
        let { notes } = this.props
        this.getNotes()
        //this.setState({ notes, filteredNotes: notes })
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    getNotes = async () => {
        this.setState({ loading: true }, async () => {
            const { events: { getNotes = null } } = this.props
            let notes = getNotes ? await getNotes() : this.props.notes
            this.setState({ notes, filteredNotes: notes, loading: false })
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
            let selectedNote = this.state.notes.filter((value) => value.id === id)[0] || false
            if (selectedNote) {
                this.setState({ selected: id, selectedNote })
            }
        }
    }

    onChangeType = (val) => {
        let { selectedNote } = this.state
        selectedNote.private = val
        this.setState({ selectedNote })
        debugger
    }

    reloadFilters = () => {
        let { notes } = this.state
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

    deleteNote = async (note) => {
        this.setState({ loading: true }, async () => {

            const { events: { deleteNote = null } } = this.props
            await deleteNote(note)
            return await this.getNotes()
        })
    }

    updateNote = async (note) => {
        this.setState({ loading: true }, async () => {
            const { events: { updateNote = null } } = this.props
            const { selectedNote } = this.state
            if (note.private !== selectedNote.private) {
                note.private = selectedNote.private
            }
            await updateNote(note)
            return await this.getNotes()
        })
    }

    addNote = async () => {
        this.setState({ loading: true }, async () => {
            const { events: { createNote = null } } = this.props
            await createNote()
            return await this.getNotes()
        })
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { notes, filteredNotes, loading } = this.state
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
                            disabled={loading}
                            iconLeft={true}
                            onClick={this.addNote}
                        >
                            {translations.getLL('NEW', 'New')}
                        </Button>
                        <SingleLineTextInput
                            iconLeft={true}
                            value={this.state.search}
                            disabled={loading}
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
                                (<Dropdown
                                    disabled={loading}
                                    options={[
                                        { value: 'false', text: translations.getLL('PUBLIC', 'Public'), selected: value === 'false' },
                                        { value: 'true', text: translations.getLL('PRIVATE', 'Private'), selected: value === 'true' }
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
                        translations,
                        deleteNote: this.deleteNote,
                        updateNote: this.updateNote,
                        loading
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