import React, { Component, PropTypes } from 'react';
import Button from './../Button';

export default class ProjectTeaser extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
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
            tags
        } = this.props;

        const projectUrl = `project-detail.html?id=${id}`;

        const companyBlock = company ? (
            <a href={company.url} className="company" title={`${company.name}'s website`}>
                <p>{`Made with ${company.name} company`}</p>
                <img src={company.logo} className="logo" alt={`${company.name}'s logo`} />
            </a>
        ) : null;

        return (
            <article data-component={componentName}>
                <h2 className="headline">Latest Project</h2>
                <a className="image" href={`/projects/${id}`} style={{ backgroundImage: `url('${previewImage}')` }} title="Show project details" data-aspect-ratio="4:3" data-aspect-ratio-mobile="16:10">&nbsp;</a>
                <div className="text-section">
                    <h2 className="headline">{name}</h2>
                    <p className="content" dangerouslySetInnerHTML={{ __html: description }} />

                    <Button title="Tell me more about this project" url={`/projects/${id}`} extraClasses="show-more" />

                    {companyBlock}
                </div>
            </article>
        );
    }
}
