import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../../../components/common/scMixins';
import Table, { SORT_DIRECTION } from '../../../components/Table';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import SearchIcon from './../../../components/icons/SearchIcon';
import UploadIcon from './../../../components/icons/UploadIcon';
import Button from './../../../components/Button/index';
import IconButton from '../../../components/IconButton';
import DownloadArrow from './../../../components/icons/DownloadArrow';
import CrossIcon from './../../../components/icons/CrossIcon';
import DotsIcon from './../../../components/icons/DotsIcon';
import TickIcon from './../../../components/icons/TickIcon';
import DragDropZone from './../../../components/DragDropZone/index';
import { debounce } from 'lodash';

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
`, FilesControls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin: 0 4px;
    }
`, FileButtons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    button {
        margin: 0 4px;
    }
`, FileNameEdit = styled.div`
    width: 100%;
`
export default class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            filteredFiles: [],
            editFileName: '',
            orderBy: 'date_uploaded',
            direction: SORT_DIRECTION.ASC,
            search: '',
            selected: false
        }
        this.changeSearch = debounce(this.reloadFilters.bind(this), 500)
    }

    reloadFilters = () => {
        let { files } = this.props
        let { direction, orderBy, search } = this.state
        let filteredFiles = files
        if (search !== '') {
            filteredFiles = filteredFiles.filter((value) => {
                if (value['file_name'] && value['file_name'].toLowerCase && value['file_name'].toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                    return true
                } else {
                    return false
                }
            })
        }
        filteredFiles = filteredFiles.sort((a, b) => {
            let field1 = a[orderBy],
                field2 = b[orderBy]
            return direction ? (field1 > field2 ? 1 : -1) : (field1 > field2 ? -1 : 1)
        })
        this.setState({ filteredFiles })
    }

    setOrderBy = (field, direction) => {
        const { files = [] } = this.props
        if (files && files[0] && typeof files[0][field] !== 'undefined') {
            this.setState({ orderBy: field, direction })
            this.reloadFilters()
        }
    }

    onSelect = (id, editFileName) => {
        if (id && id !== this.state.selected) {
            this.setState({ selected: id, editFileName })
        }
    }

    onFileNameChange = (editFileName) => {
        this.setState({ editFileName })
    }

    saveFilename = (file, newFileName) => {
        const { events: { saveFile = false } } = this.props
        if (saveFile) {
            saveFile(file, newFileName)
        }
        this.setState({ selected: false, editFileName: '' })
    }

    openFile = (file) => {
        const { events: { downloadFile = false } } = this.props
        if (downloadFile) {
            downloadFile(file)
        }
    }

    deleteFile = (file) => {
        const { events: { deleteFile = false } } = this.props
        if (deleteFile) {
            deleteFile(file)
        }
    }

    updateSearch = ({ value }) => {
        this.setState({ search: value }, () => {
            this.changeSearch()
        })
    }

    onDrop = (file) => {

    }

    componentDidMount() {
        let { files } = this.props
        this.setState({ files, filteredFiles: files })
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { files, filteredFiles } = this.state
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
                    <Title>{translations.getLL('NUMBER_OF_FILES_WITH_VALUE', 'You have %v1 files', [<span style={{ color: colors.red }}>{files.length}</span>])}</Title>
                    <FilesControls>
                        <DragDropZone
                            multiple={true}
                            onDrop={this.onDrop}
                            style={{}}
                            activeStyle={{}}
                            rejectStyle={{}}
                        >
                            <Button
                                secondary={true}
                                Icon={UploadIcon}
                                iconLeft={true}
                            >
                                {translations.getLL('UPLOAD', 'Upload')}
                            </Button>
                        </DragDropZone>
                        <SingleLineTextInput
                            iconLeft={true}
                            value={this.state.search}
                            Icon={SearchIcon}
                            placeholder={translations.getLL('SEARCH_X_FILES', 'Search %v1 files', [files.length])}
                            onChange={this.updateSearch}
                        />
                    </FilesControls>
                </TitleArea>
                <DragDropZone
                    multiple={true}
                    onDrop={this.onDrop}
                    disableClick={true}
                    style={{
                        borderWidth: 2,
                        borderColor: 'transparent',
                        borderStyle: 'dashed',
                        borderRadius: 16,
                    }}
                    activeStyle={{
                        borderStyle: 'solid',
                        borderColor: colors.placeholder
                    }}
                    rejectStyle={{
                        borderStyle: 'solid',
                        borderColor: colors.red
                    }}
                >
                    <Table
                        data={filteredFiles}
                        headers={{
                            'file_name': translations.getLL('FILENAME', 'File Name'),
                            'extension': translations.getLL('EXTENSION', 'Extension'),
                            'uploaded_by': translations.getLL('CREATED_BY', 'Created By'),
                            'date_uploaded': translations.getLL('CREATED_ON', 'Created On'),
                            // Need to render an empty column so pick one that's not been used
                            'id': ''
                        }}
                        events={{
                            setOrderBy: this.setOrderBy
                        }}
                        selected={this.state.selected}
                        selectedBackground={colors.white}
                        renderers={{
                            'date_uploaded': (val) => { return new Date(val * 1000).toISOString().split('T')[0] },
                            'file_name': (keyVal, selected, value) => {
                                return selected ? (
                                    <FileNameEdit>
                                        <SingleLineTextInput value={this.state.editFileName} onChange={
                                            ({ value }) =>
                                                this.onFileNameChange(value)
                                        }
                                        />

                                    </FileNameEdit>
                                ) :
                                    keyVal
                            },
                            'id': (id, selected, value) => {
                                return (
                                    <FileButtons>
                                        {selected ? <IconButton
                                            title={translations.getLL('SAVE_FILENAME', 'Save Filename')}
                                            Icon={TickIcon}
                                            onClick={() => {
                                                this.saveFilename(value, this.state.editFileName)
                                            }}
                                        /> : <IconButton
                                                title={translations.getLL('EDIT_FILENAME', 'Edit Filename')}
                                                Icon={DotsIcon}
                                                onClick={() => { this.onSelect(id, value.file_name) }}
                                            />}
                                        <IconButton
                                            title={translations.getLL('DOWNLOAD_FILE', 'Download File')}
                                            Icon={DownloadArrow}
                                            onClick={() => { this.openFile(value) }}
                                        />
                                        <IconButton
                                            title={translations.getLL('DELETE_FILE', 'Delete File')}
                                            Icon={CrossIcon}
                                            onClick={() => { this.deleteFile(value) }}
                                        />
                                    </FileButtons>
                                )
                            }
                        }}
                        orderBy={this.state.orderBy}
                        direction={this.state.direction}

                    />
                </DragDropZone>
            </div>
        )
    }
}