import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: `url('http://www.honzachalupa.cz/imgs/bg-${getRandomRange(1, 10)}.jpg')`,
            tags: this.props.config.tags.join(' ~ ')
        };
    }

    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { config } = this.props;
        const { collapsed } = config;

        if (!collapsed) {
            return (
                <header style={{ backgroundImage: this.state.imageUrl }} data-component={componentName}>
                    <div className="content" style={{ width: `${document.querySelector('main').offsetWidth}px` }}>
                        <Navigation config={config} />

                        <h1 className="headline">
                            <Link to="/">
                                <span>&lt;</span>HonzaChalupa<span>/&gt;</span>
                            </Link>
                        </h1>
                        <h3 className="tags">{this.state.tags}</h3>
                    </div>
                </header>
            );
        }

        return (
            <header className="collapsed" data-component={componentName}>
                <h1 className="headline"><span>&lt;</span>HonzaChalupa<span>/&gt;</span></h1>
            </header>
        );
    }
}
