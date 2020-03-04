import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import CV from '../components/CV';
import getPortfolioData from './portfolio-data';

/*
    map over navItems to render all navigation UI components
    routes is the source of truth for react-routing config
*/

export const navItems = [
    {
        path: '/',
        label: 'portfolio', // collapsed menu
        canExpand: true,
    },
    {
        path: '/invisible',
        exact: true,
        component: Portfolio,
        label: 'invisible until it’s not',
        fetchInitialData: () => getPortfolioData('/invisible'),
        nestedUnder: '/',
    },
    {
        path: '/2019',
        exact: true,
        component: Portfolio,
        label: 'psychic somewheres',
        fetchInitialData: () => getPortfolioData('/2019'),
        nestedUnder: '/',
    },
    {
        path: '/2018-2019',
        exact: true,
        component: Portfolio,
        label: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
        fetchInitialData: () => getPortfolioData('/2018-2019'),
        nestedUnder: '/',
    },
    {
        path: '/not-good-enough-for-a-story',
        exact: true,
        component: Portfolio,
        label: 'not good enough for a story',
        fetchInitialData: () => getPortfolioData('/not-good-enough-for-a-story'),
        nestedUnder: '/',
    },
    {
        path: '/misc',
        exact: true,
        component: Portfolio,
        label: 'misc',
        fetchInitialData: () => getPortfolioData('/misc'),
        nestedUnder: '/',
    },
    {
        path: '/about',
        exact: true,
        component: About,
        label: 'about',
    },
    {
        path: '/contact',
        exact: true,
        component: Contact,
        label: 'contact',
    },
    {
        path: '/cv',
        exact: true,
        component: CV,
        label: 'cv',
    },
];

const routes = navItems.filter(({ component }) => !!component);

export default routes;
