import React from "react";
import axios from "axios";
import Header from './Header';
export default class Home extends React.Component{
    state={
        notebooks:"",
        id:'',
        image: '',
        price: '',
        name:'',
        smartphones:""

    }
    componentDidMount(){
          axios.get("http://localhost:3000/notebooks").then(res => {
            this.setState({
               notebooks: res.data
             })
        
           });
           axios.get("http://localhost:3000/smartphones").then(res=>{
               this.setState({
                   smartphones:res.data
               })
           })
          
          };
          render() {
            if (!this.state.notebooks || !this.state.smartphones) {
                return (
                    <div>
                        Loading Data ..........
                    </div>
                )
            }
            else {
                return (
                    <>
                           <Header/>


                        <div  className="big">
                        
                                
                                    
                                   
                                            <div className="labs" >
                                            {this.state.notebooks.map((note, index) => {
                            return (
                                <frameElement>
                                    <div className="device">
                                            <img className="" src={`/images/${note.image}`} alt="this is laptop"/>
                                            <a href="#">{note.name}</a>
                                            <span>$ {note.price }</span>
                                            <button  className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
                                        </div>
                                </frameElement>
                                            
                            )})}
                      
                        {this.state.smartphones.map((phone,index)=>{
                                return(
                                    <frameElement>
                                        <div className=" device">
                                   
                                    <img src={`/images/${phone.image}`} alt="this is laptop" />
                                    <a href="#">{phone.name}</a>
                                    <span>${phone.price}</span>
                                    <button  className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
                                  
                            </div>

                                    </frameElement>
                                )
                            })}
                            </div>
                    
                        </div>
                    </>
                )
            }
        }
    }
          

      

