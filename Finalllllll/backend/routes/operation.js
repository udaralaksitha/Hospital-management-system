const express = require('express');
const operation = require('../models/operation');
const Operation = require('../models/operation');
const router = express.Router();

//save operation

router.post('/operation/save',(req,res)=>{

    let newOperation = new Operation(req.body);

    newOperation.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"operation saved successfully"
        });
    });
});

// get Operation 

router.get('/operation',(req,res) =>{
    Operation.find().exec((err,operation) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOperation:operation
        });
    });

});

//get a specific Operation

router.get("/operation/:id",(req,res) =>{
    
    let Operation = req.params.id;

    operation.findById(Operation,(err,operation) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            operation
        });  
    });


});


//update Operation

router.put('/operation/opupdate/:id',(req,res)=>{
    operation.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

// delete Operation

router.delete('/operation/delete/:id',(req,res) =>{
    operation.findByIdAndRemove(req.params.id).exec((err,deletedoperation) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        
        return res.json({
            message:"Delete Successful",deletedoperation
        });
    });
});

module.exports = router;