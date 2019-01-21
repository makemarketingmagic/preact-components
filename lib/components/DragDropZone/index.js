'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _attrAccept = require('attr-accept');

var _attrAccept2 = _interopRequireDefault(_attrAccept);

var _preact = require('preact');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

var DragDropZone = function (_Component) {
    _inherits(DragDropZone, _Component);

    function DragDropZone(props, context) {
        _classCallCheck(this, DragDropZone);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.onClick = _this.onClick.bind(_this);
        _this.onDragStart = _this.onDragStart.bind(_this);
        _this.onDragEnter = _this.onDragEnter.bind(_this);
        _this.onDragLeave = _this.onDragLeave.bind(_this);
        _this.onDragOver = _this.onDragOver.bind(_this);
        _this.onDrop = _this.onDrop.bind(_this);
        _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
        _this.fileAccepted = _this.fileAccepted.bind(_this);
        _this.isFileDialogActive = false;

        _this.state = {
            isDragActive: false
        };
        return _this;
    }

    DragDropZone.prototype.componentDidMount = function componentDidMount() {
        this.enterCounter = 0;
        // Tried implementing addEventListener, but didn't work out
        document.body.onfocus = this.onFileDialogCancel;
    };

    DragDropZone.prototype.componentWillUnmount = function componentWillUnmount() {
        // Can be replaced with removeEventListener, if addEventListener works
        document.body.onfocus = null;
    };

    DragDropZone.prototype.onDragStart = function onDragStart(e) {
        if (this.props.onDragStart) {
            this.props.onDragStart.call(this, e);
        }
    };

    DragDropZone.prototype.onDragEnter = function onDragEnter(e) {
        e.preventDefault();

        // Count the dropzone and any children that are entered.
        ++this.enterCounter;

        // This is tricky. During the drag even the dataTransfer.files is null
        // But Chrome implements some drag store, which is accesible via dataTransfer.items
        var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

        // Now we need to convert the DataTransferList to Array
        var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

        this.setState({
            isDragActive: allFilesAccepted,
            isDragReject: !allFilesAccepted
        });

        if (this.props.onDragEnter) {
            this.props.onDragEnter.call(this, e);
        }
    };

    DragDropZone.prototype.onDragOver = function onDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
        return false;
    };

    DragDropZone.prototype.onDragLeave = function onDragLeave(e) {
        e.preventDefault();

        // Only deactivate once the dropzone and all children was left.
        if (--this.enterCounter > 0) {
            return;
        }

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        if (this.props.onDragLeave) {
            this.props.onDragLeave.call(this, e);
        }
    };

    DragDropZone.prototype.onDrop = function onDrop(e) {
        e.preventDefault();

        // Reset the counter along with the drag on a drop.
        this.enterCounter = 0;

        this.setState({
            isDragActive: false,
            isDragReject: false
        });

        var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
        var acceptedFiles = [];
        var rejectedFiles = [];

        for (var i = 0; i < max; i++) {
            var file = droppedFiles[i];
            // We might want to disable the preview creation to support big files
            if (!this.props.disablePreview) {
                file.preview = window.URL.createObjectURL(file);
            }

            if (this.fileAccepted(file) && this.fileMatchSize(file)) {
                acceptedFiles.push(file);
            } else {
                rejectedFiles.push(file);
            }
        }

        if (this.props.onDrop) {
            this.props.onDrop.call(this, acceptedFiles, rejectedFiles, e);
        }

        if (rejectedFiles.length > 0) {
            if (this.props.onDropRejected) {
                this.props.onDropRejected.call(this, rejectedFiles, e);
            }
        } else if (acceptedFiles.length > 0) {
            if (this.props.onDropAccepted) {
                this.props.onDropAccepted.call(this, acceptedFiles, e);
            }
        }
        this.isFileDialogActive = false;
    };

    DragDropZone.prototype.onClick = function onClick() {
        if (!this.props.disableClick) {
            this.open();
        }
    };

    DragDropZone.prototype.onFileDialogCancel = function onFileDialogCancel() {
        // timeout will not recognize context of this method
        var onFileDialogCancel = this.props.onFileDialogCancel;
        var fileInputEl = this.fileInputEl;
        var isFileDialogActive = this.isFileDialogActive;
        // execute the timeout only if the onFileDialogCancel is defined and FileDialog
        // is opened in the browser

        if (onFileDialogCancel && isFileDialogActive) {
            setTimeout(function () {
                // Returns an object as FileList
                var FileList = fileInputEl.files;
                if (!FileList.length) {
                    isFileDialogActive = false;
                    onFileDialogCancel();
                }
            }, 300);
        }
    };

    DragDropZone.prototype.fileAccepted = function fileAccepted(file) {
        return (0, _attrAccept2.default)(file, this.props.accept);
    };

    DragDropZone.prototype.fileMatchSize = function fileMatchSize(file) {
        return file.size <= this.props.maxSize && file.size >= this.props.minSize;
    };

    DragDropZone.prototype.allFilesAccepted = function allFilesAccepted(files) {
        return files.every(this.fileAccepted);
    };

    DragDropZone.prototype.open = function open() {
        this.isFileDialogActive = true;
        this.fileInputEl.value = null;
        this.fileInputEl.click();
    };

    DragDropZone.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            accept = _props.accept,
            activeClassName = _props.activeClassName,
            inputProps = _props.inputProps,
            multiple = _props.multiple,
            name = _props.name,
            rejectClassName = _props.rejectClassName,
            rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

        var activeStyle = rest.activeStyle,
            className = rest.className,
            rejectStyle = rest.rejectStyle,
            style = rest.style,
            props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);

        var _state = this.state,
            isDragActive = _state.isDragActive,
            isDragReject = _state.isDragReject;


        className = className || '';

        if (isDragActive && activeClassName) {
            className += ' ' + activeClassName;
        }
        if (isDragReject && rejectClassName) {
            className += ' ' + rejectClassName;
        }

        if (!className && !style && !activeStyle && !rejectStyle) {
            style = {
                width: 320,
                height: 160,
                borderWidth: 2,
                borderColor: '#DAEAEF',
                borderStyle: 'dashed',
                borderRadius: 16,
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                padding: 16
            };
            activeStyle = {
                borderStyle: 'solid',
                backgroundColor: '#eee'
            };
            rejectStyle = {
                borderStyle: 'solid',
                backgroundColor: '#ffdddd'
            };
        }

        var appliedStyle = void 0;
        if (activeStyle && isDragActive) {
            appliedStyle = _extends({}, style, activeStyle);
        } else if (rejectStyle && isDragReject) {
            appliedStyle = _extends({}, style, rejectStyle);
        } else {
            appliedStyle = _extends({}, style);
        }

        var inputAttributes = {
            accept: accept,
            type: 'file',
            style: { display: 'none' },
            multiple: supportMultiple && multiple,
            ref: function ref(el) {
                return _this2.fileInputEl = el;
            }, // eslint-disable-line
            onChange: this.onDrop
        };

        if (name && name.length) {
            inputAttributes.name = name;
        }

        // Remove custom properties before passing them to the wrapper div element
        var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'maxSize', 'minSize', 'onFileDialogCancel'];
        var divProps = _extends({}, props);
        customProps.forEach(function (prop) {
            return delete divProps[prop];
        });

        return (0, _preact.h)(
            'div',
            _extends({
                'class': className,
                style: appliedStyle
            }, divProps /* expand user provided props first so event handlers are never overridden */, {
                onClick: this.onClick,
                onDragStart: this.onDragStart,
                onDragEnter: this.onDragEnter,
                onDragOver: this.onDragOver,
                onDragLeave: this.onDragLeave,
                onDrop: this.onDrop
            }),
            this.props.children,
            (0, _preact.h)('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
        );
    };

    return DragDropZone;
}(_preact.Component);

