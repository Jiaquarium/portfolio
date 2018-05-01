import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../styles/break-points';
import { maxContentWidth } from '../styles/content-width';
import { baseSize, headerHeight } from '../styles/constants';
import { gutterSize } from '../styles/gutter';
import routes from '../isomorphic/routes';
import Page404 from './utils/Page404';
import Sidebar from './utils/Sidebar';
/*
    Qualities:
    MOBILE: 80% JPG quality from sketch
    MOBILE-FULL: 90%
    FULL: 100%
*/

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const AppContentContainer = styled.div`
    max-width: ${maxContentWidth}px;
    padding: 0 ${gutterSize}px;
    margin: ${headerHeight}px auto 0;
    display: flex;
    flex: 1 1 auto;

    ${media.maxWidth.largeScreen`margin: ${baseSize * 2}px ${baseSize}px 0`};
    ${media.maxWidth.mobile`margin: ${headerHeight}px auto 0;`};
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppContainer>
                <Sidebar />
                <AppContentContainer>
                    <Switch>
                        {routes.map(({ path, exact, component: Component, ...rest }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                render={props => (
                                    <Component path={path} {...props} {...rest} />
                                )}
                            />
                        ))}
                        <Route render={props => <Page404 {...props} />} />
                    </Switch>
                </AppContentContainer>
            </AppContainer>
        );
    }
}

export default App;

App.propTypes = {
    height: PropTypes.number.isRequired,
    isBound: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
};
