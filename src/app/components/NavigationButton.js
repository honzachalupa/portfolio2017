import React, { Component, PropTypes } from 'react';

export default class NavigationButton extends Component {
    render() {
        const {
            config,
            utilities
        } = this.props;
        const { navigationOpened } = config;
        const { navigationToggler } = utilities;

        return (
            <button className={`${navigationOpened ? 'opened' : null}`} onClick={() => navigationToggler()} data-component="Page_NavigationButton" />
        );
    }
}
