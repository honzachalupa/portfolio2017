import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import HomePage from './../pages/Home';
import ProjectPage from './../pages/Project';
import NotFoundPage from './../pages/NotFound';

import factory from './../factory';
import aspectRatioPreserver from './../modules/aspect-ratio-preserver';

export default class Root extends Component {
    constructor() {
        super();

        this.setCurrentProject = this.setCurrentProject.bind(this);
        this.navigationToggler = this.navigationToggler.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

        axios.get('http://localhost:5003/data')
            .then((response) => {
                const { projects, config } = response.data;

                projects.sort((a, b) => {
                    return new Date(b.addedDate) - new Date(a.addedDate);
                });

                const projectTypes = [];

                projects.forEach((project) => {
                    if (projectTypes.indexOf(project.type) === -1) {
                        projectTypes.push(project.type);
                    }
                });

                config.navigationOpened = false;
                config.navigationToggler = this.navigationToggler;
                config.projectTypes = projectTypes;
                config.latestProject = projects[0];

                this.setState({
                    projects,
                    config,
                    currentProject: null
                });

                this.updateDimensions();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('xxxx');

        setTimeout(() => {
            factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));
        }, 500);

        return true;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    setCurrentProject(project) {
        this.setState({
            currentProject: project
        });
    }

    navigationToggler() {
        this.setState({
            config: update(this.state.config, { $merge: { navigationOpened: !this.state.config.navigationOpened } })
        });
    }

    updateDimensions() {
        const dimensions = {
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };

        this.setState({
            config: update(this.state.config, { $merge: dimensions })
        });
    }

    render() {
        if (this.state && this.state.projects && this.state.config) {
            const { projects, config } = this.state;

            return (
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <HomePage config={config} projects={projects} setCurrentProject={this.setCurrentProject} />
                            )}
                        />
                        <Route
                            exact
                            path="/projects"
                            render={(props) => (
                                <NotFoundPage config={config} />
                            )}
                        />
                        <Route
                            exact
                            path="/about-me"
                            render={(props) => (
                                <NotFoundPage config={config} />
                            )}
                        />
                        <Route
                            path="/projects/:id"
                            render={(props) => (
                                <ProjectPage config={config} projects={projects} params={props.match.params} />
                            )}
                        />
                        <Route
                            render={(props) => (
                                <NotFoundPage config={config} />
                            )}
                        />
                    </Switch>
                </Router>
            );
        }
        return null;
    }
}
