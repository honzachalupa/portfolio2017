import React, { Component, PropTypes } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import NavigationTrigger from './../components/NavigationTrigger';

export default class Content extends Component {
    render() {
        const componentName = `Layout_${this.constructor.name}`;
        const { config, hasPanel } = this.props;
        const { navigationOpened } = config;

        return (
            <div data-component={componentName}>
                <div className={`navigation-overlay ${navigationOpened ? 'visible' : ''}`} />
                <NavigationTrigger config={config} />

                <Header config={config} />

                <section className={`page-content ${hasPanel ? 'has-panel' : ''}`}>
                    {this.props.children}
                </section>

                <Footer />
            </div>
        );
    }
}
