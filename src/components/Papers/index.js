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
        props.level < -1 ? 0 : props.level <= 2 ? 1 : 0
    };
    transform: ${props =>
        props.level === 1 ? 'translate(0, -16px) scaleX(.95)' :
            props.level >= 2 ? 'translate(0, -32px) scaleX(.9)' :
                props.level < 0 ? 'translateX(-110%)' : ''
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
            totalPages: 0,
            dismissedPages: 0,
            pages: []
        }
    }

    componentDidMount() {
        const { pages = [] } = this.props,
            papers = pages.length >= 2 ? 2 : pages.length - 1
        this.setState({
            papers,
            pages,
            totalPages: this.props.pages.length
        })
    }

    nextPage = async () => {
        const { pages } = this.state,
            { fetchCards, toggleOverlay = () => { } } = this.props,
            dismissedPages = this.state.dismissedPages + 1,
            nextPage = this.state.currentPage + 1 > pages.length ? 0 : this.state.currentPage + 1
        this.setState({ currentPage: nextPage, dismissedPages })
        if (this.state.totalPages - this.state.currentPage <= 5) {
            let newPages = await fetchCards()
            let combinedPages = [...this.state.pages, ...newPages]
            let papers = combinedPages.length >= 2 ? 2 : combinedPages.length - 1
            this.setState({
                pages: combinedPages, papers, totalPages: combinedPages.length
            })
        }
        if (this.isLastPage()) { toggleOverlay() }

    }

    isLastPage = () => {
        return this.state.currentPage === this.state.totalPages;
    }

    render() {
        let start, end, currentIndex, pages
        const dismissed = this.state.dismissedPages,
        total = this.state.totalPages,
        limit = 10
        if(dismissed === 0) {
            start = 0;
            end = 10
            currentIndex = 0;
        } else if(dismissed > 0) {
            if(total - dismissed >= limit) {
                start = dismissed - 1
                currentIndex = 1
                end = start + 10
            } else if(total < limit) {
                start = 0
                end = 10
                currentIndex = dismissed
            } else {
                currentIndex = limit - (total - dismissed)
                start = dismissed - currentIndex
                end = start + 10
            }
        }
        pages = this.state.pages.slice(start, end)
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
                                key={start + key}
                                test={start + key}
                                level={key - currentIndex}
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