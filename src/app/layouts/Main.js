import React, { Component } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import NavigationButton from './../components/NavigationButton';

export default class Content extends Component {
    render() {
        const { config, utilities, collapsedUI, hasPanel } = this.props;
        const { navigationOpened } = config;
        const { navigationToggler } = utilities;

        return (
            <div data-component="Layout_Content">
                <button className={`navigation-overlay ${navigationOpened ? 'visible' : ''}`} onClick={() => navigationToggler(true)} />
                <NavigationButton config={config} utilities={utilities} />

                <Header config={config} utilities={utilities} collapsed={collapsedUI} />

                <section className={`page-content ${hasPanel ? 'has-panel' : ''}`}>
                    {this.props.children}
                </section>

                <Footer config={config} collapsed={collapsedUI} />
            </div>
        );
    }
}
