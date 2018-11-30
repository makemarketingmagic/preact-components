import { h, Component } from 'preact'

export default class ArrowRightIcon extends Component {
    render() {
        const { width = 16, height = 16, className } = this.props

        return (
            <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 12L15 8L11 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    }
}