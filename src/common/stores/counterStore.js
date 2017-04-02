import { observable, action, computed } from 'mobx';

export class CounterStore {

    @observable counter = 0;

    @computed get totalAmountOfClicks() {
        return this.counter;
    }

    @action increment() {
        this.counter++;
    }

    @action reset() {
        this.counter = 0;
    }
}

const counterStore = new CounterStore();

export default counterStore;
