import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphBold, Link } from '../../styles/typography';
import { baseSize } from '../../styles/constants';
import media from '../../styles/break-points';

const CVContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${media.maxWidth.mobile`
        padding-top: ${baseSize * 1}px;
    `};
`;
const CVContentContainer = styled.div`
    width: 100%;
    padding-left: 25%;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: ${baseSize * 4}px;
    margin-top: ${baseSize * 5}px;

    ${media.maxWidth.mobile`
        width: 80%;
        padding-left: 0;
        margin-bottom: ${baseSize * 2}px;
        margin-top: 0;
    `};
`;

const ParagraphWithPadding = styled(Paragraph)`padding-bottom: ${baseSize * 2}px;`;
const BoldParagraphWithPadding = styled(ParagraphBold)`
    padding-bottom: ${baseSize * 2}px;
`;
const ParagraphWithSmallPadding = styled(Paragraph)`padding-bottom: ${baseSize / 2}px;`;

const About = () => (
    <CVContainer>
        <CVContentContainer>
            <BoldParagraphWithPadding>Education</BoldParagraphWithPadding>
            <ParagraphWithSmallPadding>
                2020 School of the Art Institute of Chicago, Post-Bacc PTDW
            </ParagraphWithSmallPadding>
            <ParagraphWithPadding>
                2015 The University of Texas at Austin, BBA
            </ParagraphWithPadding>

            <BoldParagraphWithPadding>Group Exhibitions</BoldParagraphWithPadding>
            <ParagraphWithSmallPadding>
                2020 SLAYSIAN, Co-Prosperity Sphere, Chicago, IL
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                2020 INCUBATOR, Columbus Drive Building, Chicago, IL
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                2020 Post-Baccalaureate Annual, Sullivan Galleries, Chicago, IL
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                2019 SAIC Graduate Open Studios, SAIC MacLean Center, Chicago, IL
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                2019 Art in the Atrium 19, George A. Purefoy Municipal Center, Frisco, TX
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                2019 CLIP: An International Exhibition of Works on Paper, CASP 5&J Gallery,
                Lubbock, TX
            </ParagraphWithSmallPadding>
            <ParagraphWithPadding>
                2018 Farley’s Coffee Window Artists, Farley’s Coffee, San Francisco, CA
            </ParagraphWithPadding>

            <BoldParagraphWithPadding>Press</BoldParagraphWithPadding>
            <ParagraphWithSmallPadding>
                <Link
                    href="https://www.thevisualist.org/2020/03/slaysian/"
                    target="_blank"
                >
                    2020 The Visualist - SLAYSIAN
                </Link>
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                <Link
                    href="https://www.thevisualist.org/2020/01/spaces-within/"
                    target="_blank"
                >
                    2020 The Visualist - Post-Baccalaureate Annual
                </Link>
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                <Link
                    href="https://www.friscotexas.gov/DocumentCenter/View/19667/Art-in-the-Atrium-19-artist-list"
                    target="_blank"
                >
                    2019 friscotexas.gov
                </Link>
            </ParagraphWithSmallPadding>
            <ParagraphWithSmallPadding>
                <Link
                    href="https://m.facebook.com/castudioproject/posts/2434840573269496"
                    target="_blank"
                >
                    2019 Charles Adams Studio Project - CASP / 5&J Gallery
                </Link>
            </ParagraphWithSmallPadding>
        </CVContentContainer>
    </CVContainer>
);

export default About;
