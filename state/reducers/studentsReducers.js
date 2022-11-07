import actionType from "../action/actionTypes";
let students = []
function studentReducers(state = students, action) {
    switch (action.type) {
        case actionType.ADD_STUDENT:
            return  [...action.payload]
            
            break
        default:
            return state;
    }
}
export default studentReducers;