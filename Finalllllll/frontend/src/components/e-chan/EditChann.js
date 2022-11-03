import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';


export default class EditChann extends Component {


    constructor(props){
        super(props);
        this.state={
            //varible for all data fields
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
    }  
     //changed values are updated
    handleInputChange = (e) =>{
        const{name,value} = e.target;
  
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    //on submit, the submit button implementation for edit  
    onSubmit = (e) =>{
         //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
        e.preventDefault();

        const etid = this.props.match.params.id;
    
        //destructor state variables, when object goes out of scope or is deleted
        const {dname, spec, appDandT, patName, NIC, Contact, email, Address, appNo, totalFee, patId} = this.state;
        
         //create data object and set data to variables
        const edata ={
            dname:dname,
            spec:spec,
            appDandT:appDandT,
            patName:patName,
            NIC:NIC,
            Contact:Contact,
            email:email,
            Address:Address,
            appNo:appNo,
            totalFee:totalFee,
            patId:patId
          
        }
        //display data in console
        console.log(edata)
        
         //axios is a promise based http client used to communicate with front end and backend
        //update details from backend using axios and put giving path and object id
        axios.put(`http://localhost:8070/echan/update/${etid}`,edata).then((res) =>{
            if(res.data.success){
                // alert update success
                alert("Echannelling Details Updated Successfully")
                 //if res is successful set state to default, so they don't stay
                this.setState( {
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
                )
            }
        })
    }

    //executes after components and subcomponents execute
    componentDidMount(){
        //set object id to etid
        const etid = this.props.match.params.id;

        //get data
        axios.get(`http://localhost:8070/echan/${etid}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    dname:res.data.echan.dname,
                    spec:res.data.echan.spec,
                    appDandT:res.data.echan.appDandT,
                    patName:res.data.echan.patName,
                    NIC:res.data.echan.NIC,
                    Contact:res.data.echan.Contact,
                    email:res.data.echan.email,
                    Address:res.data.echan.Address,
                    appNo:res.data.echan.appNo,
                    totalFee:res.data.echan.totalFee,
                    patId:res.data.echan.patId
                });
                //display data in console
                console.log(this.state.echan );
            }
        })

    }
    //This function will display the specified  code inside the specified element. In react this is where jsx elemets reside
    render() {
        return (
            <div>
            <div><Sidebar/>
            <div style={{marginTop: '80px', position:'absolute', left:'8%', right:'2.5%'}}> 
          <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal">Edit channelling Details</h1>
                <form className="needs-validation" noValidate>
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
                        <input type="text"
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
                        <label style={{marginBottom:'5px'}}>Appointment No</label>
                        <input type="text"
                        className="form-control"
                        name="appNo"
                        placeholder="Enter appointment no"
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
                        &nbsp; Update
                    </button>
    
                </form>
              
          </div>
          </div>
          </div> 
          <div style={{paddingBottom: '1360px'}}></div>
          </div>
        )
      }
}