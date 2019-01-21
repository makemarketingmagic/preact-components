import { h } from 'preact'

export default function SortAscIcon(props) {
    const { width = 8, height = 8 } = props
    return (
        <svg width={width} height={height} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.50579 1.71695C3.28912 0.463615 5.11444 0.463615 5.89778 1.71695L7.28928 3.94336C8.12184 5.27545 7.16416 7.00336 5.59329 7.00336H2.81028C1.23941 7.00336 0.281721 5.27546 1.11428 3.94336L2.50579 1.71695Z" fill="#EE4055" />
        </svg>

    )
}