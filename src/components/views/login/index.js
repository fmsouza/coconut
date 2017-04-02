import React from 'react';
import { observer } from 'mobx-react';
import Form from 'common/form';
import Text from 'common/strings';
import fields from './fields';
import './login.css';

@observer
export class Login extends React.Component {

    get FormConfig() {
        return {
            title: 'login',
            fields,
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
        return (
            <div className="login">
                <h1 className="center">{Text.login.title}</h1>
                <Form config={this.FormConfig} />
            </div>
        );
    }
}
