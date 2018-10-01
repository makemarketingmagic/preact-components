import { h, Component } from 'preact';
import styled from 'styled-components';
import { media, colors } from '../common/scMixins';
import { transparentize } from 'polished';

const animationLength = 250;

const PaperEl = styled.div`
    width: 100%;
    padding: 2px;
    display: flex;
    flex-direction: column;
    position: ${props =>
        props.level === 0 ? 'relative' : 'absolute'
    };
    ${props =>
        props.level === 0 ? `margin-top: 48px` : 'margin-top: 0'
    };
    ${media.mobile`
        margin-top: 28px;
    `}
    transition: transform ${animationLength}ms ease-in-out,
        z-index 1ms ease-in-out ${animationLength}ms;
    top: 0;
    opacity: ${props =>
        props.level <= 2 ? 1 : 0
    };
    transform: ${props =>
        props.level === 1 ? 'translate(0, -16px) scaleX(.95)' :
            props.level >= 2 ? 'translate(0, -32px) scaleX(.9)' :
                props.level < 0 ? 'translateX(-100%)' : ''
    };
`

const Container = styled.div`
    z-index: 3;
    background-color: ${colors.white};
    box-shadow: 0 8px 16px 0 ${transparentize(0.92, colors.black)}, 0 1px 2px 1px ${transparentize(0.84, colors.black)};
    border-radius: 16px;
    max-width: 800px;
    width: 100%;
    color: #323232;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 0;
    ${media.mobile`
        padding: 16px 0;
    `}
`



export default class Papers extends Component {
    constructor(props) {
        super(props)
        this.pageRefs = []
        this.state = {
            currentPage: 0,
            totalPages: 0
        }
    }

    componentDidMount() {
        const { pages = [] } = this.props,
            papers = pages.length >= 2 ? 2 : pages.length - 1
        this.setState({ papers, totalPages: this.props.pages.length })
    }

    nextPage = () => {
        const { pages, toggleOverlay = () => { } } = this.props,
            nextPage = this.state.currentPage + 1 > pages.length ? 0 : this.state.currentPage + 1
        this.setState({ currentPage: nextPage })
        if (this.isLastPage()) { toggleOverlay() }
    }

    isLastPage = () => {
        return this.state.currentPage === this.state.totalPages;
    }

    render() {
        const { pages } = this.props
        return (
            <div style={{
                overflow: 'hidden',
                paddingBottom: 16
            }}>
                <div style={{
                    position: 'relative'
                }}>
                    {pages.map(({ component: Component, props }, key) => {
                        return (
                            <PaperEl
                                level={key - this.state.currentPage}
                                ref={(ref) => this.pageRefs[key] = ref}
                                style={{ zIndex: this.state.totalPages - key }}
                            >
                                <Container>
                                    <Component nextPage={this.nextPage} {...props} />
                                </Container>
                            </PaperEl>
                        )
                    })}
                </div>
            </div>
        )
    }
}