import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';


export default class EditPatients extends Component {


    constructor(props){
        super(props);
        this.state={
            //varible for all data fields
          covidp:"",
          pid:"",
          pname:"",
          lastdate:"",
          pnum:"",
          ename:"",
          enums:"",
          disdate:"",
          bltype:"",
          gender:"",
          city:"",
          street:"",
          history:"",
          ptype:"",
          status:""
          
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

        const ptid = this.props.match.params.id;
    
        //destructor state variables, when object goes out of scope or is deleted
        const {covidp,pid,pname,lastdate,pnum,ename,enums,disdate,bltype,gender,address,history,ptype,status} = this.state;
        
         //create data object and set data to variables
        const pdata ={
          covidp:covidp,
          pid:pid,
          pname:pname,
          lastdate:lastdate,
          pnum:pnum,
          ename:ename,
          enums:enums,
          disdate:disdate,
          bltype:bltype,
          gender:gender,
          address:address,
          history:history,
          ptype:ptype,
          status:status
          
        }
        //display data in console
        console.log(pdata)
        
         //axios is a promise based http client used to communicate with front end and backend
        //update details from backend using axios and put giving path and object id
        axios.put(`http://localhost:8070/patients/update/${ptid}`,pdata).then((res) =>{
            if(res.data.success){
                // alert update success
                alert("Patient Details Updated Successfully")
                 //if res is successful set state to default, so they don't stay
                this.setState( {
                  covidp:"",
                  pid:"",
                  pname:"",
                  lastdate:"",
                  pnum:"",
                  ename:"",
                  enums:"",
                  disdate:"",
                  bltype:"",
                  gender:"",
                  address:"",
                  history:"",
                  ptype:"",
                  status:""
                }
                )
            }
        })
    }

    //executes after components and subcomponents execute
    componentDidMount(){
        //set object id to ptid
        const ptid = this.props.match.params.id;

        //get data
        axios.get(`http://localhost:8070/patients/${ptid}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    covidp:res.data.patients.covidp,
                    pid:res.data.patients.pid,
                    pname:res.data.patients.pname,
                    lastdate:res.data.patients.lastdate,
                    pnum:res.data.patients.pnum,
                    ename:res.data.patients.ename,
                    enums:res.data.patients.enums,
                    disdate:res.data.patients.disdate,
                    bltype:res.data.patients.bltype,
                    gender:res.data.patients.gender,
                    address:res.data.patients.address,
                    history:res.data.patients.history,
                    ptype:res.data.patients.ptype,
                    status:res.data.patients.status
                    

                });
                //display data in console
                console.log(this.state.patients);
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
              <h1 className="h3 mb-3 font-weight-normal">Edit Patient Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Covid Status</label>
                        <input type="text"
                        className="form-control"
                        name="covidp"
                        placeholder="Covid Related Patient"
                        value={this.state.covidp}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient Id</label>
                        <input type="text"
                        readOnly
                        className="form-control"
                        name="pid"
                        placeholder="Patient Id"
                        value={this.state.pid}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name of Patient</label>
                        <input type="text"
                        className="form-control"
                        name="pname"
                        placeholder="Enter Patient Name"
                        value={this.state.pname}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date of Last Visit</label>
                        <input type="text"
                        className="form-control"
                        name="lastdate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.lastdate && this.state.lastdate.slice(0,10)}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact number</label>
                        <input type="number"
                        className="form-control"
                        name="pnum"
                        placeholder="Enter Patient contact number"
                        value={this.state.pnum}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Emergency Contact Name</label>
                        <input type="text"
                        className="form-control"
                        name="ename"
                        placeholder="Enter Emergency contact name"
                        value={this.state.ename}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Emergency Contact number</label>
                        <input type="text"
                        className="form-control"
                        name="enums"
                        placeholder="Enter Emergency contact number"
                        value={this.state.enums}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Discharged Date</label>
                        <input type="text"
                        className="form-control"
                        name="disdate"
                        placeholder="YYYY-MM-DD"
                        value={this.state.disdate && this.state.disdate.slice(0,10)}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Blood Type</label>
                        <input type="text"
                        className="form-control"
                        name="bltype"
                        placeholder="Enter Blood Type"
                        value={this.state.bltype}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Gender</label>
                        <input type="text"
                        className="form-control"
                        name="gender"
                        placeholder="Enter Gender"
                        value={this.state.gender}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Address"
                        value={this.state.address}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient History</label>
                        <input type="text"
                        className="form-control"
                        name="history"
                        placeholder="Enter Patient History"
                        value={this.state.history}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient Type</label>
                        <input type="text"
                        className="form-control"
                        name="ptype"
                        placeholder="Enter Patient Type"
                        value={this.state.ptype}
                        onChange={this.handleInputChange}/>
                    </div>
    
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Patient Status</label>
                        <input type="text"
                        className="form-control"
                        name="status"
                        placeholder="Enter Patient Status"
                        value={this.state.status}
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