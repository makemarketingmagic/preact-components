import { h, Component } from 'preact'

export default class CrossIcon extends Component {
    render() {
        const { width = 8, height = 8, className } = this.props
        return (
            <svg width={width} height={height}>
                <path class={className} fill-rule="nonzero" d="M4 2.586L6.293.293a1 1 0 0 1 1.414 1.414L5.414 4l2.293 2.293a1 1 0 0 1-1.414 1.414L4 5.414 1.707 7.707A1 1 0 0 1 .293 6.293L2.586 4 .293 1.707A1 1 0 0 1 1.707.293L4 2.586z" />
            </svg>
        )
    }
}