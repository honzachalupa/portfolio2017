import React, { Component, PropTypes } from 'react';
import factory from './../factory';
import aspectRatioPreserver from './../modules/aspect-ratio-preserver';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import update from 'immutability-helper';
import log from './../modules/logger';
import { setPageTitle } from './../helpers';
import HomePage from './../pages/Home';
import ProjectsPage from './../pages/Projects';
import AboutMePage from './../pages/AboutMe';
import ProjectDetailPage from './../pages/ProjectDetail';
import ImageViewerPage from './../pages/ImageViewer';
import ErrorPage from './../pages/Error';
import GoogleAnalytics from 'react-ga';

export default class Root extends Component {
    constructor(props) {
        super(props);

        this.navigationToggler = this.navigationToggler.bind(this);
        this.setNavigationItem = this.setNavigationItem.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        const { config } = props.apiData;
        let { projects } = props.apiData;

        projects = this.filterProjects(projects);
        projects = this.sortProjects(projects);

        config.navigationOpened = false;
        config.scrolledDistance = 0;
        config.projectTypes = this.getProjectTypes(projects);

        this.state = {
            projects,
            config,
            utilities: {
                navigationToggler: this.navigationToggler,
                setNavigationItem: this.setNavigationItem
            }
        };
    }

    componentDidMount() {
        GoogleAnalytics.initialize('UA-47064928-3');

        this.updateDimensions();
        this.getScrolledDistance();

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
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
        const types = [];

        projects.forEach((project) => {
            if (types.indexOf(project.type) === -1) {
                types.push(project.type);
            }
        });

        return types;
    }

    getScrolledDistance() {
        this.setState({
            config: update(this.state.config, {
                $merge: {
                    scrolledDistance: window.pageYOffset
                }
            })
        });
    }

    handleScroll() {
        this.getScrolledDistance();
    }

    updateDimensions() {
        const { screenBreakpoint } = this.state.config;

        const dimensions = {
            windowDimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };

        this.setState({
            config: update(this.state.config, {
                $merge: dimensions
            })
        });

        if (dimensions.windowDimensions.width >= screenBreakpoint) {
            this.setState({
                config: update(this.state.config, {
                    $merge: {
                        navigationOpened: false
                    }
                })
            });
        }
    }

    handleResize() {
        this.updateDimensions();
    }

    navigationToggler(forceClose) {
        const {
            navigationOpened,
            windowDimensions,
            screenBreakpoint
        } = this.state.config;

        if (windowDimensions && windowDimensions.width < screenBreakpoint) {
            this.setState({
                config: update(this.state.config, {
                    $merge: {
                        navigationOpened: (forceClose === 'undefined') ? false : !navigationOpened
                    }
                })
            });
        }
    }

    trackGoogleAnalytics() {
        GoogleAnalytics.pageview(window.location.hash);
    }

    sortProjects(projects) {
        return projects.sort((a, b) => {
            return new Date(b.addedDate) - new Date(a.addedDate);
        });
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

    render() {
        if (this.state && this.state.config && this.state.utilities) {
            const {
                config,
                utilities,
                projects
            } = this.state;

            return (
                <Router onUpdate={this.trackGoogleAnalytics}>
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
                            exact
                            path="/image/:id"
                            render={(props) => (
                                <ImageViewerPage config={config} utilities={utilities} params={props.match.params} />
                            )}
                        />
                        <Route
                            path="/projects/:id"
                            render={(props) => (
                                <ProjectDetailPage config={config} utilities={utilities} projects={projects} params={props.match.params} />
                            )}
                        />
                    </Switch>
                </Router>
            );
        }

        return (
            <div>
                Loading...
            </div>
        );
    }
}
