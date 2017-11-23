import logger from './modules/logger';

export function getRandomRange(min = 0, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

export function setPageTitle(title) {
    document.title = (title) ?
        `${title} | Honza Chalupa portfolio` :
        'Honza Chalupa portfolio';
}

export function capitalize(value) {
    return value.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
}

export function getDevelopmentStageLabel(developmentStage, platform) {
    let label;

    if (developmentStage !== 'released') {
        const projectType = (platform === 'web') ? 'website' : 'application';

        switch (developmentStage) {
            case 'unsupported':
                label = `Unfortunately this ${projectType} is not supported anymore.`;
                break;
            case 'in-development':
                label = `This ${projectType} is currently in development phase.`;
                break;
            default:
                logger(`Undefined development stage label: ${developmentStage}.`);
                break;
        }
    }

    return label;
}
