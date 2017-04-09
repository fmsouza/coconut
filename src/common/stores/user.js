import { action, observable } from 'mobx';

class UserStore {

    @observable data = null;

    @action storeUserData(userData) {
        this.data = userData;
    }

    @action clean() {
        this.data = null;
    }

}

export default new UserStore();
