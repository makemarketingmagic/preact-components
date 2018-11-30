import { h, Component } from 'preact'
import TypographyDemo from '../../components/Demo/Typography';
import Papers from './../../components/Papers/index';
import styles from './Demo.less'
import InputsDemo from './../../components/Demo/Inputs';
import Navigation from './../../components/Navigation/index';
import RecommendedLead from './../../components/recommendedLead/index';
import { Onboarding, defaultSteps } from './../../components/Onboarding'

export default class Demo extends Component {
    render() {
        return (
            <div id="demo">
                {/* <Navigation />
                <div class={styles.demoGrid}>
                    <Papers pages={[
                        { component: TypographyDemo, props: {} }
                    ]} />
                    <Papers pages={[
                        { component: InputsDemo, props: {} }
                    ]} />
                </div> */}
                <Onboarding steps={defaultSteps} />
                {/* <RecommendedLead /> */}
            </div>
        )
    }
}