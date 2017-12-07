import React, { Component, PropTypes } from 'react';

export default class Text extends Component {
    render() {
        const {
            headline,
            children: text,
            value
        } = this.props;

        return (
            <article data-component="ContentBlock_Text">
                <h2 className="headline">{headline}</h2>
                <div className="content">{value || text}</div>
            </article>
        );
    }
}
