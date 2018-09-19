import styled, { css } from 'styled-components';

const sizes = {
    mobile: 600
}

const colors = {
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
    black: '#000',
}


const Font = styled.span`
    font-family: 'Montserrat';
`,
    Navigation = styled(Font)`
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: ${colors.text};
    `,
    NavigationActive = styled(Navigation)`
        color: ${colors.red};
    `,
    CurrentUser = styled(Font)`
        line-height: 14px;
        color: ${colors.label};
    `,
    CurrentUserName = styled(CurrentUser)`
        font-size: 14px;
        font-weight: 600;
    `,
    CurrentUserCompany = styled(CurrentUser)`
        font-size: 12px;
    `,
    Label = styled(Font)`
        font-size: 12px;
        line-height: 16px;
    `,
    LabelGrey = styled(Label)`
        color: ${colors.gray};
    `,
    LabelColored = styled(Label)`
        color: ${colors.label};
    `,
    LabelRed = styled(Label)`
        color: ${colors.red};
    `,
    LabelDark = styled(Label)`
        color: ${colors.text};
    `,
    LabelWhite = styled(Label)`
        color: ${colors.white};
    `,
    LabelDisabled = styled(Label)`
        color: ${colors.disabled};
    `,
    UI = styled(Font)`
        font-size: 14px;
        line-height: 24px;
    `,
    UIRegular = styled(UI)`
        color: ${colors.text};
    `,
    UIPlaceholder = styled(UI)`
        color: ${colors.placeholder};
    `,
    UIColored = styled(UI)`
        color: ${colors.label};
    `,
    TitleLabel = styled(Font)`
        font-size: 14px;
        line-height: 16px;
    `,
    Title = styled(Font)`
        font-size: 24px;
        line-height: 32px;
    `,
    TitleDark = styled(Title)`
        color: ${colors.text};
    `,
    TitleRed = styled(Title)`
        color: ${colors.red}
    `,
    Persona = styled(Font)`
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
    `,
    PersonaOrange = styled(Persona)`
        color: ${colors.orange};
    `,
    PersonaYellow = styled(Persona)`
        color: ${colors.yellow};
    `,
    PersonaRed = styled(Persona)`
        color: ${colors.red};
    `,
    PersonaGreen = styled(Persona)`
        color: ${colors.green};
    `,
    PersonaBlue = styled(Persona)`
        color: ${colors.blue};
    `,
    PersonaGrey = styled(Persona)`
        color: ${colors.grey};
    `,
    PersonaName = styled(Font)`
        font-size: 14px;
        line-height: 20px;
        color: ${colors.text};
`

const typography = {
    Navigation,
    NavigationActive,
    CurrentUser,
    CurrentUserName,
    CurrentUserCompany,
    LabelGrey,
    LabelColored,
    LabelRed,
    LabelDark,
    LabelWhite,
    LabelDisabled,
    UIRegular,
    UIPlaceholder,
    UIColored,
    TitleLabel,
    TitleDark,
    TitleRed,
    PersonaOrange,
    PersonaYellow,
    PersonaRed,
    PersonaGreen,
    PersonaBlue,
    PersonaGrey,
    PersonaName
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
}, {});
export {
    media,
    typography,
    colors
}