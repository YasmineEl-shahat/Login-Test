import React from "react";
import Header from './Header';
import "../styles/details.css";


export default class Details extends React.Component{
    state={
        notebooks:"",
        image: '',
        price: '',
        name:'',
        smartphones:"",
        
    }
     show (){
        let Info = document.querySelector(".info1");
        Info.classList.add("show");
      }
      hide(){
        let Info = document.querySelector(".info1");
        Info.classList.remove("show");
          
      }
    
   

    render(){
        return(
            <>
                        <Header/>
        

            <div className="detail">
              <img className="" src={`/images/${this.props.location.ref.image}`} alt="this is laptop"/>
              <div className="n">
              <span>  {this.props.location.ref.name}</span>
              <h3>$  {this.props.location.ref.price}</h3>
              <button  className="btn  btn-success btns" >Buy Now<i class="fas fa-shopping-cart "></i> </button> 
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