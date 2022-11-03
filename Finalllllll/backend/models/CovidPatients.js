const mongoose = require ('mongoose');//schema based models
const CovidPatientsSchema = new mongoose.Schema({


    CovidPatientId:{
        type:String,
        required:true
    },
    CovidPatientType:{
        type:String,
        required:true
    },
    BodyTemperature:{
        type:Number,
        required:true
    },
    Symptoms:{
        type:String,
        required:true
    },
    VaccineStatus:{
        type:String,
    },
    PCRResult:{
        type:String,
    },
    VaccineName:{
        type:String,
    },
    DoseNumber:{
        type:Number,
    },
    VNextDay:{
        type:Date,
    },
    VTakenDay:{
        type:Date,
    },
    PCRNextDate:{
        type:Date,
        required:true
    },
    LastDate:{
        type:Date,
    }

});
module.exports = mongoose.model('CovidPatients',CovidPatientsSchema);