import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';
import '../table.css'
import {useForm} from "react-hook-form";
import Swal from 'sweetalert2';



export default class RegisterPatients extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //varible for all data fields
            covidp: "",
            pid: "",
            pname: "",
            lastdate: "",
            pnum: "",
            ename: "",
            enums: "",
            disdate: "",
            bltype: "",
            gender: "",
            address: "",
            history: "",
            ptype: "",
            status: ""

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
       
    
        if (this.state.pnum.length  != 10 ) {
          isError = true;
        }
        if (this.state.enums.length != 10 ) {
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
        const { covidp, pid, pname, lastdate, pnum, ename, enums, disdate, bltype, gender, address, history, ptype, status } = this.state;

        //create data object and set data to variables
        const data = {
            covidp: covidp,
            pid: pid,
            pname: pname,
            lastdate: lastdate,
            pnum: pnum,
            ename: ename,
            enums: enums,
            disdate: disdate,
            bltype: bltype,
            gender: gender,
            address: address,
            history: history,
            ptype: ptype,
            status: status

        }

        //display data in console
        console.log(data)
        //if there are no errors post data
        if (!err) {
        //axios is a promise based http client used to communicate with front end and backend
        //get details from backend using axios and get giving path
        axios.post('http://localhost:8070/patients/add', data).then((res) => { //pass data then get a promise with res callback which then an arrow fuction is used to handle q
                //if res is successful set state to default, so they don't stay
                if (res.data.success) {
                this.setState({
                    covidp: "",
                    pid: "",
                    pname: "",
                    lastdate: "",
                    pnum: "",
                    ename: "",
                    enums: "",
                    disdate: "",
                    bltype: "",
                    gender: "",
                    address: "",
                    history: "",
                    ptype: "",
                    status: ""
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
                    <h1 className="h3 mb-3 font-weight-normal" style={{ marginTop: '75px' }}>Register Patient</h1>
                    <form className="needs-validation" name="myForm">
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }} >Covid Status </label>
                            <input type="text" required
                                className="form-control"
                                name="covidp"
                                placeholder="Covid Related Patient"
                                value={this.state.covidp}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Patient ID</label>
                            <input type="text"
                                className="form-control"
                                name="pid"
                                placeholder="Patient ID"
                                value={this.state.pid}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Name of Patient</label>
                            <input type="text"
                                className="form-control"
                                name="pname"
                                placeholder="Enter Patient Name"
                                value={this.state.pname}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Date of Last Visit</label>
                            <input type="date"
                                className="form-control"
                                name="lastdate"
                                placeholder="Enter Date of last visit"
                                value={this.state.lastdate}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Contact number</label>
                            <input type="number"
                                className="form-control"
                                name="pnum"
                                placeholder="Enter Patient contact number"
                                value={this.state.pnum}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Emergency Contact Name</label>
                            <input type="text"
                                className="form-control"
                                name="ename"
                                placeholder="Enter Emergency contact name"
                                value={this.state.ename}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Emergency Contact number</label>
                            <input type="number"
                                className="form-control"
                                name="enums"
                                placeholder="Enter Emergency contact number"
                                value={this.state.enums}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Discharged Date</label>
                            <input type="date"
                                className="form-control"
                                name="disdate"
                                placeholder="Enter Date of Discharge"
                                value={this.state.disdate}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Blood Type</label>
                            <input type="text"
                                className="form-control"
                                name="bltype"
                                placeholder="Enter Blood Type"
                                value={this.state.bltype}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Gender</label>
                            <input type="text"
                                className="form-control"
                                name="gender"
                                placeholder="Enter Gender"
                                value={this.state.gender}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Address</label>
                            <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.handleInputChange} />
                        </div>


                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Patient History</label>
                            <input type="text"
                                className="form-control"
                                name="history"
                                placeholder="Enter Patient History"
                                value={this.state.history}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Patient Type</label>
                            <input type="text"
                                className="form-control"
                                name="ptype"
                                placeholder="Enter Patient Type"
                                value={this.state.ptype}
                                onChange={this.handleInputChange} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Patient Status</label>
                            <input type="text"
                                className="form-control"
                                name="status"
                                placeholder="Enter Patient Status"
                                value={this.state.status}
                                onChange={this.handleInputChange} />
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