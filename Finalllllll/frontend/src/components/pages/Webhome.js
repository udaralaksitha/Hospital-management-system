import React from "react";
import Slider from "../inc/Slider";
import NavBar from "../NavBar";

function Webhome(){
    return (
        <div> <Slider/>
        <div style={{marginTop:'15px'}}>
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
     
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" color="#206caa" >
                <div class="btn-group me-2" role="group" aria-label="First group" >
                
                    <button type="button" class="btn btn-primary" > <a href="/patients" style={{textDecoration:'none', color:'white'}}> Patient Regsitration Management</a></button>
                    <button type="button" class="btn btn-primary"><a href="/doctor" style={{textDecoration:'none', color:'white'}}>Doctor Details Management</a></button>
                    <button type="button" class="btn btn-primary"><a href="/echan" style={{textDecoration:'none', color:'white'}}>E-channeling</a></button>
                    <button type="button" class="btn btn-primary"><a href="/cpatients" style={{textDecoration:'none', color:'white'}}>Covid Unit Management</a></button>
                    <button type="button" class="btn btn-primary"><a href="/optheatre" style={{textDecoration:'none', color:'white'}}>Operation Theatre Management</a></button>
                    <button type="button" class="btn btn-primary"><a href="/labtest" style={{textDecoration:'none', color:'white'}}>Laboratory Management</a></button>
                    
                    
                </div>
                </div>
                {/* </div> */}

</div>
            </div>
            </div>
    );


}

export default Webhome;