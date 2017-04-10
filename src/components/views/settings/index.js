import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('text')
@observer
export class Settings extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="settings">
                <h1>{text.get('views.settings.title')}</h1>
            </div>
        );
    }
}
