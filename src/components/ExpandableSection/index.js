import { h, Component } from 'preact'
import styled from 'styled-components'
import Switch from '../Switch';
import { typography, colors } from '../common/scMixins';
const UIRegular = typography.UIRegular

const Title = styled(UIRegular)`
    margin-top: ${props => props.open ? '15px' : '7px'};
    margin-left: ${props => props.open ? '0' : '9px'};
    transition: 500ms;
`

const Container = styled.div`
    background: #FFFFFF;
    overflow: hidden;
    transition: 250ms;
    padding: 4px 16px 16px 16px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    max-height: ${props => props.open ? '800px' : '40px'};
    `

const TopBar = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
`

const ExpandingSection = styled.div`
    color: ${colors.gray};
`

export default class ExpandableSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { title, children } = this.props
        return (
            <Container open={this.state.open}>
                <TopBar onClick={this.toggleOpen}>
                    <Title open={this.state.open}>{title}</Title>
                    <Switch value={this.state.open} onChange={this.toggleOpen} title={title} />
                </TopBar>
                <ExpandingSection open={this.state.open}>{children}</ExpandingSection>
            </Container>
        )
    }
}