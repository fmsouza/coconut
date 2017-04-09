import React from 'react';
import { observer, inject } from 'mobx-react';
import { LoginForm } from 'components/forms';
import * as Action from 'common/actions';
import './login.css';

@inject('text', 'user')
@observer
export class Login extends React.Component {

    onSuccess(form) {
        const { username, password } = form.values();
        Action.login(username, password);
    }

    render() {
        const { text, user } = this.props;
        return (
            <div className="login">
                <h1 className="center">{text.get('login.title')}</h1>
                <LoginForm onSuccess={(form) => this.onSuccess(form)} />
            </div>
        );
    }
}
