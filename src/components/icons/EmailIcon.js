import { h } from 'preact'

export default function EmailIcon(props) {
    const { width = 16, height = 16, color = "#EE4055", thickness = "2" } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g stroke={color} stroke-width={thickness} fill="none" fill-rule="evenodd" stroke-linejoin="round">
                <path stroke-linecap="round" d="M1 3h14v10H1z" />
                <path stroke-linecap="square" d="M2 4l6 6 6-6" />
            </g>
        </svg>
    )
}