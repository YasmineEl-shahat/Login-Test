import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


let Header = () =>{
  return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-white "   to="/" >ALLProducts</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white " to="/Smartphone">Smartphones</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link  text-white" to="/Notebooks">Notebooks</Link>
               

                </li>
                <button  className="btn  btn-primary  " >Cart <i class="fas fa-shopping-cart  "></i></button>
                <button  className="btn  btn-black text-white  " > <i class="fas fa-user text-white"></i></button>




                



               
            </ul>

           
            </div>
        </div>
        </nav>
</>
    
  )
}

export default Header;