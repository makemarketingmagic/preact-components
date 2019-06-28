'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Container'
})(['display:flex;justify-self:end;cursor:pointer;flex-direction:row;margin-right:32px;grid-area:currentUser;position:relative;']),
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
})(['font-size:12px;white-space:nowrap;color:', ';transition:color 250ms ease-in-out;', ':hover &{color:', ';}'], function (props) {
    return props.current ? _scMixins.colors.red : _scMixins.colors.label;
}, Container, _scMixins.colors.red),
    Image = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Image'
})(['height:32px;width:32px;margin-left:20px;border-radius:50%;']),
    Img = _styledComponents2.default.img.withConfig({
    displayName: 'CurrentUser__Img'
})(['height:32px;width:32px;border-radius:50%;']),
    Dropdown = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Dropdown'
})(['position:absolute;top:', ';transition:top 250ms ease-in-out;background-color:white;right:0px;border:1px solid rgba(32,32,32,0.1);'], function (props) {
    return props.expanded ? '36px' : '-200px';
}),
    Item = _styledComponents2.default.div.withConfig({
    displayName: 'CurrentUser__Item'
})(['border-bottom:1px solid rgba(32,32,32,0.1);padding:5px;']);

var CurrentUser = function (_Component) {
    _inherits(CurrentUser, _Component);

    function CurrentUser(props) {
        _classCallCheck(this, CurrentUser);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clickDoc = function (e) {
            if (!_this.ref.base.contains(e.srcElement)) {
                _this.toggleDropdown(false);
                document.removeEventListener('click', _this.clickDoc);
            }
        };

        _this.toggleDropdown = function () {
            var expanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (expanded === null) {
                expanded = !_this.state.expanded;
            }
            if (expanded) {
                setTimeout(function () {
                    document.addEventListener('click', _this.clickDoc);
                }, 50);
            }
            _this.setState({ expanded: expanded });
        };

        _this.ref;
        _this.state = {
            expanded: false
        };
        return _this;
    }

    CurrentUser.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            translations = _props.translations,
            _props$user = _props.user,
            first_name = _props$user.first_name,
            last_name = _props$user.last_name,
            company = _props$user.company,
            image = _props$user.image,
            expanded = this.state.expanded;

        return (0, _preact.h)(
            Container,
            { onClick: function onClick() {
                    return _this2.toggleDropdown(true);
                } },
            !_reactDeviceDetect.isMobile && (0, _preact.h)(
                Details,
                null,
                (0, _preact.h)(
                    Name,
                    { current: window.location.hash === "#/profiel" },
                    first_name + ' ' + last_name
                ),
                (0, _preact.h)(
                    Company,
                    { current: window.location.hash === "#/profiel" },
                    company
                )
            ),
            (0, _preact.h)(
                Image,
                null,
                (0, _preact.h)(Img, { src: image })
            ),
            (0, _preact.h)(
                Dropdown,
                { ref: function ref(_ref2) {
                        _this2.ref = _ref2;
                    }, expanded: expanded },
                _reactDeviceDetect.isMobile && (0, _preact.h)(
                    Item,
                    null,
                    (0, _preact.h)(
                        Details,
                        null,
                        (0, _preact.h)(
                            Name,
                            { current: window.location.hash === "#/profiel" },
                            first_name + ' ' + last_name
                        ),
                        (0, _preact.h)(
                            Company,
                            { current: window.location.hash === "#/profiel" },
                            company
                        )
                    )
                ),
                (0, _preact.h)(
                    Item,
                    { onClick: function onClick() {
                            window.location.hash = '#/profiel';
                        } },
                    translations.getLL('MY_PROFILE', 'My Profile')
                ),
                (0, _preact.h)(
                    Item,
                    { onClick: _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            document.cookie = "authToken=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                                            document.cookie = "id_token=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                                            document.cookie = "access_token; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                                            window.location.pathname = '/signin/index.html';
                                            window.location.hash = '';

                                        case 5:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, _this2);
                        })) },
                    translations.getLL('SIGN_OUT', 'Sign Out')
                )
            )
        );
    };

    return CurrentUser;
}(_preact.Component);

exports.default = CurrentUser;