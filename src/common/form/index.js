import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import bindings from './bindings';
const forms = {};

class DefaultForm extends MobxReactForm {
    plugins() { return { dvr: validatorjs }; }
}

export default ({ title, fields, onSuccess, onError }) => {
    if (forms[title]) return forms[title];
    DefaultForm.prototype.onError = onError;
    DefaultForm.prototype.onSuccess = onSuccess;
    DefaultForm.prototype.setup = () => ({ fields });
    DefaultForm.prototype.bindings = () => (bindings);
    forms[title] = new DefaultForm();
    return forms[title];
}