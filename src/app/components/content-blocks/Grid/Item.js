import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    render() {
        const componentName = `ContentBlock_Grid${this.constructor.name}`;

        const {
            id,
            name,
            description,
            url,
            previewImage,
            previewImageMobile,
            gallery,
            livePreviewAllowed,
            developmentStage,
            type,
            company,
            addedDate,
            title,
            aspectRatio,
            aspectRatioMobile
        } = this.props;

        const companyBlock = company ?
            <img src={company.logo} className="company-logo" alt={`${company.name} logo`} /> :
            null;

        return (
            <li data-component={componentName}>
                <Link to={`/projects/${id}`} title={title} data-aspect-ratio={aspectRatio} data-aspect-ratio-mobile={aspectRatioMobile}>
                    <div className="image" style={{ backgroundImage: `url('${previewImage}')` }} />
                    {companyBlock}
                    <h3 className="headline">{name}</h3>
                </Link>
            </li>
        );
    }
}