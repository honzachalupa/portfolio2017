import React, { Component, PropTypes } from 'react';

export default class ButtonsGroup extends Component {
    render() {
        const componentName = this.constructor.name;
        const { headline, children: buttons, alignment, extraClasses } = this.props;

        const headlineBlock = (headline) ?
            <p className="headline">{headline}</p> :
            null;

        return (
            <div className={`${extraClasses} ${alignment}`} data-component={componentName}>
                {headlineBlock}
                <div className="alignment">
                    {buttons}
                </div>
            </div>
        );
    }
}
