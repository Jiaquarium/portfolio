/*
    Qualities:
    MOBILE: 80% JPG quality from sketch
    MOBILE-FULL: 90%
    FULL: 100%
*/
const portfolioData = {
    '/analects': [
        {
            id: 1,
            title: 'nymph of luo river, 2018, oil on canvas, 40”x30”.',
            size: '40”x30”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/ballerina-lo.jpg',
            hiResImg: 'static/raw-media/ballerina-hi.jpg',
            description: 'nymph of luo river, 2018, oil on canvas, 40”x30”.',
        },
        {
            id: 2,
            title: 'intruders, 2018, oil on canvas, 30”x40”.',
            size: '30”x40”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/intruders-lo.jpg',
            hiResImg: 'static/raw-media/intruders-hi.jpg',
            description: 'intruders, 2018, oil on canvas, 30”x40”.',
        },
        {
            id: 3,
            title:
                'out with the old, in with the new, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
            size: '12”x72”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/white-snake-lo.jpg',
            hiResImg: 'static/raw-media/white-snake-hi.jpg',
            description:
                'out with the old, in with the new, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
        },
        {
            id: 4,
            title: 'dear my little',
            size: '72”x18”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/dear-my-little-lo.jpg',
            hiResImg: 'static/raw-media/dear-my-little-hi.jpg',
            description:
                'dear my little, 2018, oil on canvas, two panels, each panel 36”x18”.',
            lowResImgWidth: '40%',
        },
        {
            id: 5,
            title: 'letting go',
            size: '30”x40”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/letting-go-lo.jpg',
            hiResImg: 'static/raw-media/letting-go-hi.jpg',
            description: 'letting go, 2018, acrylic on canvas, 30”x40”.',
        },
        {
            id: 6,
            title: 'scene',
            size: '24”x36”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/scene-lo.jpg',
            hiResImg: 'static/raw-media/scene-hi.jpg',
            description: 'scene, 2018, oil on canvas, 24”x36”.',
        },
    ],
    '/not-good-enough-for-a-story': [
        {
            id: 1,
            title: 'let’s talk about BART!',
            size: '11”x14”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/bart-lo.jpg',
            hiResImg: 'static/raw-media/bart-hi.jpg',
            description: 'let’s talk about BART!',
        },
        {
            id: 2,
            title: 'not sure it was worth it',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/was-it-really-worth-it-lo.jpg',
            hiResImg: 'static/raw-media/was-it-really-worth-it-hi.jpg',
            description: 'not sure it was worth it',
        },
        {
            id: 3,
            title: 'never knows best',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/never-knows-best-lo.jpg',
            hiResImg: 'static/raw-media/never-knows-best-hi.jpg',
            description: 'never knows best',
        },
        {
            id: 4,
            title: 'it’s not 刚在',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/family-dinner-lo.jpg',
            hiResImg: 'static/raw-media/family-dinner-hi.jpg',
            description: 'it’s not 刚在',
        },
        {
            id: 5,
            title: 'lost in translation',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/lost-in-translation-lo.jpg',
            hiResImg: 'static/raw-media/lost-in-translation-hi.jpg',
            description: 'lost in translation',
        },
        {
            id: 6,
            title: 'maybe someday',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/maybe-someday-lo.jpg',
            hiResImg: 'static/raw-media/maybe-someday-hi.jpg',
            description: 'maybe someday',
        },
        {
            id: 7,
            title: 'hi nice to meet you',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/hi-nice-to-meet-you-lo.jpg',
            hiResImg: 'static/raw-media/hi-nice-to-meet-you-hi.jpg',
            description: 'hi nice to meet you',
        },
        {
            id: 8,
            title: 'night loops',
            size: '12”x24”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/night-loops-lo.jpg',
            hiResImg: 'static/raw-media/night-loops-hi.jpg',
            description: 'night loops',
        },
        {
            id: 9,
            title: 'saying goodbye a lot more nowadays',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/saying-goodbye-lo.jpg',
            hiResImg: 'static/raw-media/saying-goodbye-hi.jpg',
            description: 'saying goodbye a lot more nowadays',
        },
        {
            id: 10,
            title: 'i’m sure it’s worth it',
            size: '12”x24”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/good-day-lo.jpg',
            hiResImg: 'static/raw-media/good-day-hi.jpg',
            description: 'i’m sure it’s worth it',
        },
    ],
    '/misc': [
        {
            id: 1,
            title: 'moving boxes',
            size: '24”x18”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/boxes-lo.jpg',
            hiResImg: 'static/raw-media/boxes-hi.jpg',
            description: 'moving boxes',
        },
        {
            id: 2,
            title: 'breathe',
            size: '24”x19”.',
            medium: 'pen and ink.',
            lowResImg: 'static/raw-media/nature-lo.jpg',
            hiResImg: 'static/raw-media/nature-hi.jpg',
            description: 'breathe',
        },
        {
            id: 3,
            title: 'mask off',
            size: '19”x24”.',
            medium: 'pen and ink.',
            lowResImg: 'static/raw-media/isis-lo.jpg',
            hiResImg: 'static/raw-media/isis-hi.jpg',
            description: 'mask off',
        },
    ],
};

const getPortfolioData = portfolioKey =>
    Promise.resolve({
        portfolio: portfolioData[portfolioKey],
        activePortfolio: portfolioKey,
    });

export default getPortfolioData;
