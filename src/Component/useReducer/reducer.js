import {SET_JOB,ADD_JOBS,DELETE_JOBS} from './constants'

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOBS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOBS:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default: new Error(`Invalid action ${action.type}`);
    }
    return newState
}
export default reducer