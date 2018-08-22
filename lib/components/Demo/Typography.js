'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styles = require('./styles.less');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypographyDemo = function (_Component) {
    _inherits(TypographyDemo, _Component);

    function TypographyDemo() {
        _classCallCheck(this, TypographyDemo);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TypographyDemo.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { 'class': _styles2.default.columns },
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.title },
                'Typography'
            ),
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.column },
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelGrey },
                    'Label Grey'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelColored },
                    'Label Colored'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelRed },
                    'Label Red'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelDark },
                    'Label Dark'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelWhite },
                    'Label White'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.labelDisabled },
                    'Label Disabled'
                ),
                (0, _preact.h)('div', { 'class': _styles2.default.divider }),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.uiRegular },
                    'UI Regular'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.uiPlaceholder },
                    'UI Placeholder'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.uiColored },
                    'UI Colored'
                ),
                (0, _preact.h)('div', { 'class': _styles2.default.divider }),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.titleLabel },
                    'Title Label'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.titleDark },
                    'Title Dark'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.titleRed },
                    'Title Red'
                )
            ),
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.column },
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaName },
                    'Persona Name'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaOrange },
                    'Administratie'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaYellow },
                    'Adverteerder'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaRed },
                    'Consultant'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaGreen },
                    'Content Producent'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaBlue },
                    'Marketing Manager'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.personaGrey },
                    'Techneut'
                )
            )
        );
    };

    return TypographyDemo;
}(_preact.Component);

exports.default = TypographyDemo;