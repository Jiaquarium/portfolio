import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleCard from './Cards/SimpleCard';

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

class Portfolio extends Component {
    constructor(props) {
        super(props);

        let initialState;

        try {
            initialState = { ...window.__INITIAL_STATE__ };
            delete window.__INITIAL_STATE__.portfolio;
        } catch (error) {
            try {
                initialState = this.props.staticContext;
            } catch (_error) {
                /* if navigating back to this component we'll need to fetch data on client */
            }
        }

        this.state = initialState;
    }

    componentDidMount = () => {
        const { path, fetchInitialData } = this.props;
        if (!this.state.portfolio) {
            fetchInitialData(path).then(({ portfolio }) => this.setState({ portfolio }));
        }
    };

    render = () => {
        const { portfolio, activePortfolio } = this.state;
        return (
            <PortfolioContainer>
                {this.state.portfolio &&
                    portfolio.map(artwork => (
                        <SimpleCard
                            key={artwork.id}
                            id={artwork.id}
                            activePortfolio={activePortfolio}
                            title={artwork.title}
                            lowResImg={artwork.lowResImg}
                            hiResImg={artwork.hiResImg}
                            description={artwork.description}
                            lowResImgWidth={artwork.lowResImgWidth}
                        />
                    ))}
            </PortfolioContainer>
        );
    };
}

export default Portfolio;

Portfolio.propTypes = {
    fetchInitialData: PropTypes.func.isRequired,
    handleTileClick: PropTypes.func.isRequired,
    onMobile: PropTypes.bool.isRequired,
    portfolio: PropTypes.array.isRequired,
};
