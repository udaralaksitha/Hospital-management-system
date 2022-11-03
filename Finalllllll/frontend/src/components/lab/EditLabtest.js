import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

export default class EditLabtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpecimenType:'',
      PlateletCount:'',
      Haemoglobin:'',
      RBC:'',
      WBC:'',
      testdate:'',
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
  onSubmit = (e) => {
    e.preventDefault();
    const lbid = this.props.match.params.id;
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

    axios.put(`http://localhost:8070/labtest/labupdate/${lbid}`, data).then((res) => {
      if (res.data.success) {
        alert('labtest updated successfully');
        this.setState({
                SpecimenType: '',
                PlateletCount: '',
                Haemoglobin: '',
                RBC: '',
                WBC: '',
                testdate:'',
                pid: '',
        });
      }
    });
  };

  componentDidMount() {
    const lbid = this.props.match.params.id;

    axios.get(`http://localhost:8070/labtest/${lbid}`).then((res) => {
      if (res.data.success) {
        this.setState({
          SpecimenType:res.data.labtest.SpecimenType,
          PlateletCount:res.data.labtest.PlateletCount,
          Haemoglobin:res.data.labtest.Haemoglobin,
          RBC:res.data.labtest.RBC,
          WBC:res.data.labtest.WBC,
          testdate:res.data.labtest.testdate,
          pid:res.data.labtest.pid,
        });
        console.log(this.state.labtest);
      }
    });
  }
  render() {
    return (
      <div> <Sidebar/>
      <div className='col-md-8 mt-4 mx-auto' style={{position:'absolute', left:'6%', right:'2.5%' }}>
        <h1 className='h3 mb-3 font-weight-normal' style={{marginTop: '50px'}}>Edit Labtest</h1>
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
              type='text'
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
              placeholder='Enter Patient ID'
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
            &nbsp; Update
          </button>
        </form>
        <div style={{paddingBottom: '35%'}}></div>
      </div>
      </div>
    );
  }
}
