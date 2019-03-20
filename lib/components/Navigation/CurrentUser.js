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
})(['display:flex;justify-self:end;cursor:pointer;flex-direction:row;margin-right:32px;']),
    Details = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Details'
})(['display:flex;flex-direction:column;']),
    Name = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Name'
})(['font-size:14px;font-weight:600;color:', ';transition:color 250ms ease-in-out;', ':hover &{color:', ';}'], function (props) {
    return props.current ? _scMixins.colors.red : _scMixins.colors.label;
}, Container, _scMixins.colors.red),
    Company = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Company'
})(['font-size:12px;color:', ';transition:color 250ms ease-in-out;', ':hover &{color:', ';}'], function (props) {
    return props.current ? _scMixins.colors.red : _scMixins.colors.label;
}, Container, _scMixins.colors.red),
    Image = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Image'
})(['height:32px;width:32px;margin-left:20px;border-radius:50%;']),
    Img = _styledComponents2.default.img.withConfig({
    displayName: 'CurrentUser__Img'
})(['height:32px;width:32px;border-radius:50%;']);

var CurrentUser = function (_Component) {
    _inherits(CurrentUser, _Component);

    function CurrentUser() {
        _classCallCheck(this, CurrentUser);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CurrentUser.prototype.render = function render() {
        var _props = this.props,
            _props$user = _props.user,
            first_name = _props$user.first_name,
            last_name = _props$user.last_name,
            company = _props$user.company,
            image = _props$user.image,
            _props$$location = _props.$location,
            $location = _props$$location === undefined ? window.location : _props$$location;

        return (0, _preact.h)(
            Container,
            { onClick: function onClick() {
                    return $location.path('/profile');
                } },
            (0, _preact.h)(
                Details,
                null,
                (0, _preact.h)(
                    Name,
                    { current: $location.path() === '/profile' },
                    first_name + ' ' + last_name
                ),
                (0, _preact.h)(
                    Company,
                    { current: $location.path() === '/profile' },
                    company
                )
            ),
            (0, _preact.h)(
                Image,
                null,
                (0, _preact.h)(Img, { src: image })
            )
        );
    };

    return CurrentUser;
}(_preact.Component);

exports.default = CurrentUser;