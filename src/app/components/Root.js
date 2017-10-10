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

        this.navigationToggler = this.navigationToggler.bind(this);
        this.setNavigationItem = this.setNavigationItem.bind(this);
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
                config.projectTypes = projectTypes;

                this.setState({
                    projects,
                    config,
                    utilities: {
                        navigationToggler: this.navigationToggler,
                        setNavigationItem: this.setNavigationItem,
                    }
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

    setNavigationItem(clickedId) {
        let { navigationItems } = this.state.config;

        navigationItems = navigationItems.forEach((item) => {
            item.active = (item.id === clickedId);
        });

        this.setState({
            navigationItems: update(this.state.config.navigationItems, {
                $set: navigationItems
            })
        });

        window.scrollTo(0, 0);
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
        if (this.state && this.state.projects && this.state.config) {
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
                        <Route
                            render={(props) => (
                                <NotFoundPage config={config} utilities={utilities} />
                            )}
                        />
                    </Switch>
                </Router>
            );
        }

        return null;
    }
}
