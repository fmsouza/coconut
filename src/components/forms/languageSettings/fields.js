export default (text) => [
    {
        type: 'text',
        name: 'language',
        label: text.get('forms.languageSettings.language'),
        rules: 'required|string'
    }, {
        type: 'submit',
        name: 'sendButton',
        label: text.get('actions.submit')
    }
];
