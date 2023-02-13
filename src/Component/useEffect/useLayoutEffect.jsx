import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {useLayoutEffect} from 'react';
Counter.propTypes = {
    
};

function Counter () {
    const [counter,setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter+1)
    }
    useLayoutEffect (()=>{
        if(counter>9){
            setCounter(0)
       }
    },[counter])
    return(
        <div>
            <button onClick={handleCounter}>Counter</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default Counter;