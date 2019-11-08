import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { CounterStoreContext } from '../../stores/CounterStore';

import styles from './counter.css';

const CounterView = observer(() => {
    const counterStore = useContext(CounterStoreContext);
    return (
        <div className={styles._}>
            <h2>{counterStore.count}</h2>
            <button className={styles.button} onClick={() => counterStore.increaseCount()}>Increase</button>
            <button className={styles.button} onClick={() => counterStore.decreaseCount()}>Decrease</button>
        </div>
    );
});

export default CounterView;
