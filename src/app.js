// create server

// const express = require("express");

// const app = express();


// app.use(express.json())

 
// const data = [];

// // post data 

// app.post('/data',(request,response) =>{

//     data.push(request.body);
//     response.status(201).json({
//         messege : "data create successfully"
//     })

// })

// //get data 

// app.get('/data',(request,response)=>{
//     response.status(200).json({
//         messege : "Data Fetched Successfully",
//         data : data
//     })
// })

// //delete data

// app.delete('/data/:index',(request,response)=> {

//      const Index = request.params.index;
//      delete data[Index]

//      response.status(200).json({
//         messege: "Delete data Successfully "
//      })

// })

// //patch/update

// app.patch('/data/:index',(request,response)=>{

//   const index =  request.params.index;
//   const description = request.body.description;
//   const title = request.body.title;

  
//   data[index].description = description;
//   data[index].title = title;

//   response.status(200).json({
//     messege : "data update Succesfully"
//   })
// })
// module.exports = app 

const express = require ('express');

const app = express();






module.exports = app