import { combineReducers } from "redux";
import { TaskReducer } from './task'

const mainReducer = combineReducers({
    TaskReducer: TaskReducer
})

export default mainReducer