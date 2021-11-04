import React, { Component } from 'react';
import "../styles/login.css";
import { Link } from 'react-router-dom';
import AssureRegister from './AssureRegister';


class Signup extends Component {
    state = { 
        userName: "",
        email: "",
        password: "",
        confirm: "",
        error:"",
        emailErr:"",
        passErr: ""
     }
     
     async componentWillMount(){
        await AssureRegister(this.props);
       
        if(this.props.location.state){
            this.setState({
                error: this.props.location.state.error
            })
        }else{
            this.setState({
                error: ""
            })
            
        }
        
     }

     register= (e) => {
         let RegisterData = {
             userName : this.state.userName,
             email: this.state.email,
             password: this.state.password
         }
         window.localStorage.setItem("RegisterData", JSON.stringify(RegisterData));
         if(!this.validateEmail()){
           e.preventDefault();  
            this.setState({
                emailErr: "lol"
            })
            window.localStorage.removeItem("RegisterData");
         }else{
            this.setState({
                emailErr: ""
            })  
          }
         if(!this.validatePass()){
             e.preventDefault();  
             this.setState({
                 passErr: "lol"
             })
            window.localStorage.removeItem("RegisterData");
          }else{
            this.setState({
                passErr: ""
            })  
          }
        }
     validateEmail = () =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
     }
     validatePass = () => {
         return this.state.password === this.state.confirm;
     }
    render() { 
        return (
            
        <>
        
            <div className="center">
                <h1>Create account</h1>
                {this.state.error && <div style={{textAlign:"center"}} className="alert alert-danger">{this.state.error}</div>} 
                <form onSubmit={(e)=> this.register(e)} >
                    <div className="form-group">
                        <div className="txt_field">
                            <input  name="username" value={this.state.userName} onChange={e => {
                                this.setState({
                                    userName: e.target.value
                                })
                            }} required /> 
                            <span></span>
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="txt_field"> 
                            <input name="email" type="email" value={this.state.email} onChange={e => {
                                this.setState({
                                    email: e.target.value
                                })
                            }} required />
                            <span></span>
                            <label htmlFor="email">Email</label>
                            
                        </div>
                        {this.state.emailErr && <span className="espan">!Invalid email format</span>}
                        <div className="txt_field"> 
                            <input name="password" type="password" value={this.state.password} onChange={e => {
                                this.setState({
                                    password: e.target.value
                                })
                            }} required />
                            <span></span>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="txt_field"> 
                            <input name="confirm" type="password" value={this.state.confirm} onChange={e => {
                                this.setState({
                                    confirm: e.target.value
                                })
                            }} required />
                            <span></span>
                            <label htmlFor="confirm">Re-enter password</label>
                        </div>
                        {this.state.passErr && <span className="espan">!Passwords should match</span>}
                        
                        <input type="submit" value="Sign up"/> 
                    </div>
                    <div className="signup_link">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </div>
                </form>
            </div>
        </> 
        );
    }
}
 
export default Signup;
