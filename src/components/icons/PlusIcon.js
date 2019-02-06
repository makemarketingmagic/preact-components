import { h } from 'preact'

export default function PlusIcon(props) {
    const { width = 16, height = 16, color = '#EE4055' } = props
    return (
        <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="12" height="2" rx="1" fill={color} />
            <rect x="7" y="2" width="2" height="12" rx="1" fill={color} />
        </svg>


    )
}
