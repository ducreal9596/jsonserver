import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

Useref.propTypes = {

};

function Useref(props) {
    const [counter, setCounter] = useState(60)
    const timeid = useRef()

    const handleStart = () => {
        timeid.current = setInterval(() => {
            setCounter(prev=>prev - 1)
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timeid.current)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Useref;