import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;

        const {
            collapsed,
            config
        } = this.props;

        const {
            contactInfo
        } = config;

        return (
            <footer className={collapsed ? 'collapsed' : null} data-component={componentName}>
                <a href="/">{contactInfo.credits}</a>
            </footer>
        );
    }
}
