import { observable, action } from 'mobx';
import intl from 'common/strings';

export class TextStore {

    @observable strings = {};

    @observable language = '';

    constructor() {
        this.strings = intl(this.language);
    }

    @action changeLanguage(language) {
        this.strings = intl(language);
    }

    get(id) {
        let tmp;
        id.split('.').forEach((key, next) => {
            if (!tmp) tmp = this.strings[key];
            else if(tmp[key]) tmp = tmp[key];
            else return `{${id}}`;
        });
        return tmp;
    }
}

export default new TextStore();
