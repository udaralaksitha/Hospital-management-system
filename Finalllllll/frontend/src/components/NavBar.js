import React, {Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from './images/logo.png';

function Navbar(){
    return (

        <div style={{position:'absolute', left:'0%', right:'0%', height:'100px'}}>
        <nav className="navbar navbar-expand-lg navbar-dark  shadow"  style={{ backgroundColor: "#01172C"}}>
             
        <div className="container-fluid">
           
       
        <img src={Logo}   width="100"  height="50"  style={{ marginLeft : 350 , borderRadius:'5px'}}  alt="..."/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginLeft : 150}} >  {/* mx-auto to center ul  */}
            <li className="nav-item" style={{ zIndex:'1' }} >

            <Link to="/" className="nav-link active" style={{ textDecoration:'none', fontSize:'17px' }}>Home</Link>
              </li >
              <li className="nav-item" style={{ zIndex:'1' }}>
              <Link to="/about" className="nav-link active" style={{ textDecoration:'none', fontSize:'17px'}}>About Us</Link>
              </li>
              <li className="nav-item" style={{ zIndex:'1' }}>
              <Link to="/contact" className="nav-link active" style={{ textDecoration:'none', fontSize:'17px'}}>Contact Us</Link>
              </li> 
              <li className="nav-item" style={{ zIndex:'1' }}>
              <Link to="/login" className="nav-link active" style={{ textDecoration:'none', fontSize:'17px'}}>Login</Link>
              </li> 
            </ul>
            
          </div>
        </div>
      </nav>
      </div>

    );
}

export default Navbar;
