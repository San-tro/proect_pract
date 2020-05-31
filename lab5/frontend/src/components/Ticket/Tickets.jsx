import styles from "./Tickets.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
let Tickets =(props) =>{

    let ClientsElements = props.tickets.map(story =>
        <div className={styles.item} key={story.id}>
          Клиент:   {story.client}, тел: {story.phone}
         <p> Услуга: {story.service},стоимость: {story.price} р.
            <div className={styles.icons}>
                <NavLink to={"/editService/"+story.id} id={story.id}>
                    <span className={styles.icon}> <FontAwesomeIcon icon={faEdit} /> </span>
                </NavLink> <span className={styles.icon}>  <FontAwesomeIcon icon={faTrash} />  </span>
            </div></p></div> );
    return <div className={styles.clients}>
        <h1>Заявки
            <div className={styles.icons}>
                <NavLink to="/newService">  Добавить  <FontAwesomeIcon icon={faPlus} /> </NavLink>
            </div>
        </h1>
        <hr/>

        <div className={styles.items}>
            {ClientsElements}
        </div>
    </div>
}
export default Tickets;