DragDropZone.defaultProps = {
    disablePreview: false,
    disableClick: false,
    multiple: true,
    maxSize: Infinity,
    minSize: 0
};

/* Prop Types are not used in Preact, but are good as Documentation
Dropzone.propTypes = {
  // Overriding drop behavior
  onDrop: React.PropTypes.func,
  onDropAccepted: React.PropTypes.func,
  onDropRejected: React.PropTypes.func,
  // Overriding drag behavior
  onDragStart: React.PropTypes.func,
  onDragEnter: React.PropTypes.func,
  onDragLeave: React.PropTypes.func,
  children: React.PropTypes.node, // Contents of the dropzone
  style: React.PropTypes.object, // CSS styles to apply
  activeStyle: React.PropTypes.object, // CSS styles to apply when drop will be accepted
  rejectStyle: React.PropTypes.object, // CSS styles to apply when drop will be rejected
  className: React.PropTypes.string, // Optional className
  activeClassName: React.PropTypes.string, // className for accepted state
  rejectClassName: React.PropTypes.string, // className for rejected state
  disablePreview: React.PropTypes.bool, // Enable/disable preview generation
  disableClick: React.PropTypes.bool, // Disallow clicking on the dropzone container to open file dialog
  onFileDialogCancel: React.PropTypes.func, // Provide a callback on clicking the cancel button of the file dialog
  inputProps: React.PropTypes.object, // Pass additional attributes to the <input type="file"/> tag
  multiple: React.PropTypes.bool, // Allow dropping multiple files
  accept: React.PropTypes.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
  name: React.PropTypes.string, // name attribute for the input tag
  maxSize: React.PropTypes.number,
  minSize: React.PropTypes.number
};
*/
exports.default = DragDropZone;