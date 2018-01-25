import React, { Component } from 'react';
import { capitalize } from './../helpers';
import Button from './Button';
import ButtonsGroup from './ButtonsGroup';

export default class ProjectsFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: this.getProjectsTypes(),
            tags: this.getProjectsTags()
        };
    }

    getProjectsTypes() {
        const { projects } = this.props;
        const typesFounded = [];

        projects.forEach((project) => {
            const { type } = project;

            if (typesFounded.indexOf(type) === -1) {
                typesFounded.push(type);
            }
        });

        const types = [{
            id: 'all',
            label: 'All'
        }];

        typesFounded.forEach((id) => {
            types.push({
                id,
                label: capitalize(id)
            });
        });

        return types;
    }

    getProjectsTags() { // To-do: Refactorize...
        const { projects } = this.props;
        const tagsFounded = [];
        const tagsMetadata = [];

        projects.forEach((project) => {
            const { tags: projectsTags } = project;

            if (projectsTags) {
                projectsTags.forEach((tag) => {
                    tagsFounded.push(tag);
                });
            }
        });

        tagsFounded.forEach((tag) => {
            const count = tagsFounded.reduce((i, value) => {
                return i + (value === tag);
            }, 0);

            tagsMetadata.push({
                name: tag,
                count
            });
        });

        const tagsFiltered = tagsMetadata.filter((tag, i, self) => {
            return self.findIndex((t) => {
                return t.name === tag.name;
            }) === i;
        });

        tagsFiltered.sort((a, b) => {
            if (a.count < b.count) {
                return 1;
            } else if (a.count > b.count) {
                return -1;
            }

            return 0;
        });

        return tagsFiltered;
    }

    render() {
        const { changeFilter, alignment, hideTags, filter } = this.props;
        const { types, tags } = this.state;

        const TypesBlock = () => {
            return (
                <ButtonsGroup headline="Types" alignment={alignment || 'left'} extraClasses="types">
                    {
                        types.map((type) => {
                            return (
                                <Button key={type.id} title={type.label} onClick={() => changeFilter(type.id, 'type')} extraClasses={type.id === filter.type ? 'selected' : null} />
                            );
                        })
                    }
                </ButtonsGroup>
            );
        };

        const TagsBlock = () => {
            if (hideTags) {
                return null;
            }

            return (
                <ButtonsGroup headline="Tags" alignment={alignment || 'left'} extraClasses="tags">
                    {
                        tags.map((tag) => {
                            return (
                                <Button key={tag.name} title={`${tag.name} (${tag.count}x)`} onClick={() => changeFilter(tag.name, 'tag')} extraClasses={tag.name === filter.tag ? 'selected' : null} />
                            );
                        })
                    }
                </ButtonsGroup>
            );
        };

        return (
            <div data-component="ProjectsFilter">
                <TypesBlock />
                <TagsBlock />

                <Button title="Reset filter" onClick={() => changeFilter('all', 'type')} />
            </div>
        );
    }
}
