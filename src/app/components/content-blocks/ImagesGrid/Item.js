import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class ImageItem extends Component {
    render() {
        const componentName = `ContentBlock_Grid${this.constructor.name}`;

        const { description, url, aspectRatio } = this.props;
        const imageId = /[a-z0-9.-]*$/.exec(url);

        const aspectRatioDesktop = aspectRatio === 'portrait' ? '10:16' : '3:2';
        const aspectRatioMobile = aspectRatio === 'portrait' ? '10:16' : '16:10';

        return (
            <li data-component={componentName}>
                <Link to={`../image/${imageId}`} title={description}>
                    <div className="image" style={{ backgroundImage: `url('${url}')` }} data-aspect-ratio={aspectRatioDesktop} data-aspect-ratio-mobile={aspectRatioMobile} />
                    <p className="description">{description}</p>
                </Link>
            </li>
        );
    }
}
