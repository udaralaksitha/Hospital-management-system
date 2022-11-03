import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';
import '../table.css'
import {useForm} from "react-hook-form";
import Swal from 'sweetalert2';



export default class RegisterChann extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //varible for all data fields
            dname: "",
            spec: "",
            appDandT: "",
            patName: "",
            NIC: "",
            Contact: "",
            email: "",
            Address: "",
            appNo: "",
            totalFee: "",
            patId: ""

        }
    }

    //changed values are updated
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

//validation of phone number

    validate = () => {
        let isError = false;
       
    
        if (this.state.Contact.length  != 10 ) {
          isError = true;
        }
        this.setState({ 
          ...this.state,
        });
        return isError;

      };

      
    //on submit, the submit button implementation for register  
    onSubmit = (e) => {
        //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        e.preventDefault();
        //declaring error variable as err
        //validate
        const err = this.validate();

        //destructor state variables 
        const { dname, spec, appDandT, patName, NIC, Contact, email, Address, appNo, totalFee, patId } = this.state;

        //create data object and set data to variables
        const data = {
            dname: dname,
            spec: spec,
            appDandT: appDandT,
            patName: patName,
            NIC: NIC,
            Contact: Contact,
            email: email,
            Address: Address,
            appNo: appNo,
            totalFee: totalFee,
            patId: patId

        }

        //display data in console
        console.log(data)
        //if there are no errors post data
        if (!err) {
        //axios is a promise based http client used to communicate with front end and backend
        //get details from backend using axios and get giving path
        axios.post('http://localhost:8070/chan/add', data).then((res) => { //pass data then get a promise with res callback which then an arrow fuction is used to handle q
                //if res is successful set state to default, so they don't stay
                if (res.data.success) {
                this.setState({
                    dname:"",
                    spec:"",
                    appDandT:"",
                    patName:"",
                    NIC:"",
                    Contact:"",
                    email:"",
                    Address:"",
                    appNo:"",
                    totalFee:"",
                    patId:""
                }
                );
            }
        });
    }else {     //if there is an error it would be because of the phone number validation, there show invalid number message
        Swal.fire({
            text: 'Insert a valid Phone Number!'
        })
      }
    };



    render() {
        return (


            <div style={{ position: 'absolute', left: '6.5%', right: '2.5%', }}> <Sidebar />
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal" style={{ marginTop: '75px' }}>Add channelling</h1>
                    
                    <form className="needs-validation" name="myForm">
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Doctor's name</label>
                        <input type="text"
                        className="form-control"
                        name="dname"
                        placeholder="Doctor's name"
                        value={this.state.dname}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Specification</label>
                        <input type="text"
                        className="form-control"
                        name="spec"
                        placeholder="Doctor's Specification"
                        value={this.state.spec}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Appointment Date and time</label>
                        <input type="datetime-local"
                        className="form-control"
                        name="appDandT"
                        placeholder="YYYY-MM-DD : hh:mm"
                        value={this.state.appDandT}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient Name</label>
                        <input type="text"
                        className="form-control"
                        name="patName"
                        placeholder="Enter Patient's name"
                        value={this.state.patName}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="NIC"
                        placeholder="Enter NIC Number"
                        value={this.state.NIC}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact Number</label>
                        <input type="text"
                        className="form-control"
                        name="Contact"
                        placeholder="Enter contact number"
                        value={this.state.Contact}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label htmlFor="email" style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="abc123@mail.com"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="Address"
                        placeholder="Enter address"
                        value={this.state.Address}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Appointment Number</label>
                        <input type="number"
                        className="form-control"
                        name="appNo"
                        placeholder="Enter Appointment number"
                        value={this.state.appNo}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Total Fee</label>
                        <input type="number"
                        className="form-control"
                        name="totalFee"
                        placeholder="Enter the total fee"
                        value={this.state.totalFee}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient Id</label>
                        <input type="text"
                        className="form-control"
                        name="patId"
                        placeholder="Enter patient Id"
                        value={this.state.patId}
                        onChange={this.handleInputChange}/>
                    </div>
                        <button className="btn btn-success" type="submit" onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Register
                        </button>


                    </form>
                    <div style={{ paddingBottom: '10%' }}></div>
                </div >
            </div>

        )
    }
}