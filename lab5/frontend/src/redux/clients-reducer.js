import axios from "axios";

const GET_CLIENTS = 'GET_CLIENTS';
const NEW_CLIENT ='NEW_CLIENT';
const EDIT_CLIENT ='EDIT_CLIENT';
const GET_CLIENT='GET_CLIENT';

let initialState ={
    clients: [

    ],
    client:[

    ]
}

const clientsReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case GET_CLIENT:
            return { ...state, client:action.client}

        case EDIT_CLIENT:
            let editClient =   action.client;
            axios.post("http://localhost:3001/api/editClient/",editClient)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return state

        case GET_CLIENTS:

            return {...state, clients: action.clients}

        case NEW_CLIENT:

            let newClient =   action.client;
            axios.put("http://localhost:3001/api/newClient/",newClient)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return {...state, newClient }

        default: return state;
    }

}

export const getClients= (clients) => ({type:GET_CLIENTS, clients})
export const newClientCreate = (client) => ({type:NEW_CLIENT, client})
export const editClient = (client) => ({type:EDIT_CLIENT, client})
export const getClient = (client) => ({type:GET_CLIENT, client})
export default clientsReducer;