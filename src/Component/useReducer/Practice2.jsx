import React from 'react';
import { useReducer } from 'react';
const initState = {
    job: '',
    jobs: []
}
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setjob = payload =>{
    return {
        type: SET_JOB,
        payload: payload
    }
}
const addjob = payload =>{
    return {
        type: ADD_JOB,
        payload: payload
    }
}
const deletejob = (payload)=>{
    return {
        type: DELETE_JOB,
        payload
    }
}
let newState
const reducer = (state,action) =>{
    switch(action.type){
        case SET_JOB:
            newState = {...state, job: action.payload}
            break;
        case ADD_JOB:
            newState = {...state, jobs: [...state.jobs, action.payload]}
            break;
        case DELETE_JOB:
            const jobsss = [...state.jobs]
            const haha = jobsss.splice(action.payload)
            newState = {...state,jobs:haha}
            break;
        default: throw new Error('invalid action')
    }
    return newState
}
const Practice2 = () => {
    const [state,dispatch] = useReducer(reducer,initState)
    const {job,jobs} = state
    const handleAdd = () =>{
        dispatch(addjob(job))
        dispatch(setjob(''))
        console.log(jobs);
    }
    return (
        <div>
            <input 
            value={job}
            onChange = {(e)=>dispatch(setjob(e.target.value))}
            />
            <button onClick={handleAdd}>ADD</button>
            {jobs.map((job,index)=>{
              return  <li key={index} >{job}
              <button onClick={()=>dispatch(deletejob(index))}>x</button>
              </li>
            })}
        </div>
    );
};

export default Practice2;