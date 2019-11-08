import { CounterStore } from './CounterStore.js';

describe('Counter Store', () => {
    it('sets up store', () => {
        const Store = new CounterStore();
        expect(Store.count).toBe(0);
    });

    it('adds one to counter', () => {
        const Store = new CounterStore();
        Store.increaseCount();
        expect(Store.count).toBe(1);
    });

    it('removes one to counter', () => {
        const Store = new CounterStore();
        Store.decreaseCount();
        expect(Store.count).toBe(-1);
    });
});
