import { h, Component } from 'preact'
import style from './Button.less'
// eslint-disable-next-line no-unused-vars
import mdl from 'material-design-lite/material';
import { MUIButton } from '../common/MUIComponents';

export default class Button extends Component {
    render() {
        const { children, Icon = null, iconLeft = false, iconRight = false, secondary = false, disabled = false } = this.props
        return (
            <MUIButton
                raised={true}
                primary={secondary}
                colored={!secondary}
                accent={!secondary}
                disabled={disabled}
            >
                <div class={style.buttonContent}>
                    {iconLeft && Icon && <Icon color='inherit' />}
                    <span style={{
                        marginLeft: iconLeft ? 8 : 0,
                        marginRight: iconRight ? 8 : 0
                    }}>{children}</span>
                    {iconRight && Icon && <Icon color='inherit' />}
                </div>
            </MUIButton>
        )
    }
}