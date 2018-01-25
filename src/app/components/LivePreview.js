import React, { Component } from 'react';

export default class LivePreview extends Component {
    render() {
        const { url } = this.props;

        return (
            <div data-component="LivePreview">
                <h2 className="headline">Live preview</h2>

                <iframe title="Live preview of the project" src={url} data-aspect-ratio="16:9" />
            </div>
        );
    }
}
