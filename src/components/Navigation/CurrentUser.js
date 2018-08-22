import { h, Component } from 'preact'
import styles from './Navigation.less'

export default class CurrentUser extends Component {
    render() {
        return (
            <div class={styles.currentUser}>
                <div class={styles.userDetails}>
                    <div class={styles.currentUserName}>Hans van den Akker</div>
                    <div class={styles.currentUserCompany}>Bizboard</div>
                </div>
                <div class={styles.userImage}>
                    <img src={'../../assets/Hans.png'} />
                </div>
            </div>
        )
    }
}