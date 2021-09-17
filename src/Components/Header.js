import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

let Header = (props) =>{
  let RegisterData = JSON.parse(window.localStorage.getItem("RegisterData"));
  let loginData = JSON.parse(window.localStorage.getItem("loginData"));

  return(
    <>
    
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
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
                  <li className="nav-item">
                   {!(loginData || RegisterData) && <Link to="/login"><i class="fas fa-user text-white"></i></Link>}
                   {loginData && <button  className="btn  btn-black text-white userbtn">Hello, {loginData.userName}</button>}
                   {RegisterData && <button  className="btn  btn-black text-white userbtn">Hello, {RegisterData.userName}</button>}
                   {(loginData || RegisterData) &&<button onClick={() => {Logout(props.props)}} className="box">Sign out</button>}
                  </li>
              </ul>    
            </div>
        </div>
      </nav>
    </>
    
  )
}

export default Header;