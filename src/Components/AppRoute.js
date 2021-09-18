import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Notebooks from './Notebooks';
import Smartphones from './Smartphone';
import login from './Login';
import Signup from "./Signup";
import Details from './Details';

class AppRoute extends React.Component {
    state={

    }
    render() { 
        return (
            <Router>
                <Route path="/login" component={login} exact />
                <Route path="/register" component={Signup} exact />
                <Route path="/" component={Home} exact/>
                <Route path="/notebooks" component={Notebooks} exact />
                <Route path="/Smartphone" component={Smartphones} exact/>  
                <Route path="/Details" component={Details} exact/>        
            </Router>
        );
    }
}
 
export default AppRoute;