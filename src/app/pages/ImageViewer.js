import React, { Component } from 'react';
import { setPageTitle, getDevelopmentStageLabel } from './../helpers';
import ContentLayout from './../layouts/Main';
import InvisibleHeadline from './../components/InvisibleHeadline';
import Text from './../components/content-blocks/Text';
import ImagesGrid from './../components/content-blocks/ImagesGrid';
import Button from './../components/Button';
import LivePreview from './../components/LivePreview';

export default class ImageViewer extends Component {
    constructor(props) {
        super(props);

        const { utilities, params } = props;
        const { setNavigationItem } = utilities;

        this.state = {
            id: 'image-viewer',
            hasPanel: false,
            collapsedUI: true,
            image: `../gfx/projects/${params.id}`
        };

        setPageTitle('Image Viewer');
        setNavigationItem('projects-page');
    }

    render() {
        const { id, hasPanel, collapsedUI, image } = this.state;
        const { config, utilities } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} collapsedUI={collapsedUI} hasPanel={hasPanel}>
                    <img alt="Image Viewer" src={image} />
                </ContentLayout>
            </div>
        );
    }
}
