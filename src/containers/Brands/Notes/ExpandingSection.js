import { h, Component } from 'preact'
import styled from 'styled-components'
import Quill from 'quill'
import Button from '../../../components/Button';
import TickIcon from './../../../components/icons/TickIcon';
import CrossIcon from './../../../components/icons/CrossIcon';

const Container = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
`, Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 16px;
    button {
        margin: 0 8px;
    }
`

export default class ExpandingSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            innerContent: '',
            init: false
        }
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
        const note = this.props.data
        this.setState({ innerContent: '' }, () => {
            this.setState({ innerContent: note.innerContent }, () => {

                setTimeout(() => {
                    this.quill = new Quill('#quill-container', {
                        modules: {
                            toolbar: [
                                [{ header: [1, 2, false] }],
                                ['bold', 'italic', 'underline'],
                                ['image', 'code-block']
                            ]
                        },
                        placeholder: 'Compose an epic...',
                        theme: 'snow'  // or 'bubble'
                    })
                }, 500)
            })
        })
    }

    updateContent = ({ value }) => {
        this.setState({ innerContent: value })
    }

    onSave = () => {
        this.setState({ innerContent: this.quill.root.innerHTML })
        console.debug(this.state.innerContent)
    }

    onDelete = () => {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        const { translations } = this.props
        return (
            <Container>
                <div>
                    <div id="quill-container" dangerouslySetInnerHTML={{ __html: this.props.data.innerContent }} />
                </div>
                <Buttons>
                    <Button
                        primary={true}
                        onClick={() => {
                            this.onSave()
                        }}
                        iconLeft={true}
                        Icon={TickIcon}
                    >
                        {translations.getLL('SAVE_NOTE', 'Save Note')}
                    </Button>
                    <Button
                        secondary={true}
                        onClick={() => {
                            this.onDelete()
                        }}
                        iconLeft={true}
                        Icon={CrossIcon}
                    >
                        {translations.getLL('DELETE_NOTE', 'Delete Note')}
                    </Button>
                </Buttons>
                {/* <Editor renderMark={this.renderMark} renderNode={this.renderNode} value={this.state.innerContent} onChange={this.updateContent} /> */}
            </Container>
        )
    }
}