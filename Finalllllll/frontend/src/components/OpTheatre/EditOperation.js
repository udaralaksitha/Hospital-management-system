import React, { Component } from 'react'
import axios from 'axios';
import Sidebar from '../Sidebar';


export default class EditOperation extends Component {


    constructor(props){
        super(props);
        this.state={
            operationDate:"",
            operationName:"",
            operationId:"",
            operationDuration:"",
            operationCategory:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const opid = this.props.match.params.id;
        const {operationDate,operationName,operationId,operationDuration,operationCategory} = this.state;

        const opdata ={
            operationDate:operationDate,
            operationName:operationName,
            operationId:operationId,
            operationDuration:operationDuration,
            operationCategory:operationCategory
        }

        console.log(opdata)

        axios.put(`http://localhost:8070/operation/opupdate/${opid}`,opdata).then((res) =>{
            if(res.data.success){
                alert("Operation Updated Successfully")
                this.setState(
                    {
                        operationDate:"",
                        operationName:"",
                        operationId:"",
                        operationDuration:"",
                        operationCategory:""
                    }
                    
                )
            }
        })
    }


    componentDidMount(){

        const opid = this.props.match.params.id;

        axios.get(`http://localhost:8070/operation/${opid}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    operationDate:res.data.operation.operationDate,
                    operationName:res.data.operation.operationName,
                    operationId:res.data.operation.operationId,
                    operationDuration:res.data.operation.operationDuration,
                    operationCategory:res.data.operation.operationCategory
                });

                console.log(this.state.operation);
            }

        });

    }

    

    render(){
        return (
            <div><Sidebar/>
            <div style={{marginTop: '80px', position:'absolute', left:'8%', right:'2.5%'}}> 
           <div className="col-md-8 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Edit Operation</h1>
               <form className="needs-validation" noValidate>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Operation Date</label>
                       <input type="text"
                       className="form-control"
                       name="operationDate"
                       placeholder="Enter Operation Date"
                       value={this.state.operationDate}
                       onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OperationName</label>
                        <input type="text"
                       className="form-control"
                       name="operationName"
                       placeholder="Enter Operation Name"
                       value={this.state.operationName}
                       onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OperationId</label>
                        <input type="text"
                       className="form-control"
                       name="operationId"
                       placeholder="Enter Operation Id"
                       value={this.state.operationId}
                       onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>operationDuration</label>
                        <input type="text"
                       className="form-control"
                       name="operationDuration"
                       placeholder="Enter Operation Duration"
                       value={this.state.operationDuration}
                       onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>OperationCategory</label>
                        <input type="text"
                       className="form-control"
                       name="operationCategory"
                       placeholder="Enter Operation Category"
                       value={this.state.operationCategory}
                       onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>
                </form>
               </div>
               </div>
           </div>
        );
    }
}