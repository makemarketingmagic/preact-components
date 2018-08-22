'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Navigation = require('./Navigation.less');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentUser = function (_Component) {
    _inherits(CurrentUser, _Component);

    function CurrentUser() {
        _classCallCheck(this, CurrentUser);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CurrentUser.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { 'class': _Navigation2.default.currentUser },
            (0, _preact.h)(
                'div',
                { 'class': _Navigation2.default.userDetails },
                (0, _preact.h)(
                    'div',
                    { 'class': _Navigation2.default.currentUserName },
                    'Hans van den Akker'
                ),
                (0, _preact.h)(
                    'div',
                    { 'class': _Navigation2.default.currentUserCompany },
                    'Bizboard'
                )
            ),
            (0, _preact.h)(
                'div',
                { 'class': _Navigation2.default.userImage },
                (0, _preact.h)('img', { src: '../../assets/Hans.png' })
            )
        );
    };

    return CurrentUser;
}(_preact.Component);

exports.default = CurrentUser;