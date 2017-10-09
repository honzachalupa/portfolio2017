import React, { Component, PropTypes } from 'react';

export default class NavigationTrigger extends Component {
    handleclick() {

    }

    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { config } = this.props;
        const { navigationOpened, navigationToggler } = config;

        return (
            <div onClick={() => navigationToggler()} data-component={componentName} />
        );
    }
}
