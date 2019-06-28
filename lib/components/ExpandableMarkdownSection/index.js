'use strict';

exports.__esModule = true;
exports.default = exports.components = undefined;

var _preact = require('preact');

var _ExpandableSection = require('../ExpandableSection');

var _ExpandableSection2 = _interopRequireDefault(_ExpandableSection);

var _preactMarkdown = require('preact-markdown');

var _preactMarkdown2 = _interopRequireDefault(_preactMarkdown);

var _index = require('./../Button/index');

var _index2 = _interopRequireDefault(_index);

var _NavigateIcon = require('./../icons/NavigateIcon');

var _NavigateIcon2 = _interopRequireDefault(_NavigateIcon);

var _LaterIcon = require('./../icons/LaterIcon');

var _LaterIcon2 = _interopRequireDefault(_LaterIcon);

var _ArrowRight = require('./../icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _TickIcon = require('./../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _InfoIcon = require('./../icons/InfoIcon');

var _InfoIcon2 = _interopRequireDefault(_InfoIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var components = exports.components = {
    Link: function Link(_ref) {
        var text = _ref.text,
            href = _ref.href;

        var handleClick = function handleClick() {
            window.open(href, '_BLANK');
        };
        return (0, _preact.h)(
            _index2.default,
            { onClick: handleClick, iconLeft: true, Icon: _ArrowRight2.default },
            text
        );
    },
    Test: function Test(_ref2) {
        var text = _ref2.text;

        var handleClick = function handleClick() {};

        return (0, _preact.h)(
            _index2.default,
            { secondary: true, onClick: handleClick, iconLeft: true, Icon: _InfoIcon2.default },
            text
        );
    },
    Complete: function Complete(_ref3) {
        var text = _ref3.text;

        var handleClick = function handleClick() {};

        return (0, _preact.h)(
            _index2.default,
            { onClick: handleClick, iconLeft: true, Icon: _TickIcon2.default },
            text
        );
    }
};

var ExpandableMarkdownSection = function (_Component) {
    _inherits(ExpandableMarkdownSection, _Component);

    function ExpandableMarkdownSection() {
        _classCallCheck(this, ExpandableMarkdownSection);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ExpandableMarkdownSection.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            content = _props.content;

        return (0, _preact.h)(
            _ExpandableSection2.default,
            { title: title },
            (0, _preact.h)(_preactMarkdown2.default, { markdown: content, markupOpts: {
                    components: components,
                    allowEvents: true
                } })
        );
    };

    return ExpandableMarkdownSection;
}(_preact.Component);

exports.default = ExpandableMarkdownSection;