import { h, Component } from 'preact';
import style from './style.less';
import LabelValue from '../LabelValue';

export default class CompanyDetails extends Component {
    render() {
        const { name, city, industry } = this.props;
        return (
            <div class={style.companyDetailContainer}>
                <LabelValue flipped={true} valueText={name} labelText={`${city}, ${industry}`} />
            </div>
        )
    }
}