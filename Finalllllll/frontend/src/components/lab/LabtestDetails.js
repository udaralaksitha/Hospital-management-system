import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

export default class LabtestDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labtest: {},
    };
  }
  componentDidMount() {
    const lbid = this.props.match.params.id;

    axios.get(`http://localhost:8070/labtest/${lbid}`).then((res) => {
      if (res.data.success) {
        this.setState({
          labtest: res.data.labtest,
        });
        console.log(this.state.labtest);
      }
    });
  }
  render() {
    const{SpecimenType,PlateletCount,Haemoglobin,RBC,WBC,testdate,pid} =this.state.labtest;
   
    return (
      <div style={{ marginTop: '20px',position:'absolute', left:'8%', right:'2.5%'  }}>
        <h4 style={{marginTop: '60px'}}>{SpecimenType}</h4>
        <hr />
        <d1 className='row'>
          <dt className='col-sm-3'>PlateletCount</dt>
          <dd className='col-sm-9'>{PlateletCount}</dd>

          <dt className='col-sm-3'>Haemoglobin</dt>
          <dd className='col-sm-9'>{Haemoglobin}</dd>

          <dt className='col-sm-3'>RBC</dt>
          <dd className='col-sm-9'>{RBC}</dd>

          <dt className='col-sm-3'>WBC</dt>
          <dd className='col-sm-9'>{WBC}</dd>

          <dt className='col-sm-3'>Testdate</dt>
          <dd className='col-sm-9'>{testdate}</dd>

          <dt className='col-sm-3'>Patient ID</dt>
          <dd className='col-sm-9'>{pid}</dd>

           
        </d1>
      </div>
    );
  }
}
