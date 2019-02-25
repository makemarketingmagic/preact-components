'use strict';

exports.__esModule = true;
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = _styledComponents2.default.div.withConfig({
    displayName: 'Annotator__Comment'
})(['padding:18px 24px;background:#F2F8FA;box-shadow:0px 1px 2px rgba(0,0,0,0.16),0px 4px 8px rgba(0,0,0,0.04);border-radius:4px;']),
    CommentContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Annotator__CommentContainer'
})(['display:', ';flex-direction:column;position:absolute;top:', 'px;left:', 'px;transform:translate(-50%,15px);&::before{content:\'\';width:0;height:0;align-self:center;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #F2F8FA;}'], function (props) {
    return props.open ? 'flex' : 'none';
}, function (props) {
    return props.position.clickY;
}, function (props) {
    return props.position.clickX;
}),
    AnnotationEl = _styledComponents2.default.span.withConfig({
    displayName: 'Annotator__AnnotationEl'
})(['background-color:', ';outline:1px dotted ', ';'], function (props) {
    return props.secondaryHighlight ? 'transparent' : 'rgba(238, 64, 85, .28)';
}, function (props) {
    return props.secondaryHighlight ? 'rgba(238, 64, 85, 1)' : 'transparent';
});

var Annotator = function (_Component) {
    _inherits(Annotator, _Component);

    function Annotator(props) {
        _classCallCheck(this, Annotator);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.buildHtml = function (text, highlights) {
            var rest = text,
                indexOffset = 0,
                result = [];
            var _this$state = _this.state,
                clickX = _this$state.clickX,
                clickY = _this$state.clickY,
                _this$props = _this.props,
                _this$props$readOnly = _this$props.readOnly,
                readOnly = _this$props$readOnly === undefined ? true : _this$props$readOnly,
                updateHighlight = _this$props.updateHighlight,
                deleteHighlight = _this$props.deleteHighlight;

            highlights = highlights.sort(function (a, b) {
                return a.index - b.index;
            });
            var alt = false;

            var _loop = function _loop(i) {
                var _highlights$i = highlights[i],
                    index = _highlights$i.index,
                    length = _highlights$i.length,
                    comment = _highlights$i.comment,
                    secondaryHighlight = false,
                    before = text.substring(0, index - indexOffset),
                    content = text.substring(index - indexOffset, index + length - indexOffset);

                text = text.substring(index + length - indexOffset);
                indexOffset = index + length;

                if (before) {
                    result.push((0, _preact.h)(
                        'span',
                        null,
                        before
                    ));
                } else if (!before && !alt) {
                    secondaryHighlight = true;
                    alt = true;
                } else {
                    alt = false;
                }
                result.push((0, _preact.h)(
                    Annotation,
                    {
                        secondaryHighlight: secondaryHighlight,
                        index: i,
                        readOnly: readOnly,
                        comment: comment,
                        position: { clickX: clickX, clickY: clickY },
                        open: _this.state.open === index,
                        updateHighlight: updateHighlight,
                        deleteHighlight: deleteHighlight,
                        onSelect: function onSelect(e) {
                            return _this.selectAnnotation(index, e, i);
                        },
                        onDone: _this.onDone
                    },
                    content
                ));
            };

            for (var i in highlights) {
                _loop(i);
            }
            result.push(text);
            _this.blocks = result;
            return result;
        };

        _this.onDone = function () {
            _this.setState({ open: false, selectedIndex: -1 });
        };

        _this.selectAnnotation = function (id, e, index) {
            _this.setState({ open: id, clickX: e.clientX, clickY: e.clientY, selectedIndex: index });
        };

        _this.getSelection = function (e) {
            var selection = window.getSelection(),
                addHighlight = _this.props.addHighlight;

            var position = selection.anchorNode.compareDocumentPosition(selection.focusNode),
                backwards = false;
            // position == 0 if nodes are the same
            if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) {
                backwards = true;
            }
            if (selection.toString() && selection.baseNode === selection.extentNode) {
                var found = false,
                    highlight = {
                    index: _this.blocks.reduce(function (acc, val) {
                        if (found) {
                            return acc;
                        }
                        if (val === selection.baseNode.textContent) {
                            found = true;
                            return acc += backwards ? selection.extentOffset : selection.baseOffset;
                        }
                        return acc += val.children ? val.children[0].length : 0;
                    }, 0),
                    length: selection.toString().length,
                    comment: ''
                };
                if (addHighlight) {
                    var i = addHighlight(highlight);
                    _this.selectAnnotation(highlight.index, e, i);
                }
            }
        };

        _this.state = {
            open: false,
            selectedIndex: -1,
            clickX: 0,
            clickY: 0
        };
        _this.blocks = [];
        return _this;
    }

    Annotator.prototype.render = function render() {
        var _props = this.props,
            _props$text = _props.text,
            text = _props$text === undefined ? 'Testing this thing 1 2 3 1 2 3 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ' : _props$text,
            _props$highlights = _props.highlights,
            highlights = _props$highlights === undefined ? [{ index: 5, length: 6, comment: 'This is a comment' }, { index: 23, length: 10, comment: 'This is another comment' }, { index: 68, length: 162, comment: '' }] : _props$highlights,
            _props$readOnly = _props.readOnly,
            readOnly = _props$readOnly === undefined ? false : _props$readOnly;

        return (0, _preact.h)(
            'div',
            { onMouseUp: !readOnly ? this.getSelection : null },
            this.buildHtml(text, highlights)
        );
    };

    return Annotator;
}(_preact.Component);

