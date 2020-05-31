import {connect} from "react-redux";
import {editClient,getClient} from "./../../redux/clients-reducer"
import React from "react";
import axios from "axios";
import EditClient from "./EditClient";
import {withRouter} from "react-router-dom";

class EditClientsAPI extends React.Component{


    componentDidMount() {

        let clientId = {id: this.props.match.params.clientId};

        axios.post("http://localhost:3001/api/getClient/",clientId)
            .then(res => {
                this.props.getClient(res.data[0]);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <EditClient client={this.props} />
    }
}

let mapStateToProps =(state) =>{
    return {
        client: state.clientsReducer.client
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        editClient:(client)=>{
            dispatch(editClient(client));
        },
        getClient:(client)=>{
            dispatch(getClient(client));
        }
    }
}

let wr =  withRouter(EditClientsAPI);
const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(EditClientsAPI);
export default ClientsContainer;