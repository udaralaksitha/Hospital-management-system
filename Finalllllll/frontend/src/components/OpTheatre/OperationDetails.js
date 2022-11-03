import React, { Component } from 'react'
import axios from 'axios';

export default class OperationDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            operation:{}
        };
    }

    componentDidMount(){

        const opid = this.props.match.params.id;

        axios.get(`http://localhost:8070/operation/${opid}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    operation:res.data.operation
                });

                console.log(this.state.operation);
            }

        });

    }
    render() {

        const {operationDate,operationName,operationId,operationDuration,operationCategory} = this.state.operation;
        return (
            <div style={{margintop:'20px'}}>
            <h4>{operationDate}</h4>
            <hr/>

            <d1 className="row">

            <dt className="col-sm-3">operationname</dt>
            <dd className="col-sm-9">{operationName}</dd>

            <dt className="col-sm-3">operationid</dt>
            <dd className="col-sm-9">{operationId}</dd>

            <dt className="col-sm-3">operationduration</dt>
            <dd className="col-sm-9">{operationDuration}</dd>

            <dt className="col-sm-3">operationCategory</dt>
            <dd className="col-sm-9">{operationCategory}
            </dd>

            </d1>

        </div>
        );
    }
}