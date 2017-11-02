// import 'babel-polyfill';
// import 'svgxuse';
import { render } from './render';
import log from './modules/logger';
import Root from './components/Root';
import { data } from './api';

// To-do: Create API request to Universal API or whatever

const app = () => {
    render(Root, document.querySelector('#app-root'), { apiData: data });

    fixExperimentalCss();
};

function fixExperimentalCss() {
    try {
        if (CSS.supports('backdrop-filter', 'blur()') || CSS.supports('-webkit-backdrop-filter', 'blur()')) {
            const css = `.navigation-overlay {
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

            document.querySelector('head').innerHTML += `<style id="risky-css" data-note="Generated for newer browsers.">${css}</style>`;
        }
    } catch (e) {
        log(new Error('The CSS.supports feature not supported.'));
    }
}

app();
