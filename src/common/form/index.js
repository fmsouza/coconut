import React from 'react';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { Button, ErrorBox, Input } from './inputs';

const forms = {};

class DefaultForm extends MobxReactForm {
    plugins() { return { dvr: validatorjs }; }
}

const formCreator = ({ name, fields, onSuccess, onError }) => {
    if (forms[name]) return forms[name];

    DefaultForm.prototype.onError = onError;
    DefaultForm.prototype.onSuccess = onSuccess;
    DefaultForm.prototype.setup = () => ({ fields });

    forms[name] = new DefaultForm();
    return forms[name];
}

@observer
export default class Form extends React.Component {

    renderInput(key, field) {
        return (<Input key={key} {...field.bind()} />);
    }

    renderButton(key, field) {
        return (<Button key={key} {...field.bind()}>{field.label}</Button>);
    }

    chooseFieldType(key, field) {
        switch (field.type) {

            case 'button':
            case 'submit':
                return this.renderButton(key, field);

            default:
                return this.renderInput(key, field);
        }
    }

    renderFields(fields) {
        return Object.keys(fields)
            .map(key => this.chooseFieldType(key, fields[key]));
    }

    renderErrors(errors) {
        return Object.keys(errors)
            .map(key => <p key={key}>{errors[key] || ''}</p>);
    }

    render() {
        const config = this.props.config || {};
        const form = formCreator(config);
        return (
            <form className={config.name} onSubmit={form.onSubmit}>
                {this.renderFields(form.fields.toJSON())}
                <ErrorBox>{this.renderErrors(form.errors())}</ErrorBox>
            </form>
        );
    }
}