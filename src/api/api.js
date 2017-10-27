/*
id - string or number
name - string
description - string
url - string
previewImage - string
gallery - array of strings and/or objects {url, description}
livePreviewAllowed - boolean
developmentStage - string
type - string
company - object {name, logo, url}
addedDate - string
tags - array of strings
hidden - boolean
*/

module.exports = () => {
    const data = {
        projects: [
            {
                id: 'innogy-product-finder',
                name: 'innogy Product Finder',
                description: 'Since most of designs were provided by the client, my goal was to make some under-the-hood features and learn all of the static HTML markup to move. For a second I called myself a pure JavaScript programmer instead of Front-end Developer. I\'ve written about ten lines of HTML and CSS code and few thousand of JavaScript code - just for comparision. Great experience was also to work on-site in Germany three days a week for half a year.',
                previewImage: 'gfx/projects/innogy-product-finder.png',
                gallery: [
                    {
                        url: '../gfx/projects/innogy-product-finder.png',
                        description: 'bla bla bla'
                    },
                    '../gfx/projects/innogy-product-finder.png',
                    {
                        url: '../gfx/projects/innogy-product-finder.png',
                        description: 'bla bla bla'
                    }
                ],
                developmentStage: 'released',
                type: 'web',
                company: {
                    name: 'Actum',
                    logo: 'gfx/svg/company-logo-actum.svg',
                    url: 'http://www.seznam.cz'
                },
                addedDate: '2017/10/10',
                tags: ['innogy', 'rwe', 'germany', 'actum', 'javascript', 'react.js']
            }, {
                id: 'innogy-intranet',
                name: 'innogy Intranet',
                description: 'I\'ve worked together with the UX designer to deliver the best result possible preserving the company\'s design-language. Then I sat down to the code and transfer it from the paper to the screen. I\'ve made many custom controls like carousels and grids with dynamic AJAX-based loading. A lot of components were also provided from the client.',
                previewImage: 'gfx/projects/innogy-intranet.png',
                gallery: [
                    '../gfx/projects/innogy-intranet.png'
                ],
                developmentStage: 'released',
                type: 'web',
                company: {
                    name: 'Actum',
                    logo: 'gfx/svg/company-logo-actum.svg',
                    url: 'http://www.seznam.cz'
                },
                addedDate: '2017/2/14',
                tags: ['innogy', 'rwe', 'germany', 'actum', 'javascript', 'react.js']
            }, {
                id: 'xbox-games-with-gold',
                name: 'Xbox - Games with gold',
                description: 'Project description...',
                url: 'http://www.honzachalupa.cz/xbox-gwg/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-1.jpg',
                developmentStage: 'unsupported',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['microsoft', 'xbox', 'games', 'web scraping'],
                hidden: true
            }, {
                id: 'online-editor',
                name: 'Online Code Editor',
                description: 'Project description...',
                url: 'http://www.honzachalupa.cz/online-editor/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-2.jpg',
                developmentStage: 'in-development',
                type: 'web',
                addedDate: '2016/1/1',
                hidden: true
            }, {
                id: 'ceske-zpravodajstvi',
                name: 'České zpravodajství',
                description: 'Project description...',
                url: 'http://www.ceskezpravodajstvi.cz/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-3.jpg',
                developmentStage: 'in-development',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['microsoft', 'czech', 'news', 'web scraping']
            }, {
                id: 'ceske-zpravodajstvi-app',
                name: 'České zpravodajství',
                description: 'Project description...',
                url: 'https://www.microsoft.com/cs-cz/store/apps/ceske-zpravodajstvi/9nblggh4q89h',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-3.jpg',
                developmentStage: 'unsupported',
                type: 'mobile',
                addedDate: '2016/2/1',
                tags: ['microsoft', 'windows', 'windows phone', 'czech', 'news', 'web scraping']
            }, {
                id: 'polti',
                name: 'Polti',
                description: 'My objective on this project was to redesign the Czech variant of the website to looks the same as the Italian variant (company is based in Italy) without changing anything in HTML code. I had an unlimited freedom with changing CSS.',
                url: 'http://www.polti.cz/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-4.jpg',
                developmentStage: 'released',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['italy']
            }, {
                id: 'terapta',
                name: 'Tereza Ptáčková (blog)',
                description: 'Project description...',
                url: 'http://www.terapta.cz/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-5.jpg',
                developmentStage: 'released',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['artist', 'illustrations']
            }, {
                id: 'studio-cesta-ke-zmene',
                name: 'Studio Cesta ke změně',
                description: 'Project description...',
                url: 'http://www.studiocestakezmene.cz/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-6.jpg',
                developmentStage: 'released',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['lifestyle', 'health', 'food']
            }, {
                id: 'vyzivou-ke-zmene',
                name: 'Výživou ke změně',
                description: 'Project description...',
                url: 'http://www.vyzivoukezmene.cz/',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-7.jpg',
                developmentStage: 'released',
                type: 'web',
                addedDate: '2016/2/1',
                tags: ['lifestyle', 'health', 'food']
            }, {
                id: 'smokers-little-helper',
                name: 'Smoker\'s Little Helper',
                description: 'Project description...',
                url: 'http://www.windowsphone.com/cs-cz/store/app/smoker-little-helper/be872b68-e961-40a9-b01f-61136d3508d1',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-8.jpg',
                developmentStage: 'unsupported',
                type: 'mobile',
                addedDate: '2015/4/1',
                tags: ['lifestyle', 'health', 'drug']
            }, {
                id: 'one-on-one',
                name: 'One on One',
                description: 'Project description...',
                url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one/78ef9379-b4fc-40c9-b612-6332b3c2b085',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-8.jpg',
                developmentStage: 'unsupported',
                type: 'mobile',
                addedDate: '2015/9/1',
                tags: ['game', 'fun']
            }, {
                id: 'one-on-one-kids',
                name: 'One on One for KIDS',
                description: 'Project description...',
                url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one-for-kids/3d8a3cf0-9663-4e36-8630-3f955e83bf6e',
                previewImage: 'http://www.honzachalupa.cz/imgs/bg-8.jpg',
                developmentStage: 'unsupported',
                type: 'mobile',
                addedDate: '2015/9/15',
                tags: ['game', 'fun', 'kids']
            }
        ],
        config: {
            title: 'Test',
            tags: [
                'front-end developer',
                'junior back-end developer',
                'wannabe UX designer',
                'car-lover',
                'mountain biker'
            ],
            navigationItems: [
                {
                    id: 'home-page',
                    label: 'Introduction',
                    url: '/',
                    active: true
                }, {
                    id: 'projects-page',
                    label: 'Projects'
                }, {
                    id: 'about-me-page',
                    label: 'About me'
                }
            ],
            contactInfo: {
                phoneNumber: '+420 606 789 910',
                emailAddress: 'janchalupa@outlook.cz',
                city: 'Prague'
            },
            screenBreakpoint: 680
        }
    };

    return { data };
};
