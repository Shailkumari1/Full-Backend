
// const express = require("express");

// express()

// const app = express();

// app.get("/",(reuest,response) => {

//     response.send("home");

// })

// app.get('/about',(request,response) => {

//     response.send("about");
// })

// app.listen(3000);


//----------server start--------------

const app = require('./src/app');
const ConnectToDatabse = require('./src/db/db');

ConnectToDatabse();

// call back server 

app.listen(4000,()=>{
    console.log('server is running in port 4000');
})