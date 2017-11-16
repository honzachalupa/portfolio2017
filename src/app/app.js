import 'babel-polyfill';
import 'svgxuse';
import { render } from './render';
import axios from 'axios';
import log from './modules/logger';
import Root from './components/Root';

const apis = [{
    name: 'config',
    url: 'http://janchalupa-universalapi.azurewebsites.net/api/portfolio-config'
}, {
    name: 'projects',
    url: 'http://janchalupa-universalapi.azurewebsites.net/api/portfolio-projects'
}];

const apiData = {};

const app = () => {
    getApiData();

    const interval = setInterval(() => {
        if (Object.keys(apiData).length === apis.length) {
            clearInterval(interval);

            render(Root, document.querySelector('#app-root'), { apiData });

            fixExperimentalCss();
        }
    }, 100);
};

function getApiData() {
    apis.forEach((api) => {
        const { name, url } = api;

        axios.get(url)
            .then((response) => {
                apiData[name] = response.data;
            })
            .catch((error) => {
                log(error);
            });
    });
}

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
                        text-shadow: 0 0 10px black;
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
                            text-shadow: 0 0 10px black;
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

