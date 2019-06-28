import { h, Component } from 'preact'
import styled from 'styled-components'
import MultiLineTextInput from './../MultiLineTextInput/index';
import IconButton from '../IconButton';
import TickIcon from './../icons/TickIcon';
import CrossIcon from './../icons/CrossIcon';
import { colors } from '../common/scMixins';
import marked from 'marked'
import * as HtmlService from '../common/HTMLParser'
import Markdown from 'preact-markdown';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

const Comment = styled.div`
    padding: 18px 24px;
    background: #F2F8FA;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    
`, CommentContainer = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: ${props => props.position.clicky}px;
    left: ${props => props.position.clickx}px;
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
`, ButtonArea = styled.div`
    display: flex;
    justify-content: center;
     
    & > button {
        margin: 8px;
    }
`

const components = {
    ReactAnnotation: (props) => {
        return <Annotation {...props} />
    }
}
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
        this.ref = null
    }

    objectToHtmlAttrs = (obj) => {
        return Object.entries(obj).map(([key, value]) => {
            return typeof value === 'object' ? this.objectToHtmlAttrs(value) :
                `${key}="${value.toString()}"`
        }).join(' ')
    }

    wrapHtmlTags = (selection, startId, htmlClass, attributes) => {
        var WRAP_HTML_END = `</ReactAnnotation>`;
        /* Variables */

        var workString = selection;
        var firstPart = '';
        var lastPart = '';
        var tag = '';
        var wrappedTag = '';
        var start = 0;
        var tagLength = 0;
        var allTags = htmlClass.getAllHtml(workString);
        var end = 0;
        let hasCommentContainer = true
        let attributeString = this.objectToHtmlAttrs({ ...attributes, hasCommentContainer })
        var WRAP_HTML_START = `<ReactAnnotation ${attributeString}>`;
        /* This needs to be done back to front to prevent index corruption */
        for (var i = allTags.length - 1; i >= 0; i--) {

            attributeString = this.objectToHtmlAttrs({ ...attributes, hasCommentContainer })
            WRAP_HTML_START = `<ReactAnnotation ${attributeString}>`;
            hasCommentContainer = false
            /* Get the tag */
            tag = allTags[i][0];

            start = allTags[i].index;
            end = start + tag.length;

            /* Wrap the tag inside a specific string */
            wrappedTag = WRAP_HTML_END + tag + WRAP_HTML_START;

            /* Replace the old tag with the wrapped tag */
            workString = htmlClass.replaceStrip(workString, wrappedTag, start, end);
        }

        /* Finally: wrap the string in beginning and end */
        workString =
            WRAP_HTML_START +
            workString +
            WRAP_HTML_END;

        return workString;
    }

    buildHtml = (text, highlights) => {
        highlights = highlights.sort((a, b) => {
            return b.start - a.start
        })

        let html = marked.inlineLexer(text, [], {}),
            secondaryHighlight = false
        html = html.replace(/\r?\n|\r/g, '<br/>')
        const { clickX, clickY } = this.state,
            htmlClass = new HtmlService.ParsedHtmlClass(html),
            { readOnly = true, updateHighlight, deleteHighlight } = this.props
        for (let i in highlights) {
            let { start, end, content, comment } = highlights[i],
                highlight = highlights[i],
                htmlStart = 0,
                htmlEnd = 0,
                htmlStrip = ''
            htmlStart = htmlClass.getIndexInHtml(start)
            htmlEnd = htmlClass.getIndexInHtml(end)
            if (highlights[i - 1] && highlights[i - 1].end === start) {
                secondaryHighlight = true
            }
            let attributes = {
                secondaryHighlight,
                index: i,
                readOnly,
                comment,
                position: { clickX, clickY },
                open: this.state.open === start,
                start,
                content,
            }
            secondaryHighlight = false
            htmlStrip = this.wrapHtmlTags(
                htmlClass.reconstructPartOfHtml(start, end), start, htmlClass, attributes
            )
            html = htmlClass.replaceStrip(html, htmlStrip, htmlStart, htmlEnd)
        }
        let react = ReactHtmlParser(html, {
            transform: (node, index) => {
                if (node.name === 'reactannotation') {
                    return (<Annotation {...node.attribs}
                        // secondaryHighlight={secondaryHighlight}
                        // index={i}
                        // readOnly={readOnly}
                        // comment={comment}
                        // position={{ clickX, clickY }}
                        // open={this.state.open === index}
                        updateHighlight={updateHighlight}
                        deleteHighlight={deleteHighlight}
                        onSelect={(e) => this.selectAnnotation(parseInt(node.attribs.start), e)}
                        onDone={this.onDone}
                    // content={content}
                    >{node.children[0] && convertNodeToElement(node.children[0])}</Annotation>)
                }
            }
        })
        return react
    }
    // let rest = text,
    //     indexOffset = 0,
    //     result = []
    // const { clickX, clickY } = this.state,
    //     { readOnly = true, updateHighlight, deleteHighlight } = this.props
    // highlights = highlights.sort((a, b) => {
    //     return a.start - b.start
    // })
    // text = marked.inlineLexer(text, [], {})
    // let alt = false,
    //     secondaryHighlight = false
    // for (let i in highlights) {
    //     const htmlClass = new HtmlService.ParsedHtmlClass(text)
    //     let { start, end, content, comment } = highlights[i],
    //         highlight = highlights[i],
    //         htmlStart = 0,
    //         htmlEnd = 0,
    //         htmlStrip = ''
    //     htmlStart = htmlClass.getIndexInHtml(start)
    //     htmlEnd = htmlClass.getIndexInHtml(end)
    //     if (highlights[i - 1] && highlights[i - 1].end === start) {
    //         secondaryHighlight = true
    //     }
    //     let attributes = {
    //         secondaryHighlight,
    //         index: i,
    //         readOnly,
    //         comment,
    //         position: { clickX, clickY },
    //         open: this.state.open === start,
    //         content,
    //     }
    //     secondaryHighlight = false
    //     htmlStrip = this.wrapHtmlTags(
    //         htmlClass.reconstructPartOfHtml(start, end), start, htmlClass, attributes
    //     )

    //     text = htmlClass.replaceStrip(text, htmlStrip, htmlStart, htmlEnd)
    // let { start, end, length, comment } = highlights[i],
    //     secondaryHighlight = false,
    //     before = text.substring(0, index - indexOffset),
    //     content = text.substring(index - indexOffset, (index + length) - indexOffset)
    // text = text.substring((index + length) - indexOffset)
    // indexOffset = index + length

    // if (before) { result.push(<span dangerouslySetInnerHTML={{ __html: before }}></span>) }
    // else if (!before && !alt) {
    //     secondaryHighlight = true
    //     alt = true
    // }
    // else {
    //     alt = false
    // }
    // result.push(
    //     <Annotation
    //         secondaryHighlight={secondaryHighlight}
    //         index={i}
    //         readOnly={readOnly}
    //         comment={comment}
    //         position={{ clickX, clickY }}
    //         open={this.state.open === index}
    //         updateHighlight={updateHighlight}
    //         deleteHighlight={deleteHighlight}
    //         onSelect={(e) => this.selectAnnotation(index, e, i)}
    //         onDone={this.onDone}
    //         content={content}
    //     ></Annotation>
    // )
    //     }
    //     // let test = new HtmlService.ParsedHtmlClass(text)
    //     result.push(<span dangerouslySetInnerHTML = {{ __html: text }} />)
    // this.blocks = result
    // // return test.compileReact()
    // return text
    //     }

    onDone = () => {
        this.setState({ open: false, selectedIndex: -1 })
    }

    selectAnnotation = (id, e) => {
        this.setState({ open: id, clickX: e.layerX, clickY: e.layerY })
    }

    getStartingPosition = () => {
        var originalNode = null;
        var wrapper = this.ref
        var range, html;
        var preSelectionRange;
        var start;
        var strippedRange;

        if (window.getSelection && window.getSelection().getRangeAt) {
            range = window.getSelection().getRangeAt(0);
            preSelectionRange = range.cloneRange();
            preSelectionRange.selectNodeContents(wrapper);
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
            strippedRange = preSelectionRange.toString().replace(/(?:\r\n|\r|\n)/g, ''); // Make sure to strip the newlineslength;
            start = strippedRange.length;
            return start;
        } else {
            return -1;
        }
    }


    getSelection = (e) => {
        const checkForOverlap = (highlight) => {
            const { highlights } = this.props
            return highlights.reduce((acc, val) => {
                if (acc) return acc
                /* 1. Is the beginning of the new highlight lower or equal to the beginning of the current highlight
                * and is the end of the new higlight greater than the beginning of the current highlight? */
                if (highlight.start <= val.start && highlight.end > val.start) {
                    return true;
                }

                /* 2. Is the end of the new highlight lower or equal to the end of the current highlight
                * and is the start of the new highlight lower than the end of the current highlight? */
                if (highlight.end >= val.end && highlight.start < val.end) {
                    return true;
                }

                /* 3. Is the start of the new highglight higher or equal to the current highlight
                * and is the end of the new highlight lower or equal to the end of the current highlight? */
                if (highlight.start >= val.start && highlight.end <= val.end) {
                    return true;
                }
            }, false)
        }
        const selection = window.getSelection(),
            { addHighlight } = this.props,
            range = selection.getRangeAt(0),
            text = selection.toString().replace(/\r?\n|\r/g, ''),
            start = this.getStartingPosition(),
            end = start + text.length,
            highlight = {
                start,
                end,
                content: text,
                comment: ''
            }

        if (addHighlight && !checkForOverlap(highlight)) {
            let i = addHighlight(highlight)
            this.selectAnnotation(highlight.start, e)
            window.getSelection().removeAllRanges()
        }
        // const selection = window.getSelection(),
        //     { addHighlight } = this.props
        // let position = selection.anchorNode.compareDocumentPosition(selection.focusNode),
        //     backwards = false;
        // // position == 0 if nodes are the same
        // if (!position && selection.anchorOffset > selection.focusOffset ||
        //     position === Node.DOCUMENT_POSITION_PRECEDING) {
        //     backwards = true
        // }
        // if (selection.toString()/* && selection.baseNode === selection.extentNode*/) {
        //     let found = false,
        //         highlight = {
        //             index: this.blocks.reduce((acc, val) => {
        //                 if (found) {
        //                     return acc
        //                 }
        //                 if (val === selection.baseNode.textContent) {
        //                     found = true
        //                     return acc += backwards ? selection.extentOffset : selection.baseOffset
        //                 }
        //                 return acc += val.children ? val.children[0].length : 0
        //             }, 0),
        //             length: selection.toString().length,
        //             comment: ''
        //         }
        // if (addHighlight) {
        //     let i = addHighlight(highlight)
        //     this.selectAnnotation(highlight.index, e, i)
        // }
        // }
    }

    render() {
        const {
            text = '**Testing** this thing 1 2 3 1 2 3 **Lorem** ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
            highlights = [
                { start: 5, end: 22, content: "ng this thing 1 2", comment: "" }
                // { index: 5, length: 6, comment: 'This is a comment' },
                // { index: 23, length: 10, comment: 'This is another comment' },
                // { index: 68, length: 162, comment: '' }
            ],
            readOnly = false
        } = this.props
        return (
            <div ref={(ref) => this.ref = ref} onMouseUp={!readOnly ? (e) => this.getSelection(e) : null}>
                {this.buildHtml(text, highlights)}

            </div>
        )
    }
}

export class Annotation extends Component {
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
        let { hascommentcontainer = true, children, comment = '', open = false, clickx = 0, clicky = 0, readonly = true, onDone, secondaryhighlight = false } = this.props
        open = open === 'true'
        clickx = parseInt(clickx)
        clicky = parseInt(clicky)
        readonly = readonly === 'true'
        secondaryhighlight = secondaryhighlight === 'true'
        hascommentcontainer = hascommentcontainer === 'true'

        return (
            <AnnotationEl secondaryHighlight={secondaryhighlight} onMouseUp={(e) => {
                e.stopPropagation()
                e.preventDefault()
            }} onClick={this.onClick}>
                <span dangerouslySetInnerHTML={{ __html: children }} />
                {hascommentcontainer && <CommentContainer onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }} position={{ clickx, clicky }} open={open}>
                    {readonly ?
                        (<Comment>
                            {comment}
                        </Comment>) : (
                            <Comment>
                                <MultiLineTextInput style={{ width: 'auto' }} initialValue={comment} onChange={this.onChange} />
                                <ButtonArea>
                                    <IconButton
                                        background={colors.white}
                                        Icon={TickIcon}
                                        onClick={onDone}
                                    />
                                    <IconButton
                                        background={colors.white}
                                        secondary={false}
                                        Icon={CrossIcon}
                                        onClick={this.onDelete}
                                    />
                                </ButtonArea>
                            </Comment>
                        )}
                </CommentContainer>}
            </AnnotationEl>
        )
    }
}