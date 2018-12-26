import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/break-points';
import { baseSize } from '../../../styles/constants';
import { NavLink } from './Sidebar';

const ImgContainer = styled.div`height: 100%;`;
const Img = styled.img`
    display: block;
    height: 48px;
    width: auto;
    margin-top: ${baseSize}px;

    ${media.maxWidth.mobile`
        height: 33px;
        margin-top: 0;
        padding-top: ${baseSize / 2}px;
    `};
`;

const Logo = () => (
    <NavLink to="/portfolio">
        <ImgContainer>
            <Img src="static/raw-media/penguin-logo.jpg" alt="penguin logo" />
        </ImgContainer>
    </NavLink>
);

export default Logo;
