import { h, Component } from 'preact'

export default class NavigateIcon extends Component {
    render() {
        const { width, height, color, thickness } = this.props;
        return (
            <svg width={width || 16} height={height || 16} xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8l14-7-7 14V8z" stroke={color || "#EE4055"} stroke-width={thickness || "2"} fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    }
}