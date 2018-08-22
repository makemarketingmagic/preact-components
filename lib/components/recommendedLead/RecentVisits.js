'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['padding: 0 32px;'], ['padding: 0 32px;']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    color: #88A5AD;\n'], ['\n    color: #88A5AD;\n']);

var _preact = require('preact');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _scMixins2 = _interopRequireDefault(_scMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var VisitContainer = _styledComponents2.default.div.withConfig({
    displayName: 'RecentVisits__VisitContainer'
})(['margin-top:16px;padding:0 64px;', ''], _scMixins2.default.media.mobile(_templateObject));

var VisitHeader = _styledComponents2.default.div.withConfig({
    displayName: 'RecentVisits__VisitHeader'
})(['display:flex;flex-direction:row;font-size:14px;line-height:24px;div:first-child{flex:1;}']);

var VisitRow = VisitHeader.extend(_templateObject2);

var VisitDate = _styledComponents2.default.div.withConfig({
    displayName: 'RecentVisits__VisitDate'
})(['text-transform:uppercase;']);

var RecentVisits = function (_Component) {
    _inherits(RecentVisits, _Component);

    function RecentVisits() {
        _classCallCheck(this, RecentVisits);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    RecentVisits.prototype.render = function render() {
        var visits = this.props.visits;

        return (0, _preact.h)(
            VisitContainer,
            null,
            (0, _preact.h)(
                VisitHeader,
                null,
                (0, _preact.h)(
                    'div',
                    null,
                    'Bezochte pagina'
                ),
                (0, _preact.h)(
                    'div',
                    null,
                    'Datum'
                )
            ),
            visits.map(function (visit) {
                return (0, _preact.h)(
                    VisitRow,
                    null,
                    (0, _preact.h)(
                        'div',
                        null,
                        visit.page
                    ),
                    (0, _preact.h)(
                        VisitDate,
                        null,
                        (0, _format2.default)(visit.date, 'DD MMM YYYY')
                    )
                );
            })
        );
    };

    return RecentVisits;
}(_preact.Component);

exports.default = RecentVisits;