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
        const form = formCreator(this.config);
        return (
            <form onSubmit={form.onSubmit}>
                {this.renderInput(form.$('username'))}
                {this.renderInput(form.$('password'))}
                {this.renderButton(form.$('sendButton'))}
                {this.renderErrorBox(form.errors())}
            </form>
        );
    }
}