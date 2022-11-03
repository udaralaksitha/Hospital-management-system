import React, { Component } from 'react'
import axios from 'axios'; 
import '../table.css'
import Sidebar from '../Sidebar';
import {CSVLink, CSVDownload} from 'react-csv';
import { textAlign } from '@mui/system';
import AnnounceKit from 'announcekit-react';



export default class PatientTable extends Component {
constructor(props){
  super(props);
  
  this.state={
    patients:[], //to capture data
    rows: [],
    search:''
  };

  }

  createData = (covidp, pid, pname, lastdate, pnum, ename, enums, disdate, bltype, gender, address, history, ptype, status) => {
    return { covidp, pid, pname, lastdate, pnum, ename, enums, disdate, bltype, gender, address, history, ptype, status };
  }
  
  makeExcelData = (data) => {
    console.log("data ", data)
    const array = []
    data.map((row) => {
        array.push(this.createData(row.covidp, row.pid, row.pname, row.lastdate, row.pnum, row.ename, row.enums, row.disdate, row.bltype, row.gender, row.address, row.history, row.ptype, row.status))
      // setRows(oldRows => [...oldRows, createData(row.firstName, row.lastName, row.email, row.contactNumber, row.dateOfBirth, row.address, row.raffleDrawNumber)])
      }
    )
    console.log("array ", array)
    this.setState({rows: array})
  }

  //executes after components and subcomponents execute
  componentDidMount(){
    //capter the data
    this.retrievePatients();
  }


  //get request method
  retrievePatients(){
    //axios is a promise based http client used to communicate with front end and backend
    //get details from backend using axios and get giving path
    axios.get("http://localhost:8070/patients").then(res =>{  //then is used as a promise to get res and check if data is retrieved
      //if data retrieve is successful 
      if(res.data.success){
        //set state to variable
        this.setState({
          //data from existingPatients from backend is assinged to patients
          patients:res.data.existingPatients
        });

        //console should show the data
        console.log(this.state.patients);
        this.makeExcelData(res.data.existingPatients)
      }
    });
  }  


  onDelete = (id) =>{
    //axios is a promise based http client used to communicate with front end and backend
      axios.delete(`http://localhost:8070/patients/delete/${id}`).then((res) =>{
          alert("Patient deleted Successfully");
          this.retrievePatients();
      })
  }
 //filter by many attributes
 filterData(patients,searchKey){

  const results = patients.filter((patients) =>  
  
  patients.pid.toLowerCase().includes(searchKey) || 
  patients.pname.toLowerCase().includes(searchKey) ||  patients.pname.toUpperCase().includes(searchKey) || 
  patients.status.toLowerCase().includes(searchKey) || patients.status.toUpperCase().includes(searchKey) ||
  patients.ptype.toLowerCase().includes(searchKey) || patients.ptype.toUpperCase().includes(searchKey) || 
  patients.covidp.toLowerCase().includes(searchKey) || patients.covidp.toUpperCase().includes(searchKey)
  
                                                  
  
  )

  this.setState({patients:results})

}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
  //axios is a promise based http client used to communicate with front end and backend
  axios.get("http://localhost:8070/patients").then(res =>{
    if(res.data.success){
      

      this.filterData(res.data.existingPatients,searchKey)
  }
  });

}


//This function will display the specified  code inside the specified element. In react this is where jsx elemets reside
  render() {
    return (
      

      <div style={{position:'absolute', left:'6%', right:'2.5%' }}> <Sidebar/>

          
      
      <div className = "row" style = {{marginTop:'14px'}}>
        <div className = "col-lg-9 mt-2">
        <div >  
         
        </div>
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
      <div style={{position:'absolute', left:'75%', marginTop:'30px',}}>
         
         <iframe src="https://www.nbcnews.com/health" style={{ width:'375px', height:'225px', margin:'0',border:'0'}}></iframe>
          
        </div>
         <h2 style = {{marginTop:'60px', textAlign:'center'}}><b>All Patients Details</b></h2>  &nbsp;
        <div>
        <div style={{position:'absolute', left:'0%'}}>
          <button className="btn btn-success"><a href="/savePatient"style={{textDecoration:'none',color:'white'}}> &nbsp;Register Patient</a></button>  
        </div>
        <div style={{position:'absolute', left:'10.5%'}}>
          <button type="button" class="btn btn-primary">
            {this.state.rows && <CSVLink data={this.state.rows} style={{textDecoration:'none',color:'white' }}>Download Report</CSVLink>}
          </button>
          </div>
        
        </div> 
        <table className = "table table-condensed table table-hover" style = {{marginTop:'140px'}}>
          <thead>
            <tr>
                <th scope="col"><b>#</b></th>
                <th scope="col">Covid</th>
                <th scope="col">PatientID</th>
                <th scope="col">Name</th>
                <th scope="col">LastVisit</th>
                <th scope="col">Number</th>
                <th scope="col">EmergencyName</th>
                <th scope="col">EmergencyNumber</th>
                <th scope="col">DischargedDate</th>
                <th scope="col">BloodType</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">History</th>
                <th scope="col">PType</th>
                <th scope="col">Status</th>
                <th scope="col" width="100%">Action</th>
                {/* <th><div style= {{width: "125px"}}  scope="col">Action</div></th> */}
                
                </tr>
            </thead>

            <tbody>
               {/* maps patients table to this table to display  */}
              {this.state.patients.map((patients,index) =>(
                  // maps patients table to this table to display 
                <tr key = {index}>
                  {/* Each row item has an idex value, and it is incremented by one */}
                  <th scope = "row">{index+1}</th>
                  <td>{patients.covidp}</td>
                  <td>
                    {/* Patient ID is highlighted and object id is used to retrieve and redirect to specific user */}
                      <a href={`/patients/${patients._id}`} style={{textDecoration:'none'}}>
                      {patients.pid}
                      </a>
                    </td>
                   
                  <td>{patients.pname}</td>
                  <td>{patients.lastdate && patients.lastdate.slice(0,10)}</td>
                  <td>0{patients.pnum}</td>
                  <td>{patients.ename}</td>
                  <td>0{patients.enums}</td>
                  <td>{patients.disdate  && patients.disdate.slice(0,10)}</td>
                  <td>{patients.bltype}</td>
                  <td>{patients.gender}</td>
                  <td>{patients.address}</td>
                  <td>{patients.history}</td>
                  <td>{patients.ptype}</td>
                  <td>{patients.status}</td>
                  <td>
                    <a className="btn btn-warning custom" href={`/update/${patients._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                    
                    <a className="btn btn-danger btn-small custom " href="#" onClick={() =>this.onDelete(patients._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>  
            </table>
            <div style={{paddingBottom: '10%'}}></div>
          </div>
        
      
    )
  }
}