import { h } from 'preact'

export default function ArrowRightIcon(props) {
    const { width = 16, height = 16, color = '#fff' } = props

    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 12L15 8L11 4" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}