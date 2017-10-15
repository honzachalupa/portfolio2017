import React, { Component, PropTypes } from 'react';
import ImageItem from './Item';

export default class ImagesGrid extends Component {
    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;
        const { headline, images, extraClasses } = this.props;

        return (
            <article data-component={componentName} className={extraClasses}>
                <h2 className="headline">{headline}</h2>
                <ul>
                    {
                        images.map((image) => {
                            return <ImageItem {...image} />;
                        })
                    }
                </ul>
            </article>
        );
    }
}
