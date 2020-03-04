import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { matchPath } from 'react-router-dom';
import routes from '../src/isomorphic/routes';
import handlePortfolio from './handler/portfolio';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const router = express.Router();

// other static resources should just be served as they are
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

router.get('/', (req, res) => 
    res.redirect(302, req.originalUrl.replace('/', '/invisible'))
);

router.get('*', (req, res, next) => {
    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
    // check for if initial fetching of data needed
    const fetchInitialData = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve();

    return fetchInitialData
        .then(initialStateData => {
            req.initialStateData = initialStateData;
            return handlePortfolio(req, res, next);
        })
        .catch(next);
});

app.use(router);

app.listen(process.env.PORT || 8000, error => {
    if (error) {
        // eslint-disable-next-line no-console
        return console.log('Error occurred when trying to start Express server', error);
    }

    // eslint-disable-next-line no-console
    return console.log(
        'Express server listening on port %d in %s mode',
        process.env.PORT || 8000,
        app.settings.env
    );
});
