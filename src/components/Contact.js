import React from 'react';
import styled from 'styled-components';
import { Paragraph, Link } from '../styles/typography';
import { baseSize } from '../styles/constants';
import media from '../styles/break-points';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${media.maxWidth.mobile`
        padding-top: ${baseSize * 1}px;
    `};
`;
const ContactContentContainer = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: ${baseSize * 4}px;

    ${media.maxWidth.tablet`width: 65%;`};
    ${media.maxWidth.mobile`
        width: 80%;
        margin-bottom: ${baseSize * 2}px;
    `};
`;
const ParagraphWithPadding = styled(Paragraph)`padding-bottom: ${baseSize * 2}px;`;

const Contact = () => (
    <ContactContainer>
        <ContactContentContainer>
            <ParagraphWithPadding>
                <Link href="mailto:gu.james.j@gmail.com" target="_top">
                    email
                </Link>
            </ParagraphWithPadding>
            <ParagraphWithPadding>
                <Link
                    href="https://www.instagram.com/jamesguu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    instagram
                </Link>
            </ParagraphWithPadding>
        </ContactContentContainer>
    </ContactContainer>
);

export default Contact;
