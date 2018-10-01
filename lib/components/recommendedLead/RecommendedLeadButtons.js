'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n        margin-top: 16px;\n        flex-direction: column;\n        button {\n            margin: 4px auto;\n        }\n    '], ['\n        margin-top: 16px;\n        flex-direction: column;\n        button {\n            margin: 4px auto;\n        }\n    ']);

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _MUIComponents = require('../common/MUIComponents');

var _material = require('material-design-lite/material');

var _material2 = _interopRequireDefault(_material);

var _TickIcon = require('../icons/TickIcon');

var _TickIcon2 = _interopRequireDefault(_TickIcon);

var _LaterIcon = require('../icons/LaterIcon');

var _LaterIcon2 = _interopRequireDefault(_LaterIcon);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// eslint-disable-next-line no-unused-vars


var ButtonsContainer = _styledComponents2.default.div.withConfig({
    displayName: 'RecommendedLeadButtons__ButtonsContainer'
})(['margin-top:32px;display:flex;flex-direction:row;justify-content:center;button{margin:0 4px;}', ''], _scMixins.media.mobile(_templateObject));

var ButtonContent = _styledComponents2.default.div.withConfig({
    displayName: 'RecommendedLeadButtons__ButtonContent'
})(['display:flex;flex-direction:row;align-items:center;svg{margin-right:8px;}']);

var RecommendedLeadButtons = function () {
    function RecommendedLeadButtons() {
        _classCallCheck(this, RecommendedLeadButtons);
    }

    RecommendedLeadButtons.prototype.render = function render() {
        var _props = this.props,
            nextPage = _props.nextPage,
            remindMe = _props.remindMe,
            done = _props.done;

        return (0, _preact.h)(
            ButtonsContainer,
            null,
            (0, _preact.h)(
                _MUIComponents.MUIButton,
                {
                    raised: true,
                    primary: true,
                    onClick: function onClick() {
                        remindMe();
                        nextPage();
                    }
                },
                (0, _preact.h)(
                    ButtonContent,
                    null,
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
                    accent: true,
                    onClick: function onClick() {
                        done();
                        nextPage();
                    }
                },
                (0, _preact.h)(
                    ButtonContent,
                    null,
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