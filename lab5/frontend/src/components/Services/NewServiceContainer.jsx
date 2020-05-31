import {connect} from "react-redux";
import {newServiceCreate} from "./../../redux/services-reducer"
import React from "react";
import NewService from "./NewService";

let mapStateToProps =(state) =>{
    return {
        clients: state.servicesReducer.services
    }
}

let mapDispatchToProps =(dispatch) =>{
    return {
        newServiceCreate:(client)=>{
            dispatch(newServiceCreate(client));
        }
    }
}


const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(NewService);
export default ClientsContainer;