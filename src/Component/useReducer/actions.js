import {SET_JOB,ADD_JOBS,DELETE_JOBS} from './constants'
export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload => {
    return {
        type: ADD_JOBS,
        payload
    }
}
export const deleteJob = payload => {
    return {
        type: DELETE_JOBS,
        payload
    }
}