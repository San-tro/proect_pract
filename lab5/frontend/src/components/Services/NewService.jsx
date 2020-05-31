import styles from "./Services.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


let NewServiceForm =(props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <p>Наименование </p> <Field name={"name"} component={"input"} />
            <p>Стоимость</p>
            <Field name={"price"}  component={"input"} />
            <p>  <button> Сохранить </button></p>
        </form>
    )
}
const ReduxNewServiceForm = reduxForm({form: 'newService'})(NewServiceForm)

let NewService =(props) =>{
    const onSubmit=(formData)=>{

        props.newServiceCreate(formData);
    }
    return <div className={styles.clients}>
        <h1> Новая услуга </h1>
        <ReduxNewServiceForm onSubmit ={onSubmit}/>
    </div>
}
export default NewService;