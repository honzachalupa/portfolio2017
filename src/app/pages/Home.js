import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import Button from './../components/Button';
import ButtonsGroup from './../components/ButtonsGroup';
import ContentLayout from './../layouts/Content';
import ProjectTeaser from './../components/content-blocks/ProjectTeaser';
import Text from './../components/content-blocks/Text';
import ProjectsGrid from './../components/content-blocks/ProjectsGrid';
import ProjectsGridItem from './../components/content-blocks/ProjectsGrid/Item';

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
                    <InvisibleHeadline headline={headline} />

                    <Text headline="Introduction">
                        Hello and welcome,<br />
                        I'm 24 years old Front-End developer based in Prague, Czech Republic. And this is my portoflio...<br /><br />
                        Curently I'm seeking for a new experiences - a full-time position or contract in the field of Web or App Development or other position in connection with computers or electronics. I prefer some creative usage of my skills.

                        <ButtonsGroup alignment="left">
                            <Button title="Lets checkout my projects" url="/projects" />
                            <Button title="Get more information about me" url="/about" />
                        </ButtonsGroup>
                    </Text>

                    <ProjectTeaser {...latestProject} />

                    <ProjectsGrid headline="My Projects" extraClasses="latest-projects">
                        {
                            latestProjectsMore.map((project) => {
                                return (
                                    <ProjectsGridItem key={project.id} {...project} />
                                );
                            })
                        }

                        <ButtonsGroup alignment="center">
                            <Button title="Check all of my projects" url="/projects" />
                        </ButtonsGroup>
                    </ProjectsGrid>
                </ContentLayout>
            </div>
        );
    }
}
