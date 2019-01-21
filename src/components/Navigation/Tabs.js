import { h, Component } from 'preact'
import styles from './Navigation.less'
import classNames from 'classnames'

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
            <nav class={styles.tabs}>
                {tabs.map((tab, key) => (
                    <Tab
                        handleOpen={this.handleOpen}
                        tab={tab}
                        id={key}
                        active={tab.url === window.location.pathname}
                        subMenuOpen={this.state.subMenuOpen}
                    />
                ))}
            </nav>
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
            <div
                onClick={this.handleOpen}
                class={classNames(styles.tab, active ? styles.activeTab : null)}
            >
                {tab.text}
                {tab.subMenu &&
                    <div class={classNames(styles.subMenu, subMenuOpen === id ? styles.subMenuOpen : null)}>
                        {tab.subMenu.map((subTab, subKey) => (
                            <div key={subKey} class={styles.subTab}>{subTab.text}</div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}