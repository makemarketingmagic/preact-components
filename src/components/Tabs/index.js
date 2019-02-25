import { h, Component, cloneElement } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins';

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
`, Pointer = styled.span`
    position: absolute;
    width: 0;
    height: 2px;
    margin-top: -1px;
    background-color: ${colors.red};
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
    transition-property: left, width;
`, TabsEl = styled.div`
    position: relative;
`, Label = styled.label`
    color: ${({ active }) => active ? colors.red : colors.text};
    font-weight: 500;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    padding: 16px 12px;
    cursor: pointer;
`, TabEl = styled.div`
    display: ${({ active }) => active ? 'block' : 'none'};
`

export class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.index,

        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ pointer: this._pointerPosition(this.state.index) });
        }, 100);
    }

    componentWillReceiveProps(next_props) {
        const index = next_props.index || this.state.index;
        this.setState({
            index,
            pointer: this._pointerPosition(index)
        });
    }

    _pointerPosition(index = 0) {
        const startPoint = this.tabs.base.getBoundingClientRect().left;
        const label = this.navigation.base.children[index].getBoundingClientRect();

        return {
            top: `${this.navigation.base.getBoundingClientRect().height}px`,
            left: `${label.left - startPoint}px`,
            width: `${label.width}px`
        };
    }

    handleClick = (index) => {
        this.setState({
            index,
            pointer: this._pointerPosition(index)
        });
        if (this.props.onChange) this.props.onChange(this);
    };

    active(value) {
        this.setState({ active: value });
        if (this.props.onActive && value) {
            this.props.onActive(this);
        }
    }

    renderLabels(labels) {
        return labels.map((props) => {
            return <Label {...props}>{props.label}</Label>;
        });
    }

    render() {
        let labels = []
        const tabs = this.props.children.map((tab, index) => {
            const active = this.state.index === index,
                { label, disabled, hidden } = tab.props

            labels.push({
                label,
                key: index,
                active,
                disabled,
                hidden,
                onClick: !disabled ? this.handleClick.bind(this, index) : null
            });

            return cloneElement(tab, { active, key: index, tabIndex: index });
        });
        return (
            <TabsEl ref={ref => this.tabs = ref}>
                <Navigation ref={ref => this.navigation = ref}>
                    {this.renderLabels(labels)}
                </Navigation>
                <Pointer style={this.state.pointer} />
                {tabs}
            </TabsEl>
        )
    }
}

export class Tab extends Component {
    render() {
        return (
            <TabEl {...this.props}>
                {this.props.children.map((element, index) => {
                    return cloneElement(element, { ...this.props })
                })}
            </TabEl>
        )
    }
}