import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);

        const { setNavigationItem } = props.utilities;

        this.state = {
            id: 'about-me-page',
            headline: 'About me',
            hasPanel: false
        };

        setPageTitle(this.state.headline);
        setNavigationItem(this.state.id);
    }

    render() {
        const { id, headline, hasPanel, project } = this.state;
        const { config, utilities } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={headline} />

                    <Text headline="Who am I?">
                        Text
                    </Text>
                </ContentLayout>
            </div>
        );
    }
}
