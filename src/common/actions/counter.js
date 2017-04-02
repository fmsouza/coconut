import Stores from 'common/stores';

const { counterStore } = Stores;

export const incrementCounter = () => counterStore.increment();

export const resetCounter = () => counterStore.reset();
