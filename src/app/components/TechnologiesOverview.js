import React, { Component, PropTypes } from 'react';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class TechnologiesOverview extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { tags, config } = this.props;
        const { technologies } = config;

        return (
            <div data-component={componentName}>
                {
                    technologies.map((technology) => {
                        return tags.map((tag) => {
                            if (tag.toLowerCase() === technology.label.toLowerCase()) {
                                return (
                                    <a href={technology.link} style={{ backgroundColor: technology.color }}>
                                        <div className="icon" style={{ backgroundImage: `url('${technology.icon}')` }} data-aspect-ratio="1:1" />
                                        <p className="label" style={{ color: technology.fontColor }}>{technology.label}</p>
                                    </a>
                                );
                            }

                            return null;
                        });
                    })
                }
            </div>
        );
    }
}
