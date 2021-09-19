import React from "react";
import Header from './Header';

export default class Details extends React.Component{
    state={
      devices:JSON.parse(window.localStorage.getItem("devices"))? JSON.parse(window.localStorage.getItem("devices")): []
    }
     show (){
        let Info = document.querySelector(".info1");
        Info.classList.add("show");
      }
      hide(){
        let Info = document.querySelector(".info1");
        Info.classList.remove("show");
          
      }
    
   
      AddToCart (prod){
        let devices = [...this.state.devices];
        if(!devices.find(product => prod === product)) devices.push(prod);
        this.setState({
            devices
        });
        window.localStorage.setItem("devices", JSON.stringify(devices)); 
    }
    render(){
        return(
            <>
            <Header props={this.props}/>
        

            <div className="detail">
              <img className="" src={`/images/${this.props.location.ref.image}`} alt="this is laptop"/>
              <div className="n">
              <span>  {this.props.location.ref.name}</span>
              <h3>$  {this.props.location.ref.price}</h3>
              <button  onClick={() => this.AddToCart(this.props.location.ref)} className="btn  btn-success btns" >Buy Now<i class="fas fa-shopping-cart "></i> </button> 
              <button  className="btn  btn-primary btns" onClick={this.show} >more information</button>  
              
    

              </div> 
                 
            </div>
            <div className="info1">
              <div >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</div>
              <button  className="btn  btn-danger btns" onClick={this.hide} >Close</button>  
           </div>
            
            </>
        ) 
    }










}