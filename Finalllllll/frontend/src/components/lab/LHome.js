import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import '../table.css'
import {CSVLink, CSVDownload} from 'react-csv';

import { Button } from 'react-bootstrap';

export default class LabTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labtest: [],
      rows: []
    };
  }


  createData = (SpecimenType, PlateletCount, Haemoglobin, RBC, WBC,testdate,pid) => {
    return { SpecimenType, PlateletCount, Haemoglobin, RBC, WBC,testdate,pid};
  }
  
  makeExcelData = (data) => {
    console.log("data ", data)
    const array = []
    data.map((row) => {
        array.push(this.createData(row.SpecimenType, row.PlateletCount, row.Haemoglobin, row.RBC, row.WBC,row.testdate, row.pid))
      // setRows(oldRows => [...oldRows, createData(row.firstName, row.lastName, row.email, row.contactNumber, row.dateOfBirth, row.address, row.raffleDrawNumber)])
      }
    )
    console.log("array ", array)
    this.setState({rows: array})
  }

  

  componentDidMount() {
    this.retrieveLabtest();
  }
  retrieveLabtest() {
    axios.get('http://localhost:8070/labtest').then((res) => {
      if (res.data.success) {
        this.setState({
          labtest: res.data.existingLabtest,
        });
        console.log(this.state.labtest);
        this.makeExcelData(res.data.existingLabtest)
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:8070/labtest/delete/${id}`).then((res) => {
      alert('Deleted successfully');
      this.retrieveLabtest();
    });
  };

  filterData(labtest, searchKey) {
    const result = labtest.filter(
      (labtest) =>
      labtest.SpecimenType.toLowerCase().includes(searchKey) 
       
    );
    this.setState({ labtest: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get('http://localhost:8070/labtest').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingLabtest, searchKey);
      }
    });
  };
  render() {
    return (
      <div style={{position:'absolute', left:'10%', right:'2.5%' }}>
        {/* <p>All LabTests</p> */}
        {/* <div className='col-lg-3 mt-2 mb-2'>
          <input
            className='form-control'
            type='search'
            placeholder='Search'
            name='searchQuery'
            onChange={this.handleSearchArea}
          ></input>
        </div> */}
    <Sidebar/>

<div className = "row" style = {{marginTop:'14px'}} >
        <div className = "col-lg-9 mt-2" >
        
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
       
      </div >
      
         <h4 style = {{marginTop:'40px', }}><b>LabTest Details</b></h4>  &nbsp;
        {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/> */}


        <div style={{position:'absolute', left:'2%'}}>
          <button className="btn btn-success"><a href="/saveLabtest"style={{textDecoration:'none',color:'white'}}> &nbsp;Create New Labtest</a></button>  
        </div>
        <div style={{position:'absolute', left:'15%'}}>
          <button type="button" class="btn btn-primary">
            {this.state.rows && <CSVLink data={this.state.rows} style={{textDecoration:'none',color:'white' }}>Download Lab Excel Sheet</CSVLink>}
          </button>
 
        
        </div> 
        <div style={{position:'absolute', left:'75%'}}>
        <a href="/report">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Generate Lab Report
                </Button>
              </a>
        </div>
        

        

        <table className='table table-condensed table table-hover' style = {{marginTop:'70px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Specimen Type</th>
              <th scope="col">PlateletCount</th>
              <th scope="col">Haemoglobin</th>
              <th scope="col">RBC</th>
              <th scope="col">WBC</th>
              <th scope="col">Testdate</th>
              <th scope="col">Patient ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.labtest.map((labtest, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>
                  <a
                    href={`/labtest/${labtest._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {labtest.SpecimenType}
                  </a>
                </td>
                  <td>{labtest.PlateletCount}</td>
                  <td>{labtest.Haemoglobin}</td>
                  <td>{labtest.RBC}</td>
                  <td>{labtest.WBC}</td>
                  <td>{labtest.testdate && labtest.testdate.slice(0,10)}</td>
                  <td>{labtest.pid}</td>
                <td>
                  <a className='btn btn-warning custom' href={`/labupdate/${labtest._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  <br></br>
                  &nbsp;
                  <br></br>
                  <a
                    className='btn btn-danger custom'
                    href='#'
                    onClick={() => this.onDelete(labtest._id)}
                  >
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
        
        
        <div style={{paddingBottom: '35%'}}></div>
        
        
      </div>
    );
  }
}
