import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import logger from './../modules/logger';
import getClassList from './../modules/class-list';
import Navigation from './Navigation';

export default class Button extends Component {
    render() {
        const {
            title,
            url,
            onClick,
            extraClasses
        } = this.props;

        const sharedProps = {
            className: getClassList(extraClasses),
            title,
            role: 'button',
            'data-component': 'Button'
        };

        return (onClick) ?
            <button onClick={onClick} {...sharedProps}>{title}</button> :
            <a href={url} {...sharedProps}>{title}</a>;
    }
}
