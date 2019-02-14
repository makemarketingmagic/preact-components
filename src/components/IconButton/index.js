import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins';

const ButtonBack = styled.button`
    height: 24px;
    width: 24px;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.secondary ? props.color : props.background};
`

export default class IconButton extends Component {

    onClick = () => {
        const { onClick } = this.props
        onClick && onClick(arguments)
    }

    render() {
        const { Icon, color = colors.red, title, secondary = false, background = colors.actionIncomplete } = this.props
        return (
            <ButtonBack title={title} color={color} secondary={secondary} onClick={this.onClick} background={background}>
                <Icon color={secondary ? background : color} height={16} width={16} />
            </ButtonBack>
        )
    }
}