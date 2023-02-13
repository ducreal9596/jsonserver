import { createStoreHook } from "react-redux";
import { reducer } from "../reducer";
const initState = {
    username:'',
}
let store = createStoreHook(initState, reducer);
export default store;