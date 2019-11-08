import React from 'react';
import ReactDOM from 'react-dom';

import CounterView from './common/components/Counter';


const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <CounterView />
    </div>,
    MOUNT_NODE
);
