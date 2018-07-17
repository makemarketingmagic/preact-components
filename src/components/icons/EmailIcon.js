import { h, Component } from 'preact'

export default class EmailIcon extends Component {
    render() {
        const { width, height, color, thickness } = this.props;
        return (
            <svg width={width || 16} height={height || 16} xmlns="http://www.w3.org/2000/svg">
                <g stroke={color || "#EE4055"} stroke-width={thickness || "2"} fill="none" fill-rule="evenodd" stroke-linejoin="round">
                    <path stroke-linecap="round" d="M1 3h14v10H1z" />
                    <path stroke-linecap="square" d="M2 4l6 6 6-6" />
                </g>
            </svg>
        )
    }
}