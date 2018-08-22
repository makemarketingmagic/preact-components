import { h, Component } from 'preact';
import format from 'date-fns/format'
import styled from 'styled-components';
import scMixins from '../common/scMixins';

const VisitContainer = styled.div`
    margin-top: 16px;
    padding: 0 64px;
    ${scMixins.media.mobile`padding: 0 32px;`}
`

const VisitHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    line-height: 24px;

    div:first-child {
        flex: 1;
    }
`

const VisitRow = VisitHeader.extend`
    color: #88A5AD;
`

const VisitDate = styled.div`
    text-transform: uppercase;
`

export default class RecentVisits extends Component {
    render() {
        const { visits } = this.props;
        return (
            <VisitContainer>
                <VisitHeader>
                    <div>Bezochte pagina</div>
                    <div>Datum</div>
                </VisitHeader>
                {visits.map((visit) => (
                    <VisitRow>
                        <div>{visit.page}</div>
                        <VisitDate>{format(visit.date, 'DD MMM YYYY')}</VisitDate>
                    </VisitRow>
                ))}
            </VisitContainer>
        )
    }
}