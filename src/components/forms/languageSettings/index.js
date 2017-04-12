import React from 'react';
import { observer, inject } from 'mobx-react';
import formCreator from 'common/form';
import { General } from 'common/constants';
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import fields from './fields';

@inject('text')
@observer
export class LanguageSettingsForm extends React.Component {
    get config() {
        const { onSuccess, onError, text } = this.props;
        return {
            title: 'languageSettings',
            fields: fields(text),
            onSuccess,
            onError
        };
    }

    componentWillUnmount() {
        this.form.clear();
    }

    renderComboBox(field) {
        return (
            <FormGroup>
                <ControlLabel>{field.label}</ControlLabel>
                <FormControl componentClass="select" placeholder={field.placeholder} {...field.bind()}>
                    <option value="">select</option>
                    {General.LANGUAGES.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                </FormControl>
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
                {this.renderComboBox(this.form.$('language'))}
                {this.renderButton(this.form.$('sendButton'))}
                {this.renderErrorBox(this.form.errors())}
            </form>
        );
    }
}