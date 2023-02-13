export const addName = (payload) =>{
    return {
        type: 'add',
        payload: payload
    }
}
export const removeName = (payload) =>{
    return {
        type: 'remove',
        payload
    }
}