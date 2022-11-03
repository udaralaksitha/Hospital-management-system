import React, {Component } from 'react';
import axios from 'axios';
import '../table.css'
import Sidebar from '../Sidebar';
import {CSVLink, CSVDownload} from 'react-csv';


////import doctordetail from '../../models/doctordetail';


export default class DHome extends Component {
constructor(props){
  super(props);

  this.state={
    doctordetail:[],
    rows:[]

  };
}

createData = (doctorname,doctorNIC,Gender,doctorDOB,contact_number,Specialization,doctor_type,degree_type) => {
  return{doctorname,doctorNIC,Gender,doctorDOB,contact_number,Specialization,doctor_type,degree_type};
}

makeExcelData = (data) => {
  console.log("data ", data)
  const array = []
  data.map((row) => {
      array.push(this.createData(row.doctorname, row.doctorNIC, row.Gender, row.doctorDOB, row.contact_number, row.Specialization, row.doctor_type, row.degree_type))
    // setRows(oldRows => [...oldRows, createData(row.firstName, row.lastName, row.email, row.contactNumber, row.dateOfBirth, row.address, row.raffleDrawNumber)])
    }
  )
  console.log("array ", array)
  this.setState({rows: array})
}


componentDidMount(){
  this.retrievedoctordetail();
}

retrievedoctordetail(){
  axios.get("http://localhost:8070/doctor").then(res=>{
    if(res.data.success){
      this.setState({
        doctordetail:res.data.existingdoctordetail
      });

      console.log(this.state.doctordetail);
      this.makeExcelData(res.data.existingdoctordetail)
    }

  });
}


onDelete = (id) =>{
  axios.delete(`http://localhost:8070/doctor/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievedoctordetail();
  })

}

filterData(doctordetail,searchKey){

  const result= doctordetail.filter((doctordetail) =>
  doctordetail.doctorID.toLowerCase().includes(searchKey)||
  doctordetail.doctorname.toLowerCase().includes(searchKey)
  )

  this.setState({doctordetail:result})
}


handleSearchArea = (e)=>{

  const searchKey= e.currentTarget.value;
  axios.get("http://localhost:8070/doctor").then(res=>{
    if(res.data.success){

      this.filterData(res.data.existingdoctordetail, searchKey)


      
    }
  });



}

  render(){
    return (
       <div> <Sidebar/>
      <div style={{position:'absolute', left:'8%', right:'2.5%' }}> 
      
        <div className="row" style = {{marginTop:'14px'}}>
          <div className="col-lg-9 mt-2 mb-2">
            
          
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search doctordetail "
            placeholder="search doctordetail"
            name= "searchQuery"
            onChange={this.handleSearchArea}>

            </input>

          </div>
        </div>
        <h4 style = {{marginTop:'20px'}}><b>All Doctor Details</b></h4>  &nbsp;
        {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/> */}

        
        <div style={{position:'absolute', left:'87.5%'}}>
          <button type="button" class="btn btn-primary">
            {this.state.rows && <CSVLink data={this.state.rows} style={{textDecoration:'none',color:'white' }}>Download File</CSVLink>}
          </button>
 
        
        </div> 

        



        <table className ="table table-hover" style={{marginTop:'54px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">doctorname</th>
              <th scope="col">doctorID</th>
              <th scope="col">doctorNIC</th>
              <th scope="col">Gender</th>
              <th scope="col">doctorDOB</th>
              <th scope="col">contact_number</th>
              <th scope="col">Specialization</th>
              <th scope="col">doctor_type</th>
              <th scope="col">degree_type</th>
              <th scope="col">Action</th>

               {/* <th><div style= {{width: "125px"}}  scope="col">Action</div></th> */}

            </tr>

          </thead>
          <tbody>
            {this.state.doctordetail.map((doctordetail,index) =>(
              <tr key={index}>
                    <th scope="row">{index+1}</th>

                    <td>
                        <a href ={`/doctor/${doctordetail._id}`} style={{textDecoration:'none'}}>

                           {doctordetail.doctorname}
                        </a>
                    
                    </td>
                    <td>{doctordetail.doctorID}</td>
                    <td>{doctordetail.doctorNIC}</td>
                    <td>{doctordetail.Gender}</td>
                    <td>{doctordetail.doctorDOB.slice(0,10)}</td>
                    <td>{doctordetail.contact_number}</td>
                    <td>{doctordetail.Specialization}</td>
                    <td>{doctordetail.doctor_type}</td>
                    <td>{doctordetail.degree_type}</td>
                    <td>

                      <a className="btn btn-warning"  href={`/doctor/update${doctordetail._id}`}>
                        <i className = "fas fa-edit"></i>&nbsp;Edit
                      </a>
                     &nbsp;
                      <a className="btn btn-danger" href="#"onClick={() =>this.onDelete(doctordetail._id)}>
                        <i className = "far fa-trash_alt"></i>&nbsp;Delete
                      </a>

                  </td>
             </tr>
          ))}

          </tbody>
          </table>

          <div style={{position:'absolute', left:'0%'}}>
        <button className="btn btn-success"><a href="/dsave" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;Create New doctordetail</a></button>
        </div>
        </div>
        <div style={{paddingBottom: '10%'}}></div>
       
        </div>
    
    )
  }
}



