const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://Ritika:12345678k@cluster0.h42crp1.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;