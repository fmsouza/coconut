import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('text')
@observer
export class AddRepository extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="addRepository">
                <h1>{text.get('views.addRepository.title')}</h1>
            </div>
        );
    }
}
