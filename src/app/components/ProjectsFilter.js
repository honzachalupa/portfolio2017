import React, { Component, PropTypes } from 'react';
import { capitalize } from './../helpers';
import Button from './Button';
import ButtonsGroup from './ButtonsGroup';

export default class ProjectsFilter extends Component {
    constructor(props) {
        super(props);

        const { projects } = this.props;

        const typeIDs = [];
        projects.forEach((project) => {
            const { type } = project;

            if (typeIDs.indexOf(type) === -1) {
                typeIDs.push(type);
            }
        });

        const types = [{
            id: 'all',
            label: 'All'
        }];
        typeIDs.forEach((id) => {
            types.push({
                id,
                label: capitalize(id.replace(/-/, ' '))
            });
        });

        this.state = {
            types
        };
    }

    render() {
        const componentName = this.constructor.name;
        const { changeFilter } = this.props;
        const { types } = this.state;

        return (
            <div data-component={componentName}>
                <ButtonsGroup>
                    {
                        types.map((projectType) => {
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
