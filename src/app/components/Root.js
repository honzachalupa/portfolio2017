import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import HomePage from './../pages/Home';
import ProjectsPage from './../pages/Projects';
import AboutMePage from './../pages/AboutMe';
import ProjectDetailPage from './../pages/ProjectDetail';
import NotFoundPage from './../pages/NotFound';

import factory from './../factory';
import aspectRatioPreserver from './../modules/aspect-ratio-preserver';

export default class Root extends Component {
    constructor() {
        super();

        this.setCurrentProject = this.setCurrentProject.bind(this);
        this.navigationToggler = this.navigationToggler.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

        axios.get('http://153.100.115.119:5003/data')
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

        // To-do: Replace this workaround with better and cleaner solution
        setInterval(() => {
            factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));
        }, 100);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
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
        const { navigationOpened } = this.state.config;

        this.setState({
            config: update(this.state.config, {
                $merge: {
                    navigationOpened: !navigationOpened
                }
            })
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
            config: update(this.state.config, {
                $merge: dimensions
            })
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
                                <ProjectsPage config={config} projects={projects} />
                            )}
                        />
                        <Route
                            exact
                            path="/about-me"
                            render={(props) => (
                                <AboutMePage config={config} />
                            )}
                        />
                        <Route
                            path="/projects/:id"
                            render={(props) => (
                                <ProjectDetailPage config={config} projects={projects} params={props.match.params} />
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
