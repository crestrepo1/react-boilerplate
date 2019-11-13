import React from 'react';
import { observer } from 'mobx-react-lite';

import UserView from '../../common/components/User';

const View1 = observer(() => {
    return (
        <div>
            <h2>View 1</h2>
            <UserView />
        </div>
    );
});

export default View1;
