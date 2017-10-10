export function getRandomRange(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

export function setPageTitle(title) {
    document.title = (title) ?
        `${title} | Honza Chalupa portfolio` :
        'Honza Chalupa portfolio';
}

export function capitalize(text) {
    return text.replace(/\b\w/g, l => l.toUpperCase());
}
