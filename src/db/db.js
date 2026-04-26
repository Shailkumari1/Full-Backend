const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function ConnectToDatabse(){
    await mongoose.connect(process.env.Mongodb_uri);

    console.log("Connected to database successfully");
}

module.exports = ConnectToDatabse;