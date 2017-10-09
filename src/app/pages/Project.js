import React, { Component, PropTypes } from 'react';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';

export default class Project extends Component {
    constructor(props) {
        super(props);

        const projectId = this.props.params.id;
        let currentProject;

        this.props.projects.forEach((project) => {
            if (project.id.toString() === projectId) {
                currentProject = project;
            }
        });

        this.state = {
            id: 'project-page',
            headline: 'Project detail',
            hasPanel: false,
            project: currentProject
        };
    }

    render() {
        const { id, headline, hasPanel, project } = this.state;
        const { config } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <Text headline={project.name}>
                        {project.description}
                    </Text>
                </ContentLayout>
            </div>
        );
    }
}