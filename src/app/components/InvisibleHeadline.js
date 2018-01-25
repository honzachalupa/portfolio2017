import React, { Component } from 'react';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class InvisibleHeadline extends Component {
    render() {
        const { headline } = this.props;

        return (
            <h1 data-component="InvisibleHeadline">
                {headline}
            </h1>
        );
    }
}
