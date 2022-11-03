const mongoose = require('mongoose'); //to connect with db
var uniqueValidator = require('mongoose-unique-validator'); //mongoose unique validator for pid

//declare new patient schema/patient table
const patientsSchema = new mongoose.Schema({


//model for data items, required true means it cannot be left empty, unique means it must be unique    
    covidp:{                 
        type:String,
        required:true
    },
    pid:{                 
        type:String,
        required:true,
        unique: true

    },
    pname:{                 
        type:String,
        required:true
    },
     
    lastdate:{                 
        type:Date,
        required:true
    },
    pnum:{                 
        type:Number,
        required:true
    },
    ename:{                 
        type:String,
        required:true
    },
    enums:{                 
        type:Number,
        required:true
    },
    disdate:{                 
        type:Date,      
    },

    bltype:{                 
        type:String,
        required:true
    },
    gender:{                 
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    history:{                 
        type:String,
        required:true
    },
    ptype:{                 
        type:String,
        required:true
    },
    status:{                 
        type:String,
        required:true
    },
  

});



patientsSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
//export the model which has two parameters, Name of table and  the declared schema
module.exports = mongoose.model('Patients',patientsSchema);