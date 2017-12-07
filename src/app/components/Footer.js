import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        const {
            collapsed,
            config
        } = this.props;

        const { contactInfo } = config;

        return (
            <footer className={collapsed ? 'collapsed' : null} data-component="Page_Footer">
                <a href="/">{contactInfo.credits}</a>
            </footer>
        );
    }
}
