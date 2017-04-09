import React from 'react';
import { observer, inject } from 'mobx-react';
import './styles.css';

@inject('text')
@observer
export class Dashboard extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="dashboard">
                <h1 className="center">{text.get('views.dashboard.title')}</h1>
            </div>
        );
    }
}
