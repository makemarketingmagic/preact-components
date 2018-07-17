import { h, Component } from 'preact';
import format from 'date-fns/format'
import style from './style.less'

export default class RecentVisits extends Component {
    render() {
        const { visits } = this.props;
        return (
            <div class={style.visitContainer}>
                <div class={style.visitHeader}>
                    <div>Bezochte pagina</div>
                    <div>Datum</div>
                </div>
                {visits.map((visit, i) => (
                    <div class={style.visitRow}>
                        <div>{visit.page}</div>
                        <div class={style.visitDate}>{format(visit.date, 'DD MMM YYYY')}</div>
                    </div>
                ))}
            </div>
        )
    }
}