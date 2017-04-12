import React from 'react';
import { observer } from 'mobx-react';
import { LanguageSettingsForm } from 'components/forms';
import * as Action from 'common/actions';

@observer
export class LanguageSettings extends React.Component {

    onSuccess(form) {
        const { language } = form.values();
        Action.changeLanguage(language);
    }

    render() {
        return (
            <LanguageSettingsForm onSuccess={this.onSuccess.bind(this)} />
        );
    }
}