import { h, Component } from 'preact'

export default class TickIcon extends Component {
    render() {
        const { width, height, color } = this.props;
        return (
            <svg width={width || 14} height={height || 10}>
                <path fill="none" fill-rule="evenodd" stroke={color || "#FFFFFF"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5l4 4 8-8" />
            </svg>
        )
    }
}