exports.default = Annotator;

var Annotation = function (_Component2) {
    _inherits(Annotation, _Component2);

    function Annotation() {
        var _temp, _this2, _ret2;

        _classCallCheck(this, Annotation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret2 = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.onClick = function (e) {
            var onSelect = _this2.props.onSelect;

            onSelect(e);
        }, _this2.onChange = function (_ref) {
            var value = _ref.value;
            var _this2$props = _this2.props,
                index = _this2$props.index,
                updateHighlight = _this2$props.updateHighlight;

            if (updateHighlight) {
                updateHighlight(value, index);
            }
        }, _this2.onDelete = function () {
            var _this2$props2 = _this2.props,
                index = _this2$props2.index,
                deleteHighlight = _this2$props2.deleteHighlight;

            if (deleteHighlight) {
                deleteHighlight(index);
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret2);
    }

    Annotation.prototype.render = function render() {
        var _props2 = this.props,
            children = _props2.children,
            comment = _props2.comment,
            open = _props2.open,
            position = _props2.position,
            readOnly = _props2.readOnly,
            onDone = _props2.onDone,
            secondaryHighlight = _props2.secondaryHighlight;

        return (0, _preact.h)(
            AnnotationEl,
            { secondaryHighlight: secondaryHighlight, onMouseUo: function onMouseUo(e) {
                    e.stopPropogation();
                    e.preventDefault();
                }, onClick: this.onClick },
            children,
            (0, _preact.h)(
                CommentContainer,
                { onClick: function onClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }, position: position, open: open },
                readOnly ? (0, _preact.h)(
                    Comment,
                    null,
                    comment
                ) : (0, _preact.h)(
                    Comment,
                    null,
                    (0, _preact.h)(_index2.default, { initialValue: comment, onChange: this.onChange }),
                    (0, _preact.h)(_IconButton2.default, {
                        background: _scMixins.colors.white,
                        Icon: _TickIcon2.default,
                        onClick: onDone
                    }),
                    (0, _preact.h)(_IconButton2.default, {
                        background: _scMixins.colors.white,
                        secondary: true,
                        Icon: _CrossIcon2.default,
                        onClick: this.onDelete
                    })
                )
            )
        );
    };

    return Annotation;
}(_preact.Component);