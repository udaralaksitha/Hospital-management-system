import React, {Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CPatientDetails from './components/CPatient/CPatientDetails';
import CreateCPatient from './components/CPatient/CreateCPatient';
import EditCPatient from './components/CPatient/EditCPatient';
import Home from './components/CPatient/CHome';
import NavBar from './components/NavBar';
import "./App.css";
import Sidebar from "./components/Sidebar";
import SidebarData  from "./components/SidebarData";
import Footer from "./components/Footer";
import Webhome from './components/pages/Webhome';
import PatientTable from './components/PatientReg/PHome';
import LabTable from './components/lab/LHome';
import RegisterPatients from './components/PatientReg/RegisterPatients';
import CreateLabtest from './components/lab/CreateLabtest';
import OperationTable from './components/OpTheatre/OHome';
import CreateOperation from './components/OpTheatre/CreateOperation';
import EditPatients from './components/PatientReg/EditPatients';
import EditLabtest from './components/lab/EditLabtest';
import PatientsDet from './components/PatientReg/PatientsDet';
import ChannDet from './components/e-chan/ChannDet';
import LabtestDetails from './components/lab/LabtestDetails';
import EditOperation from './components/OpTheatre/EditOperation';
import Createdoctordetail from './components/DoctorDet/Createdoctordetail';
import Editdoctordetail from './components/DoctorDet/Editdoctordetail';
import doctordetails from './components/DoctorDet/getdoctordetails';
import DHome from './components/DoctorDet/DHome';
import Report from './components/lab/Report';
import EditChann from './components/e-chan/EditChann';
import ChannTable from './components/e-chan/ChannHome';
import RegisterChann from './components/e-chan/RegisterChann'; 


export default class App extends Component {
  render(){
    return (
      <div >
      <div >
      <BrowserRouter>
      <NavBar/>
      <div >
      
      {/* <div className = "container" style={{position:'absolute', left:'2%'}}> */}
        
        {/* <Route path = "/" exact component = {Webhome}></Route> */}
        <Route path = "/patients" exact component = {PatientTable}></Route>
        <Route path = "/echan" exact component = {ChannTable}></Route>
        <Route path = "/labtest"  exact component = {LabTable}></Route>
        <Route path = "/cpatients"  component = {Home}></Route>
        <Route path = "/doctor" exact component = {DHome}></Route>
        <Route path = "/optheatre"  component = {OperationTable}></Route>
        <Route path = "/saveop"  component = {CreateOperation}></Route>
        <Route path = "/save" component = {CreateCPatient}></Route>
        <Route path = "/saveChann" component = {RegisterChann}></Route>
        <Route path = "/savePatient" component = {RegisterPatients}></Route>
        <Route path = "/dsave" component = {Createdoctordetail}></Route> {/* ///////// */}
        <Route path = "/saveLabtest" component = {CreateLabtest}></Route>
        <Route path = "/updates/:id" component = {EditCPatient}></Route>
        <Route path = "/opupdate/:id" component = {EditOperation}></Route>
        <Route path = "/update/:id" component = {EditPatients}></Route>
        <Route path = "/echan/update/:id" component = {EditChann}></Route>
        <Route path = "/labupdate/:id" component = {EditLabtest}></Route>
        <Route path = "/doctor/update:id" component = {Editdoctordetail}></Route>
        <Route path = "/CovidPatients/:id" component = {CPatientDetails}></Route>
        <Route path = "/patients/:id" component = {PatientsDet}></Route>
        <Route path = "/echan/:id" exact component = {ChannDet}></Route>
        <Route path = "/labtest/:id" component = {LabtestDetails}></Route>
        <Route path = "/doctor/:id" exact component = {doctordetails}></Route>    
        <Route path = "/" exact component = {Webhome}></Route>
        <Route path = "/report" exact component = {Report}></Route>
      </div>
        
      </BrowserRouter>
      
      </div>
      <Footer/>
      </div>
      
    )
  }
}

      
      
      