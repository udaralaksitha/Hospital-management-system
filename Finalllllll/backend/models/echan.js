const mongoose = require('mongoose'); //to connect with db
var uniqueValidator = require('mongoose-unique-validator'); //mongoose unique validator for eid

//declare new channel schema/channel table
const channSchema = new mongoose.Schema({


//model for data items, required true means it cannot be left empty, unique means it must be unique    
    dname:{                 
        type:String,
        required:true
    },
    spec:{                 
        type:String,
        required:true

    },
    appDandT:{                 
        type:Date,
        required:true
    },
  
    patName:{                 
        type:String,
        required:true
    },
    NIC:{                 
        type:String,
        required:true,
        unique: true
    },
    Contact:{                 
        type:Number,
        required:true,
        unique: true
    },
    email:{                 
        type:String,      
    },

    Address:{                 
        type:String,
        required:true
    },
    appNo:{                 
        type:String,
        required:true,
        unique: true
    },
    totalFee:{
        type:Number,
        required:true
    },
    patId:{                 
        type:String,
        required:true,
        unique: true
    }
});



channSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
//export the model which has two parameters, Name of table and  the declared schema
module.exports = mongoose.model('Chann',channSchema);