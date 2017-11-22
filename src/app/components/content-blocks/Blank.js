import React, { Component, PropTypes } from 'react';

export default class Blank extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { headline, children: text, invertedColors, value } = this.props;

        const headlineBlock = (headline) ? <p className="headline">{headline}</p> : null;

        return (
            <article className={invertedColors ? 'inverted-colors' : null} data-component={componentName}>
                {headlineBlock}
                {value || text}
            </article>
        );
    }
}
