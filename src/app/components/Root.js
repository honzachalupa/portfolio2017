import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import log from './../modules/logger';
import { setPageTitle } from './../helpers';
import HomePage from './../pages/Home';
import ProjectsPage from './../pages/Projects';
import AboutMePage from './../pages/AboutMe';
import ProjectDetailPage from './../pages/ProjectDetail';
import ErrorPage from './../pages/Error';
import factory from './../factory';
import aspectRatioPreserver from './../modules/aspect-ratio-preserver';

export default class Root extends Component {
    constructor(props) {
        super(props);

        const { apiData } = props;
        const { config } = apiData;
        let { projects } = apiData;

        this.navigationToggler = this.navigationToggler.bind(this);
        this.setNavigationItem = this.setNavigationItem.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

        projects = this.filterProjects(projects);
        projects = this.sortProjects(projects);

        config.navigationOpened = false;
        config.projectTypes = this.getProjectTypes(projects);

        this.state = {
            projects,
            config,
            utilities: {
                navigationToggler: this.navigationToggler,
                setNavigationItem: this.setNavigationItem
            }
        };

        this.updateDimensions();

        // To-do: Replace this workaround with better and cleaner solution (triggered with onLoad)
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

    setNavigationItem(clickedId) {
        const { navigationItems } = this.state.config;

        const navigationItemsActive = navigationItems.forEach((item) => {
            item.active = (item.id === clickedId);
        });

        this.setState({
            navigationItems: update(navigationItems, {
                $set: navigationItemsActive
            })
        });

        window.scrollTo(0, 0);
    }

    getProjectTypes(projects) {
        const projectTypes = [];

        projects.forEach((project) => {
            if (projectTypes.indexOf(project.type) === -1) {
                projectTypes.push(project.type);
            }
        });

        return projectTypes;
    }

    filterProjects(projects) {
        const filtered = [];

        projects.forEach((project) => {
            if (project.hidden === undefined || project.hidden === false) {
                filtered.push(project);
            }
        });

        return filtered;
    }

    sortProjects(projects) {
        return projects.sort((a, b) => {
            return new Date(b.addedDate) - new Date(a.addedDate);
        });
    }

    navigationToggler(forceClose) {
        const { navigationOpened, window, screenBreakpoint } = this.state.config;

        if (window.width < screenBreakpoint) {
            this.setState({
                config: update(this.state.config, {
                    $merge: {
                        navigationOpened: (forceClose === 'undefined') ? false : !navigationOpened
                    }
                })
            });
        }
    }

    updateDimensions() {
        const { screenBreakpoint } = this.state.config;

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

        if (dimensions.window.width >= screenBreakpoint) {
            this.setState({
                config: update(this.state.config, {
                    $merge: {
                        navigationOpened: false
                    }
                })
            });
        }
    }

    render() {
        if (this.state && this.state.config && this.state.utilities && this.state.config) {
            const { config, utilities, projects } = this.state;

            return (
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <HomePage config={config} utilities={utilities} projects={projects} />
                            )}
                        />
                        <Route
                            exact
                            path="/projects"
                            render={(props) => (
                                <ProjectsPage config={config} utilities={utilities} projects={projects} />
                            )}
                        />
                        <Route
                            exact
                            path="/about-me"
                            render={(props) => (
                                <AboutMePage config={config} utilities={utilities} />
                            )}
                        />
                        <Route
                            path="/projects/:id"
                            render={(props) => (
                                <ProjectDetailPage config={config} utilities={utilities} projects={projects} params={props.match.params} />
                            )}
                        />
                        {/* To-do
                        <Route
                            render={(props) => (
                                <ErrorPage config={config} utilities={utilities} />
                            )}
                        />
                        */}
                    </Switch>
                </Router>
            );
        }

        return null;
    }
}
