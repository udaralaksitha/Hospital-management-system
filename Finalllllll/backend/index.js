const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const covidPatientsRoutes = require('./routes/CovidPatients');
const patientsRoutes = require('./routes/patients');
const echannellingRoutes = require('./routes/echannelling');
const opRoutes = require('./routes/operation');
const labtestRoutes = require('./routes/labtest');
const doctorRoutes = require('./routes/doctordetail');

//app middleware
app.use(cors());
app.use(bodyParser.json());
//route middleware
app.use(covidPatientsRoutes);
app.use(patientsRoutes);
app.use(echannellingRoutes);
app.use(opRoutes);
app.use(labtestRoutes);
app.use(doctorRoutes);

const PORT = 8070;
const DB_URL ='mongodb://sewmini:sew123@covidmanagement-shard-00-00.ev1ey.mongodb.net:27017,covidmanagement-shard-00-01.ev1ey.mongodb.net:27017,covidmanagement-shard-00-02.ev1ey.mongodb.net:27017/covidmanagement?ssl=true&replicaSet=atlas-9ub15q-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log('DB Connected');
})
.catch((err) => console.log ('DB Connection error',err));
    
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});