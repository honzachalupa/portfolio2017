import React, { Component, PropTypes } from 'react';
import getClassList from './../modules/class-list';

export default class ButtonsGroup extends Component {
    render() {
        const componentName = this.constructor.name;
        const { headline, children: buttons, alignment, extraClasses } = this.props;

        const headlineBlock = (headline) ?
            <h3 className="headline">{headline}</h3> :
            null;

        return (
            <div className={getClassList(extraClasses, alignment)} data-component={componentName}>
                {headlineBlock}
                <div className="alignment">
                    {buttons}
                </div>
            </div>
        );
    }
}
