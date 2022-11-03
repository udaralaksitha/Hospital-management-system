import React, { Component } from 'react'
import axios from 'axios';
import '../table.css'
import Sidebar from '../Sidebar';
import {CSVLink, CSVDownload} from 'react-csv';
//import cpatients from models

export default class Home extends Component {
constructor(props){
  super(props);

  this.state = {
    CovidPatients:[],
    rows: []
  };
}

createData = (CovidPatientId, CovidPatientType, BodyTemperature, Symptoms,VaccineStatus,  PCRResult, VaccineName,DoseNumber, VNextDay, VTakenDay, PCRNextDate, LastDate) => {
  return { CovidPatientId, CovidPatientType, BodyTemperature, Symptoms, VaccineStatus, PCRResult, VaccineName, DoseNumber, VNextDay, VTakenDay, PCRNextDate, LastDate};
}

makeExcelData = (data) => {
  console.log("data ", data)
  const array = []
  data.map((row) => {
      array.push(this.createData(row.CovidPatientId, row.CovidPatientType, row.BodyTemperature, row.Symptoms, row.VaccineStatus, row.PCRResult, row.VaccineName, row.DoseNumber, row.VNextDay, row.VTakenDay, row.PCRNextDate, row.LastDate))
    // setRows(oldRows => [...oldRows, createData(row.firstName, row.lastName, row.email, row.contactNumber, row.dateOfBirth, row.address, row.raffleDrawNumber)])
    }
  )
  console.log("array ", array)
  this.setState({rows: array})
}


componentDidMount(){
  this.retrieveCovid();
}

retrieveCovid(){
  axios.get("http://localhost:8070/CovidPatients").then(res =>{
    if (res.data.success){
      this.setState({
        CovidPatients:res.data.existingCovidDetails
      });
      console.log(this.state.CovidPatients);
      this.makeExcelData(res.data.existingCovidDetails)
    }
  });
}

onDelete = (id) =>{ //implement a delete method to delete existing
  axios.delete(`http://localhost:8070/covid/delete/${id}`).then((res) =>{
    alert("Deleted successfully");
    this.retrieveCovid();
  })
}
filterData(CovidPatients,searchKey){//implement search method

  const result = CovidPatients.filter((CovidPatients) =>
    CovidPatients.CovidPatientId.toLowerCase().includes(searchKey) ||
    CovidPatients.CovidPatientType.toLowerCase().includes(searchKey) ||
    CovidPatients.VaccineStatus.toLowerCase().includes(searchKey) ||
    CovidPatients.PCRResult.toLowerCase().includes(searchKey) ||
    CovidPatients.PCRNextDate.toLowerCase().includes(searchKey)
  )
this.setState({CovidPatients:result})
}

handleSearchArea = (e) =>{//method to capture search inputs
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8070/CovidPatients").then(res =>{
    if (res.data.success){
      this.filterData(res.data.existingCovidDetails,searchKey)
    }
  });

}

