import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors, media } from '../common/scMixins';
import { transparentize } from 'polished';
import Button from '../Button';

const animationLength = 250

const Overlay = styled.div`
    display: flex;
    visibility: ${props => props.open || props.animating ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    background: rgba(157, 189, 198, 0.2);
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
`, Container = styled.div`
    z-index: 3;
    background-color: ${colors.white};
    box-shadow: 0 8px 16px 0 ${transparentize(0.92, colors.black)}, 0 1px 2px 1px ${transparentize(0.84, colors.black)};
    border-radius: 4px;
    max-width: 800px;
    max-height: 90vh;
    width: 100%;
    color: #323232;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`, Title = styled.div`
    color: ${colors.red};
    padding-top: 28px;
    padding-bottom: 20px;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    font-size: 18px;
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
`, ButtonSection = styled.div`
    padding: 32px 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(32, 32, 32, 0.1);

    & > button {
        margin: 0 4px;
    }
`, ScrollSection = styled.div`
    overflow-y: scroll;
    padding-top: 32px;

    &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        width: 12px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
        background-color: ${colors.red};
    }
`

export class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animating: false
        }
    }

    onOverlayClick = (e) => {
        const { onDialogClose } = this.props
        if (e.currentTarget === e.target) {
            onDialogClose && onDialogClose(e)
        }
    }

    render() {
        const { children, containerProperties = {}, open, onDialogClose, isAnimating, title = 'Modal Title', buttons = [{ text: 'Close', onClick: this.props.onDialogClose }] } = this.props

        return (
            <Overlay open={open} isAnimating={false} onClick={this.onOverlayClick}>
                <Container>
                    <Title>{title}</Title>
                    <ScrollSection style={containerProperties}>
                        {children}
                    </ScrollSection>
                    <ButtonSection>
                        {buttons.map(({ text, ...rest }) => {
                            return (<Button {...rest}>{text}</Button>)
                        })}
                    </ButtonSection>
                </Container>
            </Overlay>
        )
    }
}