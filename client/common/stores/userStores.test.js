import { UsersStore } from './UsersStore.js';

describe('User Store', () => {
    it('sets up  user store', () => {
        const Store = new UsersStore();
        expect(Store.user).toBe('');
    });
});
