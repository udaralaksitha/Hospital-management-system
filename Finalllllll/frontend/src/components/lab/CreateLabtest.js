import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import { Link } from "react-router-dom";

export default class CreateLabtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        SpecimenType:"",
        PlateletCount:"",
        Haemoglobin:"",
        RBC:"",
        WBC:"",
        testdate:"",
        pid:"",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  //validate function is the newly added function for validation of SpecimenType
//   validate = () => {
  validate = () => {
    let isError = false;

    if (this.state.RBC.length < 2) {
      isError = true;
    }
    this.setState({
      ...this.state,
    });
    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    //declaring error variable as err
    const err = this.validate();

    const {
      SpecimenType,
      PlateletCount,
      Haemoglobin,
      RBC,
      WBC,
      testdate,
      pid,
    } = this.state;

    const data = {
      SpecimenType:SpecimenType,
      PlateletCount:PlateletCount,
      Haemoglobin:Haemoglobin,
      RBC:RBC,
      WBC:WBC,
      testdate:testdate,
      pid:pid,
    };

    console.log(data);

    //assuming the speciman type name cannot be less than 5 characters
    if (!err) {
      axios.post('http://localhost:8070/labtest/save', data).then((res) => {
        if (res.data.success) {
          this.setState({
            SpecimenType:"",
            PlateletCount:"",
            Haemoglobin:"",
            RBC:"",
            WBC:"",
            testdate:"",
            pid:"",
          });
        }
      });
    } else {
      alert('RBC value should be more than 1 ');//if the specimen is having a name which is having less than 5 characters they are not saving as a valid speciman type and displaying an error message
    }
  };
  render() {
    return (
      <div> <Sidebar/>
      <div className='col-md-8 mt-4 mx-auto'style={{position:'absolute', left:'6%', right:'2.5%' }}>
        <h1 className='h3 mb-3 font-weight-normal' style={{marginTop: '60px'}}>Create new Labtest</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>SpecimenType</label>
            <input
              type='text'
              className='form-control'
              name='SpecimenType'
              placeholder='Enter SpecimenType'
              value={this.state.SpecimenType}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>PlateletCount</label>
            <input
              type='number'
              className='form-control'
              name='PlateletCount'
              placeholder='Enter PlateletCount'
              value={this.state.PlateletCount}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Haemoglobin</label>
            <input
              type='number'
              className='form-control'
              name='Haemoglobin'
              placeholder='Enter Haemoglobin'
              value={this.state.Haemoglobin}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>RBC</label>
            <input
              type='number'
              className='form-control'
              name='RBC'
              placeholder='Enter RBC'
              value={this.state.RBC}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>WBC</label>
            <input
              type='number'
              className='form-control'
              name='WBC'
              placeholder='Enter WBC'
              value={this.state.WBC}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Test Date</label>
                    <input type="date"
                    className="form-control"
                    name="testdate"
                    placeholder="Enter Test Date"
                    value={this.state.testdate}
                    onChange={this.handleInputChange}/>
                </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Patient ID</label>
            <input
              type='text'
              className='form-control'
              name='pid'
              placeholder='Enter patient id'
              value={this.state.pid}
              onChange={this.handleInputChange}
            />
          </div>
          
          
          <button
            className='btn btn-success'
            type='submit'
            style={{ marginTop: '15px' }}
            onClick={this.onSubmit}
          >
            <i className='far fa-check-square'></i>
            &nbsp; Save
          </button>
         
        </form>
        <div style={{paddingBottom: '35%'}}></div>
      </div>
      </div>
    );
  }
}
