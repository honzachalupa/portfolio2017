import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import ContentLayout from './../layouts/Main';
import InvisibleHeadline from './../components/InvisibleHeadline';
import Button from './../components/Button';
import ButtonsGroup from './../components/ButtonsGroup';
import ProjectTeaser from './../components/content-blocks/ProjectTeaser';
import Text from './../components/content-blocks/Text';
import ProjectsGrid from './../components/content-blocks/ProjectsGrid';
import ProjectsGridItem from './../components/content-blocks/ProjectsGrid/Item';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const {
            config,
            utilities,
            projects
        } = props;

        const {
            setNavigationItem
        } = utilities;

        this.state = {
            id: 'home-page',
            headline: 'Introduction',
            hasPanel: false,
            collapsedUI: false,
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
        const {
            id,
            headline,
            latestProject,
            latestProjectsMore,
            collapsedUI,
            hasPanel
        } = this.state;

        const {
            config,
            utilities
        } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} collapsedUI={collapsedUI} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={headline} />

                    <Text headline="Introduction">
                        <p>Hello and welcome,<br />
                        I'm 24 years old Front-End Developer based in Prague, Czech Republic. And this is my portoflio...</p>
                        <p>Curently I'm seeking for a new experiences - a full-time position or contract in the field of Web or App Development or other position in connection with computers or electronics. I prefer some creative usage of my skills.</p>
                        <p style={{ color: 'red' }}>Please be known that this website is brand new and some of the features could behave wrong. Also the content is not completed yet. Please let me know in case of any troubles. Thank you for your understanding.</p>

                        <ButtonsGroup>
                            <Button title="Lets take a look at my projects" url="/projects" />
                            <Button title="Get more information about me" url="/about-me" />
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
