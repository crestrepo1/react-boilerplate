import React, { useContext, Fragment } from 'react';
import { observer } from 'mobx-react-lite';

import { UsersStoreContext } from '../../stores/UsersStore';

const UserView = observer(() => {
    const userStore = useContext(UsersStoreContext);
    const { user } = userStore;
    console.log(user);
    return (
        <div>
            <button onClick={() => userStore.fetchuser()}>fetch User</button>
            {user &&
                <Fragment>
                    <p>{user.userId}</p>
                    <p>{user.title}</p>
                </Fragment>
            }
        </div>
    );
});

export default UserView;
