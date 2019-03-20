import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins'

const TabsEl = styled.nav`
    display: flex; 
    flex-direction: row;
    height: 100%;
    background-color: ${colors.white};
`, TabEl = styled.a`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    cursor: pointer;
    justify-content: center;
    border-bottom: ${props => props.active ? '2px solid ' + colors.red : '1px solid transparent'};
    transition: border-bottom 250ms ease-in-out,
        color 250ms ease-in-out;
    white-space: nowrap;
    color: ${props => props.active ? colors.red : colors.text};
    text-decoration: none;
    
    &:hover {
        border-bottom: ${props => props.active ? `2px solid ${colors.red}` : `1px solid ${colors.red}`};
        color: ${ colors.red};
    }
`, SubMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    transform: translateY(${props => props.open ? '48px' : '-100%'});
    opacity: ${props => props.open ? '1' : '0'};
    top: 0;
    background-color: ${colors.white};
    padding: 16px;
    z-index: 30;
    box-shadow: 2px 2px 0 rgba(32, 32, 32, 0.1);
    transition: transform 250ms ease-in-out,
        opacity 250ms ease-in-out;
`, SubTab = styled.div`
    color: ${colors.text};
    margin: 4px 0;
    &:hover {
        color: ${colors.red};
    }
`

export default class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            subMenuOpen: false
        }
        window.onhashchange = () => {
            this.setState({})
        }
    }

    isActive = (tab) => {
        const { DYNAMIC_URL = false, URL } = tab
        const { $location } = this.props
        let vars = {

        }
        let accountId = this.props.brandId
        // /brand-details/:accountId/info
        if (DYNAMIC_URL) {
            let re = /:(\w+)/ig,
                url = DYNAMIC_URL
            //     match = re.exec(url)
            // while (match) {
            //     vars[match[1]] = {
            //         index: match.index + 1
            //     }
            url = url.replace(re, '.+?')
            return new RegExp(url).test('#' + $location.path())
            // url = url.slice(match.index + 1 + match[1].length)
            // match = re.exec(url)
            // }

        } else {
            if (URL[0] === '#')

                return '#' + $location.path() === URL
            else return window.location.pathname === URL
        }
    }

    handleOpen = (tab, key) => {
        const { DYNAMIC_URL = false, URL } = tab
        const { brandId, $location } = this.props
        if (DYNAMIC_URL) {
            $location.path(DYNAMIC_URL.replace(/:accountid/ig, brandId), false)
        } else {
            $location.path(URL)
        }
        // this.setState({ subMenuOpen: tab.subMenu ? key : false })
        // tab.subMenu && setTimeout(() => {
        //     let closeSubMenu = this.closeSubMenu
        //     document.addEventListener('click', function clickFunction() {
        //         closeSubMenu()
        //         document.removeEventListener('click', clickFunction)
        //     })
        // }, 250)
    }

    closeSubMenu = () => {
        this.setState({ subMenuOpen: false })
    }

    render() {
        const { tabs = [], translations, brandId } = this.props
        return (
            <TabsEl>
                {tabs.map((tab, key) => (
                    <Tab
                        brandId={brandId}
                        tab={tab}
                        id={key}
                        handleOpen={this.handleOpen}
                        active={this.isActive(tab)}
                        subMenuOpen={this.state.subMenuOpen}
                        translations={translations}
                    />
                ))}
            </TabsEl>
        )
    }
}

class Tab extends Component {
    // handleOpen = (e) => {
    //     const { handleOpen, tab, id } = this.props
    //     handleOpen && tab && id >= 0 && handleOpen(tab, id)
    //     e.stopPropagation()
    // }

    render() {
        const { brandId, tab: { TITLE, TITLE_TRANSLATION_LABEL, URL, DYNAMIC_URL, IS_ALLOWED, IS_MICROSOFT = false }, id, active, subMenuOpen, translations } = this.props
        let currentUrl = window.location.hash.replace(/^#/, ''),
            dynamicUrl = '' + DYNAMIC_URL.replace(/:accountid/i, brandId)
        return (

            <TabEl
                // onClick={this.handleOpen}
                active={currentUrl === dynamicUrl}
                href={dynamicUrl}
            >
                {translations.getLL(TITLE_TRANSLATION_LABEL || TITLE, TITLE)}
                {/* {tab.subMenu &&
                        <SubMenu open={subMenuOpen === id}>
                            {tab.subMenu.map((subTab, subKey) => (
                                <SubTab key={subKey}>{subTab.text}</SubTab>
                            ))}
                        </SubMenu> */}

            </TabEl>
        )
    }
}