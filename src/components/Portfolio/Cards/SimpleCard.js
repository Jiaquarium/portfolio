import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageZoom from 'react-medium-image-zoom';
import { Paragraph } from '../../../styles/typography';
import { overlayBackgroundColorPrimary } from '../../../styles/colors';
import { baseSize } from '../../../styles/constants';
import media from '../../../styles/break-points';

const CardContainer = styled.div`
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
const ParagraphWithPadding = styled(Paragraph)`padding-top: ${baseSize}px;`;

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: this.props.lowResImg,
        };
    }

    componentDidMount = () => {
        const { hiResImg } = this.props;
        this.preloadImage(hiResImg);
    };

    preloadImage = portfolio => {
        const { hiResImg } = this.props;
        const img = new Image();
        img.src = hiResImg;
        img.onload = () => {
            this.setState({ imgSrc: hiResImg });
        };
    };

    render = () => {
        const {
            id,
            activePortfolio,
            title,
            lowResImg,
            hiResImg,
            description,
            lowResImgWidth,
        } = this.props;
        const { imgSrc } = this.state;
        return (
            <CardContainer>
                <ImageZoom
                    image={{
                        src: imgSrc,
                        alt: `${activePortfolio} – ${title} (lo-res)`,
                        className: `${activePortfolio}__img`,
                        style: {
                            width: lowResImgWidth || '100%',
                            'align-self': 'center',
                        },
                    }}
                    zoomImage={{
                        src: imgSrc,
                        alt: `${activePortfolio} – ${title} (hi-res)`,
                    }}
                    defaultStyles={{
                        overlay: {
                            background: overlayBackgroundColorPrimary,
                        },
                    }}
                />
                <ParagraphWithPadding>{description}</ParagraphWithPadding>
            </CardContainer>
        );
    };
}

Card.propTypes = {
    portfolio: PropTypes.array.isRequired,
};
