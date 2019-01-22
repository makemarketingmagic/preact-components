'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Dropdown = require('../../../components/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _index = require('./../../../components/Button/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Container'
})(['padding:20px 24px;display:flex;flex-direction:row;']),
    VisitsContacts = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__VisitsContacts'
})(['display:flex;flex-direction:column;flex:1;margin-right:32px;']),
    ButtonsContainer = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__ButtonsContainer'
})(['display:flex;margin-top:12px;margin-left:32px;flex-direction:column;flex:0.4;']),
    Visit = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__Visit'
})(['font-style:normal;font-weight:normal;line-height:18px;font-size:14px;color:#88A5AD;background-color:#fff;border-radius:4px;padding:11px 16px;margin:4px 0;']),
    SectionTitle = _styledComponents2.default.div.withConfig({
    displayName: 'ExpandingSection__SectionTitle'
})(['margin-bottom:12px;margin-top:12px;font-style:normal;font-weight:normal;line-height:18px;font-size:14px;color:#888888;']),
    ContactButton = (0, _styledComponents2.default)(_index2.default).withConfig({
    displayName: 'ExpandingSection__ContactButton'
})(['margin:4px;']);

var ExpandingSection = function (_Component) {
    _inherits(ExpandingSection, _Component);

    function ExpandingSection() {
        _classCallCheck(this, ExpandingSection);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ExpandingSection.prototype.render = function render() {
        var data = _extends({}, this.props.events.getOpportunityDetails(this.props.data.id), this.props.data),
            labels = this.props.labels;

        return (0, _preact.h)(
            Container,
            null,
            (0, _preact.h)(
                VisitsContacts,
                null,
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    'Most recently visited pages:'
                ),
                data.visits && data.visits.map(function (val) {
                    return (0, _preact.h)(
                        Visit,
                        null,
                        val.pageTitle || val.pageTitleGa
                    );
                }),
                (0, _preact.h)(
                    SectionTitle,
                    null,
                    'Contacts that have visited your website:'
                ),
                data.contacts && data.contacts.map(function (val) {
                    return (0, _preact.h)(
                        Visit,
                        null,
                        val
                    );
                })
            ),
            (0, _preact.h)(
                ButtonsContainer,
                null,
                (0, _preact.h)(_Dropdown2.default, { options: labels, placeholder: 'No Label' }),
                data.Url && data.Url.map && data.Url.map(function (val) {
                    return (0, _preact.h)(
                        ContactButton,
                        { secondary: true },
                        val
                    );
                }),
                data.telephone && (0, _preact.h)(
                    ContactButton,
                    null,
                    data.telephone
                )
            )
        );
    };

    return ExpandingSection;
}(_preact.Component);

exports.default = ExpandingSection;