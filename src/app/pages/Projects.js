import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import Blank from './../components/content-blocks/Blank';
import Grid from './../components/content-blocks/Grid';
import GridItem from './../components/content-blocks/Grid/Item';
import ProjectsFilter from './../components/ProjectsFilter';

export default class Projects extends Component {
    constructor(props) {
        super(props);

        const { setNavigationItem } = props.utilities;

        this.changeFilter = this.changeFilter.bind(this);

        this.state = {
            id: 'projects-page',
            headline: 'Projects',
            hasPanel: false,
            filter: {
                type: 'all',
                tag: null
            }
        };

        setPageTitle(this.state.headline);
        setNavigationItem(this.state.id);
    }

    changeFilter(filter, filterBy) {
        if (filterBy === 'type') {
            this.setState({
                filter: {
                    type: filter,
                    tag: null
                }
            });
        } else if (filterBy === 'tag') {
            this.setState({
                filter: {
                    type: 'all',
                    tag: filter
                }
            });
        }
    }

    render() {
        const { id, headline, hasPanel, filter } = this.state;
        const { config, utilities, projects } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <Text headline="My projects">
                        Something...
                    </Text>

                    <Blank headline="Filter">
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} hideTags />
                    </Blank>

                    <FilteredProjects projects={projects} filter={filter} />

                    <Blank headline="Filter">
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
                    </Blank>
                </ContentLayout>
            </div>
        );
    }
}

const FilteredProjects = (props) => {
    const { projects, filter } = props;

    if (filter.tag) {
        const projectsWithTag = projects.filter((project) => {
            const { tags } = project;

            if (tags) {
                if (tags.indexOf(filter.tag) > -1) {
                    return project;
                }
            }

            return null;
        });

        return (
            <div>
                <BlockWebApps projects={projectsWithTag} filter={filter} />
                <BlockNativeApps projects={projectsWithTag} filter={filter} />
            </div>
        );
    }

    return (
        <div>
            <BlockWebApps projects={projects} filter={filter} />
            <BlockNativeApps projects={projects} filter={filter} />
        </div>
    );
};

const BlockWebApps = (props) => {
    const { projects, filter } = props;

    if (filter.type === 'all' || filter.type === 'web') {
        const projectsWeb = projects.filter((project) => {
            return project.type === 'web';
        });

        if (projectsWeb.length) {
            return (
                <Grid headline="Web Apps">
                    {
                        projectsWeb.map((project) => {
                            const title = `Show details for ${project.name} project`;

                            return (
                                <GridItem key={project.id} {...project} title={title} />
                            );
                        })
                    }
                </Grid>
            );
        }

        return null;
    }

    return null;
};

const BlockNativeApps = (props) => {
    const { projects, filter } = props;

    if (filter.type === 'all' || filter.type === 'mobile') {
        const projectsMobile = projects.filter((project) => {
            return project.type === 'mobile';
        });

        if (projectsMobile.length) {
            return (
                <Grid headline="Mobile Apps" description="Since I was a hard-core Windows user, most of my apps were made for Windows Phone OS and they are not maintained anymore. Sorry, iPhone users (I'm on your side now).">
                    {
                        projectsMobile.map((project) => {
                            const title = `Show details for ${project.name} project`;

                            return (
                                <GridItem key={project.id} {...project} title={title} aspectRatio="4:3" aspectRatioMobile="16:9" />
                            );
                        })
                    }
                </Grid>
            );
        }

        return null;
    }

    return null;
};
