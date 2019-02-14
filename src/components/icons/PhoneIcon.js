import { h } from 'preact'

export default function PhoneIcon(props) {
    const { width = 16, height = 16, color = "#EE4055", thickness = "2" } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13l-3-3-4 1v4c7.732 0 14-6.268 14-14h-4l-1 4 3 3" stroke={color} stroke-width={thickness} fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}