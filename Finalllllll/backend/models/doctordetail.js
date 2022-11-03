const mongoose = require ('mongoose');

const doctordetailSchema = new mongoose.Schema({

    doctorname:{
        type:String,
        required:true
    },
    doctorID:{
        type:String,
        required:true
    },
    doctorNIC:{
        type:String,
        required:true   
    },
    Gender:{
        type:String,
        required:true   
    },
    doctorDOB:{
        type:Date,
        required:true 
    },
    contact_number:{
        type:Number,
        required:true   
    },

    Specialization:{
        type:String,
        required:true   
    },
    doctor_type:{
        type:String,
        required:true   
    },
    degree_type:{
        type:String,
        required:true   
        
    }   

});

module.exports = mongoose.model('doctordetail', doctordetailSchema)

