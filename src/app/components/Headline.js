import React, { Component, PropTypes } from 'react';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Headline extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { headline } = this.props;

        return (
            <h1 className="hidden" data-component={componentName}>
                {headline}
            </h1>
        );
    }
}
