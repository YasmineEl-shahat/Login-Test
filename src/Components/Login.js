import React, { Component } from 'react';
import AssureLogin from './AssureLogin';
import "../styles/login.css";
import { Link } from 'react-router-dom';
class Login extends Component {
    state = { 
        userName: "",
        password: "",
        error:""
     }
     
     async componentWillMount(){
        await AssureLogin(this.props);

        if(this.props.location.state){
            this.setState({
                error: this.props.location.state.error
            })
        }
        
     }
     saveLogin= () => {
         let loginData = {
             userName : this.state.userName,
             password: this.state.password
         }
         window.localStorage.setItem("loginData", JSON.stringify(loginData));
     }
    render() { 
        return (
            
        <>
        
            <div className="center">
                <h1>Login</h1>
                {this.state.error && <div style={{textAlign:"center"}} className="alert alert-danger">{this.state.error}</div>} 
                <form onSubmit={this.saveLogin} >
                    <div className="form-group">
                        <div className="txt_field">
                            <input name="username" value={this.state.userName} onChange={e => {
                                this.setState({
                                    userName: e.target.value
                                })
                            }} required /> 
                            <span></span>
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="txt_field"> 
                            <input name="password" type="password" value={this.state.password} onChange={e => {
                                this.setState({
                                    password: e.target.value
                                })
                            }} required />
                            <span></span>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input type="submit" value="Login"/> 
                    </div>
                    <div className="signup_link">
                        Not a member? <Link to="/register">Signup</Link>
                    </div>
                </form>
            </div>
        </> );
    }
}
 
export default Login;