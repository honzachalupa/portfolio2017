import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import logger from './../modules/logger';
import getClassList from './../modules/class-list';
import Navigation from './Navigation';

export default class Button extends Component {
    render() {
        const componentName = 'Button';
        const {
            title,
            url,
            onClick,
            extraClasses
        } = this.props;

        if (url) {
            if (/^https?:\/\//.test(url) || /\.(a-Z)$/.test(url)) {
                return (
                    <a className={getClassList(extraClasses)} href={url} title={title} data-component={componentName}>{title}</a>
                );
            }

            return (
                <Link className={getClassList(extraClasses)} to={url} title={title} data-component={componentName}>{title}</Link>
            );
        } else if (onClick) {
            return (
                <button className={getClassList(extraClasses)} onClick={onClick} title={title} data-component={componentName}>{title}</button>
            );
        }

        logger('Some of Button\'s props is missing:', ...this.props);

        return null;
    }
}
