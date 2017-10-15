import React, { Component, PropTypes } from 'react';

export default class NavigationButton extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { config, utilities } = this.props;
        const { navigationOpened } = config;
        const { navigationToggler } = utilities;

        return (
            <button className={`${navigationOpened ? 'opened' : ''}`} onClick={() => navigationToggler()} data-component={componentName} />
        );
    }
}
