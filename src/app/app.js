import 'babel-polyfill';
import { render } from './render';
import { get as getApiData, isLoaded as isApiGetterCompleted } from './modules/api';
import addExperimentalCss from './modules/experimental-css';
import Root from './components/Root';

const app = () => {
    const apis = [{
        name: 'config',
        url: 'https://janchalupa-universalapi.azurewebsites.net/api/portfolio-config'
    }, {
        name: 'projects',
        url: 'https://janchalupa-universalapi.azurewebsites.net/api/portfolio-projects'
    }];

    const apiData = getApiData(apis);

    const checker = setInterval(() => {
        if (isApiGetterCompleted(apis, apiData)) {
            clearInterval(checker);

            addExperimentalCss();

            render(Root, document.querySelector('#app-root'), { apiData });
        }
    }, 10);
};

app();

