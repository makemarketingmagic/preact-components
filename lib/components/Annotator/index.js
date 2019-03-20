'use strict';

exports.__esModule = true;
exports.Annotation = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../MultiLineTextInput/index');

var _index2 = _interopRequireDefault(_index);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _TickIcon = require('./../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _CrossIcon = require('./../icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

var _scMixins = require('../common/scMixins');

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _HTMLParser = require('../common/HTMLParser');

var HtmlService = _interopRequireWildcard(_HTMLParser);

var _preactMarkdown = require('preact-markdown');

var _preactMarkdown2 = _interopRequireDefault(_preactMarkdown);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = _styledComponents2.default.div.withConfig({
    displayName: 'Annotator__Comment'
})(['padding:18px 24px;background:#F2F8FA;box-shadow:0px 1px 2px rgba(0,0,0,0.16),0px 4px 8px rgba(0,0,0,0.04);border-radius:4px;display:flex;flex-direction:column;']),
    CommentContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Annotator__CommentContainer'
})(['display:', ';flex-direction:column;position:absolute;top:', 'px;left:', 'px;transform:translate(-50%,15px);&::before{content:\'\';width:0;height:0;align-self:center;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #F2F8FA;}'], function (props) {
    return props.open ? 'flex' : 'none';
}, function (props) {
    return props.position.clicky;
}, function (props) {
    return props.position.clickx;
}),
    AnnotationEl = _styledComponents2.default.span.withConfig({
    displayName: 'Annotator__AnnotationEl'
})(['background-color:', ';outline:1px dotted ', ';'], function (props) {
    return props.secondaryHighlight ? 'transparent' : 'rgba(238, 64, 85, .28)';
}, function (props) {
    return props.secondaryHighlight ? 'rgba(238, 64, 85, 1)' : 'transparent';
}),
    ButtonArea = _styledComponents2.default.div.withConfig({
    displayName: 'Annotator__ButtonArea'
})(['display:flex;justify-content:center;& > button{margin:8px;}']);

var components = {
    ReactAnnotation: function ReactAnnotation(props) {
        return (0, _preact.h)(Annotation, props);
    }
};

