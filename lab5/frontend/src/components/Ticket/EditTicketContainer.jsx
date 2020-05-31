import {connect} from "react-redux";
import {editTicket,getTicket} from "./../../redux/tickets-reducer"
import React from "react";
import axios from "axios";
import TicketService from "./TicketService";
import {withRouter} from "react-router-dom";

class EditClientsAPI extends React.Component{


    componentDidMount() {

        let ticketId = {id: this.props.match.params.ticketId};

        axios.post("http://localhost:3001/api/getTicket/",ticketId)
            .then(res => {
                this.props.getTicket(res.data[0]);
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <TicketService client={this.props} />
    }
}

let mapStateToProps =(state) =>{
    return {
        client: state.ticketsReducer.ticket
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        editTicket:(ticket)=>{
            dispatch(editTicket(ticket));
        },
        getTicket:(client)=>{
            dispatch(getTicket(client));
        }
    }
}

let wr =  withRouter(EditClientsAPI);
const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(EditClientsAPI);
export default ClientsContainer;