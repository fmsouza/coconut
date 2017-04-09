import { action, observable } from 'mobx';

const emptyUser = {
    name: '',
    email: '',
    username: '',
    token: ''
};

class UserStore {

    @observable data = emptyUser;

    @action storeUserData(userData) {
        this.data = userData;
    }

    @action clean() {
        this.data = emptyUser;
    }

}

export default new UserStore();
