import { h, Component } from 'preact'
import styled from 'styled-components';
import WOOLogo from '../icons/WOOLogo';
import CurrentUser from './CurrentUser';
import Tabs, { MobileTabs } from './Tabs';
import { colors } from '../common/scMixins';
import { debounce } from 'lodash';
import { isMobile } from 'react-device-detect';

const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 10000000;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-areas: 'logo nav currentUser';
    background-color: ${colors.white};
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    margin-left: 32px;
    grid-area: logo;

`

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolled: false
        }
        window.addEventListener('scroll', debounce(this.onScroll))
    }

    onScroll = (e) => {
        let scrollPos = window.scrollY
        this.setState({ scrolled: scrollPos > 32 })
    }

    render() {
        const { tabs, user, $location, accountId, isMicrosoft } = this.props
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
        let TabsComponent = isMobile ? MobileTabs : Tabs
        return (
            <Header scrolled={this.state.scrolled}>
                <LogoContainer>
                    <WOOLogo />
                </LogoContainer>
                <TabsComponent isMicrosoft={isMicrosoft} $location={$location} tabs={tabs} user={user} brandId={accountId} translations={translations} />
                <CurrentUser translations={translations} user={user} $location={$location} />
            </Header>
        )
    }
}
