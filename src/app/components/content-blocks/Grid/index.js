import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { headline, children: items, isCentered } = this.props;

        return (
            <article data-component={componentName} className={isCentered ? 'centered' : ''}>
                <h2 className="headline">{headline}</h2>
                <ul>
                    {items}
                </ul>
            </article>
        );
    }
}
