const express = require("express");

const app = express();

app.get("/",(reuest,response) => {

    response.send("home");

})

app.get('/about',(request,response) => {

    response.send("about");
})

app.listen(3000);