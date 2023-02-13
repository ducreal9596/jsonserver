import React from 'react';
import PropTypes from 'prop-types';
import { useReducer } from 'react';

Practice.propTypes = {
    
};
const initState = {
    job:'',
    jobs:[]
};
const SET_JOB = 'set job';
const SET_JOBS = 'set jobs';
const setJob =payload =>{
    return{
        type: SET_JOB,
        payload
    }
}
const addJob = payload =>{
    return{
        type: SET_JOBS,
        payload
    }
}
let newState;
const reducer = (state, action) =>{
    switch (action.type){
        case SET_JOB:
           newState = {...state, job: action.payload}
            break;
        case SET_JOBS:
            newState = {...state, jobs:[...state.jobs,action.payload]}
            break;
        default: new Error('Invalid action')
    }
    return newState
}
function Practice(props) {
    const [state, dispatch] = useReducer(reducer, initState);
    const {job, jobs} = state;
    const handleAddJob = ()=>{
        dispatch(addJob((job)))
    }
    return (
        <div>
            <input 
            onChange={(e)=>dispatch(setJob(e.target.value))}
            />
            <button
            onClick={handleAddJob}
            >Add</button>
            {jobs.map((job,index)=>{
                return <li key={index} >{job}</li>
            })}
        </div>
    );
}

export default Practice;