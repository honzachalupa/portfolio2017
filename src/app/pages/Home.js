import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import Headline from './../components/Headline';
import Button from './../components/Button';
import ButtonsGroup from './../components/ButtonsGroup';
import ContentLayout from './../layouts/Content';
import ProjectTeaser from './../components/content-blocks/ProjectTeaser';
import Text from './../components/content-blocks/Text';
import Grid from './../components/content-blocks/Grid';
import GridItem from './../components/content-blocks/Grid/Item';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const { config, utilities, projects } = props;
        const { setNavigationItem } = utilities;

        this.state = {
            id: 'home-page',
            headline: 'Introduction',
            hasPanel: false,
            latestProject: projects[0],
            latestProjectsMore: [
                projects[0], // To-do: Remove this line
                projects[1],
                projects[2],
                projects[3],
                projects[4],
                projects[5],
                projects[6]
            ]
        };

        setPageTitle();
        setNavigationItem(this.state.id);
    }

    render() {
        const { id, headline, latestProject, latestProjectsMore, hasPanel } = this.state;
        const { config, utilities } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
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

                    <Grid headline="My Projects" extraClasses="latest-projects">
                        {
                            latestProjectsMore.map((project) => {
                                const title = `Show details for ${project.name} project`;

                                return (
                                    <GridItem key={project.id} {...project} title={title} />
                                );
                            })
                        }

                        <ButtonsGroup alignment="center">
                            <Button title="Check all of my projects" url="/projects" />
                        </ButtonsGroup>
                    </Grid>
                </ContentLayout>
            </div>
        );
    }
}
