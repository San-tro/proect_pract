import styles from "./Clients.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
let Clients =(props) =>{
    let ClientsElements = props.clients.map(story =>
        <div className={styles.item} key={story.id}>
             {story.name}, тел.{story.phone}
        <div className={styles.icons}>
            <NavLink to={"/editClient/"+story.id} id={story.id}>   <span className={styles.icon}> <FontAwesomeIcon icon={faEdit} /> </span></NavLink>
            <span className={styles.icon}>  <FontAwesomeIcon icon={faTrash} />  </span>
        </div></div> );
    return <div className={styles.clients}>
        <h1>Клиенты
        <div className={styles.icons}>
            <NavLink to="/newClient">  Добавить  <FontAwesomeIcon icon={faPlus} /> </NavLink>
        </div>
        </h1>
    <hr/>

        <div className={styles.items}>
            {ClientsElements}
        </div>
    </div>
}
export default Clients;