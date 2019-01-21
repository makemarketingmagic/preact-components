import { h, Component } from 'preact'

import styled from 'styled-components'
import { colors } from '../common/scMixins';

const Container = styled.div`
    display: flex;
    justify-self: end;
    flex-direction: row;
    margin-right: 32px;
`, Details = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.label};
`, Name = styled.div`
    font-size: 14px;
    font-weight: 600;
`, Company = styled.div`
    font-size: 12px;
`, Image = styled.div`
    height: 32px;
    width: 32px;
    margin-left: 20px;
    border-radius: 50%;
`

export default class CurrentUser extends Component {
    render() {
        return (
            <Container>
                <Details>
                    <Name>Hans van den Akker</Name>
                    <Company>Bizboard</Company>
                </Details>
                <Image>
                    <img src={'../../assets/Hans.png'} />
                </Image>
            </Container>
        )
    }
}