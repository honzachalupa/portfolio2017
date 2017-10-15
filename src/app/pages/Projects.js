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
            filter: 'all'
        };

        setPageTitle(this.state.headline);
        setNavigationItem(this.state.id);
    }

    changeFilter(filter) {
        this.setState({
            filter
        });
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
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
                    </Blank>

                    <BlockWebApps projects={projects} filter={filter} />
                    <BlockNativeApps projects={projects} filter={filter} />

                    <Blank headline="Filter">
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
                    </Blank>
                </ContentLayout>
            </div>
        );
    }
}

const BlockWebApps = (props) => {
    const { projects, filter } = props;

    if (filter === 'web' || filter === 'all') {
        const projectsWeb = projects.filter((project) => {
            return project.platform === 'web';
        });

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
};

const BlockNativeApps = (props) => {
    const { projects, filter } = props;

    const projectsMobile = projects.filter((project) => {
        return project.platform === 'mobile';
    });

    if (filter === 'mobile' || filter === 'all') {
        return (
            <Grid headline="Mobile Apps">
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
};
