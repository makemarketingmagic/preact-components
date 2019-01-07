import { h, Component } from 'preact'
import DragDropZone from './../DragDropZone/index';
import styled from 'styled-components'
import { components } from './../ExpandableMarkdownSection/index';
import Markdown from 'preact-markdown';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`,
    LeftContainer = styled.div`
        flex: 1 0 66%;
`,
    RightContainer = styled.div`
        flex: 1 0 33%;
`

export default class UploadSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            fileName: '',
            size: 0,
            files: []
        }
    }

    onChange = ([first, ...rest]) => {
        const { onChange } = this.props,
            { name, size } = first
        if (rest.length === 0) {
            this.setState({ fileName: name, size, selected: true })
        } else {
            const files = [first, ...rest].map((val) => ({ fileName: val.name, size: val.size }))
            this.setState({ selected: true, files })
        }
        this.props.test = true
        onChange && onChange({ value: [first, ...rest], valid: true })

    }

    render() {
        const { multiple = false, minSize = 0, maxSize = 5000000, accept = 'text/*', content } = this.props
        const { selected } = this.state
        return (
            <Container>
                <LeftContainer>
                    <Markdown markdown={content} markupOpts={{
                        components,
                        allowEvents: true
                    }} />
                </LeftContainer>
                <RightContainer>
                    <DragDropZone
                        multiple={multiple}
                        minSize={minSize}
                        maxSize={maxSize}
                        accept={accept}
                        onDrop={this.onChange}
                    >
                        <span style={{ flex: 1, textAlign: 'center' }}>{this.renderInfoOrFileDetails(selected)}</span>
                    </DragDropZone>
                </RightContainer>
            </Container>
        )
    }

    renderMultipleFileDetails(files) {
        const size = files.reduce((acc, val) => acc + val.size, 0)
        return this.renderFileDetails(size)
    }

    renderFileDetails(size) {
        const suffixes = ['B', 'KB', 'MB', 'GB']
        let factor = 1,
            tempSize = size
        while (tempSize > 1000) {
            tempSize = tempSize / 1000
            factor += 1
        }

        tempSize = Math.round(tempSize * 10) / 10

        return `${tempSize} ${suffixes[factor - 1]}`
    }

    renderInfoOrFileDetails() {
        const { selected, files, fileName, size } = this.state
        return selected ?
            files.length <= 1 ?
                `${fileName} selected, ${this.renderFileDetails(size)}` :
                `${files.length} files selected, ${this.renderMultipleFileDetails(files)} total`
            : 'Click here to select a file or drag and drop it in the area'
    }
}