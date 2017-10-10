import React, { Component, PropTypes } from 'react';

export default class Blank extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { headline, children: text, value } = this.props;

        const headlineBlock = (headline) ? <p className="headline">{headline}</p> : null;

        return (
            <article data-component={componentName}>
                {headlineBlock}
                {value || text}
            </article>
        );
    }
}
