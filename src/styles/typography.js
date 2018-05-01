import styled from 'styled-components';
import { fontSizeSmall } from './constants';

export const Paragraph = styled.span`
    font-size: ${fontSizeSmall}px;

    font-family: 'Nanum Gothic', 'Times New Roman';
    font-style: normal;
    font-weight: 400;
`;

export const ParagraphBold = styled.span`
    /* nanum-gothic-700 - latin */
    font-family: 'Nanum Gothic', 'Times New Roman';
    font-style: normal;
    font-weight: 700;
`;

export const Link = styled.a`
    &:hover {
        text-decoration: underline !important;
    }
`;
