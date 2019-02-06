import { h, Component } from 'preact'

import styled from 'styled-components'
import { colors } from '../common/scMixins';

const Container = styled.div`
    display: flex;
    justify-self: end;
    cursor: pointer;
    flex-direction: row;
    margin-right: 32px;
`, Details = styled.div`
    display: flex;
    flex-direction: column;
`, Name = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.current ? colors.red : colors.label};
    transition: color 250ms ease-in-out;

    ${Container}:hover & {
        color: ${colors.red};
    }
`, Company = styled.div`
    font-size: 12px;
    color: ${props => props.current ? colors.red : colors.label};
    transition: color 250ms ease-in-out;

    ${Container}:hover & {
        color: ${colors.red};
    }
`, Image = styled.div`
    height: 32px;
    width: 32px;
    margin-left: 20px;
    border-radius: 50%;
`, Img = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`

export default class CurrentUser extends Component {
    render() {
        const { user: { first_name, last_name, company, image } } = this.props
        return (
            <Container onClick={() =>
                window.location.pathname = '/profile'
            }>
                <Details>
                    <Name current={window.location.pathname === '/profile'}>{first_name + ' ' + last_name}</Name>
                    <Company current={window.location.pathname === '/profile'}>{company}</Company>
                </Details>
                <Image>
                    <Img src={image} />
                </Image>
            </Container>
        )
    }
}