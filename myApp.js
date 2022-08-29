let express = require('express');
let app = express();
let mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,
     {useNewUrlParser: true, useUnifiedTopology: true}).then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err.message}`);
    })



































 module.exports = app;
