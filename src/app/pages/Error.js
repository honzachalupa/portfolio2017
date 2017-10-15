import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';

export default class Error extends Component {
    constructor(props) {
        super(props);

        const { setNavigationItem } = props.utilities;

        this.state = {
            id: 'not-found-page',
            headline: 'Page not found',
            hasPanel: true
        };

        setPageTitle(this.state.headline);
        setNavigationItem(null);
    }

    render() {
        const { id, headline, hasPanel } = this.state;
        const { config, utilities, params } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <p>
                        Some error just occured...
                    </p>
                </ContentLayout>
            </div>
        );
    }
}
