import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';

export default class NotFound extends Component {
    constructor() {
        super();

        this.state = {
            id: 'not-found-page',
            headline: 'Page not found',
            hasPanel: true
        };

        setPageTitle(this.state.headline);
    }

    render() {
        const { id, headline, hasPanel } = this.state;
        const { config, params } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <p>
                        404
                    </p>
                </ContentLayout>
            </div>
        );
    }
}
