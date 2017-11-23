import axios from 'axios';
import log from './logger';

export function get(apis) {
    const apiData = {};

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

    return apiData;
}

export function isLoaded(apis, data) {
    return Object.keys(data).length === apis.length;
}
