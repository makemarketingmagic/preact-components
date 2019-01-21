import { h, Component } from 'preact'
import styled from 'styled-components'
import styles from './Navigation.less'
import classNames from 'classnames'
import { colors } from '../common/scMixins'

const TabsEl = styled.nav`
    display: flex; 
    flex-direction: row;
    height: 100%;
    background-color: ${colors.white};
`, TabEl = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    cursor: pointer;
    justify-content: center;
    border-bottom: ${props => props.active ? '2px solid ' + colors.red : '2px solid transparent'};
    transition: border-bottom 250ms ease-in-out,
        color 250ms ease-in-out;
    white-space: nowrap;
    &:hover {
        border-bottom: ${props => props.active ? `2px solid ${colors.red}` : `1px solid ${colors.red}`};
        color: ${ colors.red};
    }
`

export default class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            subMenuOpen: false
        }
    }

    handleOpen = (tab, key) => {
        const { url = false } = tab
        if (url) {
            window.location.href = url
        }
        this.setState({ subMenuOpen: tab.subMenu ? key : false })
        tab.subMenu && setTimeout(() => {
            let closeSubMenu = this.closeSubMenu
            document.addEventListener('click', function clickFunction() {
                closeSubMenu()
                document.removeEventListener('click', clickFunction)
            })
        }, 250)
    }

    closeSubMenu = () => {
        this.setState({ subMenuOpen: false })
    }

    render() {
        const { tabs = [] } = this.props
        return (
            <TabsEl>
                {tabs.map((tab, key) => (
                    <Tab
                        handleOpen={this.handleOpen}
                        tab={tab}
                        id={key}
                        active={tab.url === window.location.pathname}
                        subMenuOpen={this.state.subMenuOpen}
                    />
                ))}
            </TabsEl>
        )
    }
}

class Tab extends Component {
    handleOpen = (e) => {
        const { handleOpen, tab, id } = this.props
        handleOpen && tab && id >= 0 && handleOpen(tab, id)
        e.stopPropagation()
    }

    render() {
        const { tab, id, active, subMenuOpen } = this.props
        return (
            <TabEl
                onClick={this.handleOpen}
                active={active}
            >
                {tab.text}
                {tab.subMenu &&
                    <div class={classNames(styles.subMenu, subMenuOpen === id ? styles.subMenuOpen : null)}>
                        {tab.subMenu.map((subTab, subKey) => (
                            <div key={subKey} class={styles.subTab}>{subTab.text}</div>
                        ))}
                    </div>
                }
            </TabEl>
        )
    }
}