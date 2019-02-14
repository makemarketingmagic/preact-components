import { h } from 'preact'

export default function NavigateIcon(props) {
        const { width = 16 , height = 16, color = "#EE4055", thickness = "2" } = props;
        return (
            <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8l14-7-7 14V8z" stroke={color} stroke-width={thickness} fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
}