import {connect} from "react-redux";
import {getServices} from "./../../redux/services-reducer"
import React from "react";
import axios from "axios";
import Services from "./Services";

class ServicesAPI extends React.Component{

    componentDidMount() {

        axios.get("http://localhost:3001/api/getServices/")
            .then(res => {
                this.props.getServices(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <Services services={this.props.services} />
    }
}

let mapStateToProps =(state) =>{
    return {
        services: state.servicesReducer.services
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getServices:(clients)=>{
            dispatch(getServices(clients));
        }
    }
}


const ServicesContainer = connect(mapStateToProps,mapDispatchToProps)(ServicesAPI);
export default ServicesContainer;