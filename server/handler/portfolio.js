import path from 'path';
import { minify } from 'html-minifier';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../../src/components/App';
import { getMinifyOptions } from '../minify-options';
import { renderPage } from '../page-markup';
import config from '../config';

export default (req, res, next) => {
    const reactAppProps = req.initialStateData;
    const sheet = new ServerStyleSheet();
    const appMarkup = renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url} context={reactAppProps}>
                <App />
            </StaticRouter>
        )
    );
    const styleTags = sheet.getStyleTags();
    const page = {
        bundleFileName: `client-bundle`,
        staticPath: path.resolve('..', '..', 'build', 'static'),
        isProductionEnvironment: config.isProductionEnvironment,
        appMarkup,
        styleTags,
        hosts: config.hosts,
        initialState: {
            config,
            ...reactAppProps,
        },
        // pageType: 'bridalShow',
        // canonicalUrl: `https://${config.hosts.main}/m/bridal-show`,
        // canonicalPath: `/m/bridal-show`,
        // ogImageUrl: `https://${config.hosts.multimedia}/document/s3/1/single.jpg`,
    };
    res.type('html');
    res
        .status(200)
        .send(minify(renderPage(page), getMinifyOptions(config.isProductionEnvironment)));
};
