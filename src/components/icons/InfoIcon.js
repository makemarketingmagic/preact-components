import { h, Component } from 'preact'

export default class InfoIcon extends Component {
    render() {
        const { width = 16, height = 16, className } = this.props
        return (
            <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="#EE4055" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="#EE4055" />
                <path d="M7 8V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8Z" fill="#EE4055" />
            </svg>

        )
    }
}