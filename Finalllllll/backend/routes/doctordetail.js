const express = require ('express');
const doctordetail = require('../models/doctordetail');

const router = express.Router();

//save doctor details

router.post('/dsave',(req,res) =>{

    let newDoctordetail = new doctordetail(req.body);
    
    newDoctordetail.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Doctordetail saved succussfully"
        });
    });
});


//get doctor details

router.get('/doctor',(req,res) =>{
    doctordetail.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingdoctordetail:posts
        });
    });
});

//get a specific doctordetail


router.get("/doctor/:id",(req,res) => {

    let doctordetailId = req.params.id;


    doctordetail.findById(doctordetailId,(err,doctordetail) =>{
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            doctordetail
        });
    });

});


//update doctor details

router.put('/doctor/update/:id',(req,res)=>{
    doctordetail.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});


//delete doctordetail

router.delete('/doctor/delete/:id',(req,res) =>{
    doctordetail.findByIdAndRemove(req.params.id).exec((err,deleteddoctordetail) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deleteddoctordetail
        });

    });
});

module.exports = router;