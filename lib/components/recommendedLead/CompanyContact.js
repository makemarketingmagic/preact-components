'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['padding: 16px 32px;'], ['padding: 16px 32px;']),
    _templateObject2 = _taggedTemplateLiteralLoose(['flex-direction: column;'], ['flex-direction: column;']),
    _templateObject3 = _taggedTemplateLiteralLoose(['margin-top: 12px;'], ['margin-top: 12px;']);

var _preact = require('preact');

var _scMixins = require('../common/scMixins');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ContactMethod = require('../ContactMethod');

var _ContactMethod2 = _interopRequireDefault(_ContactMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ContactContainer = _styledComponents2.default.div.withConfig({
    displayName: 'CompanyContact__ContactContainer'
})(['margin-top:16;padding:32px 64px;background-color:#F2F8FA;', ''], _scMixins.media.mobile(_templateObject));

var ContactMethods = _styledComponents2.default.div.withConfig({
    displayName: 'CompanyContact__ContactMethods'
})(['display:flex;flex-direction:row;', ''], _scMixins.media.mobile(_templateObject2));

var ContactTip = _styledComponents2.default.div.withConfig({
    displayName: 'CompanyContact__ContactTip'
})(['margin-top:24px;color:#88A5AD;span:{color:#323232;}', ''], _scMixins.media.mobile(_templateObject3));

var CompanyContact = function (_Component) {
    _inherits(CompanyContact, _Component);

    function CompanyContact() {
        _classCallCheck(this, CompanyContact);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CompanyContact.prototype.render = function render() {
        var contactMethods = this.props.contactMethods;

        return (0, _preact.h)(
            ContactContainer,
            null,
            (0, _preact.h)(
                ContactMethods,
                null,
                contactMethods.map(function (method) {
                    return (0, _preact.h)(_ContactMethod2.default, { type: method.type, value: method.value });
                })
            ),
            (0, _preact.h)(
                ContactTip,
                null,
                (0, _preact.h)(
                    'span',
                    null,
                    'Tips voor het contact:'
                ),
                ' Introduceer jezelf vriendelijk, vermeld dat de prospect naar boven is gekomen met een analyse op je website, vrag of je ze ergens mee kan helpen en of een kop koffie een idee is.'
            )
        );
    };

    return CompanyContact;
}(_preact.Component);

exports.default = CompanyContact;