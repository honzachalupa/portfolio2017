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
                id: 'photography',
                label: 'Photography',
                url: 'http://www.instagram.com/honzachalupa/'
            }, {
                id: 'about-me-page',
                label: 'About me'
            }
        ],
        technologies: [
            {
                label: 'HTML',
                icon: '../gfx/svg/html-white.svg',
                color: '#D45732',
                fontColor: 'white',
                link: 'http://www.w3.org/html/'
            }, {
                label: 'CSS',
                icon: '../gfx/svg/css-white.svg',
                color: '#3772B5',
                fontColor: 'white',
                link: 'http://www.w3.org/Style/CSS/Overview.en.html'
            }, {
                label: 'SASS',
                icon: '../gfx/svg/sass-white.svg',
                color: '#CF649A',
                fontColor: 'white',
                link: 'http://www.sass-lang.com/'
            }, {
                label: 'JavaScript',
                icon: '../gfx/svg/javascript-black.svg',
                color: '#e5bb31',
                fontColor: 'black',
                link: 'http://www.javascript.com/'
            }, {
                label: 'React',
                icon: '../gfx/svg/react-black.svg',
                color: '#61dafb',
                fontColor: 'black',
                link: 'http://www.reactjs.org/'
            }, {
                label: 'C#',
                icon: '../gfx/svg/csharp-white.svg',
                color: '#56338C',
                fontColor: 'white',
                link: 'http://docs.microsoft.com/en-us/dotnet/csharp/language-reference/'
            }, {
                label: 'PHP',
                icon: '../gfx/svg/php-white.svg',
                color: '#8892BF',
                fontColor: 'white',
                link: 'http://www.php.net/'
            }, {
                label: 'Sitecore',
                icon: '../gfx/svg/sitecore-white.svg',
                color: '#de232f',
                fontColor: 'white',
                link: 'http://www.sitecore.net/'
            }
        ],
        contactInfo: {
            phoneNumber: '+420 606 789 910',
            emailAddress: 'janchalupa@outlook.cz',
            credits: '© Jan Chalupa 2017',
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
        screenBreakpoint: 680
    },
    projects: [
        {
            id: 'innogy-product-finder',
            name: 'innogy Product Finder',
            description: 'Since most of designs were provided by the client, my goal was to make some under-the-hood features and learn all of the static HTML markup to move. For a second I called myself a pure JavaScript programmer instead of Front-end Developer. I\'ve written about ten lines of HTML and CSS code and few thousand of JavaScript code - just for comparision. Great experience was also to work on-site in Germany three days a week for half a year.',
            previewImage: 'gfx/projects/innogy-product-finder.jpg',
            gallery: [
                {
                    url: '../gfx/projects/innogy-product-finder-01.jpg',
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
            tags: ['Innogy', 'RWE', 'Germany', 'Actum', 'HTML', 'SASS', 'JavaScript', 'React', 'Sitecore']
        }, {
            id: 'innogy-intranet',
            name: 'innogy Intranet',
            description: 'I\'ve worked together with the UX designer to deliver the best result possible preserving the company\'s design-language. Then I sat down to the code and transfer it from the paper to the screen. I\'ve made many custom controls like carousels and grids with dynamic AJAX-based loading. A lot of components were also provided from the client.',
            previewImage: 'gfx/projects/innogy-intranet.jpg',
            gallery: [
                '../gfx/projects/innogy-intranet-01.jpg'
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
            tags: ['Innogy', 'RWE', 'Germany', 'Actum', 'HTML', 'SASS', 'JavaScript', 'Sitecore']
        }, {
            id: 'allianz-jiri-prudky',
            name: 'Allianz - Jiří Prudký',
            description: 'I\'ve started working on this project right after I left my previous position in Allianz, where I worked as a IBM\'s TeamWorks developer. Goal was to deliver just a really basic website with static content.',
            url: 'http://www.jiriprudky.cz/',
            previewImage: '../gfx/projects/allianz-jiri-prudky.jpg',
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
            tags: ['Allianz', 'insurance', 'broker', 'JavaScript', 'SASS']
        }, {
            id: 'xbox-games-with-gold',
            name: 'Xbox - Games with gold',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.honzachalupa.cz/xbox-gwg/',
            previewImage: 'http://via.placeholder.com/600x400?text=I%27m%20still%20working%20on%20content',
            developmentStage: 'unsupported',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['Microsoft', 'Xbox', 'game', 'money', 'money-saving', 'web-scraping', 'HTML', 'CSS', 'JavaScript', 'PHP'],
            hidden: true
        }, {
            id: 'online-editor',
            name: 'Online Code Editor',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.honzachalupa.cz/online-editor/',
            previewImage: 'http://via.placeholder.com/600x400?text=I%27m%20still%20working%20on%20content',
            developmentStage: 'in-development',
            livePreview: true,
            type: 'web',
            addedDate: '2016/1/1',
            tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            hidden: true
        }, {
            id: 'ceske-zpravodajstvi',
            name: 'České zpravodajství',
            description: 'This one was my biggest personal project I did so far. I did all front-end (for website version of app), back-end and also <a href="http://localhost:5001/projects/ceske-zpravodajstvi-app">mobile app for Windows Phone</a>. Unfortunately after my transition from Windows to Apple\'s environment a quit maintaining both web and mobile app because I didn\'t need it anymore.<br /><br />On back-end side I run scheduled CRON script which gathers content from all desired news providers and saves it into JSON file which is then served to front-end and mobile app.',
            url: 'http://www.ceskezpravodajstvi.cz/',
            previewImage: '../gfx/projects/ceske-zpravodajstvi.jpg',
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
            tags: ['Microsoft', 'Czech', 'news', 'newspaper', 'web-scraping', 'HTML', 'SASS', 'JavaScript', 'PHP']
        }, {
            id: 'polti',
            name: 'Polti',
            description: 'My objective on this project was to redesign the Czech variant of the website to looks the same as the Italian variant (company is based in Italy) without changing anything in HTML code. I had an unlimited freedom with changing CSS.',
            url: 'http://www.polti.cz/',
            previewImage: '../gfx/projects/polti.jpg',
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
            tags: ['Italy', 'CSS']
        }, {
            id: 'terapta',
            name: 'Tereza Ptáčková portfolio',
            description: 'Since Tereza is my old friend I\'ve decided to help her with creation of her portfolio. The goal was simple - create basic "no-budget" website with strict requirements on design guidlines to match Tereza\'s faforite colors.',
            url: 'http://www.terapta.cz/',
            previewImage: '../gfx/projects/terapta.jpg',
            gallery: [
                '../gfx/projects/terapta-01.jpg',
                '../gfx/projects/terapta-02.jpg',
                '../gfx/projects/terapta-03.jpg'
            ],
            developmentStage: 'released',
            livePreview: true,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['artist', 'illustrations', 'HTML', 'CSS']
        }, {
            id: 'studio-cesta-ke-zmene',
            name: 'Studio Cesta ke změně',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.studiocestakezmene.cz/',
            previewImage: '../gfx/projects/studio-cesta-ke-zmene.jpg',
            gallery: [
                '../gfx/projects/studio-cesta-ke-zmene-01.jpg'
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['lifestyle', 'health', 'food', 'HTML', 'CSS']
        }, {
            id: 'vyzivou-ke-zmene',
            name: 'Výživou ke změně',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.vyzivoukezmene.cz/',
            previewImage: '../gfx/projects/vyzivou-ke-zmene.jpg',
            gallery: [
                '../gfx/projects/vyzivou-ke-zmene-01.jpg',
                '../gfx/projects/vyzivou-ke-zmene-02.jpg'
            ],
            developmentStage: 'released',
            livePreview: false,
            type: 'web',
            addedDate: '2016/2/1',
            tags: ['lifestyle', 'health', 'food', 'HTML', 'CSS']
        }, {
            id: 'fuel-consumption',
            name: 'Fuel Consumption',
            description: 'This app was my last I’ve made for Windows Phone. Fuel calculator helps you save money, log and plan your trips.',
            url: 'https://www.microsoft.com/en-us/store/p/spot%C5%99eba-paliva/9nblggh4t314',
            previewImage: {
                url: '../gfx/projects/fuel-consumption.png',
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
            type: 'native',
            addedDate: '2016/8/25',
            tags: ['Microsoft', 'Windows', 'Windows Phone', 'car', 'money', 'money-saving', 'C#']
        }, {
            id: 'ceske-zpravodajstvi-app',
            name: 'České zpravodajství',
            description: 'This one was my biggest personal project I did so far. I did all front-end (<a href="http://localhost:5001/projects/ceske-zpravodajstvi">for website version of app</a>), back-end and also mobile app for Windows Phone. Unfortunately after my transition from Windows to Apple\'s environment a quit maintaining both web and mobile app because I didn\'t need it anymore.<br /><br />On back-end side I run scheduled CRON script which gathers content from all desired news providers and saves it into JSON file which is then served to front-end and mobile app.',
            url: 'https://www.microsoft.com/cs-cz/store/apps/ceske-zpravodajstvi/9nblggh4q89h',
            previewImage: {
                url: '../gfx/projects/ceske-zpravodajstvi-app.png',
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
            type: 'native',
            addedDate: '2016/2/1',
            tags: ['Microsoft', 'Windows', 'Windows Phone', 'Czech', 'news', 'newspaper', 'web-scraping', 'C#', 'PHP']
        }, {
            id: 'smokers-little-helper',
            name: 'Smoker\'s Little Helper',
            description: 'The application is there to help and motivate people, who wants to quit smoking. Beside of saved money analysis application provides detailed advices and quitting process description.',
            url: 'https://www.microsoft.com/en-us/store/p/smokers-little-helper/9nblgggzvldz',
            previewImage: {
                url: '../gfx/projects/smokers-little-helper.png',
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
            type: 'native',
            addedDate: '2015/4/1',
            tags: ['lifestyle', 'health', 'drug', 'money', 'money-saving', 'C#']
        }, {
            id: 'one-on-one',
            name: 'One on One',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one/78ef9379-b4fc-40c9-b612-6332b3c2b085',
            previewImage: {
                url: '../gfx/projects/one-on-one.png',
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
            type: 'native',
            addedDate: '2015/9/1',
            tags: ['game', 'fun', 'C#']
        }, {
            id: 'one-on-one-kids',
            name: 'One on One for KIDS',
            description: 'Project description was too boring to survive (the new one is in progress).',
            url: 'http://www.windowsphone.com/cs-cz/store/app/one-on-one-for-kids/3d8a3cf0-9663-4e36-8630-3f955e83bf6e',
            previewImage: {
                url: '../gfx/projects/one-on-one-kids.png',
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
            type: 'native',
            addedDate: '2015/9/15',
            tags: ['game', 'fun', 'kids', 'C#']
        }
    ]
};
