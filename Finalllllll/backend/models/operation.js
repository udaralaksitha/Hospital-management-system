const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({

operationDate:{
    type:Date,
    required:true
},
operationName:{
    type:String,
    required:true
},
operationId:{
    type:String,
    required:true
},
operationDuration:{
    type:String,
    required:true
},
operationCategory:{
    type:String,
    required:true
}


});

module.exports =mongoose.model('operation',operationSchema);