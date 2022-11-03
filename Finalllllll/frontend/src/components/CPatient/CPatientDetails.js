import React, { Component } from 'react';
import axios from 'axios';//make request for the user with a given id

export default class CPatientDetails extends Component {
    constructor(props){
        super(props);

        this.state={//initializing local state by assigning object
            CovidPatients:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/getspec/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    CovidPatients:res.data.CovidPatients
                });

                console.log(this.state.CovidPatients);
            }
        })

    }

  render() {
//required method in the class component
    const {CovidPatientId,CovidPatientType,BodyTemperature,Symptoms,VaccineStatus,PCRResult,VaccineName,DoseNumber,VNextDay,VTakenDay,PCRNextDate,LastDate} = this.state.CovidPatients;
        

    return (
      <div style={{marginTop: '20px'}} style={{position:'fixed', left:'7%', right:'3%', top:'10%'}}>
          <h4>{CovidPatientId}</h4>
          <hr/>

        <d1 className="row">
        <dt className = "col-sm-3">Covid Patient Type</dt>
        <dd className = "col-sm-9">{CovidPatientType}</dd>

        <dt className = "col-sm-3">Body Temperature</dt>
        <dd className = "col-sm-9">{BodyTemperature}</dd>

        <dt className = "col-sm-3">Symptoms</dt>
        <dd className = "col-sm-9">{Symptoms}</dd>

        <dt className = "col-sm-3">Vaccine Status</dt>
        <dd className = "col-sm-9">{VaccineStatus}</dd>

        <dt className = "col-sm-3">PCR Result</dt>
        <dd className = "col-sm-9">{PCRResult}</dd>

        <dt className = "col-sm-3">Vaccine Name</dt>
        <dd className = "col-sm-9">{VaccineName}</dd>

        <dt className = "col-sm-3">Dose Number</dt>
        <dd className = "col-sm-9">{DoseNumber}</dd>

        <dt className = "col-sm-3">VNext Day</dt>
        <dd className = "col-sm-9">{VNextDay}</dd>

        <dt className = "col-sm-3">VTaken Day</dt>
        <dd className = "col-sm-9">{VTakenDay}</dd>

        <dt className = "col-sm-3">PCR Next Date</dt>
        <dd className = "col-sm-9">{PCRNextDate}</dd>

        <dt className = "col-sm-3">Last Date</dt>
        <dd className = "col-sm-9">{LastDate}</dd>
          </d1>    
      </div> 
    );
  }
}