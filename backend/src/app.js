const express = require("express");
const cors = require("cors");
const app = express();

app.set('port', 4000);

//middlewards
app.use(cors());
app.use(express.json());

//routes
app.use('/dev/contact/', require('./routes/contacts'));


module.exports = app;