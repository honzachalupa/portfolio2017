import 'babel-polyfill';
import init from './init';
import factory from './factory';

import mainHeader from './components/main-header';

const app = () => {
    init(mainHeader, document.querySelector('.main-header'));

    setRiskyCss();

    function setRiskyCss() {
        try {
            let css = '';

            if (CSS.supports('backdrop-filter', 'blur()') || CSS.supports('-webkit-backdrop-filter', 'blur()')) {
                css += `.main-navigation,
                        .main-header .content .headline,
                        .main-header .content .tags {
                            background-color: rgba(255, 255, 255, 0.2);
                            -webkit-backdrop-filter: blur(3px);
                            backdrop-filter: blur(3px);
                            color: white;
                        }`
            }

            if (css) {
                document.querySelector('head').innerHTML += `<style id="risky-css" data-note="Generated for newer browsers.">${css}</style>`;
            }
        }
        catch (e) { }
    }
};

app();
