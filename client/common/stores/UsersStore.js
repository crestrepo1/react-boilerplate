import { action, observable } from 'mobx';
import { createContext } from 'react';

class UsersStore {
    @observable user = '';

    @action async fetchuser() {
        const response = await fetch('/api/fetchUsers');
        const user = await response.json();

        this.user = JSON.stringify(user);
        console.log(this.user);
    }
}

const UsersStoreContext = createContext(new UsersStore());
export { UsersStoreContext, UsersStore };
