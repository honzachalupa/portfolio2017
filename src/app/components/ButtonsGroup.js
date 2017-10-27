import React, { Component, PropTypes } from 'react';

export default class ButtonsGroup extends Component {
    render() {
        const componentName = this.constructor.name;
        const { headline, children: buttons, alignment, extraClasses } = this.props;

        return (
            <div className={extraClasses} data-component={componentName}>
                <p className="headline">{headline}</p>
                <div className={`alignment ${alignment}`}>
                    {buttons}
                </div>
            </div>
        );
    }
}
