export default (text) => [
    {
        type: 'text',
        name: 'username',
        label: text.get('login.inputs.username'),
        placeholder: 'loginlover776',
        rules: 'required|string'
    }, {
        type: 'password',
        name: 'password',
        label: text.get('login.inputs.password'),
        placeholder: '*********',
        rules: 'required|string'
    }, {
        type: 'submit',
        name: 'sendButton',
        label: text.get('login.inputs.submitButton')
    }
];
