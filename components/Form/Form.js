import React from "react";
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { bindActionCreators } from "redux";
import { useDispatch, useSelector} from "react-redux";
import { addStudentToStorage } from "../../utils/storeStudent";
import actionCreators from "../../state";
import * as yup from 'yup';
const schema = yup.object().shape({
    firstName: yup.string().required("Enter Name Is Required"),
    age: yup.number().positive().integer().min(18).required("Age must be greater then 17"),
});

function Form() {
    const dispatch  = useDispatch()
    const { addStudents } = bindActionCreators(actionCreators, dispatch)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const state = useSelector((state) => state) 
    let [name, setName] = useState('');
    const handleSubmitForm = async (data) => {
        console.log('data', data);
        let newData = await addStudentToStorage({...data, attendance: 0});
        console.log('NEW DATA COMING', newData)
        addStudents(newData);
    }

    return (
        <div className={styles.formSection}>
            <div className={styles.formBox}>
                <h1 className={styles.signup}>Create Students</h1>
              
                            <p>{}</p>
     
                <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>

                    <input className={styles.input} type='text' name='firstName' placeholder='First Name...' {...register('firstName')} />
                    <small className={styles.error}>{errors.firstName?.message}</small>
                    <input className={styles.input} type='number' name='age' placeholder='Age...' {...register('age')} />
                    <small className={styles.error}>{errors.age?.message}</small>
                    <div className={styles.submitBox} >
                        <button className={styles.submit}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;