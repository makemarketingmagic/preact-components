import { h } from 'preact'

export default function FilterIcon(props) {
    const { width = 16, height = 16, color = "#EE4055" } = props
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="2" width="16" height="2" rx="1" fill={color} />
            <rect x="2" y="7" width="12" height="2" rx="1" fill={color} />
            <rect x="4" y="12" width="8" height="2" rx="1" fill={color} />
        </svg>

    )
}