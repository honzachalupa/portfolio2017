import React, { Component, PropTypes } from 'react';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import ProjectTeaser from './../components/content-blocks/ProjectTeaser';
import Text from './../components/content-blocks/Text';
import Grid from './../components/content-blocks/Grid';
import GridItem from './../components/content-blocks/Grid/Item';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            id: 'home-page',
            headline: 'Introduction',
            hasPanel: false
        };
    }

    render() {
        const { id, headline, hasPanel } = this.state;
        const { projects, config } = this.props;
        const { latestProject } = config;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <ProjectTeaser {...latestProject} />

                    <Text headline="The Text">
                        Some really long text...
                        <br />
                        Another text on second line.
                        <br />
                        <br />
                        Good bye, world...
                    </Text>

                    <Grid headline="My Projects" isCentered>
                        {
                            projects.map((project) => {
                                return (
                                    <GridItem key={project.id} {...project} title={`Show details for ${project.name} project`} aspectRatio="4:3" aspectRatioMobile="16:9" />
                                );
                            })
                        }
                    </Grid>
                </ContentLayout>
            </div>
        );
    }
}
