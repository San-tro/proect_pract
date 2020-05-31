import {connect} from "react-redux";
import {newClientCreate} from "./../../redux/clients-reducer"
import React from "react";
import NewClient from "./NewClient";

let mapStateToProps =(state) =>{
    return {
        clients: state.clientsReducer.clients
    }
}

let mapDispatchToProps =(dispatch) =>{
    return {
       newClientCreate:(client)=>{
            dispatch(newClientCreate(client));
        }
    }
}


const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(NewClient);
export default ClientsContainer;