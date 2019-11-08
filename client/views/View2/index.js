import React from 'react';
import { observer } from 'mobx-react-lite';
import CounterView from '../../common/components/Counter';


const View1 = observer(() => {
    return (
        <div>
            <h2>View 2</h2>
            <CounterView/>
        </div>
    )
});

export default View1;
