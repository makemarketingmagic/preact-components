import { h, Component } from 'preact'
import styled from 'styled-components';
import WOOLogo from '../icons/WOOLogo';
import CurrentUser from './CurrentUser';
import Tabs from './Tabs';
import { colors } from '../common/scMixins';

const Header = styled.header`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${colors.white};
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    margin-left: 32px;
`

export default class Navigation extends Component {
    render() {
        const { tabs, user, $location, accountId } = this.props
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        translations.getLL = (label, fallback, values = []) => {
            let string = translations.getTranslation(label, fallback)
            const re = /(%v\d*)/ig
            let isString = true
            let result = []
            string = string.split(re)
            for (var i = 0; i < string.length; i++) {
                let stringFragment = string[i]
                let match = (/%v(\d*)/ig).exec(stringFragment)
                if (match) {
                    let index = parseInt(match[1])
                    if (values[index - 1].nodeName) {
                        isString = false
                    }
                    result.push(values[index - 1])
                } else {
                    result.push(stringFragment)
                }
            }
            return isString ? result.join('') : result
        }
        return (
            <Header>
                <LogoContainer>
                    <WOOLogo />
                </LogoContainer>
                <Tabs $location={$location} tabs={tabs} brandId={accountId} translations={translations} />
                <CurrentUser user={user} $location={$location} />
            </Header>
        )
    }
}
