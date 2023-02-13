import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
const initState = {
    job: '',
    jobs: []
};
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
let newState;
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            newState = { ...state, job: action.payload }
            break;
        case ADD_JOB:
            newState = { ...state, jobs: [...state.jobs, action.payload] }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = { ...state, jobs: newJobs }
            break
        default: new Error('Loi roi boa doa oi')
    }
    return newState
}
function Exercise22() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const todoFef = useRef()
    const handleAdd = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        console.log(jobs);
        todoFef.current.focus()
    }
    return (
        <div>
            <input
                ref={todoFef}
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
                onClick={handleAdd}
            >ADD</button>
            {jobs.map((job, index) => {
                return <li key={index}> {job}
                    <span onClick={() => dispatch(deleteJob(index))}>x</span>
                </li>
            })}
        </div>
    )
}

export default Exercise22