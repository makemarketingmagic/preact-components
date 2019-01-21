import { h, Component } from 'preact'
import TypographyDemo from '../../components/Demo/Typography';
import Papers from './../../components/Papers/index';
import styles from './Demo.less'
import InputsDemo from './../../components/Demo/Inputs';
import Navigation from './../../components/Navigation/index';
import RecommendedLead from './../../components/recommendedLead/index';
import { Onboarding, defaultSteps } from './../../components/Onboarding'
import SalesOpportunities from '../Brands/SalesOpportunities';

export default class Demo extends Component {
    onDrop(acceptedFiles, rejectedFiles) {
        console.log('Accepted files: ', acceptedFiles);
        console.log('Rejected files: ', rejectedFiles);
    }

    render() {
        return (
            <div id="demo">
                <Navigation tabs={
                    [
                        {
                            text: 'Sales Opportunities',
                            url: 'test'
                        },
                        {
                            text: 'AHA Planning'
                        },
                        {
                            text: 'Reports'
                        },
                        {
                            text: 'Notes'
                        },
                        {
                            text: 'Files'
                        },
                        {
                            text: 'Onboarding'
                        },
                        {
                            text: 'Info'
                        }
                    ]
                } />
                <SalesOpportunities leads={[]} />
                {/* <div class={styles.demoGrid}>
                    <Papers pages={[
                        { component: TypographyDemo, props: {} }
                    ]} />W
                    <Papers pages={[
                        { component: InputsDemo, props: {} }
                    ]} />
                </div> */}

                {/* <Onboarding steps={defaultSteps} /> */}
                {/* <RecommendedLead /> */}
            </div>
        )
    }
}