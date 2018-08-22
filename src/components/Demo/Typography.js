import { h, Component } from 'preact'
import styles from './styles.less'

export default class TypographyDemo extends Component {
    render() {
        return (
            <div class={styles.columns}>
                <div class={styles.title}>Typography</div>
                <div class={styles.column}>
                    <div class={styles.labelGrey}>Label Grey</div>
                    <div class={styles.labelColored}>Label Colored</div>
                    <div class={styles.labelRed}>Label Red</div>
                    <div class={styles.labelDark}>Label Dark</div>
                    <div class={styles.labelWhite}>Label White</div>
                    <div class={styles.labelDisabled}>Label Disabled</div>
                    <div class={styles.divider} />
                    <div class={styles.uiRegular}>UI Regular</div>
                    <div class={styles.uiPlaceholder}>UI Placeholder</div>
                    <div class={styles.uiColored}>UI Colored</div>
                    <div class={styles.divider} />
                    <div class={styles.titleLabel}>Title Label</div>
                    <div class={styles.titleDark}>Title Dark</div>
                    <div class={styles.titleRed}>Title Red</div>
                </div>
                <div class={styles.column}>
                    <div class={styles.personaName}>Persona Name</div>
                    <div class={styles.personaOrange}>Administratie</div>
                    <div class={styles.personaYellow}>Adverteerder</div>
                    <div class={styles.personaRed}>Consultant</div>
                    <div class={styles.personaGreen}>Content Producent</div>
                    <div class={styles.personaBlue}>Marketing Manager</div>
                    <div class={styles.personaGrey}>Techneut</div>
                </div>
            </div>
        )
    }
}