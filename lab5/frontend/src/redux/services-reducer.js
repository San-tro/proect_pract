import axios from "axios";

const GET_SERVICES = 'GET_SERVICES';
const NEW_SERVICE ='NEW_SERVICES';
const EDIT_SERVICE ='EDIT_SERVICE';
const GET_SERVICE='GET_SERVICE';

let initialState ={
    services: [

    ],
    service:[

    ]
}

const servicesReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case GET_SERVICE:
            return { ...state, service:action.service}

        case EDIT_SERVICE:
            let editService=   action.service;
            axios.post("http://localhost:3001/api/editService/",editService)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return state

        case GET_SERVICES:

            return {...state, services: action.services}

        case NEW_SERVICE:

            let newService=   action.service;
            axios.put("http://localhost:3001/api/newService/",newService)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return {...state, newService }

        default: return state;
    }

}

export const getServices= (services) => ({type:GET_SERVICES, services})
export const newServiceCreate = (service) => ({type:NEW_SERVICE, service})
export const editService  = (service) => ({type:EDIT_SERVICE, service})
export const getService = (service) => ({type:GET_SERVICE, service})
export default servicesReducer;