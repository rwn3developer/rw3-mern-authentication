const express = require('express');

const app = express();

const port = 8000;

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);
})