import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    createUrlComponent(value) {
        return value.replace(/\s/, '-').toLowerCase();
    }

    render() {
        const {
            config,
            utilities
        } = this.props;

        const {
            navigationItems,
            navigationOpened
        } = config;

        const {
            navigationToggler
        } = utilities;

        return (
            <div className={`${(navigationOpened) ? 'opened' : ''}`} data-component="Page_Navigation" role="navigation">
                {
                    navigationItems.map((item) => {
                        const url = item.url || `/${this.createUrlComponent(item.label)}`;

                        if (/^http/.test(url)) {
                            return (
                                <li key={item.id} className="item">
                                    <a key={item.id} href={url}>{item.label}</a>
                                </li>
                            );
                        }

                        return (
                            <li key={item.id} className="item">
                                <Link key={item.id} to={url} className={`${item.active ? 'active' : ''}`} onClick={() => navigationToggler(true)}>{item.label}</Link>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}
