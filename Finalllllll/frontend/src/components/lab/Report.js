import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import '../table.css'
//import Logo from '../images/logo.png';
//import './Report.css'

import jsPDF from "jspdf";
import { Button } from 'react-bootstrap';

export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labtest: [],
      
    };
  }



  //pdf making
  GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){

               pdf.save("mypdf.pdf");
           }
    });
  };

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
      <div style={{position:'absolute', left:'10%', right:'10%' }} className="main">
        
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
      
      <div class="card2" id="content">
          {/* <div style={{position:'absolute', left:'2%'}}><img src={Logo}   width="100"  height="50"  style={{ marginLeft : 350 , borderRadius:'5px'}}  alt="..."/></div> */}
         <div ><center><h4 style = {{marginTop:'40px', }}><b>Lab Report</b></h4>  &nbsp;</center></div>
       

        

        <center>
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
           
                  <br></br>
                  &nbsp;
                  <br></br>
                  
              </tr>
            ))}
          </tbody>
        </table>
        </center>
        </div>
        
        <Button  size="lg" className="btn3 button3" onClick={this.GeneratePDF} type="primary">Print the Lab Report</Button>
        <div style={{paddingBottom: '35%'}}></div>
        
        
      </div>
    );
  }
}
