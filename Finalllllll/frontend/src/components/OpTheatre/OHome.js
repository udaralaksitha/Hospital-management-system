import React, { Component } from 'react'
import axios from 'axios';
import '../table.css'
import Sidebar from '../Sidebar';
import {CSVLink, CSVDownload} from 'react-csv';

export default class OperationTable extends Component {
constructor(props){
  super(props);

  this.state = {
    operation:[],
    rows: []
  };
}

createData = (operationDate, operationName, operationId, operationDuration, operationCategory, status) => {
  return {operationDate, operationName, operationId, operationDuration, operationCategory, status};
}

makeExcelData = (data) => {
  console.log("data ", data)
  const array = []
  data.map((row) => {
      array.push(this.createData(row.operationDate, row.operationName, row.operationId, row.operationDuration, row.operationCategory, row.status))
    // setRows(oldRows => [...oldRows, createData(row.firstName, row.lastName, row.email, row.contactNumber, row.dateOfBirth, row.address, row.raffleDrawNumber)])
    }
  )
  console.log("array ", array)
  this.setState({rows: array})
}

componentDidMount(){
  this.retrieveOperation();
}

retrieveOperation(){
  axios.get("http://localhost:8070/operation").then(res =>{
    if (res.data.success){
      this.setState({
        operation:res.data.existingOperation
      });
      console.log(this.state.operation);
      this.makeExcelData(res.data.existingOperation)
    }
  });
}

onDelete = (id) =>{ //implement a delete method to delete existing
  axios.delete(`http://localhost:8070/operation/delete/${id}`).then((res) =>{
    alert("Deleted successfully");
    this.retrieveOperation();
  })
}

filterData(operation,searchKey){//implement search method
  const result = operation.filter((operation) =>

    operation.operationDate.toLowerCase().includes(searchKey) ||
    operation.operationName.toLowerCase().includes(searchKey) ||
    operation.operationId.toLowerCase().includes(searchKey) ||
    operation.operationDuration.toLowerCase().includes(searchKey) ||
    operation.operationCategory.toLowerCase().includes(searchKey)
  )
this.setState({operation:result})
}

handleSearchArea = (e) =>{//method to capture search inputs
  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8070/operation").then(res =>{
    if (res.data.success){
      this.filterData(res.data.existingOperation,searchKey)
    }
  });

}


  render(){
    return (

      <div style={{position:'absolute', left:'7%', right:'2.5%' }}> <Sidebar/>

        <div className = "row" style = {{marginTop:'14px'}}>
          <div className = "col-lg-9 mt-2">
           
          </div>
          <div className = "col-lg-3">
          <input
            className = "form-control"
            type = "search"
            placeholder = "Search"
            name = "searchQuery"
            onChange = {this.handleSearchArea}> 
          </input>

          </div>

        </div>

        <h4 style = {{marginTop:'40px'}}><b>All Operation Details</b></h4>  &nbsp;
        {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/> */}
        
        <div style={{position:'absolute', left:'0%'}}>
          <button className="btn btn-success"><a href="/saveOp"style={{textDecoration:'none',color:'white'}}> &nbsp;Schedule an operation</a></button>  
        </div>
        <div style={{position:'absolute', left:'14%'}}>
          <button type="button" class="btn btn-primary">
            {this.state.rows && <CSVLink data={this.state.rows} style={{textDecoration:'none',color:'white' }}>Download schedules</CSVLink>}
          </button>
        </div> 
             
        <table className = "table table-condensed table table-hover" style = {{marginTop:'50px'}}>
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">operation date</th>
              <th scope = "col">operation name</th>
              <th scope = "col">operation id</th>
              <th scope = "col">operation duration</th>
              <th scope = "col">operation category</th>
              <th scope="col" width="100%">Action</th>
              </tr>
             </thead> 
            <tbody>

                {this.state.operation.map((operation,index) =>(
                  <tr key = {index}>
                    <th scope = "row">{index+1}</th>

                    <td>
                        <a href = {`/operation/${operation._id}`} style = {{textDecoration:'none'}}>
                        {operation.operationDate}
                        </a>
                    </td>
                    
                    <td>{operation.operationName}</td>
                    <td>{operation.operationId}</td>
                    <td>{operation.operationDuration}</td>
                    <td>{operation.operationCategory}</td>
                    <td>
                      <a className = "btn btn-warning" href = {`/opUpdate/${operation._id}`}>
                        <i className = "fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a className = "btn btn-danger" href = "#" onClick = {() =>this.onDelete(operation._id)}>
                        <i className = "fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{position:'absolute', left:'0%'}}>
            
          </div>
          </div>       
    )
  }
}