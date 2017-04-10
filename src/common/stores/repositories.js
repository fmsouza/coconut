import { action, observable } from 'mobx';

class RepositoriesStore {

    @observable all = [];

    @action load(repositories) {
        this.all = repositories;
    }

    @action clean() {
        this.all = [];
    }

}

export default new RepositoriesStore();
