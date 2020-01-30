import React from 'react';
import styled from 'styled-components';
import { Paragraph, Link } from '../../styles/typography';
import { baseSize } from '../../styles/constants';
import media from '../../styles/break-points';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${media.maxWidth.mobile`
        padding-top: ${baseSize * 1}px;
    `};
`;
const AboutContentContainer = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: ${baseSize * 4}px;
    margin-top: ${baseSize * 5}px;

    ${media.maxWidth.tablet`width: 65%;`};
    ${media.maxWidth.mobile`
        width: 80%;
        margin-bottom: ${baseSize * 2}px;
        margin-top: 0;
    `};
`;
const ParagraphWithPadding = styled(Paragraph)`padding-bottom: ${baseSize * 2}px;`;

const About = () => (
    <AboutContainer>
        <AboutContentContainer>
            <ParagraphWithPadding>
            <Link
                href="https://jamnbutter.itch.io/daemonluv"
                target="_blank"
                rel="noopener noreferrer"
            >
                {'-->'} daemon.luv {'<--'}
            </Link>
            </ParagraphWithPadding>
        </AboutContentContainer>
    </AboutContainer>
);

export default About;
