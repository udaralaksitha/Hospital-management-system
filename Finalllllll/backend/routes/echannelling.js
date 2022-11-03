const express = require('express');
const echan = require('../models/echan');
const Chann = require('../models/echan');

const router = express.Router();               //express router used to access requests/http requests

//Add Patients, call back function used has request and response where a request is sent and a response is recieved
router.post('/chan/add',(req,res)=> {
    
                        //  instantiate Patients, req.body has the data that is passed from frontend and is so used to access them.
    let newChann = new Chann(req.body);   //instantiate patients


    //save the data, arrow function is used to take the error
    newChann.save((err) => {
        //if error true push error with error code 400, (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error 
        if(err) {
            return res.status(400).json({       //if error occurs push error
                error:err
            });
        }
        //if no error to show add was successful and success message is displayed using json format. The HTTP 200 OK success status response code indicates that the request has succeeded
        return res.status(200).json({
            success: "Patient added successfully"
        });
    });

});


//get Patients using .get. //call back function used has request and response where a request is sent and a response is recieved
router.get('/chan',(req,res) =>{
    //find method is used to find patients //.exce method executes the find method response is error and patients
    Chann.find().exec((err,echan) => {
        //if error true push error with error code 400, (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error 
        if(err){
            return res.status(400).json({    //if error occurs push error
                error:err
            });
        }
        //if no error to show get was successful and success message is displayed using json format. The HTTP 200 OK success status response code indicates that the request has succeeded
        return res.status(200).json({
            success:true,
            //response patients show existing patients
            existingChann:echan
        });
    });
});


//get a specific  using ID, 
router.get("/echan/:id",(req,res) =>{ //callaback function returns req,res which is dealt with an arrow function

    //pass patient tables document id to PatientId variable
    let appNo = req.params.id;

     //mongoose method to find by id and pss the id varible which returns err, patients in a call back, using arrow function to deal with
    echan.findById(appNo,(err,echan) =>{
        ////if error true, push error with error code 400, (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error 
        if(err){
            return res.status(400).json({success:false, err});
        }
          //if no error to show get was successful and success message is displayed using json format. The HTTP 200 OK success status response code indicates that the request has succeeded
        return res.status(200).json({
            success:true,
            //list patients
            echan
        });
    });


});






//Update Patients using .put, to update the object id is used, req, res is given using arrow function
router.put('/echan/update/:id',(req,res)=>{
    //findbyid and update method
    Chann.findByIdAndUpdate(
        //what is used to identify specific patient to update
    req.params.id,
    {   
        //defines what needs to be updated, since all should be updatable, body is used
        $set:req.body
    },
    //callback funtion getss error and patients
    (err,echan)=>{
        //if error true push error with error code 400, (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error 
       if(err){ 
        return res.status(400).json({error:err});
    }
    //if no error to show update was successful and success message is displayed using json format. The HTTP 200 OK success status response code indicates that the request has succeeded
    return res.status(200).json({
        success:"Updated Successfully"
    });
    }
    );

});


//.delete is used to delete. Id is specified to get specific patient to remove

router.delete('/echan/delete/:id',(req,res)=>{
    //find by id and remove method to remove specific patients, id is passed here. .exec executes this and the response callback function has err and deletedpatient.
    Chann.findByIdAndRemove(req.params.id).exec((err,deletedChann) => {
         //if error true push error with error code 400, (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err //shows unsuccessful message with the error
        });

        //delete successful, show success message
        return res.json({
            message:"Delete Successful",deletedChann
        });
    });
});    


//export module
module.exports = router;