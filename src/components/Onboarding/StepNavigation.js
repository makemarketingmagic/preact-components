import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins';
import WOOLogo from '../icons/WOOLogo';

const StepNavEl = styled.nav`
    height: 160px;
    background-color: ${colors.white};
    padding: 16px 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,
    LogoContainer = styled.div`
    margin-right: 64px;
`

export default class StepNavigation extends Component {
    render() {
        const { children, showLogo = true } = this.props
        return (
            <StepNavEl>
                {showLogo && <LogoContainer>
                    <WOOLogo />
                </LogoContainer>}
                {children}
            </StepNavEl>
        )
    }
}