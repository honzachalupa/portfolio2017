import React, { Component, PropTypes } from 'react';
import { setPageTitle, getDevelopmentStageLabel } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import ImagesGrid from './../components/content-blocks/ImagesGrid';
import Button from './../components/Button';

export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);

        const { utilities, params } = props;
        const { setNavigationItem } = utilities;

        try {
            let currentProject;

            this.props.projects.forEach((project) => {
                if (project.id.toString() === params.id) {
                    currentProject = project;
                }
            });

            this.state = {
                id: 'project-page',
                hasPanel: false,
                project: currentProject
            };

            setPageTitle(currentProject.name);
            setNavigationItem('projects-page');
        } catch (error) {
            document.location = '/page-not-found';
        }
    }

    render() {
        const { id, hasPanel, project } = this.state;
        const { config, utilities } = this.props;

        const developmentStageLabel = getDevelopmentStageLabel(project.developmentStage, project.platform);

        const developmentStageBlock = project.developmentStage !== 'released' ?
            <p className={`development-stage ${developmentStageLabel.color}`}>{developmentStageLabel.value}</p> :
            null;

        const buttonBlock = (project.url) ?
            <Button title="Visit website" url={project.url} /> :
            null;

        const galleryBlock = (project.gallery && project.gallery.length) ?
            <ImagesGrid headline="Gallery" images={project.gallery} /> :
            null;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={project.name} />

                    <Text headline={project.name}>
                        {developmentStageBlock}
                        <p dangerouslySetInnerHTML={{ __html: project.description }} />
                        {buttonBlock}
                    </Text>

                    {galleryBlock}
                </ContentLayout>
            </div>
        );
    }
}
