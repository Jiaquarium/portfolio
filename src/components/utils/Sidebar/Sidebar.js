import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, CloudRain } from 'react-feather';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseSize, baseFontColor, headerHeight } from '../../../styles/constants';
import { gutterSize } from '../../../styles/gutter';
import { Paragraph } from '../../../styles/typography';
import {
    backgroundColorPrimary,
    overlayBackgroundColorPrimary,
} from '../../../styles/colors';
import media from '../../../styles/break-points';
import { maxContentWidth, sidebarWidth } from '../../../styles/content-width';
import routes, { navItems } from '../../../isomorphic/routes';
import Logo from './Logo';

const MODAL_PORTAL_PARENT = 'modal-parent-portal';
const LINK_SPACING = baseSize;

const FixedMobileHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    background-color: ${backgroundColorPrimary};

    ${media.maxWidth.mobile`
        height: ${headerHeight}px;
    `};
`;
/* Need this in order to give the ReactModal a relative positioned parent */
const MobileHeaderContainer = styled.div`
    display: none;
    position: relative;
    padding: 0 ${gutterSize}px;
    max-width: ${maxContentWidth}px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;

    ${media.maxWidth.mobile`display: flex;`};
`;
const ModalPortalParent = styled.div`position: absolute;`;
const SidebarContainer = styled.div`
    display: flex;
    flex: 0 0 ${sidebarWidth}px;
    flex-direction: column;
    padding-left: ${baseSize}px;
    position: fixed;
    left: 0;

    ${media.maxWidth.mobile`
        display: none;
    `};
`;
const LogoContainer = styled.div``;
const SidebarList = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
`;
const SidebarListDesktop = SidebarList.extend`
    ${media.maxWidth.mobile`display: none;`};
    display: flex;
    flex-direction: column;
`;
const HeaderListMobile = SidebarList.extend`flex-direction: column;`;
export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${baseFontColor};
`;
export const LinkWrapper = styled.div`
    padding: ${LINK_SPACING}px 0;
    ${({ isMobile }) => (isMobile ? `padding-left: ${gutterSize}px` : ``)};
    ${({ isNested }) => (isNested ? `margin-left: ${gutterSize}px` : ``)};
`;
const Button = styled.button`
    text-align: left;
    cursor: pointer;
`;
const DropdownIconContainer = styled.span`padding-left: 4px;`;

const initialNestedRevealedState = navItems.reduce((acc, navItem) => {
    acc[navItem.path] = false;
    return acc;
}, {});

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            nestedRevealed: initialNestedRevealedState,
        };
    }

    componentDidMount = () => {
        this.closeMenu = () => this.handleMenuState(false);
        window.addEventListener('resize', this.closeMenu.bind(this));
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.closeMenu.bind(this));
    };

    handleMenuState = isMenuOpen => {
        this.setState({ isMenuOpen });
    };

    toggleNestedRevealedPath = path => () => {
        const { nestedRevealed } = this.state;
        this.setState({
            nestedRevealed: {
                ...nestedRevealed,
                [path]: !nestedRevealed[path],
            },
        });
    };

    handleMobileMenuClick = () => {
        this.setState({ nestedRevealed: initialNestedRevealedState });
        this.closeMenu();
    };

    render = () => {
        const { isMenuOpen, nestedRevealed } = this.state;
        const MobileMenuLinkActionWrapper = ({ children }) => (
            <Button onClick={this.handleMobileMenuClick}>{children}</Button>
        );

        return (
            <Fragment>
                <FixedMobileHeaderContainer>
                    <MobileHeaderContainer>
                        <LogoContainer>
                            <MobileMenuLinkActionWrapper>
                                <Logo />
                            </MobileMenuLinkActionWrapper>
                        </LogoContainer>
                        <Button
                            onClick={() => this.handleMenuState(!this.state.isMenuOpen)}
                        >
                            <Menu color={baseFontColor} size={18} />
                        </Button>
                        <ModalPortalParent id={MODAL_PORTAL_PARENT} />
                    </MobileHeaderContainer>
                </FixedMobileHeaderContainer>
                <ReactModal
                    isOpen={isMenuOpen}
                    shouldCloseOnEsc
                    shouldCloseOnOverlayClick
                    onRequestClose={this.closeMenu}
                    parentSelector={() =>
                        document.querySelector(`#${MODAL_PORTAL_PARENT}`)}
                    style={{
                        content: {
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 'unset',
                            border: `1px solid ${backgroundColorPrimary}`,
                            background: backgroundColorPrimary,
                            borderRadius: 'unset',
                            outline: 'unset',
                            padding: `${baseSize}px 0`,
                        },
                        overlay: {
                            top: headerHeight,
                            width: '100%',
                            background: overlayBackgroundColorPrimary,
                        },
                    }}
                >
                    <HeaderListMobile>
                        {navItems.map(({ path, label, nestedUnder, canExpand }) => {
                            if (!nestedUnder || nestedRevealed[nestedUnder]) {
                                return canExpand ? (
                                    <Button
                                        onClick={this.toggleNestedRevealedPath(path)}
                                        key={`header_${path}`}
                                    >
                                        <LinkWrapper isMobile>
                                            <Paragraph>{label}</Paragraph>
                                            {nestedRevealed[path] ? (
                                                <DropdownIconContainer>
                                                    <CloudRain size={12} />
                                                </DropdownIconContainer>
                                            ) : (
                                                <DropdownIconContainer>
                                                    <ChevronDown size={12} />
                                                </DropdownIconContainer>
                                            )}
                                        </LinkWrapper>
                                    </Button>
                                ) : (
                                    <MobileMenuLinkActionWrapper key={`header_${path}`}>
                                        <NavLink to={path}>
                                            <LinkWrapper
                                                isMobile
                                                isNested={!!nestedUnder}
                                            >
                                                <Paragraph>{label}</Paragraph>
                                            </LinkWrapper>
                                        </NavLink>
                                    </MobileMenuLinkActionWrapper>
                                );
                            }
                            return null;
                        })}
                    </HeaderListMobile>
                </ReactModal>

                <SidebarContainer>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SidebarListDesktop>
                        {routes.map(({ path, label }) => (
                            <NavLink key={`side-bar_${path}`} to={path}>
                                <LinkWrapper>
                                    <Paragraph>{label}</Paragraph>
                                </LinkWrapper>
                            </NavLink>
                        ))}
                    </SidebarListDesktop>
                </SidebarContainer>
            </Fragment>
        );
    };
}

Sidebar.propTypes = {
    activeRoute: PropTypes.string.isRequired,
    handleNavBarClick: PropTypes.func.isRequired,
    onMobile: PropTypes.bool.isRequired,
};
