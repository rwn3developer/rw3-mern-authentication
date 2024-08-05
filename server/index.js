const express = require('express');

const { connectDb } = require('./config/db');

const app = express();

const port = 8000;

//mongodb connection
connectDb()

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);
})