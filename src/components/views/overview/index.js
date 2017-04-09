import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('text')
@observer
export class Overview extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="overview">
                <h1>{text.get('views.dashboard.title')}</h1>
            </div>
        );
    }
}
