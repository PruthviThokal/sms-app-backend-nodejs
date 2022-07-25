const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const clientRoute = require('./route/client');

//Routes
app.use(cors());

app.use(express.json()); 
connectDB();

app.use('/api', clientRoute);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// PORT
const port = process.env.PORT || 8000;
// LISTEN
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});