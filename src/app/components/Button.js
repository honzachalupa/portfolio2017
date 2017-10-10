import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Button extends Component {
    render() {
        const componentName = this.constructor.name;
        const { title, url, onClick, extraClasses } = this.props;

        if (url) {
            return (
                <Link className={extraClasses} to={url} title={title} data-component={componentName}>{title}</Link>
            );
        } else if (onClick) {
            return (
                <a className={extraClasses} onClick={onClick} title={title} data-component={componentName}>{title}</a>
            );
        }

        return null;
    }
}
