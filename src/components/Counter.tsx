import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            { count }
            <button className={classes.button} onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;