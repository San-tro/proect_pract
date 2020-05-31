import axios from "axios";

const GET_TICKETS = 'GET_TICKETS';
const NEW_TICKET ='NEW_TICKET';
const EDIT_TICKET ='EDIT_TICKET';
const GET_TICKET='GET_TICKET';

let initialState ={
    tickets: [

    ],
    ticket:[

    ]
}

const servicesReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case GET_TICKET:
            return { ...state, ticket:action.tickets}

        case EDIT_TICKET:
            let editTicket=   action.ticket;
            axios.post("http://localhost:3001/api/editTicket/",editTicket)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return state

        case GET_TICKETS:

            return {...state, tickets: action.tickets}

        case NEW_TICKET:

            let newTicket=   action.service;
            axios.put("http://localhost:3001/api/newTicket/",newTicket)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return {...state, newTicket }

        default: return state;
    }

}

export const getTickets= (tickets) => ({type:GET_TICKETS, tickets})
export const newTicketCreate = (tickets) => ({type:NEW_TICKET, tickets})
export const editTicket  = (tickets) => ({type:EDIT_TICKET, tickets})
export const getTicket = (tickets) => ({type:GET_TICKET, tickets})
export default servicesReducer;