const express = require('express');
// var cors = require('cors');
const pool = require('./db');
const bodyParser=require('body-parser');

const staff = require('./routes/staff')
const course = require('./routes/course');
const join = require('./routes/join')

const app = express();

app.use(bodyParser.json());
app.use('/staff',staff);
app.use('/course',course);
app.use('/sem',join)

app.use((err,req,res,next)=>{
    res.json(err);
});

app.get('/',(request,response,next)=>{
    response.send("Back-end APIs of Time Table generator");
});

// const port = 3000;
// app.listen(port,()=>console.log(`Listening at port : ${port}`));

module.exports = app;