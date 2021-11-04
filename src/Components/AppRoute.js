import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import login from './Login';
import Signup from "./Signup";
class AppRoute extends React.Component {
    state={

    }
    render() { 
        return (
            <Router>
                <Route path="/login" component={login} exact />
                <Route path="/register" component={Signup} exact />
                <Route path="/" component={Home} exact/>         
            </Router>
        );
    }
}
 
export default AppRoute;