import React from "react";
import Slider1 from '../images/image44.jpg';
//import Slider2 from '../images/image22.jpeg';
import Slider3 from '../images/image11.jpg';
import Slider4 from '../images/image33.jpg';
import Slider5 from '../images/image5.jpg';
import Navbar from "../NavBar";


function Slider() {
    return (
        <div >
            
        <div >
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
               
                
        </div>
            <div class="carousel-inner"  data-interval="1"  >
                <div class="carousel-item active" style={{marginTop:'66px'}}>
                <img src={Slider1} class="d-block mx-auto w-100" height="555" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div class="card">
                <div class="card-body">    
                <h3 style={{ color: "#000000"}}><b>Medi+</b>Hospital Management System</h3> 
                </div>
                </div>   
                </div>
                </div>
                <div class="carousel-item" style={{marginTop:'66px'}}>
                    <img src={Slider3} class="d-block w-100" height="555" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div class="card">
                <div class="card-body">  
                    <h3 style={{ color: "#000000"}} ><b>Medi+</b>Health is wealth</h3>   
                </div>   
                </div> 
                </div>
                </div>

                <div class="carousel-item" style={{marginTop:'66px'}}>
                    <img src={Slider4} class="d-block w-100" height="555" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div class="card">
                <div class="card-body">  
                    <h3 style={{ color: "#000000"}} ><b>Medi+</b>Find the best doctors</h3>
                </div>   
                </div>
                </div> 
                </div>

                <div class="carousel-item" style={{marginTop:'66px'}}>
                    <img src={Slider5} class="d-block w-100" height="555" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div class="card">
                <div class="card-body">  
                    <h3 style={{ color: "#000000"}} ><b>Medi+</b>Together against Covid-19</h3>
                </div>   
                </div>
                </div> 
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            </div>
    );
}

export default Slider;