import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    createUrlComponent(value) {
        return value.replace(/\s/, '-').toLowerCase();
    }

    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { config, utilities } = this.props;
        const { navigationItems, navigationOpened } = config;
        const { navigationToggler } = utilities;

        return (
            <div className={`${(navigationOpened) ? 'opened' : ''}`} data-component={componentName}>
                {
                    navigationItems.map((item) => {
                        item.url = item.url || `/${this.createUrlComponent(item.label)}`;

                        return (
                            <li key={item.id} className="item">
                                <Link key={item.id} to={item.url} className={`${item.active ? 'active' : ''}`} onClick={() => navigationToggler(true)}>{item.label}</Link>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}
