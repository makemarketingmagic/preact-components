import { h, Component, cloneElement } from 'preact'
import styled from 'styled-components'
import Button from '../Button';
import CrossIcon from '../icons/CrossIcon';
import { colors } from '../common/scMixins';
import { transparentize } from 'polished';

const animationLength = 250

const OverlayButton = styled(Button)`
    z-index: 2;
`

const CloseButton = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    line-height: 8px;
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${transparentize(1, colors.grey)};

    &:hover {
        background-color: ${transparentize(.94, colors.grey)};
    }
`

const Overlay = styled.div`
    display: flex;
    visibility: ${props => props.open || props.animating ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    background-color: rgba(255, 255, 255, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 1030;
    transition: opacity ${animationLength}ms ease-in-out;

    & > * {
        transition: all ${animationLength}ms ease-in-out;
        transform: scale(${props => props.open ? 1 : 0});
    }
`

export default class FullScreenOverlay extends Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = { open: false, animating: false }


    }

    toggleOverlay = () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.finishedAnimating, animationLength);
        this.setState({ open: !this.state.open, animating: true })
    }

    finishedAnimating = () => {
        this.setState({ animating: false })
    }

    render() {
        const { children, buttonText = "Open Overlay" } = this.props;
        const childrenWithProps = children.map(child =>
            cloneElement(child, { toggleOverlay: this.toggleOverlay }));
        return (
            <div>
                <Overlay open={this.state.open} animating={this.state.animating}>
                    <CloseButton onClick={this.toggleOverlay}><CrossIcon /></CloseButton>
                    {childrenWithProps}
                </Overlay>
                <OverlayButton onClick={this.toggleOverlay}>{buttonText}</OverlayButton>
            </div>
        )
    }
}