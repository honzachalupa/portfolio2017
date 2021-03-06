import React, { Component } from 'react';
import getClassList from './../modules/class-list';

export default class ButtonsGroup extends Component {
    render() {
        const { headline, children: buttons, alignment, extraClasses } = this.props;

        const headlineBlock = (headline) ?
            <h3 className="headline">{headline}</h3> :
            null;

        return (
            <div className={getClassList(extraClasses, alignment)} data-component="ButtonsGroup" role="group">
                {headlineBlock}
                <div className="alignment">
                    {buttons}
                </div>
            </div>
        );
    }
}
