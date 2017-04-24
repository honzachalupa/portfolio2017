const getUrlParameterValue = (key) => {
    const url = window.location.href;
    const regex = new RegExp(`[?&]${key.replace(/[\[\]]/g, "\\$&")}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);

    if (!results)
        return null;

    if (!results[2])
        return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export default getUrlParameterValue;
