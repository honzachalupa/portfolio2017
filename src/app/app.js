// import 'babel-polyfill';
// import 'svgxuse';
// import init from './init';
// import factory from './factory';
import { render, renderFactory } from './render';
import logger from './modules/logger';
import Root from './components/Root';

const app = (config) => {
    render(Root, document.querySelector('#app-root'), { apiUrlRoot: 'http://192.168.0.15:5003' });

    try {
        let css = '';

        if (CSS.supports('backdrop-filter', 'blur()') || CSS.supports('-webkit-backdrop-filter', 'blur()')) {
            css += `.navigation-overlay {
                        background-color: rgba(255, 255, 255, 0.2);
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    [data-component="Page_Header"] .content .headline,
                    [data-component="Page_Header"] .content .tags {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: white;
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    [data-component="ContentBlock_Grid"] .company .logo {
                        border-radius: 0 !important;
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    @media (max-width: 679px) {
                        [data-component="Page_Navigation"].opened {
                            opacity: 0.9;
                        }
                    }
                    @media (min-width: 680px) {
                        [data-component="Page_Navigation"] {
                            background-color: rgba(255, 255, 255, 0.2);
                            color: white;
                            -webkit-backdrop-filter: blur(3px);
                            backdrop-filter: blur(3px);
                        }

                        [data-component="Page_Navigation"].pinned {
                            background-color: rgba(0, 0, 0, 0.1);
                            color: black;
                            box-shadow: none;
                        }
                    }`;
        }

        if (css) {
            document.querySelector('head').innerHTML += `<style id="risky-css" data-note="Generated for newer browsers.">${css}</style>`;
        }
    } catch (e) {
        logger(new Error('The CSS.supports feature not supported.'));
    }
};

app(window.config);
