import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import Button from './../components/Button';

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
                    <InvisibleHeadline headline={headline} />

                    <Text headline={headline}>
                        <p>Im really sorry to hear that but apparently something really bad just happened (like apocalipse or something). The page youve been looking for was not founded. Please, go to homepage and try your luck elsewhere.</p>

                        <Button title="Go to homepage" url="/" />
                    </Text>
                </ContentLayout>
            </div>
        );
    }
}
