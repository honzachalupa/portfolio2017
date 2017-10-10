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

        this.changeFilter = this.changeFilter.bind(this);

        this.state = {
            id: 'projects-page',
            headline: 'Projects',
            hasPanel: false,
            filter: 'all'
        };

        setPageTitle(this.state.headline);
    }

    changeFilter(filter) {
        this.setState({
            filter
        });
    }

    render() {
        const { id, headline, hasPanel, filter } = this.state;
        const { projects, config } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <Text headline="My projects">
                        Something...
                    </Text>

                    <Blank>
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
                    </Blank>

                    <Grids projects={projects} filter={filter} />

                    <Blank>
                        <ProjectsFilter projects={projects} filter={filter} changeFilter={this.changeFilter} />
                    </Blank>
                </ContentLayout>
            </div>
        );
    }
}

const Grids = (props) => {
    const { projects, filter } = props;

    console.log(filter);

    const projectsSorted = {
        web: projects.filter((project) => {
            return project.type === 'web-app';
        }),
        native: projects.filter((project) => {
            return project.type === 'native-app';
        })
    };

    if (filter === 'web-app') {
        return <BlockWebApps projects={projectsSorted.web} />;
    } else if (filter === 'native-app') {
        return <BlockNativeApps projects={projectsSorted.native} />;
    }

    return (
        <div>
            <BlockWebApps projects={projectsSorted.web} />
            <BlockNativeApps projects={projectsSorted.native} />
        </div>
    );
};

const BlockWebApps = (props) => {
    const { projects } = props;

    return (
        <Grid headline="Web Apps" isCentered>
            {
                projects.map((project) => {
                    const title = `Show details for ${project.name} project`;

                    return (
                        <GridItem key={project.id} {...project} title={title} aspectRatio="4:3" aspectRatioMobile="16:9" />
                    );
                })
            }
        </Grid>
    );
};

const BlockNativeApps = (props) => {
    const { projects } = props;

    return (
        <Grid headline="Native Apps" isCentered>
            {
                projects.map((project) => {
                    const title = `Show details for ${project.name} project`;

                    return (
                        <GridItem key={project.id} {...project} title={title} aspectRatio="4:3" aspectRatioMobile="16:9" />
                    );
                })
            }
        </Grid>
    );
};
