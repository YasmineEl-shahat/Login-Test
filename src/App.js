import axios from 'axios';
import React from 'react';

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
    
       {/* <img src={`/images/${this.state.dataa.image}`} alt="this is laptop"/> */}
     </>
   );

 }
}

export default App;
