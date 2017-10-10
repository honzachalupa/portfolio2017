import React, { Component, PropTypes } from 'react';

export default class Blank extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { children: text, value } = this.props;

        return (
            <article data-component={componentName}>
                {value || text}
            </article>
        );
    }
}
