let express = require('express');
let app = express();
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})



































 module.exports = app;
