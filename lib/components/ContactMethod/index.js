'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _PhoneIcon = require('../icons/PhoneIcon');

var _PhoneIcon2 = _interopRequireDefault(_PhoneIcon);

var _EmailIcon = require('./../icons/EmailIcon');

var _EmailIcon2 = _interopRequireDefault(_EmailIcon);

var _NavigateIcon = require('./../icons/NavigateIcon');

var _NavigateIcon2 = _interopRequireDefault(_NavigateIcon);

var _ContactMethod = require('./ContactMethod.less');

var _ContactMethod2 = _interopRequireDefault(_ContactMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var icons = {
    phone: _PhoneIcon2.default,
    email: _EmailIcon2.default,
    address: _NavigateIcon2.default
};

var actions = {
    phone: function phone(val) {
        return 'tel:' + val;
    },
    email: function email(val) {
        return 'mailto:' + val;
    },
    address: function address(val) {
        return 'https://www.google.com/maps/search/' + val;
    }
};

var ContactMethod = function (_Component) {
    _inherits(ContactMethod, _Component);

    function ContactMethod() {
        _classCallCheck(this, ContactMethod);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ContactMethod.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            value = _props.value,
            Icon = icons[type],
            href = actions[type](value);

        return (0, _preact.h)(
            'div',
            { 'class': _ContactMethod2.default.contactMethod },
            (0, _preact.h)(
                'a',
                { target: '_system', href: href },
                (0, _preact.h)(Icon, null),
                value
            )
        );
    };

    return ContactMethod;
}(_preact.Component);

exports.default = ContactMethod;