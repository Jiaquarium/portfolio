/*
    Qualities:
    MOBILE: 80% JPG quality from sketch
    MOBILE-FULL: 90%
    FULL: 100%
*/
const portfolioData = {
    '/portfolio': [
        {
            id: 1,
            title: 'BARTification',
            size: '30”x28”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/subway-love-lo.jpg',
            hiResImg: 'static/raw-media/subway-love-hi.jpg',
            description: 'bart love, 2019, acrylic on canvas, 30”x28”.',
        },
        {
            id: 2,
            title: 'under these lights',
            size: '22”x34”.',
            medium: 'acrylic and ink on canvas.',
            lowResImg: 'static/raw-media/under-these-lights-lo.jpg',
            hiResImg: 'static/raw-media/under-these-lights-hi.jpg',
            description:
                'under these lights, 2019, acrylic and ink on canvas, 22”x34”.',
        },
        {
            id: 3,
            title: 'feet study 2',
            size: '21”x32”.',
            medium: 'oil, house paint and ink on wood panels and wood boards.',
            lowResImg: 'static/raw-media/feet-study-2-lo.jpg',
            hiResImg: 'static/raw-media/feet-study-2-hi.jpg',
            description:
                'feet study 2, 2019, oil, house paint and ink on wood panels and wood boards, 21”x32”.',
        },
        {
            id: 4,
            title: 'scene',
            size: '24”x36”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/scene-lo.jpg',
            hiResImg: 'static/raw-media/scene-hi.jpg',
            description: 'scene, 2018, oil on canvas, 24”x36”.',
        },
        {
            id: 5,
            title: 'feet study',
            size: '24”x36”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/feet-study-lo.jpg',
            hiResImg: 'static/raw-media/feet-study-hi.jpg',
            description: 'feet study, 2018, oil on canvas, 24”x36”.',
        },
        {
            id: 6,
            title: 'left down right up',
            size: '36”x24”.',
            medium: 'acrylic and colored pencil on canvas.',
            lowResImg: 'static/raw-media/subcultures-lo.jpg',
            hiResImg: 'static/raw-media/subcultures-hi.jpg',
            description:
                'left down right up, 2019, acrylic and colored pencil on canvas, 36”x24”.',
        },
        {
            id: 7,
            title: 'luo river, 2018, oil on canvas, 40”x30”.',
            size: '40”x30”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/ballerina-lo.jpg',
            hiResImg: 'static/raw-media/ballerina-hi.jpg',
            description: 'nymph of luo river, 2018, oil on canvas, 40”x30”.',
        },
        {
            id: 8,
            title: 'become, 2018, oil on canvas, 30”x40”.',
            size: '30”x40”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/intruders-lo.jpg',
            hiResImg: 'static/raw-media/intruders-hi.jpg',
            description: 'intruders, 2018, oil on canvas, 30”x40”.',
        },
        {
            id: 9,
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
            id: 10,
            title:
                'folktales, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
            size: '12”x72”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/white-snake-lo.jpg',
            hiResImg: 'static/raw-media/white-snake-hi.jpg',
            description:
                'folktales, 2018, acrylic on canvas, three panels, each panel 12”x24”.',
        },
        {
            id: 11,
            title: 'letting go',
            size: '30”x40”.',
            medium: 'acrylic on canvas.',
            lowResImg: 'static/raw-media/letting-go-lo.jpg',
            hiResImg: 'static/raw-media/letting-go-hi.jpg',
            description: 'letting go, 2018, acrylic on canvas, 30”x40”.',
        },
        {
            id: 12,
            title: 'i learned everything i know from RPGs',
            size: '23”x14”.',
            medium:
                'cut-and-pasted illustrations from storybook, tape, ink, graphite on rice paper.',
            lowResImg: 'static/raw-media/rpgs-lo.jpg',
            hiResImg: 'static/raw-media/rpgs-hi.jpg',
            description:
                'i learned everything i know from RPGs, 2019, cut-and-pasted illustrations from storybook, tape, ink, graphite on rice paper, 23”x14”.',
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
            title: 'hilariously frustrating family dinners',
            size: '12”x16”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/family-dinner-lo.jpg',
            hiResImg: 'static/raw-media/family-dinner-hi.jpg',
            description: 'hilariously frustrating family dinners',
        },
        {
            id: 4,
            title: 'hi nice to meet you',
            size: '14”x11”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/hi-nice-to-meet-you-lo.jpg',
            hiResImg: 'static/raw-media/hi-nice-to-meet-you-hi.jpg',
            description: 'hi nice to meet you',
        },
        {
            id: 5,
            title: 'night loops',
            size: '12”x24”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/night-loops-lo.jpg',
            hiResImg: 'static/raw-media/night-loops-hi.jpg',
            description: 'night loops',
        },
        {
            id: 6,
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
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/diary-gifs-train.gif',
            hiResImg: 'static/raw-media/diary-gifs-train.gif',
            description: '',
        },
        {
            id: 2,
            title: '',
            size: '',
            medium: '',
            lowResImg: 'static/raw-media/lavender-town-animation.gif',
            hiResImg: 'static/raw-media/lavender-town-animation.gif',
            description: 'RE: Gary’s Raticate',
        },
        {
            id: 3,
            title: 'moving boxes',
            size: '24”x18”.',
            medium: 'oil on canvas.',
            lowResImg: 'static/raw-media/boxes-lo.jpg',
            hiResImg: 'static/raw-media/boxes-hi.jpg',
            description: '2017',
        },
        {
            id: 4,
            title: 'mask off',
            size: '19”x24”.',
            medium: 'pen and ink.',
            lowResImg: 'static/raw-media/isis-lo.jpg',
            hiResImg: 'static/raw-media/isis-hi.jpg',
            description: '2015',
        },
    ],
};

const getPortfolioData = portfolioKey =>
    Promise.resolve({
        portfolio: portfolioData[portfolioKey],
        activePortfolio: portfolioKey,
    });

export default getPortfolioData;
