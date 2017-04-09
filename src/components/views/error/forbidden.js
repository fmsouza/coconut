import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('text')
@observer
export default class Forbidden extends React.Component {
     render() {
         const { text } = this.props;
         return (
             <div>{text.get('views.forbidden.title')}</div>
         );
     }
}