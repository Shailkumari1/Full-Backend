   ./* carete server =>  npm init -y 
   
   npm install express
   node server.js
   open browser  localhost:3000  */
   */


const express = require ('express');

 const app = express();// server create 

//  user resquest and response

   app.get('/', (req,res)=>{

      res.send('hello world')
   })

   app.get('/about',(req,res) =>{
    res.send('about page')
   })

 app.listen(3000)  //start server 

