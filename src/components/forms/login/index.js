import React from 'react';
import { observer, inject } from 'mobx-react';
import formCreator from 'common/form';
import { Button, FormGroup, InputGroup, HelpBlock } from 'react-bootstrap';
import fields from './fields';

@inject('text')
@observer
export class LoginForm extends React.Component {
    get config() {
        const { onSuccess, onError, text } = this.props;
        return {
            title: 'login',
            fields: fields(text),
            onSuccess,
            onError
        };
    }

    componentWillUnmount() {
        this.form.reset();
    }

    renderInput(field) {
        return (
            <FormGroup controlId={field.name}>
                <InputGroup>
                    <InputGroup.Addon>{field.label}</InputGroup.Addon>
                    <input className="form-control" {...field.bind()} />
                </InputGroup>
            </FormGroup>
        );
    }

    renderButton(field) {
        return (
            <FormGroup className="center" validationState={"error"}>
                <Button {...field.bind()}>{field.label}</Button>
            </FormGroup>
        );
    }

    renderErrorBox(errors) {
        const tmp = Object.keys(errors)
            .map(key => <p key={key}>{errors[key] || ''}</p>);

        return (
            <FormGroup className="center" validationState={"error"}>
                <HelpBlock>{tmp}</HelpBlock>
            </FormGroup>
        );
    }

    render() {
        if (!this.form) this.form = formCreator(this.config);
        return (
            <form onSubmit={this.form.onSubmit}>
                {this.renderInput(this.form.$('username'))}
                {this.renderInput(this.form.$('password'))}
                {this.renderButton(this.form.$('sendButton'))}
                {this.renderErrorBox(this.form.errors())}
            </form>
        );
    }
}