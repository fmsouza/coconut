import React from 'react';
import { observer, inject } from 'mobx-react';
import { LoginForm } from 'components/forms';
import * as Action from 'common/actions';
import './login.css';

@inject('text')
@observer
export class Login extends React.Component {

    onSuccess(form) {
        const { username, password } = form.values();
        Action.login(username, password);
    }

    render() {
        const { text } = this.props;
        return (
            <div className="login">
                <h1 className="center">{text.get('views.login.title')}</h1>
                <LoginForm onSuccess={(form) => this.onSuccess(form)} />
            </div>
        );
    }
}
