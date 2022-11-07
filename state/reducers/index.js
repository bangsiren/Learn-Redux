import studentReducers from "./studentsReducers";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    student: studentReducers
});
export default rootReducers;