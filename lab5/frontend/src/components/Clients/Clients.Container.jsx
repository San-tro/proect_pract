import {connect} from "react-redux";
import {getClients} from "./../../redux/clients-reducer"
import React from "react";
import axios from "axios";
import Clients from "./Clients";

class ClientsAPI extends React.Component{

    componentDidMount() {

        axios.get("http://localhost:3001/api/getClients/")
            .then(res => {
                this.props.getClients(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <Clients clients={this.props.clients} />
    }
}

let mapStateToProps =(state) =>{
    return {
        clients: state.clientsReducer.clients
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getClients:(clients)=>{
            dispatch(getClients(clients));
        }
    }
}


const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(ClientsAPI);
export default ClientsContainer;