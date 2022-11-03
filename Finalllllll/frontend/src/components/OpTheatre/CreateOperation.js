import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar';

export default class CreateOperation extends Component {

    constructor(props){
        super(props);
        this.state= {
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
        });
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {operationDate,operationName,operationId,operationDuration,operationCategory} = this.state;

        const data = { 
            operationDate:operationDate,
            operationName:operationName,
            operationId:operationId,
            operationDuration:operationDuration,
            operationCategory:operationCategory,
        }

        console.log(data)

        axios.post("http://localhost:8070/operation/save",data).then((res) =>{
            if(res.data.success){
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
    render() {
        return (
            <div style={{position:'absolute', left:'6.5%', right:'2.5%', }}> <Sidebar/>
           <div className="col-md-8 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal"style = {{marginTop:'75px'}}>Create New Operation</h1>
               <form className="needs-validation" noValidate>
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Operation Date</label>
                       <input type="date"
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
                        <label style={{marginBottom:'5px'}}>Operation Duration</label>
                        <input type="text"
                       className="form-control"
                       name="operationDuration"
                       placeholder="Enter Operation Duration"
                       value={this.state.operationDuration}
                       onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Operation Category</label>
                        <input type="text"
                       className="form-control"
                       name="operationCategory"
                       placeholder="Enter Operation Category"
                       value={this.state.operationCategory}
                       onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
                <div style={{paddingBottom: '100%'}}></div>
                </div >
               </div>
        );
    }

}