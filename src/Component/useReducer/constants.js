import { createStore, useStore } from "redux";

export const SET_JOB = 'set_job';
export const ADD_JOBS = 'add_jobs';
export const DELETE_JOBS = 'delete_jobs';
export const initState = {
    job: '',
    jobs: []
}
const store = createStore(initState)
export default store;