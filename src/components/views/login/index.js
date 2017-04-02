import React from 'react';
import { observer, inject } from 'mobx-react';
import Form from 'common/form';
import fields from './fields';
import './login.css';

@inject('text')
@observer
export class Login extends React.Component {

    get FormConfig() {
        return {
            title: 'login',
            fields: fields(this.props.text),
            onSuccess: this.onSuccess.bind(this),
            onError: this.onError.bind(this),
        };
    }

    onSuccess(form) {
        console.log("success", form.values());
    }

    onError(form) {
        console.log("error", form.errors());
    }

    render() {
        const { text } = this.props;
        return (
            <div className="login">
                <h1 className="center">{text.get('login.title')}</h1>
                <Form config={this.FormConfig} />
            </div>
        );
    }
}
