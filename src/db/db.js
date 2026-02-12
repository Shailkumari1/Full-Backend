// connec server to Datavase 

const mongoose = require('mongoose');//package for connect database

 async function connectDB(){
    await mongoose.connect("mongodb+srv://full-backend:2nHi2fAGHgTeDbWc@full-backend.addi1hx.mongodb.net/shailly");

    console.log('database connected succesfully');
 }

 module.exports = connectDB;
