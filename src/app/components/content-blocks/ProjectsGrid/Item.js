import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import logger from './../../../modules/logger';
import getClassList from './../../../modules/class-list';

export default class Item extends Component {
    render() {
        const {
            id,
            name,
            description,
            previewImage,
            company
        } = this.props;

        const descriptionCleaned = description.replace(/<.+?>/g, '');

        const image = (typeof previewImage === 'string') ?
            { url: previewImage, description: null, aspectRatio: 'landscape' } :
            previewImage;

        const companyBlock = company ?
            <img src={company.logo} className="company-logo" alt={`${company.name} logo`} /> :
            null;

        return (
            <li data-component="ContentBlock_ProjectsGridItem">
                <Link to={`/projects/${id}`} title={`Show details for ${name} project`}>
                    <div className={getClassList('image', image.aspectRatio)} style={{ backgroundImage: `url('${image.url}')` }} data-aspect-ratio="3:2" data-aspect-ratio-mobile="16:10">
                        {companyBlock}
                    </div>
                    <h3 className="headline">{name}</h3>
                    <p className={getClassList('description', (descriptionCleaned.length > 160) ? 'fadeout' : null)}>{descriptionCleaned}</p>
                </Link>
            </li>
        );
    }
}
