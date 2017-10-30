import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import logger from './../../../modules/logger';
import { getDevelopmentStageLabel } from './../../../helpers';

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

        const companyBlock = company ?
            <img src={company.logo} className="company-logo" alt={`${company.name} logo`} /> :
            null;

        const developmentStageLabel = getDevelopmentStageLabel(developmentStage, type);

        const developmentStageBlock = developmentStage !== 'released' ?
            <p className={`development-stage ${developmentStageLabel.color}`}>{developmentStageLabel.value}</p> :
            null;

        return (
            <li data-component={componentName}>
                <Link to={`/projects/${id}`} title={name}>
                    <div className="image" style={{ backgroundImage: `url('${previewImage}')` }} data-aspect-ratio="3:2" data-aspect-ratio-mobile="16:10">
                        {companyBlock}
                    </div>
                    <h3 className="headline">{name}</h3>
                    <p className={`description ${description.length > 160 ? 'fadeout' : ''}`}>{description}</p>
                    {developmentStageBlock}
                </Link>
            </li>
        );
    }
}
