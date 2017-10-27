import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

        const { tags } = this.props.config;

        this.state = {
            imageUrl: `url('http://www.honzachalupa.cz/imgs/bg-${getRandomRange(1, 10)}.jpg')`,
            tags: tags.join(' ~ ')
        };
    }

    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { imageUrl } = this.state;
        const { config, utilities } = this.props;
        const { title, tags, collapsed } = config;

        if (!collapsed) {
            return (
                <header style={{ backgroundImage: imageUrl }} data-component={componentName}>
                    <div className="content" style={{ width: `${document.querySelector('main').offsetWidth}px` }}>
                        <Navigation config={config} utilities={utilities} />

                        <h1 className="headline">
                            <Link to="/">
                                {title}
                            </Link>
                        </h1>
                        <h3 className="tags">{tags}</h3>
                    </div>
                </header>
            );
        }

        return (
            <header className="collapsed" data-component={componentName}>
                <h1 className="headline"><span>&lt;</span>{title}<span>/&gt;</span></h1>
            </header>
        );
    }
}
