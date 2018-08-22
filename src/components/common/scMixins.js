import { css } from 'styled-components';

const sizes = {
    mobile: 600
}

// Iterate through the sizes and create a media template
export default {
    media: Object.keys(sizes).reduce((acc, label) => {
        acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `

        return acc
    }, {})
}