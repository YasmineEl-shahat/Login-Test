import React from "react";
import axios from "axios";
import Header from "./Header";
export default class Notebooks extends React.Component{
    state={
        notebooks:"",
        id:'',
        image: '',
        price: '',
        name:'',
    }
    componentDidMount(){
        axios.get("http://localhost:3000/notebooks").then(res => {
        this.setState({
            notebooks: res.data
            })
    
        });
    };

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
                    <Header props={this.props}/>

                
                <div className="big">
                    <div className="labs">
                        {this.state.notebooks.map((note,index)=>{
                            return(
                                <>
                                    <div className="device">
                                        <img className="" src={`/images/${note.image}`} alt="this is laptop"/>
                                        <a href="#">{note.name}</a>
                                        <span>${note.price}</span>
                                        <button  className="btn  btn-success " >Add to Cart<i class="fas fa-shopping-cart "></i> </button>
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