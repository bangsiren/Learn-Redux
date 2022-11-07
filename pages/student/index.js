import React from "react";
import actionCreators from "../../state";
import { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import styles from './student.module.css'
import { increamentStudentAttendanceInStorage } from "../../utils/storeStudent";
function Student() {
    const state = useSelector((state) => state);
    let [student, setStudent] = useState([]);
    let [attendance, setAttendance] = useState(0)
    const dispatch = useDispatch()
    const { addStudents } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        let allStudents = JSON.parse(localStorage.getItem('students'));
        console.log('UPDATES', allStudents)
        addStudents(allStudents);
    }, []);

    useEffect(() => {
        setStudent(state.student)
    }, [state]);

    const handleAddQuantity = async () => {
        const updateStudentAttendance = await increamentStudentAttendanceInStorage();
       let dat = addStudents(updateStudentAttendance)
       console.log('=============',updateStudentAttendance)
       console.log('DAAAAAAAAAAAAAAAAT', dat)
       setAttendance(attendance + 1);
     }
    return (
        <div className={styles.mainSec}>
            <div>
            {
                student.map(st => (
                    <div key={st.name}>
                        <div className={styles.nameSec}>
                            <h4>{st.firstName}</h4>
                            <h5>{st.attendance}</h5>
                        </div>
                        <div className={styles.btnSec}>
                            <button className={styles.btn}>-</button>
                            <button onClick={handleAddQuantity} className={styles.btn}>+</button>
                        </div>
                    </div>
                ))
            }

            </div>

        </div>
    );
}

export default Student;