'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styles = require('./styles.less');

var _styles2 = _interopRequireDefault(_styles);

var _SingleLineTextInput = require('../SingleLineTextInput');

var _SingleLineTextInput2 = _interopRequireDefault(_SingleLineTextInput);

var _MultiLineTextInput = require('../MultiLineTextInput');

var _MultiLineTextInput2 = _interopRequireDefault(_MultiLineTextInput);

var _index = require('./../Dropdown/index');

var _index2 = _interopRequireDefault(_index);

var _RadioButtons = require('../RadioButtons');

var _RadioButtons2 = _interopRequireDefault(_RadioButtons);

var _Checkboxes = require('../Checkboxes');

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _LaterIcon = require('./../icons/LaterIcon');

var _LaterIcon2 = _interopRequireDefault(_LaterIcon);

var _TickIcon = require('./../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputsDemo = function (_Component) {
    _inherits(InputsDemo, _Component);

    function InputsDemo() {
        _classCallCheck(this, InputsDemo);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InputsDemo.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { 'class': _styles2.default.columns },
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.title },
                'Inputs'
            ),
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.column },
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.subTitle },
                    'Text Boxes'
                ),
                (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: 'Single Line Text Input' }),
                (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: 'Text Input with Email Validation', validation: 'email' }),
                (0, _preact.h)(_SingleLineTextInput2.default, { placeholder: 'Text Input with Phone Validation and Icon', validation: 'phone-nl', showIcon: true }),
                (0, _preact.h)(_MultiLineTextInput2.default, { placeholder: 'Auto Expanding Multiline Text Input' }),
                (0, _preact.h)('div', { 'class': _styles2.default.divider })
            ),
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.column },
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.subTitle },
                    'Selectors'
                ),
                (0, _preact.h)(_index2.default, { placeholder: 'Dropdown with Placeholder', options: [{ value: 0, text: 'Option 1' }, { value: 1, text: 'Option 2' }, { value: 2, text: 'Option 3' }] }),
                (0, _preact.h)('div', { 'class': _styles2.default.dividerSmall }),
                (0, _preact.h)(_RadioButtons2.default, { options: [{ label: 'Radio Button 1', data: 0 }, { label: 'Radio Button 2', data: 1 }, { label: 'Radio Button 3', data: 2 }] }),
                (0, _preact.h)('div', { 'class': _styles2.default.dividerSmall }),
                (0, _preact.h)(_Checkboxes2.default, { options: [{ label: 'Checkbox 1', data: 0 }, { label: 'Checkbox 2', data: 1 }, { label: 'Checkbox 3', data: 2 }] })
            ),
            (0, _preact.h)(
                'div',
                { 'class': _styles2.default.column },
                (0, _preact.h)(
                    'div',
                    { 'class': _styles2.default.subTitle },
                    'Buttons'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        null,
                        'Primary Button'
                    )
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        { secondary: true },
                        'Secondary Button'
                    )
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        { disabled: true },
                        'Disabled Button'
                    )
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        { Icon: _TickIcon2.default, iconLeft: true },
                        'Button with Icon'
                    )
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    (0, _preact.h)(
                        _Button2.default,
                        { disabled: true, Icon: _LaterIcon2.default, iconRight: true },
                        'Button with Icon on Right'
                    )
                )
            )
        );
    };

    return InputsDemo;
}(_preact.Component);

exports.default = InputsDemo;