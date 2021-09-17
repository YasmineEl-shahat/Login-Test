import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Notebooks from './Notebooks';
import Smartphones from './Smartphone';

class AppRoute extends React.Component {
    state={

    }
    render() { 
        return (
            <Router>
                            <Route path="/Header" component={Header} />


                <Route path="/" component={Home} exact/>
                <Route path="/notebooks" component={Notebooks} exact />
                <Route path="/Smartphone" component={Smartphones} exact/>

                

                
            </Router>
        );
    }
}
 
export default AppRoute;