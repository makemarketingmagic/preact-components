import { h, Component } from 'preact'
import styled from 'styled-components'
import MultiLineTextInput from './../MultiLineTextInput/index';
import IconButton from '../IconButton';
import TickIcon from './../icons/TickIcon';
import CrossIcon from './../icons/CrossIcon';
import { colors } from '../common/scMixins';

const Comment = styled.div`
    padding: 18px 24px;
    background: #F2F8FA;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    
`, CommentContainer = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: ${props => props.position.clickY}px;
    left: ${props => props.position.clickX}px;
    transform: translate(-50%, 15px);
    &::before {
        content: '';
        width: 0;
        height: 0;
        align-self: center;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        
        border-bottom: 15px solid #F2F8FA;
    }
`, AnnotationEl = styled.span`
    background-color: ${props => props.secondaryHighlight ? 'transparent' : 'rgba(238, 64, 85, .28)'};
    outline: 1px dotted ${props => props.secondaryHighlight ? 'rgba(238, 64, 85, 1)' : 'transparent'};
`

export default class Annotator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            selectedIndex: -1,
            clickX: 0,
            clickY: 0
        }
        this.blocks = []
    }

    buildHtml = (text, highlights) => {
        let rest = text,
            indexOffset = 0,
            result = []
        const { clickX, clickY } = this.state,
            { readOnly = true, updateHighlight, deleteHighlight } = this.props
        highlights = highlights.sort((a, b) => {
            return a.index - b.index
        })
        let alt = false
        for (let i in highlights) {
            let { index, length, comment } = highlights[i],
                secondaryHighlight = false,
                before = text.substring(0, index - indexOffset),
                content = text.substring(index - indexOffset, (index + length) - indexOffset)
            text = text.substring((index + length) - indexOffset)
            indexOffset = index + length

            if (before) { result.push(<span>{before}</span>) }
            else if (!before && !alt) {
                secondaryHighlight = true
                alt = true
            }
            else {
                alt = false
            }
            result.push(
                <Annotation
                    secondaryHighlight={secondaryHighlight}
                    index={i}
                    readOnly={readOnly}
                    comment={comment}
                    position={{ clickX, clickY }}
                    open={this.state.open === index}
                    updateHighlight={updateHighlight}
                    deleteHighlight={deleteHighlight}
                    onSelect={(e) => this.selectAnnotation(index, e, i)}
                    onDone={this.onDone}
                >{content}</Annotation>
            )
        }
        result.push(text)
        this.blocks = result
        return result
    }

    onDone = () => {
        this.setState({ open: false, selectedIndex: -1 })
    }

    selectAnnotation = (id, e, index) => {
        this.setState({ open: id, clickX: e.clientX, clickY: e.clientY, selectedIndex: index })
    }

    getSelection = (e) => {
        const selection = window.getSelection(),
            { addHighlight } = this.props
        let position = selection.anchorNode.compareDocumentPosition(selection.focusNode),
            backwards = false;
        // position == 0 if nodes are the same
        if (!position && selection.anchorOffset > selection.focusOffset ||
            position === Node.DOCUMENT_POSITION_PRECEDING) {
            backwards = true
        }
        if (selection.toString() && selection.baseNode === selection.extentNode) {
            let found = false,
                highlight = {
                    index: this.blocks.reduce((acc, val) => {
                        if (found) {
                            return acc
                        }
                        if (val === selection.baseNode.textContent) {
                            found = true
                            return acc += backwards ? selection.extentOffset : selection.baseOffset
                        }
                        return acc += val.children ? val.children[0].length : 0
                    }, 0),
                    length: selection.toString().length,
                    comment: ''
                }
            if (addHighlight) {
                let i = addHighlight(highlight)
                this.selectAnnotation(highlight.index, e, i)
            }
        }
    }

    render() {
        const {
            text = 'Testing this thing 1 2 3 1 2 3 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
            highlights = [
                { index: 5, length: 6, comment: 'This is a comment' },
                { index: 23, length: 10, comment: 'This is another comment' },
                { index: 68, length: 162, comment: '' }
            ],
            readOnly = false
        } = this.props
        return (
            <div onMouseUp={!readOnly ? this.getSelection : null}>
                {this.buildHtml(text, highlights)}
            </div>
        )
    }
}

class Annotation extends Component {
    onClick = (e) => {
        const { onSelect } = this.props
        onSelect(e)
    }

    onChange = ({ value }) => {
        const { index, updateHighlight } = this.props
        if (updateHighlight) {
            updateHighlight(value, index)
        }
    }

    onDelete = () => {
        const { index, deleteHighlight } = this.props
        if (deleteHighlight) {
            deleteHighlight(index)
        }
    }

    render() {
        const { children, comment, open, position, readOnly, onDone, secondaryHighlight } = this.props
        return (
            <AnnotationEl secondaryHighlight={secondaryHighlight} onMouseUo={(e) => {
                e.stopPropogation()
                e.preventDefault()
            }} onClick={this.onClick}>
                {children}
                <CommentContainer onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }} position={position} open={open}>
                    {readOnly ?
                        (<Comment>
                            {comment}
                        </Comment>) : (
                            <Comment>
                                <MultiLineTextInput initialValue={comment} onChange={this.onChange} />
                                <IconButton
                                    background={colors.white}
                                    Icon={TickIcon}
                                    onClick={onDone}
                                />
                                <IconButton
                                    background={colors.white}
                                    secondary={true}
                                    Icon={CrossIcon}
                                    onClick={this.onDelete}
                                />
                            </Comment>
                        )}
                </CommentContainer>
            </AnnotationEl>
        )
    }
}