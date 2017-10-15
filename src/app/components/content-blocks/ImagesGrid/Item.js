import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class ImageItem extends Component {
    render() {
        const componentName = `ContentBlock_Grid${this.constructor.name}`;

        const { description, url } = this.props;

        return (
            <li data-component={componentName}>
                <Link to={url} title={description}>
                    <div className="image" style={{ backgroundImage: `url('${url}')` }} data-aspect-ratio="3:2" data-aspect-ratio-mobile="16:10" />
                    <p className="description">{description}</p>
                </Link>
            </li>
        );
    }
}
