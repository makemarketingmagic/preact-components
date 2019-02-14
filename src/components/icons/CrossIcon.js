import { h } from 'preact'

export default function CrossIcon(props) {
    const { width = 8, height = 8, color = '#000' } = props
    return (
        <svg width={width} height={height} viewBox="0 0 8 8">
            <path stroke={color} d="M1 1L7 7" stroke-linecap="round" />
            <path stroke={color} d="M1 7L7 1" stroke-linecap="round" />
            {/* <path fill={color} fill-rule="nonzero" d="M4 2.586L6.293.293a1 1 0 0 1 1.414 1.414L5.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414L4 5.414 1.707 7.707A1 1 0 0 1 .293 6.293L2.586 4 .293 1.707A1 1 0 0 1 1.707.293L4 2.586z" /> */}
        </svg>
    )

}