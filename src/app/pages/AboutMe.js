import React, { Component, PropTypes } from 'react';
import { setPageTitle } from './../helpers';
import InvisibleHeadline from './../components/InvisibleHeadline';
import ContentLayout from './../layouts/Content';
import Text from './../components/content-blocks/Text';
import Button from './../components/Button';
import ButtonsGroup from './../components/ButtonsGroup';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);

        const { setNavigationItem } = props.utilities;

        this.state = {
            id: 'about-me-page',
            headline: 'About me',
            collapsedUI: false,
            hasPanel: false
        };

        setPageTitle(this.state.headline);
        setNavigationItem(this.state.id);
    }

    render() {
        const { id, headline, collapsedUI, hasPanel, project } = this.state;
        const { config, utilities } = this.props;

        return (
            <div id={id} data-component="Page">
                <ContentLayout config={config} utilities={utilities} collapsedUI={collapsedUI} hasPanel={hasPanel}>
                    <InvisibleHeadline headline={headline} />

                    <Text headline="Who am I?">
                        <p>I'm 24 years old Front-End Developer based in Prague, Czech Republic. I'm seeking for a new experiences - a full-time position or contract in the field of Web or App Development or other position in connection with computers or electronics. I prefer some creative usage of my skills.</p>

                        <Button title="View my CV" url="https://www.visualcv.com/janchalupa" />
                    </Text>
                </ContentLayout>
            </div>
        );
    }
}
