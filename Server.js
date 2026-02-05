/* carete server =>  npm init -y 
   
   npm install express
   node server.js
   open
   */
       
   //................C R E A T E  S E R V E R .......................     

/* const express = require ('express');

 const app = express();// server create 

//  user resquest and response

   app.get('/', (req,res)=>{

      res.send('hello world')
   })

   app.get('/about',(req,res) =>{
    res.send('about page')
   })

 app.listen(3000)  //start server 

 */

    //   -------------- R E S T   A P I --------------------

      

      const app = require ('./src/App');

      // server start 

      app.listen(3000,()=>{

        console.log('server is running at port no 3000');

      })