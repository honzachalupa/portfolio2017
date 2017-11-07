import React, { Component, PropTypes } from 'react';
import { setPageTitle, getDevelopmentStageLabel } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import Blank from './../components/content-blocks/Blank';
import ImagesGrid from './../components/content-blocks/ImagesGrid';
import Button from './../components/Button';
import LivePreview from './../components/LivePreview';
import TechnologiesOverview from './../components/TechnologiesOverview';

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
                collapsedUI: true,
                project: currentProject
            };

            setPageTitle(currentProject.name);
            setNavigationItem('projects-page');
        } catch (error) {
            document.location = '/page-not-found';
        }
    }

    render() {
        const { id, hasPanel, collapsedUI, project } = this.state;
        const { config, utilities } = this.props;

        const developmentStageLabel = getDevelopmentStageLabel(project.developmentStage, project.platform);

        const developmentStageBlock = project.developmentStage !== 'released' ?
            <p className={`development-stage ${developmentStageLabel.color}`}>{developmentStageLabel.value}</p> :
            null;

        const buttonBlock = (project.url) ?
            <Button title="Visit website" url={project.url} /> :
            null;

        const livePreviewBlock = (project.livePreview && project.url) ?
            <LivePreview url={project.url} /> :
            null;

        const galleryBlock = (project.gallery && project.gallery.length) ?
            <ImagesGrid headline="Gallery" images={project.gallery} /> :
            null;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} collapsedUI={collapsedUI} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={project.name} />

                    <Text headline={project.name}>
                        {developmentStageBlock}
                        <p dangerouslySetInnerHTML={{ __html: project.description }} />
                        {buttonBlock}
                    </Text>

                    {livePreviewBlock}
                    {galleryBlock}

                    <Blank headline="Technologies I've worked with">
                        <TechnologiesOverview tags={project.tags} config={config} />
                    </Blank>
                </ContentLayout>
            </div>
        );
    }
}
