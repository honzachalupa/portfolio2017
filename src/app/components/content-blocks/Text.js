import React, { Component, PropTypes } from 'react';

export default class Text extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { headline, children: text, value } = this.props;

        return (
            <article data-component={componentName}>
                <h2 className="headline">{headline}</h2>
                <div className="content">{value || text}</div>
            </article>
        );
    }
}
