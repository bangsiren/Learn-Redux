import actionType from "./actionTypes";
export const addStudents = (students) => {
    return {
        type: actionType.ADD_STUDENT,
        payload: students
    }
}
