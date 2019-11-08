import { action, observable } from 'mobx';
import { createContext } from 'react';

class CounterStore {
    @observable count = 0;

    @action increaseCount() {
        this.count++;
    }

    @action decreaseCount() {
        this.count--;
    }
}

const CounterStoreContext = createContext(new CounterStore());
export { CounterStoreContext, CounterStore };
