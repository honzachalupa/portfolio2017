import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import logger from './../modules/logger';
import Navigation from './Navigation';

export default class Button extends Component {
    render() {
        const componentName = this.constructor.name;
        const { title, url, onClick, extraClasses } = this.props;

        console.log(...this.props);

        if (url) {
            if (/^https?:\/\//.test(url) || /\.(a-Z)$/.test(url)) {
                return (
                    <a className={extraClasses} href={url} title={title} data-component={componentName}>{title}</a>
                );
            }

            return (
                <Link className={extraClasses} to={url} title={title} data-component={componentName}>{title}</Link>
            );
        } else if (onClick) {
            return (
                <button className={extraClasses} onClick={onClick} title={title} data-component={componentName}>{title}</button>
            );
        }

        logger('Some of Button\'s props is missing:', ...this.props);

        return null;
    }
}
