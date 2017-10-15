import React, { Component, PropTypes } from 'react';
import { capitalize } from './../helpers';
import Button from './Button';
import ButtonsGroup from './ButtonsGroup';

export default class ProjectsFilter extends Component {
    constructor(props) {
        super(props);

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

        this.state = {
            platforms
        };
    }

    render() {
        const componentName = this.constructor.name;
        const { changeFilter, alignment } = this.props;
        const { platforms } = this.state;

        return (
            <div data-component={componentName}>
                <ButtonsGroup alignment={alignment || 'left'}>
                    {
                        platforms.map((projectType) => {
                            return (
                                <Button key={projectType.id} title={projectType.label} onClick={() => changeFilter(projectType.id)} />
                            );
                        })
                    }
                </ButtonsGroup>
            </div>
        );
    }
}
