import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

let Header = (props) =>{
  let RegisterData = JSON.parse(window.localStorage.getItem("RegisterData"));
  let loginData = JSON.parse(window.localStorage.getItem("loginData"));
  
  let cartDevices = JSON.parse(window.localStorage.getItem("devices"))? JSON.parse(window.localStorage.getItem("devices")): [];
  let cartCount = cartDevices.length;

  
  let totalPrice = 0;
  cartDevices.forEach(p => totalPrice += p.price);
  
  function showCart (){
    let cartOverlay = document.querySelector(".cart-overlay");
    let cart = document.querySelector(".cart");
    cartOverlay.classList.add("showCart");
    cart.classList.add("transferCart");
  }
  function hideCart (){
    let cartOverlay = document.querySelector(".cart-overlay");
    let cart = document.querySelector(".cart");
    cartOverlay.classList.remove("showCart");
    cart.classList.remove("transferCart");
  }
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
                    <button  onClick={showCart} className="btn  btn-primary" >Cart <i class="fas fa-shopping-cart  "></i><span className="cart-items">{cartCount}</span></button>
                  <li className="nav-item">
                   {!(loginData || RegisterData) && <Link to="/login"><i class="fas fa-user text-white"></i></Link>}
                   {loginData && <button  className="btn  btn-black text-white userbtn">Hello, {loginData.userName}</button>}
                   {RegisterData && <button  className="btn  btn-black text-white userbtn">Hello, {RegisterData.userName}</button>}
                   {(loginData || RegisterData) &&<button onClick={() => {Logout(props.props)}} className="box">Sign out</button>}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link  text-white" to="/about">About us</Link>
                  </li>
              </ul>    
            </div>
        </div>
      </nav>
    

    <div className="cart-overlay">
        <div className="cart">
            <span onClick={hideCart} className="close-cart">
                <i className="fas fa-window-close"></i>
            </span>
            <h2>your cart</h2>
            <div className="cart-content">
                {cartDevices.map(device =>{
                  return (
                    <>
                      <div className="cart-item">
                        <img src={`/images/${device.image}`} alt="" />
                        <div>
                          <h4>{device.name}</h4>
                          <h5>${device.price}</h5>
                          <span onClick={() => props.removeDev(device.id)} class="remove-item">remove</span>
                        </div>
                      </div>
                    </>
                  )
                })}
            </div>
            <div className="cart-footer">
                <h3>your total : $ <span className="cart-total">{totalPrice}</span></h3>
                <button onClick={props.clear}className="clear-cart banner-btn">clear cart</button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header;