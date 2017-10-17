import React, { Component, PropTypes } from 'react';
import { setPageTitle, getDevelopmentStageLabel } from './../helpers';
import Headline from './../components/Headline';
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
            const projectId = params.id;
            let currentProject;

            this.props.projects.forEach((project) => {
                if (project.id.toString() === projectId) {
                    currentProject = project;
                }
            });

            this.state = {
                id: 'project-page',
                headline: currentProject.name,
                hasPanel: false,
                project: currentProject
            };

            setPageTitle(this.state.headline);
            setNavigationItem('projects-page');
        } catch (error) {
            document.location = '/page-not-found';
        }
    }

    render() {
        const { id, headline, hasPanel, project } = this.state;
        const { config, utilities } = this.props;

        const developmentStageLabel = getDevelopmentStageLabel(project.developmentStage, project.platform);

        const developmentStageBlock = project.developmentStage !== 'released' ?
            <p className={`development-stage ${developmentStageLabel.color}`}>{developmentStageLabel.value}</p> :
            null;

        const galleryBlock = (project.gallery && project.gallery.length) ?
            <ImagesGrid headline="Gallery" images={project.gallery} /> :
            null;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <Text headline={project.name}>
                        {developmentStageBlock}
                        <p>{project.description}</p>
                    </Text>

                    {galleryBlock}
                </ContentLayout>
            </div>
        );
    }
}
