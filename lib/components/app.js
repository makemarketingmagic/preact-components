'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _preactRouter = require('preact-router');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _profile = require('./profile');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('preact/debug');

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
            _this.currentUrl = e.url;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */


    App.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { id: 'app' },
            (0, _preact.h)(_header2.default, null),
            (0, _preact.h)(
                _preactRouter.Router,
                { onChange: this.handleRoute },
                (0, _preact.h)(_home2.default, { path: '/' }),
                (0, _preact.h)(_profile2.default, { path: '/profile/', user: 'me' }),
                (0, _preact.h)(_profile2.default, { path: '/profile/:user' })
            )
        );
    };

    return App;
}(_preact.Component);

exports.default = App;