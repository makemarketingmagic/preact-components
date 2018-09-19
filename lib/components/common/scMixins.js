'use strict';

exports.__esModule = true;
exports.colors = exports.typography = exports.media = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
    mobile: 600
};

var colors = {
    red: '#EE4055',
    pink: '#F279AC',
    orange: '#FA9725',
    yellow: '#F2CB30',
    green: '#4DBF99',
    grey: '#8FABB3',
    blue: '#3D9CCC',
    label: '#88A5AD',
    text: '#323232',
    disabled: '#DAEAEF',
    placeholder: '#9DBDC6',
    white: '#FFF',
    gray: '#999',
    black: '#000'
};

var Font = _styledComponents2.default.span.withConfig({
    displayName: 'scMixins__Font'
})(['font-family:\'Montserrat\';']),
    Navigation = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__Navigation'
})(['font-size:14px;line-height:17px;font-weight:500;color:', ';'], colors.text),
    NavigationActive = (0, _styledComponents2.default)(Navigation).withConfig({
    displayName: 'scMixins__NavigationActive'
})(['color:', ';'], colors.red),
    CurrentUser = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__CurrentUser'
})(['line-height:14px;color:', ';'], colors.label),
    CurrentUserName = (0, _styledComponents2.default)(CurrentUser).withConfig({
    displayName: 'scMixins__CurrentUserName'
})(['font-size:14px;font-weight:600;']),
    CurrentUserCompany = (0, _styledComponents2.default)(CurrentUser).withConfig({
    displayName: 'scMixins__CurrentUserCompany'
})(['font-size:12px;']),
    Label = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__Label'
})(['font-size:12px;line-height:16px;']),
    LabelGrey = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelGrey'
})(['color:', ';'], colors.gray),
    LabelColored = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelColored'
})(['color:', ';'], colors.label),
    LabelRed = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelRed'
})(['color:', ';'], colors.red),
    LabelDark = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelDark'
})(['color:', ';'], colors.text),
    LabelWhite = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelWhite'
})(['color:', ';'], colors.white),
    LabelDisabled = (0, _styledComponents2.default)(Label).withConfig({
    displayName: 'scMixins__LabelDisabled'
})(['color:', ';'], colors.disabled),
    UI = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__UI'
})(['font-size:14px;line-height:24px;']),
    UIRegular = (0, _styledComponents2.default)(UI).withConfig({
    displayName: 'scMixins__UIRegular'
})(['color:', ';'], colors.text),
    UIPlaceholder = (0, _styledComponents2.default)(UI).withConfig({
    displayName: 'scMixins__UIPlaceholder'
})(['color:', ';'], colors.placeholder),
    UIColored = (0, _styledComponents2.default)(UI).withConfig({
    displayName: 'scMixins__UIColored'
})(['color:', ';'], colors.label),
    TitleLabel = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__TitleLabel'
})(['font-size:14px;line-height:16px;']),
    Title = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__Title'
})(['font-size:24px;line-height:32px;']),
    TitleDark = (0, _styledComponents2.default)(Title).withConfig({
    displayName: 'scMixins__TitleDark'
})(['color:', ';'], colors.text),
    TitleRed = (0, _styledComponents2.default)(Title).withConfig({
    displayName: 'scMixins__TitleRed'
})(['color:', ''], colors.red),
    Persona = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__Persona'
})(['font-size:12px;line-height:14px;text-transform:uppercase;']),
    PersonaOrange = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaOrange'
})(['color:', ';'], colors.orange),
    PersonaYellow = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaYellow'
})(['color:', ';'], colors.yellow),
    PersonaRed = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaRed'
})(['color:', ';'], colors.red),
    PersonaGreen = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaGreen'
})(['color:', ';'], colors.green),
    PersonaBlue = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaBlue'
})(['color:', ';'], colors.blue),
    PersonaGrey = (0, _styledComponents2.default)(Persona).withConfig({
    displayName: 'scMixins__PersonaGrey'
})(['color:', ';'], colors.grey),
    PersonaName = (0, _styledComponents2.default)(Font).withConfig({
    displayName: 'scMixins__PersonaName'
})(['font-size:14px;line-height:20px;color:', ';'], colors.text);

var typography = {
    Navigation: Navigation,
    NavigationActive: NavigationActive,
    CurrentUser: CurrentUser,
    CurrentUserName: CurrentUserName,
    CurrentUserCompany: CurrentUserCompany,
    LabelGrey: LabelGrey,
    LabelColored: LabelColored,
    LabelRed: LabelRed,
    LabelDark: LabelDark,
    LabelWhite: LabelWhite,
    LabelDisabled: LabelDisabled,
    UIRegular: UIRegular,
    UIPlaceholder: UIPlaceholder,
    UIColored: UIColored,
    TitleLabel: TitleLabel,
    TitleDark: TitleDark,
    TitleRed: TitleRed,
    PersonaOrange: PersonaOrange,
    PersonaYellow: PersonaYellow,
    PersonaRed: PersonaRed,
    PersonaGreen: PersonaGreen,
    PersonaBlue: PersonaBlue,
    PersonaGrey: PersonaGrey,
    PersonaName: PersonaName

    // Iterate through the sizes and create a media template
};var media = Object.keys(sizes).reduce(function (acc, label) {
    acc[label] = function () {
        return (0, _styledComponents.css)(['@media (max-width:', 'em){', '}'], sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
    };
    return acc;
}, {});
exports.media = media;
exports.typography = typography;
exports.colors = colors;