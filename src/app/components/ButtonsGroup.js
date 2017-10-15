import React, { Component, PropTypes } from 'react';

export default class ButtonsGroup extends Component {
    render() {
        const componentName = this.constructor.name;
        const { children: buttons, alignment } = this.props;

        return (
            <div data-component={componentName}>
                <div className={`alignment ${alignment}`}>
                    {buttons}
                </div>
            </div>
        );
    }
}
