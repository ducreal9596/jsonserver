import React from 'react';
import { useReducer } from 'react';
const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default: new Error('invalid action')
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch(UP_ACTION)}>UP</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
        </div>
    );
};

export default UseReducer;