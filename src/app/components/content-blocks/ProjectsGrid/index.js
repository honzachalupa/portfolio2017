import React, { Component, PropTypes } from 'react';
import getClassList from './../../../modules/class-list';

export default class ProjectsGrid extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const {
            headline,
            description,
            children: items,
            extraClasses
        } = this.props;

        const descriptionBlock = description ?
            <p className="description">{description}</p> :
            null;

        return (
            <article data-component={componentName} className={getClassList(extraClasses)}>
                <h2 className="headline">{headline}</h2>
                {descriptionBlock}
                <ul>
                    {items}
                </ul>
            </article>
        );
    }
}
