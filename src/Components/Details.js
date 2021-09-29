import React from "react";
import axios from "axios";
import Header from './Header';

export default class Details extends React.Component{
    state={
      devices:JSON.parse(window.localStorage.getItem("devices"))? JSON.parse(window.localStorage.getItem("devices")): [],
      device: {}
    }
    show (){
      let Info = document.querySelector(".info1");
      Info.classList.add("show");
    }
    hide(){
      let Info = document.querySelector(".info1");
      Info.classList.remove("show");
    }
    
    componentDidMount(){
      const id = this.props.match.params.id;
      const category = this.props.match.params.category;
      axios.get(`http://localhost:3000/${category}/${id}`).then(res => {
      this.setState({
          device: res.data
          })
  
      });
  };
    AddToCart (prod){
        let devices = [...this.state.devices];
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

        return(
            <>
            <Header props={this.props} removeDev={this.removeDev} clear={this.clear}/>

            <div className="detail">
              <img className="" src={`/images/${this.state.device.image}`} alt="this is laptop"/>
              <div className="n">
              <span>  {this.state.device.name}</span>
              <h3>$  {this.state.device.price}</h3>
              <button  onClick={() => this.AddToCart(this.state.device)} className="btn  btn-success btns" >Buy Now<i class="fas fa-shopping-cart "></i> </button> 
              <button  className="btn  btn-primary btns" onClick={this.show} >more information</button>  
              
    

              </div> 
                 
            </div>
            <div className="info1">
              <div className="inf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</div>
              <button  className="btn  btn-danger closeInf" onClick={this.hide} >Close</button>  
           </div>
            
            </>
        ) 
    }










}