render(){
  return (
    
      <div style={{position:'absolute', left:'7%', right:'2.5%' }}> <Sidebar/>
      <div className = "row" style = {{marginTop:'14px'}}>
        <div className = "col-lg-9 mt-2">
        </div>
        <div className="col-lg-3 ">
        <input
          className = "form-control"
          type = "search"
          placeholder = "Search"
          name = "searchQuery"
          onChange = {this.handleSearchArea}> 
        </input> 
        </div> 
      </div>
         <h4 style = {{marginTop:'40px'}}>All Covid related Patients Details</h4>
      {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/> */}
      <div style={{position:'absolute', left:'0%'}}>
      <button className="btn btn-success"><a href="/save"style={{textDecoration:'none',color:'white'}}> &nbsp;Register Covid Patient</a></button>  
    </div>
    <div style={{position:'absolute', left:'15%'}}>
      <button type="button" class="btn btn-primary">
        {this.state.rows && <CSVLink data={this.state.rows} style={{textDecoration:'none',color:'white' }}>Download Report</CSVLink>}
      </button>
    </div> 
      &nbsp;
      <table className = "table table-condensed table table-hover" style = {{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">PatientId</th>
              <th scope = "col">CovidPatientType</th>
              <th scope = "col">BodyTemperature</th>
              <th scope = "col">Symptoms</th>
              <th scope = "col">VaccineStatus</th>
              <th scope = "col">PCRResult</th>
              <th scope = "col">VaccineName</th>
              <th scope = "col">DoseNumber</th>
              <th scope = "col">VNextDay</th>
              <th scope = "col">VTakenDay</th>
              <th scope = "col">PCRNextDate</th>
              <th scope = "col">LastDate</th>
              <th scope="col" width="100%">Action</th>
              </tr>
              </thead>
              <tbody>

                {this.state.CovidPatients.map((CovidPatients,index) =>(
                  <tr key = {index}>
                    <th scope = "row">{index+1}</th>

                    <td>
                        <a href = {`/CovidPatients/${CovidPatients._id}`} style = {{textDecoration:'none'}}>
                        {CovidPatients.CovidPatientId}
                        </a>
                    </td>
                    <td>{CovidPatients.CovidPatientType}</td>
                    <td>{CovidPatients.BodyTemperature}</td>
                    <td>{CovidPatients.Symptoms}</td>
                    <td>{CovidPatients.VaccineStatus}</td>
                    <td>{CovidPatients.PCRResult}</td>
                    <td>{CovidPatients.VaccineName}</td>
                    <td>{CovidPatients.DoseNumber}</td>
                    <td>{CovidPatients.VNextDay && CovidPatients.VNextDay.slice(0,10)}</td>
                    <td>{CovidPatients.VTakenDay && CovidPatients.VTakenDay.slice(0,10)}</td>
                    <td>{CovidPatients.PCRNextDate && CovidPatients.PCRNextDate.slice(0,10)}</td>
                    <td>{CovidPatients.LastDate && CovidPatients.LastDate.slice(0,10)}</td>
                    
                    <td>
                      <a className = "btn btn-warning custom" href = {`/updates/${CovidPatients._id}`}>
                        <i className = "fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className = "btn btn-danger btn-small custom" href = "#" onClick = {() =>this.onDelete(CovidPatients._id)}>
                        <i className = "fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <tr>
                <td>
            <div class="card" style = {{width:' 300px', height:'500px', left:'5%'}}>
            <img src="https://cdn.vox-cdn.com/thumbor/b_XHmLAgjMLRq4shAqoZVZSgiMw=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20537762/Covid_Symptoms.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Covid-19 Symptoms</h5>
              <h7 class="card-title">People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can have mild to severe symptoms</h7>
              <p class="card-text"><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" class="alert-link">View symptoms</a></p>
              <p class="card-text bg-light" style = {{transform:'rotate(0);'}}>
              </p>
            </div>
          </div>
            </td>

          <td>
          <div class="card" style = {{width:' 300px', height:'500px', right:'0%'}} >
            <img src="https://alphascriptrx.com/wp-content/uploads/2020/08/Proper-Face-Mask.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Protect yourself and others around you</h5>
              <h7 class="card-title">There is still a risk of COVID-19 returning to the community. These simple steps can slow the spread of the virus</h7>
              <p class="card-text"><a href="https://covid19.govt.nz/health-and-wellbeing/protect-yourself-and-others-from-covid-19/" class="alert-link">View the protection steps</a></p>
              <p class="card-text bg-light" style = {{transform:'rotate(0);'}}>
              </p>
            </div>
          </div>
            </td>

            <td>
          <div class="card" style = {{width:' 300px', height:'500px', right:'5%'}} >
            <img src="http://www.worldometers.info/img/worldometers-fb.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Corona Virus Cases - Worldometer</h5>
              <h7 class="card-title">Sri Lanka Coronavirus update with statistics and graphs</h7>
              <p class="card-text"><a href="https://www.worldometers.info/coronavirus/" class="alert-link">Click to view live Statistics</a></p>
              <p class="card-text bg-light" style = {{transform:'rotate(0);'}}>
              </p>
            </div>
          </div>
            </td>

            <td>
          <div class="card" style = {{width:' 300px', height:'500px', right:'7.5%'}} >
            <img src="https://covid19.gov.lk/wp-content/uploads/2020/04/head-image.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Covid - 19 Emergency Contacts</h5>
              <p class="card-text">Covid-19 Response Alert - 1999</p>
              <p class="card-text">Government Information Centre - 1919</p>
              <p class="card-text"><a href="http://www.mri.gov.lk/" class="alert-link">Medical Research Institute SL</a></p>
              <p class="card-text"><a href="https://www.who.int/srilanka/covid-19" class="alert-link">World Health Organization SL</a></p>
              <p class="card-text bg-light" style = {{transform:'rotate(0);'}}>
              </p>
            </div>
          </div>
            </td>
          </tr>
          </table>
          
                <div style={{paddingBottom: '10%'}}></div>
          </div>     
    )
  }
}