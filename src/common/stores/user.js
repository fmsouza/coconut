import { action, observable } from 'mobx';
import * as Action from 'common/actions';

const USER_KEY = '7bz0287n0378rt0r1d10dm9dhw09hdq';

class UserStore {

    @observable data = null;

    constructor() {
        const storedUser = Action.load(USER_KEY);
        if (storedUser) this.data = JSON.parse(Action.decrypt(storedUser));
    }

    @action storeUserData(userData) {
        this.data = userData;
        Action.save(USER_KEY, Action.encrypt(JSON.stringify(userData)));
    }

    @action clean() {
        this.data = null;
        Action.remove(USER_KEY);
    }

}

export default new UserStore();
