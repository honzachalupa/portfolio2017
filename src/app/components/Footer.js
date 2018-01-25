import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const { collapsed, config } = this.props;
        const { contactInfo } = config;

        return (
            <footer className={collapsed ? 'collapsed' : null} data-component="Page_Footer" role="contentinfo">
                <a href="/">{contactInfo.credits}</a>
            </footer>
        );
    }
}