var Annotator = function (_Component) {
    _inherits(Annotator, _Component);

    function Annotator(props) {
        _classCallCheck(this, Annotator);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.objectToHtmlAttrs = function (obj) {
            return Object.entries(obj).map(function (_ref) {
                var key = _ref[0],
                    value = _ref[1];

                return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? _this.objectToHtmlAttrs(value) : key + '="' + value.toString() + '"';
            }).join(' ');
        };

        _this.wrapHtmlTags = function (selection, startId, htmlClass, attributes) {
            var WRAP_HTML_END = '</ReactAnnotation>';
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
            var hasCommentContainer = true;
            var attributeString = _this.objectToHtmlAttrs(_extends({}, attributes, { hasCommentContainer: hasCommentContainer }));
            var WRAP_HTML_START = '<ReactAnnotation ' + attributeString + '>';
            /* This needs to be done back to front to prevent index corruption */
            for (var i = allTags.length - 1; i >= 0; i--) {

                attributeString = _this.objectToHtmlAttrs(_extends({}, attributes, { hasCommentContainer: hasCommentContainer }));
                WRAP_HTML_START = '<ReactAnnotation ' + attributeString + '>';
                hasCommentContainer = false;
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
            workString = WRAP_HTML_START + workString + WRAP_HTML_END;

            return workString;
        };

        _this.buildHtml = function (text, highlights) {
            highlights = highlights.sort(function (a, b) {
                return b.start - a.start;
            });

            var html = _marked2.default.inlineLexer(text, [], {}),
                secondaryHighlight = false;
            html = html.replace(/\r?\n|\r/g, '<br/>');
            var _this$state = _this.state,
                clickX = _this$state.clickX,
                clickY = _this$state.clickY,
                htmlClass = new HtmlService.ParsedHtmlClass(html),
                _this$props = _this.props,
                _this$props$readOnly = _this$props.readOnly,
                readOnly = _this$props$readOnly === undefined ? true : _this$props$readOnly,
                updateHighlight = _this$props.updateHighlight,
                deleteHighlight = _this$props.deleteHighlight;

            for (var i in highlights) {
                var _highlights$i = highlights[i],
                    start = _highlights$i.start,
                    end = _highlights$i.end,
                    content = _highlights$i.content,
                    comment = _highlights$i.comment,
                    highlight = highlights[i],
                    htmlStart = 0,
                    htmlEnd = 0,
                    htmlStrip = '';

                htmlStart = htmlClass.getIndexInHtml(start);
                htmlEnd = htmlClass.getIndexInHtml(end);
                if (highlights[i - 1] && highlights[i - 1].end === start) {
                    secondaryHighlight = true;
                }
                var attributes = {
                    secondaryHighlight: secondaryHighlight,
                    index: i,
                    readOnly: readOnly,
                    comment: comment,
                    position: { clickX: clickX, clickY: clickY },
                    open: _this.state.open === start,
                    start: start,
                    content: content
                };
                secondaryHighlight = false;
                htmlStrip = _this.wrapHtmlTags(htmlClass.reconstructPartOfHtml(start, end), start, htmlClass, attributes);
                html = htmlClass.replaceStrip(html, htmlStrip, htmlStart, htmlEnd);
            }
            var react = (0, _reactHtmlParser2.default)(html, {
                transform: function transform(node, index) {
                    if (node.name === 'reactannotation') {
                        return (0, _preact.h)(
                            Annotation,
                            _extends({}, node.attribs, {
                                // secondaryHighlight={secondaryHighlight}
                                // index={i}
                                // readOnly={readOnly}
                                // comment={comment}
                                // position={{ clickX, clickY }}
                                // open={this.state.open === index}
                                updateHighlight: updateHighlight,
                                deleteHighlight: deleteHighlight,
                                onSelect: function onSelect(e) {
                                    return _this.selectAnnotation(parseInt(node.attribs.start), e);
                                },
                                onDone: _this.onDone
                                // content={content}
                            }),
                            node.children[0] && (0, _reactHtmlParser.convertNodeToElement)(node.children[0])
                        );
                    }
                }
            });
            return react;
        };

        _this.onDone = function () {
            _this.setState({ open: false, selectedIndex: -1 });
        };

        _this.selectAnnotation = function (id, e) {
            _this.setState({ open: id, clickX: e.layerX, clickY: e.layerY });
        };

        _this.getStartingPosition = function () {
            var originalNode = null;
            var wrapper = _this.ref;
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
        };

        _this.getSelection = function (e) {
            var checkForOverlap = function checkForOverlap(highlight) {
                var highlights = _this.props.highlights;

                return highlights.reduce(function (acc, val) {
                    if (acc) return acc;
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
                }, false);
            };
            var selection = window.getSelection(),
                addHighlight = _this.props.addHighlight,
                range = selection.getRangeAt(0),
                text = selection.toString().replace(/\r?\n|\r/g, ''),
                start = _this.getStartingPosition(),
                end = start + text.length,
                highlight = {
                start: start,
                end: end,
                content: text,
                comment: ''
            };

            console.debug(highlight);

            if (addHighlight && !checkForOverlap(highlight)) {
                var i = addHighlight(highlight);
                _this.selectAnnotation(highlight.start, e);
                window.getSelection().removeAllRanges();
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
        };

        _this.state = {
            open: false,
            selectedIndex: -1,
            clickX: 0,
            clickY: 0
        };
        _this.blocks = [];
        _this.ref = null;
        return _this;
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

    Annotator.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$text = _props.text,
            text = _props$text === undefined ? '**Testing** this thing 1 2 3 1 2 3 **Lorem** ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ' : _props$text,
            _props$highlights = _props.highlights,
            highlights = _props$highlights === undefined ? [{ start: 5, end: 22, content: "ng this thing 1 2", comment: ""
            // { index: 5, length: 6, comment: 'This is a comment' },
            // { index: 23, length: 10, comment: 'This is another comment' },
            // { index: 68, length: 162, comment: '' }
        }] : _props$highlights,
            _props$readOnly = _props.readOnly,
            readOnly = _props$readOnly === undefined ? false : _props$readOnly;

        return (0, _preact.h)(
            'div',
            { ref: function ref(_ref2) {
                    return _this2.ref = _ref2;
                }, onMouseUp: !readOnly ? function (e) {
                    return _this2.getSelection(e);
                } : null },
            this.buildHtml(text, highlights)
        );
    };

    return Annotator;
}(_preact.Component);

exports.default = Annotator;

var Annotation = exports.Annotation = function (_Component2) {
    _inherits(Annotation, _Component2);

    function Annotation() {
        var _temp, _this3, _ret;

        _classCallCheck(this, Annotation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.onClick = function (e) {
            var onSelect = _this3.props.onSelect;

            onSelect(e);
        }, _this3.onChange = function (_ref3) {
            var value = _ref3.value;
            var _this3$props = _this3.props,
                index = _this3$props.index,
                updateHighlight = _this3$props.updateHighlight;

            if (updateHighlight) {
                updateHighlight(value, index);
            }
        }, _this3.onDelete = function () {
            var _this3$props2 = _this3.props,
                index = _this3$props2.index,
                deleteHighlight = _this3$props2.deleteHighlight;

            if (deleteHighlight) {
                deleteHighlight(index);
            }
        }, _temp), _possibleConstructorReturn(_this3, _ret);
    }

    Annotation.prototype.render = function render() {
        var _props2 = this.props,
            _props2$hascommentcon = _props2.hascommentcontainer,
            hascommentcontainer = _props2$hascommentcon === undefined ? true : _props2$hascommentcon,
            children = _props2.children,
            _props2$comment = _props2.comment,
            comment = _props2$comment === undefined ? '' : _props2$comment,
            _props2$open = _props2.open,
            open = _props2$open === undefined ? false : _props2$open,
            _props2$clickx = _props2.clickx,
            clickx = _props2$clickx === undefined ? 0 : _props2$clickx,
            _props2$clicky = _props2.clicky,
            clicky = _props2$clicky === undefined ? 0 : _props2$clicky,
            _props2$readonly = _props2.readonly,
            readonly = _props2$readonly === undefined ? true : _props2$readonly,
            onDone = _props2.onDone,
            _props2$secondaryhigh = _props2.secondaryhighlight,
            secondaryhighlight = _props2$secondaryhigh === undefined ? false : _props2$secondaryhigh;

        open = open === 'true';
        clickx = parseInt(clickx);
        clicky = parseInt(clicky);
        readonly = readonly === 'true';
        secondaryhighlight = secondaryhighlight === 'true';
        hascommentcontainer = hascommentcontainer === 'true';

        return (0, _preact.h)(
            AnnotationEl,
            { secondaryHighlight: secondaryhighlight, onMouseUp: function onMouseUp(e) {
                    e.stopPropagation();
                    e.preventDefault();
                }, onClick: this.onClick },
            (0, _preact.h)('span', { dangerouslySetInnerHTML: { __html: children } }),
            hascommentcontainer && (0, _preact.h)(
                CommentContainer,
                { onClick: function onClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }, position: { clickx: clickx, clicky: clicky }, open: open },
                readonly ? (0, _preact.h)(
                    Comment,
                    null,
                    comment
                ) : (0, _preact.h)(
                    Comment,
                    null,
                    (0, _preact.h)(_index2.default, { style: { width: 'auto' }, initialValue: comment, onChange: this.onChange }),
                    (0, _preact.h)(
                        ButtonArea,
                        null,
                        (0, _preact.h)(_IconButton2.default, {
                            background: _scMixins.colors.white,
                            Icon: _TickIcon2.default,
                            onClick: onDone
                        }),
                        (0, _preact.h)(_IconButton2.default, {
                            background: _scMixins.colors.white,
                            secondary: false,
                            Icon: _CrossIcon2.default,
                            onClick: this.onDelete
                        })
                    )
                )
            )
        );
    };

    return Annotation;
}(_preact.Component);