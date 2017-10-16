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
            title
        } = this.props;

        const companyBlock = company ?
            <img src={company.logo} className="company-logo" alt={`${company.name} logo`} /> :
            null;

        return (
            <li data-component={componentName}>
                <Link to={`/projects/${id}`} title={title}>
                    <div className="image" style={{ backgroundImage: `url('${previewImage}')` }} data-aspect-ratio="3:2" data-aspect-ratio-mobile="16:10">
                        {companyBlock}
                    </div>
                    <h3 className="headline">{name}</h3>
                    <p className={`description ${description.length > 160 ? 'fadeout' : ''}`}>{description}</p>
                </Link>
            </li>
        );
    }
}
