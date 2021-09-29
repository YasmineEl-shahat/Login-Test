import React from "react";
import axios from "axios";
import Header from './Header';
import { Link } from "react-router-dom";
export default class Home extends React.Component{
    state={
        notebooks:"",
        smartphones:"",
        error: "",
        devices:JSON.parse(window.localStorage.getItem("devices"))? JSON.parse(window.localStorage.getItem("devices")): []
    }
    async componentDidMount()
    {
        await axios.get("http://localhost:3000/notebooks").then(res => {
        this.setState({
            notebooks: res.data
            })
    
        }).catch(e =>{
            this.setState({
                error: e
            })
        });
        axios.get("http://localhost:3000/smartphones").then(res=>{
            this.setState({
                smartphones: res.data
            })
        }).catch(e =>{
            this.setState({
                error: e
            })
        });
    };
    
    AddToCart (prod){
        let devices = [...this.state.devices];
        if(!devices.find(product => prod === product)) devices.push(prod);
        window.localStorage.setItem("devices", JSON.stringify(devices)); 
        this.setState({
            devices
        });
    }
    removeDev = (id) => {
        let devices = [...this.state.devices]; 
        devices = devices.filter(p => p.id !== id);
        if(devices.length === 0){
          window.localStorage.removeItem("devices");
        }
        window.localStorage.setItem("devices", JSON.stringify(devices));
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
    render()
    {
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
                    <Header props={this.props} removeDev={this.removeDev} clear={this.clear}/>


                    <div  className="big">   
                        <div className="labs" >
                            {this.state.notebooks.map((note, index) => {
                                return (
                                    <>
                                        <div className="device">
                                            <img className="" src={`/images/${note.image}`} alt="this is laptop"/>
                                            <Link to={
                                                    {
                                                        pathname: `/${note.category}/${note.id}`
                                                    }
                                                    }
                                             className="name">{note.name}</Link>
                                            <span>$ {note.price}</span>
                                            <button  onClick={() => this.AddToCart(note)} className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
                                        </div>
                                    </>         
                                )})
                            }
                    
                            {this.state.smartphones.map((phone,index)=>{
                                return(
                                    <>
                                        <div className=" device">
                                            <img src={`/images/${phone.image}`} alt="this is laptop" />
                                            <Link to={
                                            {
                                                pathname: `/${phone.category}/${phone.id}`,
                                            
                                            }
                                            } className="name">{phone.name}</Link>
                                            <span>${phone.price}</span>
                                            <button  onClick={() => this.AddToCart(phone)} className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>     
                                        </div>
                                    </>
                                )
                                })
                            }
                        </div>
                    </div>
                </>
            )
        }
    }
}
          

      

