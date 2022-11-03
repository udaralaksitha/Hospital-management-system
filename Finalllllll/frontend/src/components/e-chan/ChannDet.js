import React, { Component } from 'react'; //import react
import axios from 'axios';                  //import axios
import Sidebar from '../Sidebar';           //import the sidebar
import jsPDF from "jspdf";

export default class ChannDet extends Component {
    constructor(props){
        super(props);

        //set variable to save patients
        this.state={
            echan:{},
        };
    }

    GeneratePDF =()=>{
        var doc = new jsPDF("p","pt","a2","pdf");
        doc.html(document.querySelector('#content'),{
            callback:function(pdf){
                pdf.save("mypdf.pdf");
            }
        });
    };

     //executes after components and subcomponents execute
    componentDidMount(){

        //save id to variable ptid
        const echanid = this.props.match.params.id;

        //axios is a promise based http client used to communicate with front end and backend
        //get details from backend using axios and get giving path with above id assigned variable
        axios.get(`http://localhost:8070/echan/${echanid}`).then((res) =>{  //promise and callback function handled by arrow function 

                //if data get is successful then set state to patients variable
                if(res.data.success){
                this.setState({
                    echan:res.data.echan
                });

                //display patients in console
                console.log(this.state.echan);
            }
        });

    }
//This function will display the specified  code inside the specified element. In react this is where jsx elemets reside
  render() {

    //get the data through patients variable
    const {dname, spec, appDandT, patName, NIC, Contact, email, Address, appNo, totalFee, patId} = this.state.echan;
        

    return (
        <div><Sidebar/>
        
      <div style={{marginTop: '80px', position:'absolute', left:'8%', right:'2.5%'}}> 
          <h4>Appointment No{appNo}</h4>
          <hr/>
          <div class ="card2" id="content">
          <dl className="row">
              <dt className="col-sm-3">Doctor's name</dt>
              <dd className="col-sm-9">{dname}</dd>

              <dt className="col-sm-3">Specification</dt>
              <dd className="col-sm-9">{spec}</dd>

              <dt className="col-sm-3">Appointment Date and time</dt>
              <dd className="col-sm-9">{appDandT}</dd>

              <dt className="col-sm-3">Patient Name</dt>
              <dd className="col-sm-9">{patName}</dd>

              <dt className="col-sm-3">NIC</dt>
              <dd className="col-sm-9">{NIC}</dd>

              <dt className="col-sm-3">Contact Number</dt>
              <dd className="col-sm-9">{Contact}</dd>

              <dt className="col-sm-3">Email</dt> 
              <dd className="col-sm-9">{email}</dd>

              <dt className="col-sm-3">Address</dt>
              <dd className="col-sm-9">{Address}</dd>

              <dt className="col-sm-3">Total Fee</dt>
              <dd className="col-sm-9">{totalFee}</dd>

              <dt className="col-sm-3">Patient Id</dt>
              <dd className="col-sm-9">{patId}</dd>


          </dl>
 
      </div>
      <button type="button" className="btn btn-outline-warning" onClick={this.GeneratePDF} type="primary">Print the booking</button>
      <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg classname="bi flex-shrink-0 me-2" width="10px" height="24" role="img" aria-label="Success:">
            <use xlinkHref="#check-circle-fill"/></svg>
      <div>
    Paid in full
    </div>
</div>
      </div>
      </div>
    )
  }
}