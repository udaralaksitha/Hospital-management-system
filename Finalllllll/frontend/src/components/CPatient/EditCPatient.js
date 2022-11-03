import React, {Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';


export default class EditCPatient extends Component {

    constructor(props){
      super(props);
      this.state = {
      CovidPatientId : "",
      CovidPatientType : "",
      BodyTemperature : "",
      Symptoms : "",
      VaccineStatus : "",
      PCRResulte : "",
      VaccineName : "",
      DoseNumber : "",
      VNextDay : "",
      VTakenDay : "",
      PCRNextDate : "",
      LastDate : ""
    }
  }
  //understanding value changes
  handleInputChange = (e) =>{//handle input change invoking
    const {name,value} = e.target;
  
    this.setState({//state up
      ...this.state,
      [name]:value
    })
  }
  
  onSubmit = (e) =>{
    e.preventDefault();//does not accept any parameter, will access the exact location
    const cid = this.props.match.params.id;
  
  //destructor
    const {CovidPatientId,CovidPatientType,BodyTemperature,Symptoms,VaccineStatus,PCRResult,VaccineName,DoseNumber,VNextDay,VTakenDay,PCRNextDate,LastDate} = this.state;
    
  //set variables
    const cdata = {
      CovidPatientId:CovidPatientId,
      CovidPatientType:CovidPatientType,
      BodyTemperature:BodyTemperature,
      Symptoms:Symptoms,
      VaccineStatus:VaccineStatus,
      PCRResult:PCRResult,
      VaccineName:VaccineName,
      DoseNumber:DoseNumber,
      VNextDay:VNextDay,
      VTakenDay:VTakenDay,
      PCRNextDate:PCRNextDate,
      LastDate:LastDate,
  
    }
    console.log(cdata) //implement a put method to update existing
  
    axios.put(`http://localhost:8070/covid/updates/${cid}`,cdata).then((res) =>{
      if(res.data.success){
        alert("Covid patient details updated succesfully")
        this.setState(
          {
            CovidPatientId : "",
            CovidPatientType : "",
            BodyTemperature : "",
            Symptoms : "",
            VaccineStatus : "",
            PCRResulte : "",
            VaccineName : "",
            DoseNumber : "",
            VNextDay : "",
            VTakenDay : "",
            PCRNextDate : "",
            LastDate : ""
          }
        )
      }
    })
  
  }

  componentDidMount(){ //implement a method to retrieve specific post details
    const cid = this.props.match.params.id;
    axios.get(`http://localhost:8070/getspec/${cid}`).then((res) => {
        if(res.data.success){
            this.setState({
                CovidPatientId: res.data.CovidPatients.CovidPatientId,
                CovidPatientType: res.data.CovidPatients.CovidPatientType,
                BodyTemperature: res.data.CovidPatients.BodyTemperature,
                Symptoms: res.data.CovidPatients.Symptoms,
                VaccineStatus: res.data.CovidPatients.VaccineStatus,
                PCRResult: res.data.CovidPatients.PCRResult,
                VaccineName: res.data.CovidPatients.VaccineName,
                DoseNumber: res.data.CovidPatients.DoseNumber,
                VNextDay: res.data.CovidPatients.VNextDay,
                VTakenDay: res.data.CovidPatients.VTakenDay,
                PCRNextDate: res.data.CovidPatients.PCRNextDate,
                LastDate: res.data.CovidPatients.LastDate

            });

            console.log(this.state.CovidPatients);
        }
    });
}

  render(){
    return (
      <div><Sidebar/>
      <div style={{position:'absolute', left:'3.5%', right:'2.5%'}}>
      <div className = "row" style = {{marginTop:'50px'}}></div>

      <div className = "col-md-8 mt-4 mx-auto">
        <h1 className = "h3 mb-3 font-weight-normal">Edit Covid Patient</h1>
        <form className = "needs-validation" noValidate>
            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>CovidPatientId</label>
              <input type = "text"
              className = "form-control"
              name = "CovidPatientId"
              placeholder = "Enter Patient ID"
              value = {this.state.CovidPatientId}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>CovidPatientType</label>
              <input type = "text"
              className = "form-control"
              name = "CovidPatientType"
              placeholder = "Enter Patient type"
              value = {this.state.CovidPatientType}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>BodyTemperature</label>
              <input type = "text"
              className = "form-control"
              name = "BodyTemperature"
              placeholder = "Enter Body Temperature"
              value = {this.state.BodyTemperature}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>Symptoms</label>
              <input type = "text"
              className = "form-control"
              name = "Symptoms"
              placeholder = "Enter covid symptoms"
              value = {this.state.Symptoms}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>VaccineStatus</label>
              <input type = "text"
              className = "form-control"
              name = "VaccineStatus"
              placeholder = "Enter vaccine status"
              value = {this.state.VaccineStatus}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>PCRResult</label>
              <input type = "text"
              className = "form-control"
              name = "PCRResult"
              placeholder = "Enter PCR Result"
              value = {this.state.PCRResult}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>VaccineName</label>
              <input type = "text"
              className = "form-control"
              name = "VaccineName"
              placeholder = "Enter Vaccine Name"
              value = {this.state.VaccineName}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>DoseNumber</label>
              <input type = "text"
              className = "form-control"
              name = "DoseNumber"
              placeholder = "Enter Dose Number"
              value = {this.state.DoseNumber}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>VNextDay</label>
              <input type = "text"
              className = "form-control"
              name = "VNextDay"
              placeholder = "Enter next vaccine day"
              value = {this.state.VNextDay}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>VTakenDay</label>
              <input type = "text"
              className = "form-control"
              name = "VTakenDay"
              placeholder = "Enter vaccine taken day"
              value = {this.state.VTakenDay}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>PCRNextDate</label>
              <input type = "text"
              className = "form-control"
              name = "PCRNextDate"
              placeholder = "Enter next PCR date"
              value = {this.state.PCRNextDate}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>LastDate</label>
              <input type = "text"
              className = "form-control"
              name = "LastDate"
              placeholder = "Enter last PCR date"
              value = {this.state.LastDate}
              onChange = {this.handleInputChange}/>
            </div>

            <button className = "btn btn-success" type = "submit"  onClick = {this.onSubmit}>
              <i className = "far fa-check-square"></i>
              &nbsp; Update
            </button>
            <div style = {{paddingBottom:'100px'}}> </div>  
          </form>
</div>
</div>  

</div>
    );
  }
}