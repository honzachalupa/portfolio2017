import React, { Component, PropTypes } from 'react';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class InvisibleHeadline extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { headline } = this.props;

        return (
            <h1 data-component={componentName}>
                {headline}
            </h1>
        );
    }
}
