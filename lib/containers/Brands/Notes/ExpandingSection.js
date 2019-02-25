'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

var _Button = require('../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _TickIcon = require('./../../../components/icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _CrossIcon = require('./../../../components/icons/CrossIcon');

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Container'
})(['padding:20px 24px;display:flex;flex-direction:column;']),
    Buttons = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Buttons'
})(['display:flex;flex-direction:row;justify-content:center;margin-top:16px;button{margin:0 8px;}']);

var ExpandingSection = function (_Component) {
    _inherits(ExpandingSection, _Component);

    function ExpandingSection(props) {
        var _this2 = this;

        _classCallCheck(this, ExpandingSection);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.componentDidUpdate = function (prevProps) {
            var id = _this.props.data.id,
                prevId = prevProps.data.id;


            if (id !== prevId) {
                _this.initialise();
            }
        };

        _this.initialise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var note;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            note = _this.props.data;

                            _this.setState({ innerContent: '' }, function () {
                                _this.setState({ innerContent: note.innerContent }, function () {

                                    setTimeout(function () {
                                        _this.quill = new _quill2.default('#quill-container', {
                                            modules: {
                                                toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
                                            },
                                            placeholder: 'Compose an epic...',
                                            theme: 'snow' // or 'bubble'
                                        });
                                    }, 500);
                                });
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.updateContent = function (_ref2) {
            var value = _ref2.value;

            _this.setState({ innerContent: value });
        };

        _this.onSave = function () {
            _this.setState({ innerContent: _this.quill.root.innerHTML });
            console.debug(_this.state.innerContent);
        };

        _this.onDelete = function () {};

        _this.state = {
            innerContent: '',
            init: false
        };
        return _this;
    }

    ExpandingSection.prototype.componentDidMount = function componentDidMount() {
        this.initialise();
    };

    ExpandingSection.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return false;
    };

    ExpandingSection.prototype.render = function render() {
        var _this3 = this;

        var translations = this.props.translations;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)('div', { id: 'quill-container', dangerouslySetInnerHTML: { __html: this.props.data.innerContent } })
            ),
            (0, _preact.h)(
                Buttons,
                null,
                (0, _preact.h)(
                    _Button2.default,
                    {
                        primary: true,
                        onClick: function onClick() {
                            _this3.onSave();
                        },
                        iconLeft: true,
                        Icon: _TickIcon2.default
                    },
                    translations.getLL('SAVE_NOTE', 'Save Note')
                ),
                (0, _preact.h)(
                    _Button2.default,
                    {
                        secondary: true,
                        onClick: function onClick() {
                            _this3.onDelete();
                        },
                        iconLeft: true,
                        Icon: _CrossIcon2.default
                    },
                    translations.getLL('DELETE_NOTE', 'Delete Note')
                )
            )
        );
    };

    return ExpandingSection;
}(_preact.Component);

exports.default = ExpandingSection;