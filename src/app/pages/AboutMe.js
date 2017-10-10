import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import Headline from './../components/Headline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 'about-me-page',
            headline: 'About me',
            hasPanel: false
        };

        setPageTitle(this.state.headline);
    }

    render() {
        const { id, headline, hasPanel, project } = this.state;
        const { config } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} hasPanel={hasPanel}>
                    <Headline headline={headline} />

                    <Text headline="Who am I?">
                        Text
                    </Text>
                </ContentLayout>
            </div>
        );
    }
}
