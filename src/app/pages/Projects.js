import React, { Component } from 'react';
import factory from './../factory';
import aspectRatioPreserver from './../modules/aspect-ratio-preserver';
import { setPageTitle } from './../helpers';
import ContentLayout from './../layouts/Main';
import InvisibleHeadline from './../components/InvisibleHeadline';
import Text from './../components/content-blocks/Text';
import Blank from './../components/content-blocks/Blank';
import ProjectsGrid from './../components/content-blocks/ProjectsGrid';
import ProjectsGridItem from './../components/content-blocks/ProjectsGrid/Item';
import ProjectsFilter from './../components/ProjectsFilter';
import Button from './../components/Button';
import ButtonsGroup from './../components/ButtonsGroup';

export default class Projects extends Component {
    constructor(props) {
        super(props);

        const { setNavigationItem } = props.utilities;

        this.changeFilter = this.changeFilter.bind(this);

        this.state = {
            id: 'projects-page',
            headline: 'Projects',
            collapsedUI: false,
            hasPanel: false,
            filter: {
                type: 'all',
                tag: null
            }
        };

        setPageTitle(this.state.headline);
        setNavigationItem(this.state.id);
    }

    componentDidUpdate() {
        factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));
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

    filterByType(project, type) {
        return (project.type === type) ? project : null;
    }

    filterByTag(project, tag) {
        const { tags } = project;

        if (tags) {
            if (tags.indexOf(tag) > -1) {
                return project;
            }
        }

        return null;
    }

    render() {
        const { id, headline, collapsedUI, hasPanel, filter } = this.state;
        const { config, utilities, projects } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} collapsedUI={collapsedUI} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={headline} />

                    <Text headline="My projects">
                        <p>Together with Actum company we've done many significant projects like Innogy's Product Finder and Intranet projects. When I've worked on Product Finder project I worked for a six months on-site in Essen, Germany and it was a great experience.</p>
                        <p>I've also worked on many other projects with Actum like Makro (Metro), Raiffeisenbank, Komerční bank but these were just a short-time cooperations.</p>
                        <p>Please visit also my GitHub page (I'm gradually adding most of my personal projects there).</p>

                        <Button title="GitHub" url="https://github.com/honzachalupa" />
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

    const projectsFiltered = tag ? projects.filter((project) => this.filterByTag(project, tag)) : projects;

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
        const projectsFiltered = projects.filter((project) => this.filterByType(project, 'web'));

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

    if (filter.type === 'all' || filter.type === 'native') {
        const projectsFiltered = projects.filter((project) => this.filterByType(project, 'native'));

        if (projectsFiltered.length) {
            return (
                <ProjectsGrid headline="Native Apps" description="Since I was a hard-core Windows user, most of my apps were made for Windows Phone OS and they are not maintained anymore. Sorry, iPhone users (I'm on your side now).">
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
