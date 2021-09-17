import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import axios from 'axios';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Notebooks from './Notebooks';
import Smartphones from './Smartphone';
import AppRoute from './AppRoute';


class App extends React.Component {
  state = {
    dataa:"" ,
  }
//   componentDidMount(){
//     axios.get("http://localhost:3000/notebooks/1").then(res => {
//     this.setState({
//       dataa: res.data
//     }) 

//   });
  
//  };

 

 render (){
   return (
       <>
       < AppRoute/>

        
       {/* <img src={`/images/${this.state.dataa.image}`} alt="this is laptop"/> */}
         </>
   );

 }

}
export default App;
