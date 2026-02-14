const mongoose = require('mongoose');

//   create a schema for note

const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
    
})

// create a model for note

const notemodel = mongoose.model('note',noteSchema);

module.exports = notemodel;
