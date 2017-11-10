import React, { Component, PropTypes } from 'react';
import ImageItem from './Item';

export default class ImagesGrid extends Component {
    completeImagesDefinition(images) {
        return images.map((image) => {
            if (typeof image === 'string') {
                const url = image;

                return {
                    url,
                    description: null,
                    aspectRatio: 'landscape'
                };
            }

            return image;
        });
    }

    render() {
        const componentName = `ContentBlock_${this.constructor.name}`;

        const {
            headline,
            images: imagesUnfilled,
            extraClasses
        } = this.props;

        const images = this.completeImagesDefinition(imagesUnfilled);

        return (
            <article data-component={componentName} className={extraClasses}>
                <h2 className="headline">{headline}</h2>
                <ul>
                    {
                        images.map((image) => {
                            return <ImageItem key={image.url} {...image} />;
                        })
                    }
                </ul>
            </article>
        );
    }
}
