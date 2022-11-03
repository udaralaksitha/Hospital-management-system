import React, { Component } from 'react'
import axios from 'axios'; 
import '../table.css'
import Sidebar from '../Sidebar';
import {CSVLink, CSVDownload} from 'react-csv';
import { textAlign } from '@mui/system';
import AnnounceKit from 'announcekit-react';



export default class ChannTable extends Component {
constructor(props){
  super(props);
  
  this.state={
    echan:[], //to capture data
    rows: [],
    search:''
  };

  }

  createData = (dname, spec, appDandT, patName, NIC, Contact, email, Address, appNo, totalFee, patId) => {
    return { dname, spec, appDandT, patName, NIC, Contact, email, Address, appNo, totalFee, patId};
  }
  
  makeExcelData = (data) => {
    console.log("data ", data)
    const array = []
    data.map((row) => {
        array.push(this.createData(row.dname, row. spec, row.appDandT, row.patName, row.NIC, row.Contact, row.email, row.Address, row.appNo, row.totalFee, row. patId))
      }
    )
    console.log("array ", array)
    this.setState({rows: array})
  }

  //executes after components and subcomponents execute
  componentDidMount(){
    //capter the data
    this.retrieveChann();
  }


  //get request method
  retrieveChann(){
    //axios is a promise based http client used to communicate with front end and backend
    //get details from backend using axios and get giving path
    axios.get("http://localhost:8070/chan").then(res =>{  //then is used as a promise to get res and check if data is retrieved
      //if data retrieve is successful 
      if(res.data.success){
        //set state to variable
        this.setState({
          //data from existingPatients from backend is assinged to patients
          echan:res.data.existingChann
        });

        //console should show the data
        console.log(this.state.echan);
        this.makeExcelData(res.data.existingChann)
      }
    });
  }  


  onDelete = (id) =>{
    //axios is a promise based http client used to communicate with front end and backend
      axios.delete(`http://localhost:8070/echan/delete/${id}`).then((res) =>{
          alert("Patient deleted Successfully");
          this.retrieveChann();
      })
  }
 //filter by many attributes
 filterData(echan,searchKey){

  const results = echan.filter((echan) =>  
  
  echan.email.toLowerCase().includes(searchKey) || echan.email.toUpperCase().includes(searchKey) ||
  echan.dname.toLowerCase().includes(searchKey) ||  echan.dname.toUpperCase().includes(searchKey) || 
  echan.patName.toLowerCase().includes(searchKey) || echan.patName.toUpperCase().includes(searchKey)
  )
  this.setState({echan:results})

}

handleSearchArea = (e) =>{
  const searchKey = e.currentTarget.value;
  //axios is a promise based http client used to communicate with front end and backend
  axios.get("http://localhost:8070/chan").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingChann,searchKey)
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
         <h2 style = {{marginTop:'60px', textAlign:'center'}}><b>All e-channelling Details</b></h2>  &nbsp;
        <div>
        <div style={{position:'absolute', left:'0%'}}>
          <button className="btn btn-success"><a href="/saveChann"style={{textDecoration:'none',color:'white'}}> &nbsp;Add channelling</a></button>  
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
                <th scope="col">Doctor's Name</th>
                <th scope="col">Specification</th>
                <th scope="col">Appointment Date and Time</th>
                <th scope="col">Patient Name</th>
                <th scope="col">NIC</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Appointment No</th>
                <th scope="col">Total Fee</th>
                <th scope="col">Patient Id</th>
                <th scope="col" width="100%">Action</th>
                
                </tr>
            </thead>

            <tbody>
               {/* maps echan table to this table to display  */}
              {this.state.echan.map((echan,index) =>(
                  // maps echan table to this table to display 
                <tr key = {index}>
                  {/* Each row item has an idex value, and it is incremented by one */}
                  <th scope = "row">{index+1}</th>
                  <td>{echan.dname}</td>
                  <td>{echan.spec}</td>
                  <td>{echan.appDandT}</td>
                  <td>{echan.patName}</td>
                  <td>{echan.NIC}</td>
                  <td>{echan.Contact}</td>
                  <td>{echan.email}</td>
                  <td>{echan.Address}</td>
                  
                  
                  <td>
                    {/* Patient ID is highlighted and object id is used to retrieve and redirect to specific user */}
                      <a href={`/echan/${echan._id}`} style={{textDecoration:'none'}}>
                      {echan.appNo}
                      </a>
                  </td>
                  <td>{echan.totalFee}</td>
                  <td>{echan.patId}</td>
                  <td>
                    <a className="btn btn-warning custom" href={`/echan/update/${echan._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit Booking
                    </a>
                    
                    <a className="btn btn-danger btn-small custom " href="#" onClick={() =>this.onDelete(echan._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Cancel Booking
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