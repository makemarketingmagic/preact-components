import { h, Component } from 'preact'
import styles from './Navigation.less'
import WOOLogo from '../icons/WOOLogo';
import CurrentUser from './CurrentUser';
import Tabs from './Tabs';

export default class Navigation extends Component {
    render() {
        return (
            <header class={styles.header}>
                <div class={styles.wooLogo}>
                    <WOOLogo />
                </div>
                <Tabs tabs={[
                    { text: 'AHA Feedback' },
                    {
                        text: 'Rapportages', subMenu: [
                            { text: 'Submenu' },
                            { text: 'Submenu' },
                            { text: 'Submenu' },
                            { text: 'Submenu' },
                            { text: 'Submenu' },
                            { text: 'Submenu' },
                            { text: 'Submenu' }
                        ]
                    },
                    {
                        text: 'Verkoopkansen', subMenu: [
                            { text: 'Another Submenu' }
                        ]
                    },
                    { text: 'Notities' },
                    { text: 'Informatie' }
                ]} />
                <CurrentUser />
            </header>
        )
    }
}
