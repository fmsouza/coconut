export default (text) => [
    {
        type: 'text',
        name: 'username',
        label: text.get('forms.login.username'),
        placeholder: 'loginlover776',
        rules: 'required|string'
    }, {
        type: 'password',
        name: 'password',
        label: text.get('forms.login.password'),
        placeholder: '*********',
        rules: 'required|string'
    }, {
        type: 'submit',
        name: 'sendButton',
        label: text.get('actions.submit')
    }
];
