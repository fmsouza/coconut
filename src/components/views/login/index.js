import React from 'react';
import { observer, inject } from 'mobx-react';
import { LoginForm } from 'components/forms';
import './login.css';

@inject('text')
@observer
export class Login extends React.Component {

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
                <LoginForm
                    onSuccess={(form) => this.onSuccess(form)}
                    onError={(form) => this.onError(form)}
                />
            </div>
        );
    }
}
