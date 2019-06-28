import { h, Component } from 'preact'

import styled from 'styled-components'
import { colors } from '../common/scMixins';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
    display: flex;
    justify-self: end;
    cursor: pointer;
    flex-direction: row;
    margin-right: 32px;
    grid-area: currentUser;
    position: relative;
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
    white-space: nowrap;
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
`, Dropdown = styled.div`
    position: absolute;
    top: ${props => props.expanded ? '36px' : '-200px'};
    transition: top 250ms ease-in-out;
    background-color: white;
    right: 0px;
    border: 1px solid rgba(32, 32, 32, 0.1);
`, Item = styled.div`
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
    padding: 5px;
`

export default class CurrentUser extends Component {
    constructor(props) {
        super(props)
        this.ref;
        this.state = {
            expanded: false
        }
    }

    clickDoc = (e) => {
        if (!this.ref.base.contains(e.srcElement)) {
            this.toggleDropdown(false)
            document.removeEventListener('click', this.clickDoc)
        }
    }

    toggleDropdown = (expanded = null) => {
        if (expanded === null) {
            expanded = !this.state.expanded
        }
        if (expanded) {
            setTimeout(() => {
                document.addEventListener('click', this.clickDoc)
            }, 50)
        }
        this.setState({ expanded })
    }

    render() {
        const { translations, user: { first_name, last_name, company, image } } = this.props,
            { expanded } = this.state
        return (
            <Container onClick={() =>
                this.toggleDropdown(true)
            }>
                {!isMobile &&
                    <Details>
                        <Name current={window.location.hash === "#/profiel"}>{first_name + ' ' + last_name}</Name>
                        <Company current={window.location.hash === "#/profiel"}>{company}</Company>
                    </Details>
                }
                <Image>
                    <Img src={image} />
                </Image>
                <Dropdown ref={(ref) => { this.ref = ref }} expanded={expanded}>
                    {isMobile && <Item>
                        <Details>
                            <Name current={window.location.hash === "#/profiel"}>{first_name + ' ' + last_name}</Name>
                            <Company current={window.location.hash === "#/profiel"}>{company}</Company>
                        </Details>
                    </Item>}
                    <Item onClick={() => {
                        window.location.hash = '#/profiel'
                    }}>{translations.getLL('MY_PROFILE', 'My Profile')}</Item>
                    <Item onClick={async () => {
                        document.cookie = "authToken=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                        document.cookie = "id_token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                        document.cookie = "access_token; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                        window.location.pathname = '/signin/index.html';
                        window.location.hash = ''
                    }}>{translations.getLL('SIGN_OUT', 'Sign Out')}</Item>
                </Dropdown>
            </Container>
        )
    }
}