import { h, Component } from 'preact'
import styled from 'styled-components';
import WOOLogo from '../icons/WOOLogo';
import CurrentUser from './CurrentUser';
import Tabs from './Tabs';
import { colors } from '../common/scMixins';

const Header = styled.header`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: ${colors.white};
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    margin-left: 32px;
`

export default class Navigation extends Component {
    render() {
        const { tabs } = this.props
        return (
            <Header>
                <LogoContainer>
                    <WOOLogo />
                </LogoContainer>
                <Tabs tabs={tabs} />
                <CurrentUser />
            </Header>
        )
    }
}
