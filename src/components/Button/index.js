import { h, Component } from 'preact'
// eslint-disable-next-line no-unused-vars
import mdl from 'material-design-lite/material';
import { MUIButton } from '../common/MUIComponents';
import styled from 'styled-components';

const ButtonContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export default class Button extends Component {
    render() {
        const { children, onClick = null, Icon = null, iconLeft = false, iconRight = false, secondary = false, disabled = false } = this.props
        return (
            <MUIButton
                raised={true}
                primary={secondary}
                colored={!secondary}
                accent={!secondary}
                disabled={disabled}
                onClick={(e) => {
                    e.preventDefault()
                    onClick()
                }}
            >
                <ButtonContent>
                    {iconLeft && Icon && (<span style={{ display: 'flex' }}><Icon color='inherit' /></span>)}
                    <span style={{
                        textAlign: 'center',
                        width: '100%',
                        marginLeft: iconLeft ? 8 : 0,
                        marginRight: iconRight ? 8 : 0
                    }}>{children}</span>
                    {iconRight && Icon && (<span style={{ display: 'flex' }}><Icon color='inherit' /></span>)}
                </ButtonContent>
            </MUIButton>
        )
    }
}