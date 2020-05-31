import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import ClientsContainer from "./components/Clients/Clients.Container";
import NewClientContainer from "./components/Clients/NewClientContainer"
import EditClientContainer from "./components/Clients/EditClientContainer";
import EditServiceContainer from "./components/Services/EditServiceContainer";
import NewServiceContainer from "./components/Services/NewServiceContainer";
import ServicesContainer from "./components/Services/Services.Container";
import TicketsContainer from "./components/Ticket/TicketsContainer";
import NewTicketContainer from "./components/Ticket/NewTicketContainer";
import EditTicketContainer from "./components/Ticket/EditTicketContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='content'>
        <Route path='/clients' component = {ClientsContainer} />
          <Route path='/newClient' component = {NewClientContainer} />
          <Route path='/editClient/:clientId' component = {EditClientContainer} />

          <Route path='/services' component = {ServicesContainer} />
          <Route path='/newService' component = {NewServiceContainer} />
          <Route path='/editService/:seviceId' component = {EditServiceContainer} />

          <Route path='/tickets' component = {TicketsContainer} />
          <Route path='/newTicket' component = {NewTicketContainer} />
          <Route path='/editTicket/:ticketId' component = {EditTicketContainer} />


      </div>
    </div>
  );
}

export default App;
