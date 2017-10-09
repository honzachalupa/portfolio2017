import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Button extends Component {
    constructor() {
        super();

        this.state = {
            imageUrl: `url('http://www.honzachalupa.cz/imgs/bg-${getRandomRange(1, 10)}.jpg')`
        };
    }

    render() {
        const componentName = this.constructor.name;
        const { title, url, extraClasses } = this.props;

        return (
            <Link className={extraClasses} to={url}title={title} data-component={componentName}>{title}</Link>
        );
    }
}
