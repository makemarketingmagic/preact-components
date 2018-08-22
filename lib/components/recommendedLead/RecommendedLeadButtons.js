'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

var _MUIComponents = require('../common/MUIComponents');

var _material = require('material-design-lite/material');

var _material2 = _interopRequireDefault(_material);

var _TickIcon = require('../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _LaterIcon = require('../icons/LaterIcon');

var _LaterIcon2 = _interopRequireDefault(_LaterIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// eslint-disable-next-line no-unused-vars


var RecommendedLeadButtons = function () {
    function RecommendedLeadButtons() {
        _classCallCheck(this, RecommendedLeadButtons);
    }

    RecommendedLeadButtons.prototype.render = function render() {
        var nextPage = this.props.nextPage;

        return (0, _preact.h)(
            'div',
            { 'class': _style2.default.buttonsContainer },
            (0, _preact.h)(
                _MUIComponents.MUIButton,
                {
                    raised: true,
                    primary: true,
                    onClick: nextPage
                },
                (0, _preact.h)(
                    'div',
                    { 'class': _style2.default.buttonContent },
                    (0, _preact.h)(_LaterIcon2.default, { color: '#EE4055' }),
                    (0, _preact.h)(
                        'span',
                        null,
                        'Herinner me later'
                    )
                )
            ),
            (0, _preact.h)(
                _MUIComponents.MUIButton,
                {
                    raised: true,
                    colored: true,
                    accent: true
                },
                (0, _preact.h)(
                    'div',
                    { 'class': _style2.default.buttonContent },
                    (0, _preact.h)(_TickIcon2.default, null),
                    (0, _preact.h)(
                        'span',
                        null,
                        'Contact opgenomen'
                    )
                )
            )
        );
    };

    return RecommendedLeadButtons;
}();

exports.default = RecommendedLeadButtons;