'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _index = require('./../DragDropZone/index');

var _index2 = _interopRequireDefault(_index);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index3 = require('./../ExpandableMarkdownSection/index');

var _preactMarkdown = require('preact-markdown');

var _preactMarkdown2 = _interopRequireDefault(_preactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'UploadSection__Container'
})(['display:flex;flex-direction:row;']),
    LeftContainer = _styledComponents2.default.div.withConfig({
    displayName: 'UploadSection__LeftContainer'
})(['flex:1 0 66%;']),
    RightContainer = _styledComponents2.default.div.withConfig({
    displayName: 'UploadSection__RightContainer'
})(['flex:1 0 33%;']);

var UploadSection = function (_Component) {
    _inherits(UploadSection, _Component);

    function UploadSection(props) {
        _classCallCheck(this, UploadSection);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onChange = function (_ref) {
            var first = _ref[0],
                rest = _ref.slice(1);

            var onChange = _this.props.onChange,
                name = first.name,
                size = first.size;

            if (rest.length === 0) {
                _this.setState({ fileName: name, size: size, selected: true });
            } else {
                var files = [first].concat(rest).map(function (val) {
                    return { fileName: val.name, size: val.size };
                });
                _this.setState({ selected: true, files: files });
            }
            _this.props.test = true;
            onChange && onChange({ value: [first].concat(rest), valid: true });
        };

        _this.state = {
            selected: false,
            fileName: '',
            size: 0,
            files: []
        };
        return _this;
    }

    UploadSection.prototype.render = function render() {
        var _props = this.props,
            _props$multiple = _props.multiple,
            multiple = _props$multiple === undefined ? false : _props$multiple,
            _props$minSize = _props.minSize,
            minSize = _props$minSize === undefined ? 0 : _props$minSize,
            _props$maxSize = _props.maxSize,
            maxSize = _props$maxSize === undefined ? 5000000 : _props$maxSize,
            _props$accept = _props.accept,
            accept = _props$accept === undefined ? 'text/*' : _props$accept,
            content = _props.content;
        var selected = this.state.selected;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(
                LeftContainer,
                null,
                (0, _preact.h)(_preactMarkdown2.default, { markdown: content, markupOpts: {
                        components: _index3.components,
                        allowEvents: true
                    } })
            ),
            (0, _preact.h)(
                RightContainer,
                null,
                (0, _preact.h)(
                    _index2.default,
                    {
                        multiple: multiple,
                        minSize: minSize,
                        maxSize: maxSize,
                        accept: accept,
                        onDrop: this.onChange
                    },
                    (0, _preact.h)(
                        'span',
                        { style: { flex: 1, textAlign: 'center' } },
                        this.renderInfoOrFileDetails(selected)
                    )
                )
            )
        );
    };

    UploadSection.prototype.renderMultipleFileDetails = function renderMultipleFileDetails(files) {
        var size = files.reduce(function (acc, val) {
            return acc + val.size;
        }, 0);
        return this.renderFileDetails(size);
    };

    UploadSection.prototype.renderFileDetails = function renderFileDetails(size) {
        var suffixes = ['B', 'KB', 'MB', 'GB'];
        var factor = 1,
            tempSize = size;
        while (tempSize > 1000) {
            tempSize = tempSize / 1000;
            factor += 1;
        }

        tempSize = Math.round(tempSize * 10) / 10;

        return tempSize + ' ' + suffixes[factor - 1];
    };

    UploadSection.prototype.renderInfoOrFileDetails = function renderInfoOrFileDetails() {
        var _state = this.state,
            selected = _state.selected,
            files = _state.files,
            fileName = _state.fileName,
            size = _state.size;

        return selected ? files.length <= 1 ? fileName + ' selected, ' + this.renderFileDetails(size) : files.length + ' files selected, ' + this.renderMultipleFileDetails(files) + ' total' : 'Click here to select a file or drag and drop it in the area';
    };

    return UploadSection;
}(_preact.Component);

exports.default = UploadSection;