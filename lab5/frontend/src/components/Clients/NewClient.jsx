import styles from "./Clients.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


let NewClientForm =(props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <p>ФИО </p> <Field name={"name"} component={"input"} />
            <p>Номер</p>
            <Field name={"phone"}  component={"input"} />
            <p>  <button> Сохранить </button></p>
        </form>
    )
}
const ReduxNewClientForm = reduxForm({form: 'newClient'})(NewClientForm)

let NewClient =(props) =>{
    const onSubmit=(formData)=>{

        props.newClientCreate(formData);
    }
    return <div className={styles.clients}>
        <h1> Новый клиент </h1>
        <ReduxNewClientForm onSubmit ={onSubmit}/>
    </div>
}
export default NewClient;