import 'babel-polyfill';
import init from './init';
import factory from './factory';

import mainHeader from './components/main-header';
import mainNavigation from './components/main-navigation';
import projectsFilter from './components/projects-filter';
import aspectRatioPreserver from './modules/aspect-ratio-preserver';

const app = () => {
    init(mainHeader, document.querySelector('.main-header'));
    init(mainNavigation, document.querySelector('.main-navigation'));

    factory(projectsFilter, document.querySelectorAll('.projects-filter'));
    factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));

    try {
        let css = '';

        if (CSS.supports('backdrop-filter', 'blur()') || CSS.supports('-webkit-backdrop-filter', 'blur()')) {
            css += `.main-navigation-overlay {
                        background-color: rgba(255, 255, 255, 0.2);
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    .main-header .content .headline,
                    .main-header .content .tags {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: white;
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    .basic-grid .company-logo {
                        border-radius: 0 !important;
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    @media (max-width: 679px) {
                        .main-navigation.opened {
                            opacity: 0.9;
                        }
                    }
                    @media (min-width: 680px) {
                        .main-navigation {
                            background-color: rgba(255, 255, 255, 0.2);
                            color: white;
                            -webkit-backdrop-filter: blur(3px);
                            backdrop-filter: blur(3px);
                        }

                        .main-navigation.pinned {
                            background-color: rgba(0, 0, 0, 0.1);
                            color: black;
                            box-shadow: none;
                        }
                    }`;
        }

        if (css) {
            document.querySelector('head').innerHTML += `<style id="risky-css" data-note="Generated for newer browsers.">${css}</style>`;
        }
    }
    catch (e) {
        console.log(new Error('The CSS.supports feature not supported.'));
    }
};

app();
