import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import Blank from './../components/content-blocks/Blank';
import ProjectsGrid from './../components/content-blocks/ProjectsGrid';
import ProjectsGridItem from './../components/content-blocks/ProjectsGrid/Item';
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
        const type = (filterBy === 'type') ? filter : 'all';
        const tag = (filterBy === 'type') ? null : filter;

        this.setState({
            filter: {
                type,
                tag
            }
        });
    }

    render() {
        const { id, headline, hasPanel, filter } = this.state;
        const { config, utilities, projects } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={headline} />

                    <Text headline="My projects">
                        Something...
                    </Text>

                    <Blank headline="Filter">
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
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
    const { tag } = filter;
    const projectsFiltered = tag ? projects.filter((project) => filterByTag(project, tag)) : projects;

    return (
        <div>
            <BlockWebApps projects={projectsFiltered} filter={filter} />
            <BlockNativeApps projects={projectsFiltered} filter={filter} />
        </div>
    );
};

const BlockWebApps = (props) => {
    const { projects, filter } = props;

    if (filter.type === 'all' || filter.type === 'web') {
        const projectsFiltered = projects.filter((project) => filterByType(project, 'web'));

        if (projectsFiltered.length) {
            return (
                <ProjectsGrid headline="Web Apps">
                    {
                        projectsFiltered.map((project) => {
                            return (
                                <ProjectsGridItem key={project.id} {...project} />
                            );
                        })
                    }
                </ProjectsGrid>
            );
        }
    }

    return null;
};

const BlockNativeApps = (props) => {
    const { projects, filter } = props;

    if (filter.type === 'all' || filter.type === 'mobile') {
        const projectsFiltered = projects.filter((project) => filterByType(project, 'mobile'));

        if (projectsFiltered.length) {
            return (
                <ProjectsGrid headline="Mobile Apps" description="Since I was a hard-core Windows user, most of my apps were made for Windows Phone OS and they are not maintained anymore. Sorry, iPhone users (I'm on your side now).">
                    {
                        projectsFiltered.map((project) => {
                            return (
                                <ProjectsGridItem key={project.id} {...project} />
                            );
                        })
                    }
                </ProjectsGrid>
            );
        }
    }

    return null;
};

function filterByType(project, type) {
    return (project.type === type) ? project : null;
}

function filterByTag(project, tag) {
    const { tags } = project;

    if (tags) {
        if (tags.indexOf(tag) > -1) {
            return project;
        }
    }

    return null;
}
