import styles from "./Services.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import store from "../../redux/store";

let EditClientForm =(props) =>{
    return (
        <form onSubmit={props.handleSubmit}   >
            <p>Стоимость  </p> <Field name="name"  component={"input"}/>
            <p>Наименование</p>
            <Field name={"phone"}  component={"input"} />
            <p>  <button> Сохранить </button></p>
        </form>
    )
}
const ReduxNewClientForm = reduxForm({form: 'EditService'})(EditClientForm)
let EditService =(props) =>{
    const onSubmit=(formData)=>{
        console.log(props)
        props.client.editClient({...formData,id:props.client.client.id})
    }
    return <div className={styles.clients}>
        <h1> Редактировать услуги  </h1>
        <ReduxNewClientForm onSubmit ={onSubmit} client={props.client}/>
    </div>
}


export default EditService;