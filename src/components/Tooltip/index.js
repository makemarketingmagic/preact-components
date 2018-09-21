import { h, Component } from 'preact';
import CrossIcon from '../icons/CrossIcon';
import styled from 'styled-components';
import { colors, media } from '../common/scMixins';
import { transparentize } from 'polished';

const TooltipEl = styled.div`
    background: ${colors.white};
    border-color: ${colors.white};
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 ${transparentize(0.96, colors.black)}, 0 1px 2px 2px ${transparentize(0.92, colors.black)};
    padding: 16px 32px;
    display: flex;
    &::before {
        content: '';
        box-shadow: 10px -10px 0 10px ${colors.white}, 0 4px 8px 0 ${transparentize(0.96, colors.black)}, 0 1px 2px 2px ${transparentize(0.92, colors.black)};
        align-self: center;
        width: 16px;
        height: 16px;
        display: block;
        border-radius: 4px;
        transform: rotate(45deg);
        background: ${colors.white};
        position: relative;
        left: -39px;
        top: 4px;
        ${media.mobile`
            display: none;
        `}
    }
`

const TooltipName = styled.div`
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
`

const TooltipPosition = styled.div`
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: ${props => colors[props.color] || colors.black};
`

const TooltipMessage = styled.div`
    font-size: 12px;
    line-height: 14px;
    margin-top: 8px;
`

const TooltipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform-origin: left center;
    transition: transform 150ms ease-in;
    transform: ${props => props.open ? 'scaleX(1)' : 'scaleX(0)'};
`

const TooltipContents = styled.div`
    display: flex;
    flex-direction: row;
`

const CloseButton = styled.div`
    flex: 0 0 8px;
    height: 24px;
    cursor: pointer;
`

const CrossIconEl = styled(CrossIcon)`
    fill: ${props => colors[props.color] || colors.black};
`

export default class Tooltip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible || true
        }
    }

    toggleTooltip = () => {
        this.setState({ visible: !this.state.visible })
    }


    render() {
        const { name, position, message, color, closable = true } = this.props;
        return (
            <TooltipContainer open={this.state.visible} class={'notranslate'}>
                <TooltipEl>
                    <TooltipContents>
                        <div>
                            <TooltipName>{name}</TooltipName>
                            <TooltipPosition color={color}>{position}</TooltipPosition>
                            <TooltipMessage>{message}</TooltipMessage>
                        </div>
                        {closable && <CloseButton onClick={this.toggleTooltip}>
                            <CrossIconEl color={color} />
                        </CloseButton>}
                    </TooltipContents>
                </TooltipEl>
            </TooltipContainer>
        )
    }
}