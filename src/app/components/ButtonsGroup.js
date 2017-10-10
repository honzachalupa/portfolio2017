import React, { Component, PropTypes } from 'react';

export default class ButtonsGroup extends Component {
    render() {
        const componentName = this.constructor.name;
        const { children: buttons, align } = this.props;

        return (
            <div data-component={componentName}>
                <div className={`alignment ${align}`}>
                    {buttons}
                </div>
            </div>
        );
    }
}
