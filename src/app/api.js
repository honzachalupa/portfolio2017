/*
id - string or number
name - string
description - string
url - string
previewImage - string
gallery - array of strings and/or objects {url, description}
livePreview - boolean
developmentStage - string
type - string
company - object {name, logo, url}
addedDate - string
tags - array of strings
hidden - boolean
*/

export const data = {
    config: {
        title: 'HonzaChalupa',
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
            city: 'Prague',
            socialProfiles: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/honzachalupa'
                }, {
                    name: 'Instagram',
                    url: 'http://www.instagram.cz/honzachalupa/'
                }, {
                    name: 'Twitter',
                    url: 'http://www.twitter.com/janchalupa/'
                }, {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/janchalupaportfolio/'
                }
            ]
        },
        credits: '© Jan Chalupa 2017',
        screenBreakpoint: 680
    },
    projects: [
        {
            id: 'innogy-product-finder',
            name: 'innogy Product Finder',
            description: 'Since most of designs were provided by the client, my goal was to make some under-the-hood features and learn all of the static HTML markup to move. For a second I called myself a pure JavaScript programmer instead of Front-end Developer. I\'ve written about ten lines of HTML and CSS code and few thousand of JavaScript code - just for comparision. Great experience was also to work on-site in Germany three days a week for half a year.',
            previewImage: 'gfx/projects/innogy-product-finder.png',
            gallery: [
                {
                    url: '../gfx/projects/innogy-product-finder.png',
                    description: 'Homepage'
                }
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            company: {
                name: 'Actum',
                logo: 'gfx/svg/company-logo-actum.svg',
                url: 'http://www.actum.cz/'
            },
            addedDate: '2017/10/10',
            tags: ['Innogy', 'RWE', 'Germany', 'Actum', 'JavaScript', 'React']
        }, {
            id: 'innogy-intranet',
            name: 'innogy Intranet',
            description: 'I\'ve worked together with the UX designer to deliver the best result possible preserving the company\'s design-language. Then I sat down to the code and transfer it from the paper to the screen. I\'ve made many custom controls like carousels and grids with dynamic AJAX-based loading. A lot of components were also provided from the client.',
            previewImage: 'gfx/projects/innogy-intranet.png',
            gallery: [
                '../gfx/projects/innogy-intranet.jpg'
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            company: {
                name: 'Actum',
                logo: 'gfx/svg/company-logo-actum.svg',
                url: 'http://www.actum.cz/'
            },
            addedDate: '2017/2/14',
            tags: ['Innogy', 'RWE', 'Germany', 'Actum', 'JavaScript', 'React']
        }, {
            id: 'fuel-consumption',
            name: 'Fuel Consumption',
            description: 'This app was my last I’ve made for Windows Phone. Fuel calculator helps you save money, log and plan your trips.',
            url: 'https://www.microsoft.com/en-us/store/p/spot%C5%99eba-paliva/9nblggh4t314',
            previewImage: {
                url: '../gfx/projects/fuel-consumption-01.png',
                aspectRatio: 'portrait'
            },
            gallery: [
                {
                    url: '../gfx/projects/fuel-consumption-01.png',
                    description: 'Main overview of logged trips and saved cars',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/fuel-consumption-02.png',
                    description: 'Detail of trip showing all data',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/fuel-consumption-03.png',
                    description: 'Page for creating a new calculation',
                    aspectRatio: 'portrait'
                }
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'mobile',
            addedDate: '2016/8/25',
            tags: ['Microsoft', 'Windows', 'Windows Phone', 'car', 'money', 'money-saving']
        }, {
            id: 'allianz-jiri-prudky',
            name: 'Allianz - Jiří Prudký',
            description: 'I\'ve started working on this project right after I left my previous position in Allianz, where I worked as a IBM\'s TeamWorks developer. Goal was to deliver just a really basic website with static content.',
            url: 'http://www.jiriprudky.cz/',
            previewImage: '../gfx/projects/allianz-jiri-prudky-01.jpg',
            gallery: [
                {
                    url: '../gfx/projects/allianz-jiri-prudky-01.jpg',
                    description: 'Homepage'
                }, {
                    url: '../gfx/projects/allianz-jiri-prudky-02.jpg',
                    description: 'Products listing'
                }
            ],
            developmentStage: 'released',
            livePreview: true,
            type: 'web',
            addedDate: '2016/9/1',
            tags: ['Allianz', 'insurance', 'broker']
        }, {
            id: 'xbox-games-with-gold',
            name: 'Xbox - Games with gold',
            description: 'Project description...',
            url: 'http://www.honzachalupa.cz/xbox-gwg/',
            previewImage: 'http://via.placeholder.com/600x400?text=I%27m%20still%20working%20on%20content',
            developmentStage: 'unsupported',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['Microsoft', 'Xbox', 'game', 'web-scraping', 'money', 'money-saving'],
            hidden: true
        }, {
            id: 'online-editor',
            name: 'Online Code Editor',
            description: 'Project description...',
            url: 'http://www.honzachalupa.cz/online-editor/',
            previewImage: 'http://via.placeholder.com/600x400?text=I%27m%20still%20working%20on%20content',
            developmentStage: 'in-development',
            livePreview: true,
            type: 'web',
            addedDate: '2016/1/1',
            hidden: true
        }, {
            id: 'ceske-zpravodajstvi',
            name: 'České zpravodajství',
            description: 'This one was my biggest personal project I did so far. I did all front-end (for website version of app), back-end and also <a href="http://localhost:5001/projects/ceske-zpravodajstvi-app">mobile app for Windows Phone</a>. Unfortunately after my transition from Windows to Apple\'s environment a quit maintaining both web and mobile app because I didn\'t need it anymore.<br /><br />On back-end side I run scheduled CRON script which gathers content from all desired news providers and saves it into JSON file which is then served to front-end and mobile app.',
            url: 'http://www.ceskezpravodajstvi.cz/',
            previewImage: '../gfx/projects/ceske-zpravodajstvi-01.jpg',
            gallery: [
                {
                    url: '../gfx/projects/ceske-zpravodajstvi-01.jpg',
                    description: 'List of latest articles'
                }, {
                    url: '../gfx/projects/ceske-zpravodajstvi-02.jpg',
                    description: 'Reading mode'
                }
            ],
            developmentStage: 'in-development',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['Microsoft', 'Czech', 'news', 'newspaper', 'web-scraping']
        }, {
            id: 'ceske-zpravodajstvi-app',
            name: 'České zpravodajství',
            description: 'This one was my biggest personal project I did so far. I did all front-end (<a href="http://localhost:5001/projects/ceske-zpravodajstvi">for website version of app</a>), back-end and also mobile app for Windows Phone. Unfortunately after my transition from Windows to Apple\'s environment a quit maintaining both web and mobile app because I didn\'t need it anymore.<br /><br />On back-end side I run scheduled CRON script which gathers content from all desired news providers and saves it into JSON file which is then served to front-end and mobile app.',
            url: 'https://www.microsoft.com/cs-cz/store/apps/ceske-zpravodajstvi/9nblggh4q89h',
            previewImage: {
                url: '../gfx/projects/ceske-zpravodajstvi-app-01.png',
                aspectRatio: 'portrait'
            },
            gallery: [
                {
                    url: '../gfx/projects/ceske-zpravodajstvi-app-01.png',
                    description: 'List of latest articles',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/ceske-zpravodajstvi-app-02.png',
                    description: 'List of latest articles (in landscape view)',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/ceske-zpravodajstvi-app-03.png',
                    description: 'Opened article',
                    aspectRatio: 'portrait'
                }
            ],
            developmentStage: 'unsupported',
            type: 'mobile',
            addedDate: '2016/2/1',
            tags: ['Microsoft', 'Windows', 'Windows Phone', 'Czech', 'news', 'newspaper', 'web-scraping']
        }, {
            id: 'polti',
            name: 'Polti',
            description: 'My objective on this project was to redesign the Czech variant of the website to looks the same as the Italian variant (company is based in Italy) without changing anything in HTML code. I had an unlimited freedom with changing CSS.',
            url: 'http://www.polti.cz/',
            previewImage: '../gfx/projects/polti-01.jpg',
            gallery: [
                {
                    url: '../gfx/projects/polti-01.jpg',
                    description: 'Czech version of website'
                }, {
                    url: '../gfx/projects/polti-02.jpg',
                    description: 'Original Italian version'
                }
            ],
            developmentStage: 'released',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['Italy']
        }, {
            id: 'terapta',
            name: 'Tereza Ptáčková portfolio',
            description: 'Since Tereza is my old friend I\'ve decided to help her with creation of her portfolio. The goal was simple - create basic "no-budget" website with strict requirements on design guidlines to match Tereza\'s faforite colors.',
            url: 'http://www.terapta.cz/',
            previewImage: '../gfx/projects/terapta-02.jpg',
            gallery: [
                '../gfx/projects/terapta-01.jpg',
                '../gfx/projects/terapta-02.jpg',
                '../gfx/projects/terapta-03.jpg'
            ],
            developmentStage: 'released',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['artist', 'illustrations']
        }, {
            id: 'studio-cesta-ke-zmene',
            name: 'Studio Cesta ke změně',
            description: 'Project description...',
            url: 'http://www.studiocestakezmene.cz/',
            previewImage: '../gfx/projects/studio-cesta-ke-zmene-01.jpg',
            gallery: [
                '../gfx/projects/studio-cesta-ke-zmene-01.jpg'
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['lifestyle', 'health', 'food']
        }, {
            id: 'vyzivou-ke-zmene',
            name: 'Výživou ke změně',
            description: 'Project description...',
            url: 'http://www.vyzivoukezmene.cz/',
            previewImage: '../gfx/projects/vyzivou-ke-zmene-01.jpg',
            gallery: [
                '../gfx/projects/vyzivou-ke-zmene-01.jpg',
                '../gfx/projects/vyzivou-ke-zmene-02.jpg'
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['lifestyle', 'health', 'food']
        }, {
            id: 'smokers-little-helper',
            name: 'Smoker\'s Little Helper',
            description: 'The application is there to help and motivate people, who wants to quit smoking. Beside of saved money analysis application provides detailed advices and quitting process description.',
            url: 'https://www.microsoft.com/en-us/store/p/smokers-little-helper/9nblgggzvldz',
            previewImage: {
                url: '../gfx/projects/smokers-little-helper-01.png',
                aspectRatio: 'portrait'
            },
            gallery: [
                {
                    url: '../gfx/projects/smokers-little-helper-01.png',
                    description: 'Summary of saved money',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/smokers-little-helper-02.png',
                    description: 'Overview of taxes payed to the state office',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/smokers-little-helper-03.png',
                    description: 'Expected stages of quitting',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/smokers-little-helper-04.png',
                    description: 'Recommended advices',
                    aspectRatio: 'portrait'
                }
            ],
            developmentStage: 'unsupported',
            type: 'mobile',
            addedDate: '2015/4/1',
            tags: ['lifestyle', 'health', 'drug', 'money', 'money-saving']
        }, {
            id: 'one-on-one',
            name: 'One on One',
            description: 'Project description...',
            url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one/78ef9379-b4fc-40c9-b612-6332b3c2b085',
            previewImage: {
                url: '../gfx/projects/one-on-one-01.png',
                aspectRatio: 'portrait'
            },
            gallery: [
                {
                    url: '../gfx/projects/one-on-one-01.png',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/one-on-one-02.png',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/one-on-one-03.png',
                    aspectRatio: 'portrait'
                }
            ],
            developmentStage: 'unsupported',
            type: 'mobile',
            addedDate: '2015/9/1',
            tags: ['game', 'fun']
        }, {
            id: 'one-on-one-kids',
            name: 'One on One for KIDS',
            description: 'Project description...',
            url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one-for-kids/3d8a3cf0-9663-4e36-8630-3f955e83bf6e',
            previewImage: {
                url: '../gfx/projects/one-on-one-kids-01.png',
                aspectRatio: 'portrait'
            },
            gallery: [
                {
                    url: '../gfx/projects/one-on-one-kids-01.png',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/one-on-one-kids-02.png',
                    aspectRatio: 'portrait'
                }, {
                    url: '../gfx/projects/one-on-one-kids-03.png',
                    aspectRatio: 'portrait'
                }
            ],
            developmentStage: 'unsupported',
            type: 'mobile',
            addedDate: '2015/9/15',
            tags: ['game', 'fun', 'kids']
        }
    ]
};
