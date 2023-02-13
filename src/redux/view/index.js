import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../actions';

ReduxLearn.propTypes = {
    
};

function ReduxLearn() {
const [name,setName] = useState()
const dispatch = useDispatch()
const userName = useSelector((state)=>state.userName);
const handleAdd = () =>{
    dispatch(addName(name))
}
    return (
        <div>
            <input onChange={e=>setName(e.target.value)} />
            <button
            onClick={handleAdd}
            >ADD</button>
            
        </div>
    );
}

export default ReduxLearn;