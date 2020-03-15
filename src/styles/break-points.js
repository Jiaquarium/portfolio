import { css } from 'styled-components';
import { maxContentWidth, sidebarWidth } from './content-width';

const sizes = {
    /* Must halve maxContentWidth bc content center justifies itself */
    largeScreen: (maxContentWidth / 2 + sidebarWidth) * 2,
    tablet: 966,
    mobile: 886,
};

// Iterate through the sizes and create a media template
const maxWidth = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

// Iterate through the sizes and create a media template
const minWidth = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;

    return acc;
}, {});

export default { maxWidth, minWidth };
