import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import bindings from './bindings';
const forms = {};

class DefaultForm extends MobxReactForm {
    plugins() { return { dvr: validatorjs }; }
}

export default ({ name, fields, onSuccess, onError }) => {
    if (forms[name]) return forms[name];
    DefaultForm.prototype.onError = onError;
    DefaultForm.prototype.onSuccess = onSuccess;
    DefaultForm.prototype.setup = () => ({ fields });
    DefaultForm.prototype.bindings = () => (bindings);
    forms[name] = new DefaultForm();
    return forms[name];
}