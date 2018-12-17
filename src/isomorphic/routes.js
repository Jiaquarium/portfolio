import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import getPortfolioData from './portfolio-data';

/*
    map over navItems to render all navigation UI components
    routes is the source of truth for react-routing config
*/

export const navItems = [
    {
        path: '/',
        label: 'portfolio',
        canExpand: true,
    },
    {
        path: '/analects',
        exact: true,
        component: Portfolio,
        label: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
        fetchInitialData: () => getPortfolioData('/analects'),
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
];

const routes = navItems.filter(({ component }) => !!component);

export default routes;
