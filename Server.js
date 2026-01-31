const express =require('express');

const app = express();  // create server 
 
app.get('/',(req, res) =>{

    res.send('home page')
})

app.get('/about',(req,res)=> {
    res.send('about page')
})

app.listen(3000)  // start server 
