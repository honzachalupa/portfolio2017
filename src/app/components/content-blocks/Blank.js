import React, { Component, PropTypes } from 'react';
import getClassList from './../../modules/class-list';

export default class Blank extends Component {
    render() {
        const {
            headline,
            children: text,
            invertedColors,
            stretched,
            value
        } = this.props;

        const headlineBlock = (headline) ? <p className="headline">{headline}</p> : null;

        const classList = [
            invertedColors ? 'inverted-colors' : null,
            stretched ? 'stretched' : null
        ];

        return (
            <article className={getClassList(classList)} data-component="ContentBlock_Blank">
                {headlineBlock}
                {value || text}
            </article>
        );
    }
}
