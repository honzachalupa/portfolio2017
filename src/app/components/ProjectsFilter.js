import React, { Component, PropTypes } from 'react';
import { capitalize } from './../helpers';
import Button from './Button';
import ButtonsGroup from './ButtonsGroup';

export default class ProjectsFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            platforms: this.getProjectsTypes(),
            tags: this.getProjectsTags()
        };
    }

    getProjectsTypes() {
        const { projects } = this.props;
        const platformIDs = [];

        projects.forEach((project) => {
            const { platform } = project;

            if (platformIDs.indexOf(platform) === -1) {
                platformIDs.push(platform);
            }
        });

        const platforms = [{
            id: 'all',
            label: 'All'
        }];

        platformIDs.forEach((id) => {
            platforms.push({
                id,
                label: capitalize(id)
            });
        });

        return platforms;
    }

    getProjectsTags() {
        const { projects } = this.props;
        const tags = [];

        projects.forEach((project) => {
            const { tags: projectsTags } = project;

            if (projectsTags) {
                projectsTags.forEach((tag) => {
                    if (tags.indexOf(tag) === -1) {
                        tags.push(tag);
                    }
                });
            }
        });

        return tags;
    }

    render() {
        const componentName = this.constructor.name;
        const { changeFilter, alignment } = this.props;
        const { platforms, tags } = this.state;

        return (
            <div data-component={componentName}>
                <ButtonsGroup headline="Types" alignment={alignment || 'left'}>
                    {
                        platforms.map((projectType) => {
                            return (
                                <Button key={projectType.id} title={projectType.label} onClick={() => changeFilter(projectType.id, 'type')} />
                            );
                        })
                    }
                </ButtonsGroup>
                <ButtonsGroup headline="Tags" alignment={alignment || 'left'} extraClasses="tags">
                    {
                        tags.map((tag) => {
                            return (
                                <Button key={tag} title={tag} onClick={() => changeFilter(tag, 'tag')} />
                            );
                        })
                    }
                </ButtonsGroup>
            </div>
        );
    }
}
