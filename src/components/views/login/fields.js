import Text from 'common/strings';

const inputs = Text.login.inputs;

export default [
    {
        type: 'text',
        name: 'username',
        label: inputs.username,
        placeholder: 'loginlover776',
        rules: 'required|string'
    }, {
        type: 'password',
        name: 'password',
        label: inputs.password,
        placeholder: '*********',
        rules: 'required|string'
    }, {
        type: 'submit',
        name: 'sendButton',
        label: inputs.submitButton
    }
];
