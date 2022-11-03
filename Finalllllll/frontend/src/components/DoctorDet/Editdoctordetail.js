import React,{Component} from 'react'
import axios from'axios'
import Sidebar from '../Sidebar';



export default class Editdoctordetail extends Component{


    constructor(props){
        super(props);
        this.state={
            doctorname:"",
            doctorID:"",
            doctorNIC:"",
            Gender:"",
            doctorDOB:"",
            contact_number:"",
            Specialization:"",
            doctor_type:"",
            degree_type:""
        }
    
    }
    handleInputChange = (e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit =(e) =>{
        

        e.preventDefault();
        const doid= this.props.match.params.id;

        const{doctorname,doctorID,doctorNIC,Gender,doctorDOB,contact_number,Specialization,doctor_type,degree_type} = this.state;

        const data ={
            doctorname:doctorname,
            doctorID:doctorID,
            doctorNIC:doctorNIC,
            Gender:Gender,
            doctorDOB:doctorDOB,
            contact_number:contact_number,
            Specialization:Specialization,
            doctor_type:doctor_type,
            degree_type:degree_type
        }


        console.log(data)

        axios.put(`http://localhost:8070/doctor/update/${doid}`,data).then((res) =>{
            if(res.data.success){
                alert("doctordetail Updated Successfully")
                this.setState(
                    {
                        doctorname:"",
                        doctorID:"",
                        doctorNIC:"",
                        Gender:"",
                        doctorDOB:"",
                        contact_number:"",
                        Specialization:"",
                        doctor_type:"",
                        degree_type:""  
                    }

                )
            }
        })

    }



    componentDidMount(){

        const doid= this.props.match.params.id;

        axios.get(`http://localhost:8070/doctor/${doid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    doctorname:res.data.doctordetail.doctorname,
                    doctorID:res.data.doctordetail.doctorID,
                    doctorNIC:res.data.doctordetail.doctorNIC,
                    Gender:res.data.doctordetail.Gender,
                    doctorDOB:res.data.doctordetail.doctorDOB,
                    contact_number:res.data.doctordetail.contact_number,
                    Specialization:res.data.doctordetail.Specialization,
                    doctor_type:res.data.doctordetail.doctor_type,
                    degree_type:res.data.doctordetail.degree_type
                });

              console.log(this.state.post);  

            }
        });

    }
    
        render(){
            return(
                <div style={{position:'absolute', left:'6.5%', right:'2.5%', }}> <Sidebar/>
                <div className ="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal" style = {{marginTop:'85px'}}>Edit doctordetail</h1>
                    <form className ="need -validation" noValidate>
                        <div className="form group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>doctorname</label>
                            <input type="text"
                            className="form-control"
                            name="doctorname"
                            placeholder="Enter doctorname"
                            value={this.state.doctorname}
                            onChange={this.handleInputChange}/>
    
                         </div>
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>doctorID</label>
                             <input type="text"
                             className="form-control"
                             name="doctorID"
                             placeholder="Enter doctorID"
                             value={this.state.doctorID}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>doctorNIC</label>
                             <input type="text"
                             className="form-control"
                             name="doctorNIC"
                             placeholder="Enter doctorNIC"
                             value={this.state.doctorNIC}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>Gender</label>
                             <input type="text"
                             className="form-control"
                             name="Gender"
                             placeholder="Enter Gender"
                             value={this.state.Gender}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>doctorDOB</label>
                             <input type="text"
                             className="form-control"
                             name="doctorDOB"
                             placeholder="Enter doctorDOB"
                             value={this.state.doctorDOB}
                             onChange={this.handleInputChange}/>
                         </div>
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>contact_number</label>
                             <input type="text"
                             className="form-control"
                             name="contact_number"
                             placeholder="Enter contact_number"
                             value={this.state.contact_number}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>Specialization</label>
                             <input type="text"
                             className="form-control"
                             name="Specialization"
                             placeholder="Enter Specialization"
                             value={this.state.Specialization}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>doctor_type</label>
                             <input type="text"
                             className="form-control"
                             name="doctor_type"
                             placeholder="Enter doctor_type"
                             value={this.state.doctor_type}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
                         <div className ="form-group" style={{marginBottom:'15px'}}>
                             <label style={{marginBottom:'5px'}}>degree_type</label>
                             <input type="text"
                             className="form-control"
                             name="degree_type"
                             placeholder="Enter degree_type"
                             value={this.state.degree_type}
                             onChange={this.handleInputChange}/>
                         </div>
    
    
    
                         <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                             <i className="far fa-check-square"></i>
                             &nbsp; Update
                         </button>
    
                         </form>
                            </div>
                         <div style={{paddingBottom: '10%'}}></div>
                         </div>
            )
        }
}