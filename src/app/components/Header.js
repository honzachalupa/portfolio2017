import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

        const { tags } = this.props.config;

        this.state = {
            imageUrl: `url('http://www.honzachalupa.cz/gfx/backgrounds/bg-${getRandomRange(1, 10)}.jpg')`,
            tags: tags.join(' ~ ')
        };
    }

    render() {
        const componentName = 'Page_Header';
        const {
            imageUrl,
            tags
        } = this.state;
        const {
            config,
            utilities,
            collapsed
        } = this.props;
        const { title } = config;

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
            <header className="collapsed" style={{ backgroundImage: imageUrl }} data-component={componentName}>
                <div className="content" style={{ width: `${document.querySelector('main').offsetWidth}px` }}>
                    <Navigation config={config} utilities={utilities} />

                    <h1 className="headline">
                        <Link to="/">
                            {title}
                        </Link>
                    </h1>
                </div>
            </header>
        );
    }
}
