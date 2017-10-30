import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { collapsed, config } = this.props;

        if (!collapsed) {
            return (
                <footer data-component={componentName}>
                    {config.credits}
                </footer>
            );
        }

        return (
            <footer className="collapsed" data-component={componentName}>
                {config.credits}
            </footer>
        );
    }
}
