import { h, Component } from 'preact';
import styled from 'styled-components';
import LabelValue from '../LabelValue';
import mixins from './../common/scMixins';

const CompanyDetailContainer = styled.div`
    margin-top: 32px;
    padding: 0 64px;
    ${mixins.media.mobile`padding: 0 32px`} 
`

export default class CompanyDetails extends Component {
    render() {
        const { name, city, industry } = this.props;
        return (
            <CompanyDetailContainer>
                <LabelValue flipped={true} valueText={name} labelText={`${city}, ${industry}`} />
            </CompanyDetailContainer>
        )
    }
}