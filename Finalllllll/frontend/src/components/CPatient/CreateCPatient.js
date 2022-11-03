import React, {Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';
import Swal from 'sweetalert2';


export default class CreateCPatient extends Component {
  constructor(props){
    super(props);
    this.state = {//what should be on the code
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

 //validate function is the newly added function for validation of phone number
//   validate = () => {
  validate = () => {
    let isError = false;

    if (this.state.BodyTemperature.length < 2 ) {
      isError = true;
    }
    this.setState({
      ...this.state,
    });
    return isError;
  };

onSubmit = (e) =>{
  e.preventDefault();
     //declaring error variable as err
   const err = this.validate();

//destructor - when the object goes out of scope or deleted
  const {CovidPatientId,CovidPatientType,BodyTemperature,Symptoms,VaccineStatus,PCRResult,VaccineName,DoseNumber,VNextDay,VTakenDay,PCRNextDate,LastDate} = this.state;
  
//set variables
  const data = {
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
  console.log(data)
  if (!err) {
  axios.post("http://localhost:8070/covid/save",data).then((res) =>{
    if(res.data.success){
      this.setState(
        {
          CovidPatientId : "",
          CovidPatientType : "",
          BodyTemperature : "",
          Symptoms : "",
          VaccineStatus : "",
          PCRResult : "",
          VaccineName : "",
          DoseNumber : "",
          VNextDay : "",
          VTakenDay : "",
          PCRNextDate : "",
          LastDate : ""
        });
    }
  });
  
}else{
      // alert('Invalid body temperature!');//if the specimen is having a name which is having less than 5 characters they are not saving as a valid speciman type and displaying an error message
     
    Swal.fire({
      text: 'Insert a valid temperature!'
    })
    }
  };

  render(){
    return (

      <div style={{position:'absolute', left:'3.5%', right:'2.5%'}}> <Sidebar/>
      <div className = "row" style = {{marginTop:'50px'}}></div>

      <div className = "col-md-8 mt-4 mx-auto">
        <h1 className = "h3 mb-3 font-weight-normal">Create new Covid Patient</h1>
        <form className = "needs-validation" noValidate>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>PatientId</label>
              <input type = "text"
              className = "form-control"
              name = "CovidPatientId"
              placeholder = "Enter Patient ID"
              value = {this.state.CovidPatientId}
              onChange = {this.handleInputChange}/>
              {/* will trigger the event handler */}
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
              <input type = "date"
              className = "form-control"
              name = "VNextDay"
              placeholder = "Enter next vaccine day"
              value = {this.state.VNextDay}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>VTakenDay</label>
              <input type = "date"
              className = "form-control"
              name = "VTakenDay"
              placeholder = "Enter vaccine taken day"
              value = {this.state.VTakenDay}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>PCRNextDate</label>
              <input type = "date"
              className = "form-control"
              name = "PCRNextDate"
              placeholder = "Enter next PCR date"
              value = {this.state.PCRNextDate}
              onChange = {this.handleInputChange}/>
            </div>

            <div className = "form-group" style = {{marginBottom: '15px'}}>
              <label style = {{marginBottom : '5px'}}>LastDate</label>
              <input type = "date"
              className = "form-control"
              name = "LastDate"
              placeholder = "Enter last PCR date"
              value = {this.state.LastDate}
              onChange = {this.handleInputChange}/>
            </div>

            <button className = "btn btn-success" type = "submit" style = {{marginTop:'15px'}} onClick = {this.onSubmit}>
              {/* sending form data with onsubmit */}
              <i className = "far fa-check-square"></i>
              &nbsp; Save
            </button>
            <div style = {{paddingBottom:'100px'}}> </div>  
          </form>
          </div>
</div>
    
    );
  }
}