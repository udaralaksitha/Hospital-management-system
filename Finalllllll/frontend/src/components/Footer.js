import React, {Component } from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'
import './toppage.css'

function Footer(){
  return (
    <div>
    

        <body>
        <noscript>GIT TEST 1</noscript>
        <div id="root"></div>

        <footer class="site-footer mt-auto">

              <div style={{textAlign: 'center', paddingTop:'10px'}}>
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
              {/* <p class="copyright" style={{textAlign: 'center'}}>Copyrights 2021 © Medi+</p> */}
              </footer>
        <a className="gototop" href="#"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
        </body>
        </div>
  )
}
export default Footer;