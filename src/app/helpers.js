import logger from './modules/logger';

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

export function getDevelopmentStageLabel(developmentStage, platform) {
    let label;

    if (developmentStage !== 'released') {
        const projectType = (platform === 'web') ? 'website' : 'application';

        switch (developmentStage) {
            case 'unsupported':
                label = {
                    value: `This ${projectType} is not supported anymore.`,
                    color: 'red'
                };
                break;
            case 'in-development':
                label = {
                    value: `This ${projectType} is currently in development phase.`,
                    color: 'green'
                };
                break;
            default:
                logger(`Undefined development stage label: ${developmentStage}.`);
                break;
        }
    }

    return label;
}
