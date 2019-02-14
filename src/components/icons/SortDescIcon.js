import { h } from 'preact'

export default function SortDescIcon(props) {
    const { width = 8, height = 8, color = "#EE4055" } = props
    return (
        <svg width={width} height={height} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30488 5.29312C4.52155 6.54646 2.69623 6.54646 1.91289 5.29312L0.521386 3.06671C-0.311174 1.73462 0.646512 0.00671317 2.21738 0.00671331L5.00039 0.00671355C6.57126 0.00671369 7.52895 1.73462 6.69639 3.06671L5.30488 5.29312Z" fill={color} />
        </svg>


    )
}