import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import reducer from './reducer';
import {setJob,addJob,deleteJob} from './actions'
import { initState } from './constants';

const Exercise2 = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const ipRef = useRef()
    const handleAddJob = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        ipRef.current.focus()
    }
    return (
        <div>
            <input value={job} type='text'
                ref={ipRef}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }} />
            <button type='button' onClick={handleAddJob} >ADD</button>
            {jobs.map((job, index) => (
                <li key={index}>{job}
                    <span onClick={() => dispatch(deleteJob(index))}>   x</span>
                </li>
            ))}
        </div>
    );
};

export default Exercise2;