'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['padding: 0 32px'], ['padding: 0 32px']);

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LabelValue = require('../LabelValue');

var _LabelValue2 = _interopRequireDefault(_LabelValue);

var _scMixins = require('./../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var CompanyDetailContainer = _styledComponents2.default.div.withConfig({
    displayName: 'CompanyDetails__CompanyDetailContainer'
})(['margin-top:32px;padding:0 64px;', ' '], _scMixins.media.mobile(_templateObject));

var CompanyDetails = function (_Component) {
    _inherits(CompanyDetails, _Component);

    function CompanyDetails() {
        _classCallCheck(this, CompanyDetails);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    CompanyDetails.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            city = _props.city,
            industry = _props.industry;

        return (0, _preact.h)(
            CompanyDetailContainer,
            null,
            (0, _preact.h)(_LabelValue2.default, { flipped: true, valueText: name, labelText: city + ', ' + industry })
        );
    };

    return CompanyDetails;
}(_preact.Component);

exports.default = CompanyDetails;