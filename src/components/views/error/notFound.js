import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('text')
@observer
export default class NotFound extends React.Component {
     render() {
         const { text } = this.props;
         return (
             <div>{text.get('views.notFound.title')}</div>
         );
     }
}