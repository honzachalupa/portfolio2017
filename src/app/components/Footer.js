import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { collapsed } = this.props;

        if (!collapsed) {
            return (
                <footer data-component={componentName}>
                    &copy; Jan Chalupa 2017
                </footer>
            );
        }

        return (
            <footer className="collapsed" data-component={componentName}>
                &copy; Jan Chalupa 2017
            </footer>
        );
    }
}
