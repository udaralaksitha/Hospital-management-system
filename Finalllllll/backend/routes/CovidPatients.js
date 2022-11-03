const express = require('express');
const CovidPatients = require('../models/CovidPatients');
const Covid = require ('../models/CovidPatients');
const router = express.Router();

//save covid details
router.post('/covid/save',(req,res) =>{
    let newCovid = new Covid(req.body);

    newCovid.save((err) =>{
        if(err){
            return res.status(400).json({//passes incoming requests
                error:err
            });
        }
        return res.status(200).json({
            success:"Covid details saved successfully"
        });
    });
});

//get covid details
router.get('/CovidPatients',(req,res) =>{
    Covid.find().exec((err,CovidPatients) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCovidDetails:CovidPatients
        });
    });
});
//get a specific detail
router.get("/getspec/:id",(req,res) => {
    let Covid = req.params.id;

    CovidPatients.findById(Covid,(err,CovidPatients) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            CovidPatients
        });
    });
});

//update covid details
router.put('/covid/updates/:id',(req,res) =>{
    CovidPatients.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
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

//delete Covid details
router.delete('/covid/delete/:id',(req,res) =>{
    CovidPatients.findByIdAndRemove(req.params.id).exec((err,deletedCovidPatients) =>{

        if(err) return res.status(400).json({
                message:"Delete unsuccessful",err
            });
        return res.json({
            message:"Delete Successful",deletedCovidPatients
        });
    });
});

module.exports = router;