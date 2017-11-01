import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { getRandomRange } from './../helpers';
import Navigation from './Navigation';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.updateDimensions = this.updateDimensions.bind(this);

        const { tags } = this.props.config;

        this.state = {
            imageUrl: `url('http://www.honzachalupa.cz/imgs/bg-${getRandomRange(1, 10)}.jpg')`,
            tags: tags.join(' ~ '),
            heightOriginal: 279,
            height: null,
            fontSize: null,
            headlineTopPosition: null,
            subheadlineOpacity: null
        };

        // this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions);
    }

    updateDimensions() {
        const { heightOriginal, height, fontSize } = this.state;
        const scrolled = window.scrollY;

        if (heightOriginal >= scrolled) {
            const newHeight = heightOriginal - scrolled;
            const x = ((scrolled / heightOriginal) * 50) + 0;

            console.log(x);

            this.setState({
                height: newHeight,
                fontSize: (newHeight / 20),
                headlineTopPosition: x,
                subheadlineOpacity: 1 - ((Math.round((scrolled / heightOriginal) * 100) / 100) * 2)
            });
        }
    }

    render() {
        const componentName = `Page_${this.constructor.name}`;
        const { imageUrl, tags, height, fontSize, headlineTopPosition, subheadlineOpacity } = this.state;
        const { config, utilities } = this.props;
        const { title, collapsed } = config;

        if (!collapsed) {
            return (
                <header style={{ backgroundImage: imageUrl, height }} data-component={componentName}>
                    <div className="content" style={{ width: `${document.querySelector('main').offsetWidth}px` }}>
                        <Navigation config={config} utilities={utilities} />

                        <h1 className="headline" style={{ fontSize: fontSize + 40, top: headlineTopPosition }}>
                            <Link to="/">
                                {title}
                            </Link>
                        </h1>
                        <h3 className="tags" style={{ opacity: subheadlineOpacity }}>{tags}</h3>
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
