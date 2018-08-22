'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentVisits = function (_Component) {
    _inherits(RecentVisits, _Component);

    function RecentVisits() {
        _classCallCheck(this, RecentVisits);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    RecentVisits.prototype.render = function render() {
        var visits = this.props.visits;

        return (0, _preact.h)(
            'div',
            { 'class': _style2.default.visitContainer },
            (0, _preact.h)(
                'div',
                { 'class': _style2.default.visitHeader },
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
                    'div',
                    { 'class': _style2.default.visitRow },
                    (0, _preact.h)(
                        'div',
                        null,
                        visit.page
                    ),
                    (0, _preact.h)(
                        'div',
                        { 'class': _style2.default.visitDate },
                        (0, _format2.default)(visit.date, 'DD MMM YYYY')
                    )
                );
            })
        );
    };

    return RecentVisits;
}(_preact.Component);

exports.default = RecentVisits;