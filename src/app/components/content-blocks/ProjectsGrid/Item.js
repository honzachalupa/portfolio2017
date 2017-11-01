import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import logger from './../../../modules/logger';

export default class Item extends Component {
    render() {
        const componentName = `ContentBlock_ProjectsGrid${this.constructor.name}`;

        const {
            id,
            name,
            description,
            url,
            previewImage,
            developmentStage,
            type,
            company
        } = this.props;

        const descriptionCleaned = description.replace(/<.+?>/g, '');

        const companyBlock = company ?
            <img src={company.logo} className="company-logo" alt={`${company.name} logo`} /> :
            null;

        return (
            <li data-component={componentName}>
                <Link to={`/projects/${id}`} title={`Show details for ${name} project`}>
                    <div className="image" style={{ backgroundImage: `url('${previewImage}')` }} data-aspect-ratio="3:2" data-aspect-ratio-mobile="16:10">
                        {companyBlock}
                    </div>
                    <h3 className="headline">{name}</h3>
                    <p className={`description ${descriptionCleaned.length > 160 ? 'fadeout' : ''}`}>{descriptionCleaned}</p>
                </Link>
            </li>
        );
    }
}
