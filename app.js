const express = require('express');
// var cors = require('cors');
const pool = require('./db');
const bodyParser=require('body-parser');

const staff = require('./routes/staff')

const app = express();

app.use(bodyParser.json());
app.use('/staff',staff);

app.use((err,req,res,next)=>{
    res.json(err);
});

// const port = 3000;
// app.listen(port,()=>console.log(`Listening at port : ${port}`));

module.exports = app;