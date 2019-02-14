import { h } from 'preact';

export default function LaterIcon(props) {
    const { width = 16, height = 16, color = '#FFF' } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 16 16">
            <g fill={color} fill-rule="evenodd">
                <path fill-rule="nonzero" d="M8 0a8 8 0 1 0 5.054 1.798 1 1 0 0 0-1.264 1.55A6 6 0 1 1 8 2a1 1 0 1 0 0-2z" />
                <path fill-rule="nonzero" d="M12 2h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2z" />
                <path fill-rule="nonzero" d="M10 2v3a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z" />
                <path d="M14 2h-2v2a2 2 0 1 1 2-2z" />
            </g>
        </svg>
    )
}