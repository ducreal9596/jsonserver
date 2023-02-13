import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Content from './Content';

const Usecallback = () => {
    const [couter,setCounter] = useState(0)
    const handleClick = useCallback(()=>{
        setCounter(prev=> prev+1)
    },[])
    return (
        <div>
            <Content onClinck={handleClick}/>
            <h2>{couter}</h2>
        </div>
    );
};

export default Usecallback;