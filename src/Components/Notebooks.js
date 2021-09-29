import React from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class Notebooks extends React.Component{
    state={
        notebooks:"",
        devices:JSON.parse(window.localStorage.getItem("devices"))? JSON.parse(window.localStorage.getItem("devices")): []
    }
    componentDidMount(){
        axios.get("http://localhost:3000/notebooks").then(res => {
        this.setState({
            notebooks: res.data
            })
    
        });
    };
    AddToCart (prod){
        let devices = [...this.state.devices]
        if(!devices.find(product => prod === product)) devices.push(prod);
        this.setState({
            devices
        });
        window.localStorage.setItem("devices", JSON.stringify(devices));
    }
    removeDev = (id) => {
        let devices = [...this.state.devices]; 
        devices = devices.filter(p => p.id !== id);
        if(devices.length === 0){
          window.localStorage.removeItem("devices");
        }
        else window.localStorage.setItem("devices", JSON.stringify(devices));
        this.setState({
            devices
        });
      }
      clear = () =>{
        window.localStorage.removeItem("devices");
        let devices = [...this.state.devices]; 
        devices = [];
        this.setState({
            devices
        });
      }
    render(){
        if(!this.state.notebooks){
            return(
                <div>
                    loding data...
                </div>
            )
        }
        else{
            return(
                <>
                   <Header props={this.props} removeDev={this.removeDev} clear={this.clear}/>

                
                <div className="big">
                    <div className="labs">
                        {this.state.notebooks.map((note,index)=>{
                            return(
                                <>
                                    <div className="device">
                                        <img className="" src={`/images/${note.image}`} alt="this is laptop"/>
                                        <Link to={
                                            {
                                                pathname: `/${note.category}/${note.id}`
                                            }
                                            } className="name">{note.name}</Link>
                                        <span>${note.price}</span>
                                        <button onClick={() => this.AddToCart(note)} className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>

                </>
            )
        }
    }
}