import {combineReducers, createStore} from "redux";
import clientsReducer from "./clients-reducer";
import servicesReducer from "./services-reducer";
import ticketsReducer from "./tickets-reducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    clientsReducer: clientsReducer,
    servicesReducer: servicesReducer,
   ticketsReducer: ticketsReducer,
    form: formReducer
})
let store = createStore(reducers);

export default store;