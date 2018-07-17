import { h, Component } from 'preact'

export default class PhoneIcon extends Component {
    render() {
        const { width, height, color, thickness } = this.props;
        return (
            <svg width={width || 16} height={height || 16} xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13l-3-3-4 1v4c7.732 0 14-6.268 14-14h-4l-1 4 3 3" stroke={color || "#EE4055"} stroke-width={thickness || "2"} fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    }
}