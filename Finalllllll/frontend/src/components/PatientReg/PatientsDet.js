import React, { Component } from 'react'; //import react
import axios from 'axios';                  //import axios
import Sidebar from '../Sidebar';           //import the sidebar




export default class PatientsDet extends Component {
    constructor(props){
        super(props);

        //set variable to save patients
        this.state={
            patients:{}
        };
    }

     //executes after components and subcomponents execute
    componentDidMount(){

        //save id to variable ptid
        const ptid = this.props.match.params.id;

        //axios is a promise based http client used to communicate with front end and backend
        //get details from backend using axios and get giving path with above id assigned variable
        axios.get(`http://localhost:8070/patients/${ptid}`).then((res) =>{  //promise and callback function handled by arrow function 

                //if data get is successful then set state to patients variable
                if(res.data.success){
                this.setState({
                    patients:res.data.patients
                });

                //display patients in console
                console.log(this.state.patients);
            }
        })

    }
//This function will display the specified  code inside the specified element. In react this is where jsx elemets reside
  render() {

    //get the data through patients variable
    const {covidp,pid,pname,lastdate,pnum,ename,enums,disdate,bltype,gender,address,history,ptype,status} = this.state.patients;
        

    return (
        <div><Sidebar/>
        
      <div style={{marginTop: '80px', position:'absolute', left:'8%', right:'2.5%'}}> 
          <h4>Patient ID {pid}</h4>
          <hr/>

          <dl className="row">
              <dt className="col-sm-3">Covid Status</dt>
              <dd className="col-sm-9">{covidp}</dd>

              <dt className="col-sm-3">Patient ID</dt>
              <dd className="col-sm-9">{pid}</dd>

              <dt className="col-sm-3">Name</dt>
              <dd className="col-sm-9">{pname}</dd>

              <dt className="col-sm-3">Date of Last Visit</dt>
              <dd className="col-sm-9">{lastdate}</dd>

              <dt className="col-sm-3">Contact Number</dt>
              <dd className="col-sm-9">{pnum}</dd>

              <dt className="col-sm-3">Emergency Contact Name</dt>
              <dd className="col-sm-9">{ename}</dd>

              <dt className="col-sm-3">Emergency Contact Number</dt>
              <dd className="col-sm-9">{enums}</dd>

              <dt className="col-sm-3">Discharged Date</dt> 
              <dd className="col-sm-9">{disdate}</dd>

              <dt className="col-sm-3">Blood type</dt>
              <dd className="col-sm-9">{bltype}</dd>

              <dt className="col-sm-3">Gender</dt>
              <dd className="col-sm-9">{gender}</dd>

              <dt className="col-sm-3">Address</dt>
              <dd className="col-sm-9">{address}</dd>

              <dt className="col-sm-3">History</dt>
              <dd className="col-sm-9">{history}</dd>

              <dt className="col-sm-3">Patient Type</dt>
              <dd className="col-sm-9">{ptype}</dd>

              <dt className="col-sm-3">Patient Status</dt>
              <dd className="col-sm-9">{status}</dd>


          </dl>

          
      </div>
      </div>
      
    )
  }
}