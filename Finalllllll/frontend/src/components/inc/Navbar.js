import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';

function Navbar(){
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark  shadow"  style={{ backgroundColor: "#26272b"}}>
        <div className="container-fluid">
           
       
        <img src={Logo}   width="100"  height="50"  style={{ marginLeft : 350}}  alt="..."/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginLeft : 150}} >  {/* mx-auto to center ul  */}
              <li className="nav-item" >
                
                <Link to="/" className="nav-link active"  >Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link active">About Us</Link>
              </li>
              <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact Us</Link>
              </li> 
              <li className="nav-item">
              <Link to="/login" className="nav-link active">Login</Link>
              </li> 
            </ul>
            
          </div>
        </div>
      </nav>
    );
}

export default Navbar;

