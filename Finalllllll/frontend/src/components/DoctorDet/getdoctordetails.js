import React,{Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";


export default class getdoctordetails extends Component{
    constructor(props){
        super(props);

        this.state={
            doctordetail:{},
        };
    }
    GeneratePDF =()=>{
        var doc = new jsPDF("p","pt","a2","pdf");
        doc.html(document.querySelector('#content'),{
            callback:function(pdf){
                pdf.save("mypdf.pdf");
            }
        });
    };

    componentDidMount(){

        const doid= this.props.match.params.id;

        axios.get(`http://localhost:8070/doctor/${doid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    doctordetail: res.data.doctordetail,
                });

              console.log(this.state.doctordetail);  

            }
        });

    }




    render(){
        const{doctorname,doctorID,doctorNIC,Gender,doctorDOB,contact_number,Specialization,doctor_type,degree_type} = this.state.doctordetail;



        return(
            <div style={{ marginTop: '20px',position:'absolute', left:'10%', right:'2.5%' }}>
        <h4 style={{marginTop: '60px'}}>{doctorname}</h4>
        <hr />
        <div class ="card2" id="content">

             <dl className="row">
                 <dt className="col-sm-3">doctorID</dt>                
                 <dd className="col-sm-9">{doctorID}</dd>

                 <dt className="col-sm-3">doctorNIC</dt>                
                 <dd className="col-sm-9">{doctorNIC}</dd>

                 <dt className="col-sm-3">Gender</dt>                
                 <dd className="col-sm-9">{Gender}</dd>

                 <dt className="col-sm-3">doctorDOB</dt>                
                 <dd className="col-sm-9">{doctorDOB}</dd>

                 <dt className="col-sm-3">contact_number</dt>                
                 <dd className="col-sm-9">{contact_number}</dd>

                 <dt className="col-sm-3">Specialization</dt>                
                 <dd className="col-sm-9">{Specialization}</dd>

                 <dt className="col-sm-3">doctor_type</dt>                
                 <dd className="col-sm-9">{doctor_type}</dd>

                 <dt className="col-sm-3">degree_type</dt>                
                 <dd className="col-sm-9">{degree_type}</dd>

             </dl>
             </div>
             <button className="btn3 button3" onClick={this.GeneratePDF} type="primary">Print Dr PDF</button>
            </div>
            
        )
    }
}