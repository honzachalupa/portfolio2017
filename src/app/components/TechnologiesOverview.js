import React, { Component, PropTypes } from 'react';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class TechnologiesOverview extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;

        const {
            tags,
            config
        } = this.props;

        const { technologies } = config;

        let technologiesBlock;
        let numberOfMatches = 0;

        if (tags) {
            technologiesBlock = technologies.map((technology) => {
                return tags.map((tag) => {
                    if (tag.toLowerCase() === technology.label.toLowerCase()) {
                        numberOfMatches += 1;

                        return (
                            <a className="item" href={technology.link} style={{ backgroundColor: technology.color }}>
                                <div className="icon" style={{ backgroundImage: `url('${technology.icon}')` }} data-aspect-ratio="1:1" />
                                <p className="label" style={{ color: technology.fontColor }}>{technology.label}</p>
                            </a>
                        );
                    }

                    return null;
                });
            });
        }

        if (numberOfMatches === 0) {
            technologiesBlock = (
                <p>Unfortunately for this project there is nothing important to mention.</p>
            );
        }

        return (
            <div data-component={componentName}>
                {technologiesBlock}
            </div>
        );
    }
}
