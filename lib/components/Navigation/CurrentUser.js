'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Container'
})(['display:flex;justify-self:end;flex-direction:row;margin-right:32px;']),
    Details = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Details'
})(['display:flex;flex-direction:column;color:', ';'], _scMixins.colors.label),
    Name = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Name'
})(['font-size:14px;font-weight:600;']),
    Company = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Company'
})(['font-size:12px;']),
    Image = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Image'
})(['height:32px;width:32px;margin-left:20px;border-radius:50%;']);

var CurrentUser = function (_Component) {
    _inherits(CurrentUser, _Component);

    function CurrentUser() {
        _classCallCheck(this, CurrentUser);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CurrentUser.prototype.render = function render() {
        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(
                Details,
                null,
                (0, _preact.h)(
                    Name,
                    null,
                    'Hans van den Akker'
                ),
                (0, _preact.h)(
                    Company,
                    null,
                    'Bizboard'
                )
            ),
            (0, _preact.h)(
                Image,
                null,
                (0, _preact.h)('img', { src: '../../assets/Hans.png' })
            )
        );
    };

    return CurrentUser;
}(_preact.Component);

exports.default = CurrentUser;