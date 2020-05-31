import {connect} from "react-redux";
import {getTickets} from "./../../redux/tickets-reducer"
import React from "react";
import axios from "axios";
import Tickets from "./Tickets";

class TicketsAPI extends React.Component{

    componentDidMount() {

        axios.get("http://localhost:3001/api/getTickets/")
            .then(res => {
                this.props.getTickets(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <Tickets tickets={this.props.tickets} />
    }
}

let mapStateToProps =(state) =>{
    return {
        tickets: state.ticketsReducer.tickets
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getTickets:(tickets)=>{
            dispatch(getTickets(tickets));
        }
    }
}


const TicketsContainer = connect(mapStateToProps,mapDispatchToProps)(TicketsAPI);
export default TicketsContainer;