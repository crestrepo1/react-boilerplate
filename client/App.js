import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';


const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <Routes />
    </div>,
    MOUNT_NODE
);
